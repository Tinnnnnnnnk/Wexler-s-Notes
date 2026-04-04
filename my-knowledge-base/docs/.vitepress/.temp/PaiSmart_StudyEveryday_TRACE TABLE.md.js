import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PaiSmart/StudyEveryday/TRACE TABLE.md","filePath":"PaiSmart/StudyEveryday/TRACE TABLE.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "PaiSmart/StudyEveryday/TRACE TABLE.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><table tabindex="0"><thead><tr><th>入口接口</th><th>关键类.方法</th><th>输入参数</th><th>副作用(写DB/写Redis/写MinIO/发Kafka)</th><th>输出/-返回</th><th>证据(截图/日志/复制内容)</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("PaiSmart/StudyEveryday/TRACE TABLE.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TRACE_TABLE = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  TRACE_TABLE as default
};
