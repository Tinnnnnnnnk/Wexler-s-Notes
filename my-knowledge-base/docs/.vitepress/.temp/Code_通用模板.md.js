import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"{{title}}","description":"","frontmatter":{"tags":["LeetCode","待分类"],"difficulty":"Medium","status":"📝 进行中","date":"2025-12-25T00:00:00.000Z"},"headers":[],"relativePath":"Code/通用模板.md","filePath":"Code/通用模板.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/通用模板.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="title" tabindex="-1">${ssrInterpolate(_ctx.title)} <a class="header-anchor" href="#title" aria-label="Permalink to &quot;{{title}}&quot;">​</a></h1><div class="info custom-block github-alert"><p class="custom-block-title">- 题目描述 (点击展开)</p><p></p><blockquote></blockquote></div><hr><h2 id="💡-解题思路-kasumi-s-memo" tabindex="-1">💡 解题思路 (Kasumi&#39;s Memo) <a class="header-anchor" href="#💡-解题思路-kasumi-s-memo" aria-label="Permalink to &quot;💡 解题思路 (Kasumi&#39;s Memo)&quot;">​</a></h2><h3 id="核心策略" tabindex="-1">核心策略 <a class="header-anchor" href="#核心策略" aria-label="Permalink to &quot;核心策略&quot;">​</a></h3><ol><li><strong>第一步：</strong> ...</li><li><strong>第二步：</strong> ...</li></ol><h3 id="为什么选择这个解法" tabindex="-1">为什么选择这个解法？ <a class="header-anchor" href="#为什么选择这个解法" aria-label="Permalink to &quot;为什么选择这个解法？&quot;">​</a></h3><hr><h2 id="💻-代码实现-java" tabindex="-1">💻 代码实现 (Java) <a class="header-anchor" href="#💻-代码实现-java" aria-label="Permalink to &quot;💻 代码实现 (Java)&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 在这里粘贴你的代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Solution</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> solve</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Code/通用模板.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};
