import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PaiSmart/面试/v2-day1.md","filePath":"PaiSmart/面试/v2-day1.md","lastUpdated":1772369806000}');
const _sfc_main = { name: "PaiSmart/面试/v2-day1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="你在这个项目中是如何实现大文件分片上传与可靠合并的" tabindex="-1">你在这个项目中是如何实现大文件分片上传与可靠合并的？ <a class="header-anchor" href="#你在这个项目中是如何实现大文件分片上传与可靠合并的" aria-label="Permalink to &quot;你在这个项目中是如何实现大文件分片上传与可靠合并的？&quot;">​</a></h2><ul><li>我独立设计并实现了大文件的分片上传与存储链路。整个过程我把它分为两个核心阶段：<strong>极速分片入库</strong>与<strong>安全物理合并</strong>。</li><li><strong>第一阶段是分片上传。</strong> 当文件分片请求到达 Controller 层时，为了压榨性能，我只在 <code>chunkIndex == 0</code> 时校验文件类型，失败直接返回 400 。 进入 Service 层后，核心痛点是断点续传的极速校验。我使用了 Redis 的 Bitmap 结构，以 <code>upload:{userId}:{fileMd5}</code> 为 key 来标记分片状态 。为了防止缓存不一致导致的资损或脏数据，我设计了**『Redis + MySQL + MinIO』的三位一体兜底验证**：即使 Redis 标记为已上传，如果查不到 MySQL 的 <code>chunk_info</code> 记录，系统也会去 MinIO 真实探活 。没问题后，通过 <code>putObject</code> 写入临时目录，并先更新 Redis 再写 MySQL 。同时，查询进度时通过一次性拉取 Bitmap bytes 解析，杜绝了循环查 Redis 的网络 I/O 消耗 。</li><li><strong>第二阶段是分片合并。</strong> 前端发起 Merge 请求后，Controller 首先校验越权（不是本人触发则返回 403）。接着进入最严格的完整性校验：系统坚决不信任前端传递的 <code>totalChunks</code>，而是根据库里的 <code>totalSize</code> 结合写死的 5MB 块大小，通过 <code>ceil(totalSize / 5MB)</code> 重新计算预期分片数 。 校验无误后，调用 MinIO 的 <code>composeObject</code> 完成物理合并，并清理 Redis 标记和 MinIO 里的临时分片 。 最后，系统会生成一个 1 小时有效期的 MinIO <code>presignedUrl</code>，封装进文件处理任务中，通过事务投递给 Kafka 。这彻底解耦了高并发的上传链路与后台耗时的文档向量化解析流程。”</li></ul><hr><h4 id="🛡️追问-你提到发给-kafka-的包含一个-1-小时过期的-url-这在生产环境有没有风险" tabindex="-1">🛡️追问：“你提到发给 Kafka 的包含一个 1 小时过期的 URL，这在生产环境有没有风险？” <a class="header-anchor" href="#🛡️追问-你提到发给-kafka-的包含一个-1-小时过期的-url-这在生产环境有没有风险" aria-label="Permalink to &quot;🛡️追问：“你提到发给 Kafka 的包含一个 1 小时过期的 URL，这在生产环境有没有风险？”&quot;">​</a></h4><p>“这是一个非常好的问题，实际上我在做本地压测时就发现了这个工程隐患。如果遇到突发流量导致大文件疯狂上传，Kafka 消费者产生了严重积压。当消息排队超过 1 小时后，消费者再去拿这个 <code>presignedUrl</code> 下载文件就会报 403 过期错误 。 因此，我构思的演进方案是：Kafka 任务中不直接传 URL，而是传递 <code>bucket</code> 和 <code>mergedPath</code>（对象键）。消费者拿到消息后，直接使用内网的 MinIO SDK 自己去拉取流，或者动态重新签名，从而彻底干掉时间差带来的不确定性！”</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("PaiSmart/面试/v2-day1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const v2Day1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  v2Day1 as default
};
