import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"强烈撞色风","description":"","frontmatter":{"title":"强烈撞色风"},"headers":[],"relativePath":"MyWeb/Style-Lab/01-强烈撞色风.md","filePath":"MyWeb/Style-Lab/01-强烈撞色风.md","lastUpdated":1774777580000}');
const _sfc_main = { name: "MyWeb/Style-Lab/01-强烈撞色风.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="contrast-page"><section class="contrast-hero"><p class="contrast-kicker">STYLE A · HIGH CONTRAST</p><h1>强烈撞色风</h1><p>用明确的几何分区和高反差配色制造视觉张力，适合强调“记忆点”和“方向感”。</p></section><section class="contrast-grid"><article class="contrast-card c1"><h3>结构第一</h3><p>模块之间边界清晰，层级一眼可见。</p></article><article class="contrast-card c2"><h3>视觉节奏</h3><p>大色块与留白交替，避免信息糊成一片。</p></article><article class="contrast-card c3"><h3>内容聚焦</h3><p>重点信息以反差强化，不依赖花哨特效。</p></article></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("MyWeb/Style-Lab/01-强烈撞色风.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _01______ as default
};
