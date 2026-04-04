import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"水彩轻雾风","description":"","frontmatter":{"title":"水彩轻雾风"},"headers":[],"relativePath":"MyWeb/Style-Lab/03-水彩轻雾风.md","filePath":"MyWeb/Style-Lab/03-水彩轻雾风.md","lastUpdated":1774777580000}');
const _sfc_main = { name: "MyWeb/Style-Lab/03-水彩轻雾风.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="water-page"><section class="water-hero"><p class="water-kicker">STYLE C · WATERCOLOR MIST</p><h1>水彩轻雾风</h1><p>以轻透明度和柔和边界表达“呼吸感”，让内容阅读压力更低，适合长时间浏览。</p></section><section class="water-ribbon"><article class="water-note"><h3>轻盈底色</h3><p>采用低饱和冷灰蓝，避免强刺激但仍保留层次。</p></article><article class="water-note"><h3>柔边卡片</h3><p>圆角与半透明叠层模拟水彩晕染，不会显得生硬。</p></article><article class="water-note"><h3>长读友好</h3><p>对比度适中，适合把知识内容作为“阅读材料”而不是“广告海报”。</p></article></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("MyWeb/Style-Lab/03-水彩轻雾风.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _03______ as default
};
