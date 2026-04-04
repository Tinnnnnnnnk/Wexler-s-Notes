import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PaiSmart/StudyEveryday/v1.0 day1 配置环境.md","filePath":"PaiSmart/StudyEveryday/v1.0 day1 配置环境.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "PaiSmart/StudyEveryday/v1.0 day1 配置环境.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("PaiSmart/StudyEveryday/v1.0 day1 配置环境.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const v1_0_day1_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  v1_0_day1_____ as default
};
