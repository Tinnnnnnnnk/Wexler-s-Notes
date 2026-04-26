### 聊天界面的链路
- 在聊天问答场景下，用户先在前端输入一个问题，前端通过 WebSocket 把消息发给后端。后端拿到 userMessage 后，会先调用 Embedding 模型把问题转换成向量，然后进入 ES 做混合检索。
- 在 ES 这一层，系统会基于 query vector 做 KNN 语义召回，同时在 bool query 里加入 textContent 的关键词匹配和用户权限过滤，比如用户自己的文档、公开文档、所属组织文档。召回后再通过 rescore 用 BM25 相关性做二次排序，最终取 topK 文本片段。
- 拿到这些片段后，后端会把检索结果组装成 context，再和 Redis 里的历史对话、系统 prompt 规则、当前用户问题一起构造成 messages，请求 DeepSeek 的流式接口。DeepSeek 返回的增量内容先到后端，后端再把每个 chunk 通过 WebSocket 推给前端，所以前端能看到打字机一样的效果。

### 文件上传/解析链路
- 上传解析链路是这样的：用户在前端选择文件后，前端会按固定大小把文件切成多个分片逐个上传。后端接收到分片后，会用 Redis Bitmap 记录该文件哪些 chunk 已经上传，用 MySQL 的 chunk_info 保存分片元数据，并把真实分片对象存到 MinIO。
- 当用户触发合并时，后端不会信任前端传来的分片数量，而是根据文件总大小和固定 chunkSize 重新计算 totalChunks，然后通过 Redis Bitmap、MySQL 记录和 MinIO 对象检查分片是否齐全。确认齐全后，使用 MinIO composeObject 把分片合并成完整文件。
- 合并成功后，接口不会同步做文档解析和向量化，而是发送一个 FileProcessingTask 到 Kafka。Kafka Consumer 异步消费这个任务，下载合并后的文件，通过 Tika 解析文本，再进行语义切块和 Embedding 向量化，最后把 chunk 文本、向量和权限字段写入 Elasticsearch，供后续检索和聊天问答使用。

### 如果你的检索接口响应很慢，你是如何一步步优化的？

