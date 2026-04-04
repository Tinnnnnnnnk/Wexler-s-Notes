import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PromptLearning/MyWeb.md","filePath":"PromptLearning/MyWeb.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "PromptLearning/MyWeb.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="web相关" tabindex="-1">Web相关 <a class="header-anchor" href="#web相关" aria-label="Permalink to &quot;Web相关&quot;">​</a></h2><ul><li>访问网站<code>www.baidu.com</code> ，提取其配色方案、字体选择和布局结构，生成风格类似的网站</li><li>参考截图的网站风格，生成类似的网站</li><li>不要说 <strong>要求是什么</strong>，要说 <strong>你不要干什么</strong></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>我需要你给我一份关于这两周的全新的安排，告诉我应该具体干什么，不要给我笼统的安排；不要给我只说干什么，而不说怎么去做，不要给我写目标是什么而不给我具体执行的方法。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("PromptLearning/MyWeb.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MyWeb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  MyWeb as default
};
