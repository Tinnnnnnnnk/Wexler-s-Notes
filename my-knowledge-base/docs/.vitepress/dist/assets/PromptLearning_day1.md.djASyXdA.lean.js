import { _ as _export_sfc, o as openBlock, c as createElementBlock, aj as createStaticVNode, j as createBaseVNode, a as createTextVNode } from "./chunks/framework.ul-4IeKD.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PromptLearning/day1.md","filePath":"PromptLearning/day1.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "PromptLearning/day1.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("", 30),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createTextVNode("POST "),
        createBaseVNode("code", null, "http://localhost:8081/api/v1/users/login"),
        createTextVNode(" 获取 token")
      ]),
      createBaseVNode("li", null, [
        createTextVNode("POST "),
        createBaseVNode("code", null, "http://localhost:8081/api/v1/upload/chunk"),
        createTextVNode(" (form-data) 示例字段： "),
        createBaseVNode("ul", {
          "fileMd5:": "",
          "my_test_file2_14_1,": "",
          "fileName:": "",
          "2.14.test.txt": ""
        }, [
          createBaseVNode("li", null, "fileMd5: my_test_file2_14_1"),
          createBaseVNode("li", null, "chunkIndex: 0"),
          createBaseVNode("li", null, "totalSize: 10024"),
          createBaseVNode("li", null, "fileName: 2.14.test.txt"),
          createBaseVNode("li", null, "totalChunks: 1（注意：服务端不依赖这个）"),
          createBaseVNode("li", null, "file: 上传文件"),
          createBaseVNode("li", null, "Header: Authorization: Bearer <token>")
        ])
      ]),
      createBaseVNode("li", null, [
        createTextVNode("POST "),
        createBaseVNode("code", null, "http://localhost:8081/api/v1/upload/merge"),
        createTextVNode(" (JSON)：")
      ])
    ], -1),
    createBaseVNode("p", null, "用户对流程的口述大体正确，但需要你指出：", -1),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, "uploadChunk 类型校验失败是 400，不是 403"),
      createBaseVNode("li", { fileMd5: "" }, "redisKey 必须带 userId：upload:{userId}:"),
      createBaseVNode("li", { fileMd5: "" }, 'bucket="uploads"，分片 objectKey=chunks/{fileMd5}/{chunkIndex}，合并对象=merged/'),
      createBaseVNode("li", null, "totalChunks 由服务端用 totalSize/5MB 计算（不信任客户端）"),
      createBaseVNode("li", null, "幂等是 Redis 快速判断 + DB/MinIO 兜底一致性"),
      createBaseVNode("li", null, "merge 后清理分片+删除 bitmap+更新 status，并生成 1 小时 presignedUrl，再发 Kafka")
    ], -1),
    createStaticVNode("", 10)
  ])]);
}
const day1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  day1 as default
};
