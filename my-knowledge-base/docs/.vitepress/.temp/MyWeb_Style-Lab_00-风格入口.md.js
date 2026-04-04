import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"风格实验室","description":"","frontmatter":{"title":"风格实验室"},"headers":[],"relativePath":"MyWeb/Style-Lab/00-风格入口.md","filePath":"MyWeb/Style-Lab/00-风格入口.md","lastUpdated":1774777580000}');
const _sfc_main = { name: "MyWeb/Style-Lab/00-风格入口.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="风格实验室" tabindex="-1">风格实验室 <a class="header-anchor" href="#风格实验室" aria-label="Permalink to &quot;风格实验室&quot;">​</a></h1><p>下面是三套完全不同的视觉方案，用来快速对比你想要的方向：</p><div class="style-lab-grid"><a class="style-lab-card style-lab-card--contrast" href="/Style-Lab/01-强烈撞色风"><p>方案 A</p><h3>强烈撞色风</h3><span>高对比 · 几何排版 · 强节奏</span></a><a class="style-lab-card style-lab-card--oil" href="/Style-Lab/02-油画质感风"><p>方案 B</p><h3>油画质感风</h3><span>厚涂质感 · 低饱和冷色 · 叙事感</span></a><a class="style-lab-card style-lab-card--water" href="/Style-Lab/03-水彩轻雾风"><p>方案 C</p><h3>水彩轻雾风</h3><span>柔边渐染 · 通透留白 · 轻呼吸</span></a></div><p>你只要回复我 <code>A</code> / <code>B</code> / <code>C</code>，我就把全站统一切成那一套。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("MyWeb/Style-Lab/00-风格入口.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _00_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _00_____ as default
};
