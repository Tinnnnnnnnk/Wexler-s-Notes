### 聊天界面的链路
- 在聊天问答场景下，用户先在前端输入一个问题，前端通过 WebSocket 把消息发给后端。后端拿到 userMessage 后，会先调用 Embedding 模型把问题转换成向量，然后进入 ES 做混合检索。
- 在 ES 这一层，系统会基于 query vector 做 KNN 语义召回，同时在 bool query 里加入 textContent 的关键词匹配和用户权限过滤，比如用户自己的文档、公开文档、所属组织文档。召回后再通过 rescore 用 BM25 相关性做二次排序，最终取 topK 文本片段。
- 拿到这些片段后，后端会把检索结果组装成 context，再和 Redis 里的历史对话、系统 prompt 规则、当前用户问题一起构造成 messages，请求 DeepSeek 的流式接口。DeepSeek 返回的增量内容先到后端，后端再把每个 chunk 通过 WebSocket 推给前端，所以前端能看到打字机一样的效果。

### 文件上传/解析链路
- 上传解析链路是这样的：用户在前端选择文件后，前端会按固定大小把文件切成多个分片逐个上传。后端接收到分片后，会用 Redis Bitmap 记录该文件哪些 chunk 已经上传，用 MySQL 的 chunk_info 保存分片元数据，并把真实分片对象存到 MinIO。
- 当用户触发合并时，后端不会信任前端传来的分片数量，而是根据文件总大小和固定 chunkSize 重新计算 totalChunks，然后通过 Redis Bitmap、MySQL 记录和 MinIO 对象检查分片是否齐全。确认齐全后，使用 MinIO composeObject 把分片合并成完整文件。
- 合并成功后，接口不会同步做文档解析和向量化，而是发送一个 FileProcessingTask 到 Kafka。Kafka Consumer 异步消费这个任务，下载合并后的文件，通过 Tika 解析文本，再进行语义切块和 Embedding 向量化，最后把 chunk 文本、向量和权限字段写入 Elasticsearch，供后续检索和聊天问答使用。

### 如果你的检索接口响应很慢，你是如何一步步优化的？
- 如果搜索接口响应很慢，我会先做分段耗时统计，而不是直接猜瓶颈。因为这个接口不是单纯查数据库，它至少包含 query embedding、ES 混合检索、权限过滤、结果封装几个阶段；如果是在聊天场景，还会继续有 Prompt 拼接和 DeepSeek 流式生成。

- 第一步我会看 Embedding 调用耗时。用户 query 需要先转成向量，如果外部 Embedding 服务网络慢、超时重试，或者 batchSize 配置不合理，就会拖慢整个搜索入口。优化上可以设置超时、控制重试次数，对高频 query 的 embedding 结果做缓存。

- 第二步看 ES 查询耗时。这个项目里 ES 查询不是简单 match，而是 KNN 向量召回 + textContent match + 权限 filter + rescore。这里我要重点看 topK、numCandidates、rescore windowSize 是否过大，权限字段 userId、orgTag、public 的类型和过滤方式是否合理，以及 mapping 里 textContent、vector 这些字段设计是否匹配查询场景。

- 第三步看返回数据量和代码处理。比如是否返回了过长的 textContent，是否查出了太多字段，是否做了不必要的二次处理。对于只展示搜索摘要的场景，可以只返回必要字段。

- 第四步再考虑缓存。缓存不能一上来就加，因为 RAG 查询天然比较发散，但对于高频 query，可以缓存 query embedding；对于热点问题或者固定知识库场景，可以短时间缓存 topK 检索结果。缓存时要注意权限维度，不能把 A 用户的结果缓存后给 B 用户用。

