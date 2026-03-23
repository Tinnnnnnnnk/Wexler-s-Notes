### WebSocket
- 用户建立 WebSocket 连接后，系统会根据路径中的 JWT 提取当前用户的 username，从而识别当前是哪位用户在发起对话。收到消息后，后端会根据 userId 获取或创建当前会话的 conversationId，这个 conversationId 用来标识当前这段连续会话，而不是每条消息都新建一个。然后系统会从 Redis 中读取该 conversationId 对应的历史消息，作为多轮对话的上下文基础。接着，系统会基于用户当前输入的消息和 userId 做带权限的检索，拿到检索结果后，通过 `buildContext` 组装成 context。最后再把 userMessage、history 和 context 一起交给 DeepSeek。DeepSeek 会以流式方式返回 chunk，后端再通过 WebSocket 将这些 chunk 持续推送给前端，所以前端会呈现出流式输出的效果。等本轮回答完成后，后端会发送 completion 通知，并将这次用户消息和模型回复写回 Redis。为了避免历史过长，系统只保留最近 20 条消息。

### WebSocket 对比于 HTTP 的优势
- WebSocket具备全双工的协议，不像HTTP一样只可以一方发送消息一方被动接受消息。也正是因为WebSocket可以实时支持服务端主动给用户端推送数据发送消息，因此选择WebSocket来实现这个流式打印。
### WebSocket 如果因为网络抖动而连接断了。。。
- 在前端增加了重连机制，在后端增加了会话恢复能力。
- 前端这边，我们使用了 @vueuse 库来管理 WebSocket 连接，它内置了强大的心跳重连机制。一旦连接意外断开，它就会自动尝试重连。而且这个重连不是死磕式的，也就是说每次失败后等待时间都会变长，避免高频的重试对服务器造成压力。除此之外，它还支持心跳机制，会定期发送 ping 消息检测连接是否健康，如果发现连接已经“僵死”，也能主动触发重连。
- 后端这边我们遵循的是“无状态连接”原则。比如用户重连后重新发一条消息，我们通过 userId 定位当前 conversationId 恢复上下文，然后接着处理，就好像这条连接从来没断过一样。
### 为什么使用Redis而不使用Mysql
- 一是这是一个高频读写的任务，虽然Mysql很快，但是Redis比Mysql还快好几个数量级，非常适合这种实时性要求比较高的业务
- 二是因为我们需要的上下文不多，不需要持久化，存放在Redis中只需要设置一个TTL就可以自动清除，如果存放在Mysql中，还需要设置一个定时任务来清除
### 在Redis中如何设计数据结构，例如如何找到一个用户的对话历史
- 设置了两种key
- 第一种 key 用于定位用户的会话，格式为 `user:{userId}:current_conversation`，value 是一个 UUID 的字符串。
- 第二种 key 用于存储真正的聊天记录，它的格式是：`conversation:{conversationId}`，value 是一个 JSON 字符串，该字符串序列化了一个包含多条对话的列表。