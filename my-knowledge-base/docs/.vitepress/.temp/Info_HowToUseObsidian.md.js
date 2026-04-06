import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Info/HowToUseObsidian.md","filePath":"Info/HowToUseObsidian.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Info/HowToUseObsidian.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="笔记中的链接是纯文本" tabindex="-1">笔记中的链接是纯文本 <a class="header-anchor" href="#笔记中的链接是纯文本" aria-label="Permalink to &quot;笔记中的链接是纯文本&quot;">​</a></h2><ul><li>假如我写了一段链接在笔记中，但是我不需要去访问这个链接，我只是想将其作为一个纯文本，那么就需要给这个链接加上一个反引号，例如 <code>www.baidubaidu.com</code></li><li>如果不加这个反引号，那么<strong>VitePress</strong>就无法将这个<strong>笔记文件</strong>打包</li></ul><h2 id="操作细节" tabindex="-1">操作细节 <a class="header-anchor" href="#操作细节" aria-label="Permalink to &quot;操作细节&quot;">​</a></h2><table tabindex="0"><thead><tr><th><strong>你想做的</strong></th><th><strong>你要输入的符号</strong></th></tr></thead><tbody><tr><td><strong>变大标题</strong></td><td><code>#</code> 或 <code>##</code></td></tr><tr><td><strong>变圆点列表</strong></td><td><code>-</code> (减号加空格)</td></tr><tr><td><strong>变数字列表</strong></td><td><code>1.</code> (数字点空格)</td></tr><tr><td><strong>变引用</strong></td><td><code>&gt;</code> (大于号空格)</td></tr><tr><td><strong>变代码</strong></td><td><code>\`</code> (反引号)</td></tr><tr><td><strong>画横线</strong></td><td><code>---</code></td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Info/HowToUseObsidian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HowToUseObsidian = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  HowToUseObsidian as default
};
