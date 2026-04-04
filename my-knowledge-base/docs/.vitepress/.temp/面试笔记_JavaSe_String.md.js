import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"面试笔记/JavaSe/String.md","filePath":"面试笔记/JavaSe/String.md","lastUpdated":1773998083000}');
const _sfc_main = { name: "面试笔记/JavaSe/String.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="string-stringbuilder-stringbuffer" tabindex="-1">String StringBuilder StringBuffer <a class="header-anchor" href="#string-stringbuilder-stringbuffer" aria-label="Permalink to &quot;String StringBuilder StringBuffer&quot;">​</a></h3><h4 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h4><ul><li>String类的对象是不可变的，一旦一个String类的对象被创建，那么其所包含的字符串内容就无法被改变。因此假使对于一个字符串进行修改操作，都会生成一个新的String对象，而不是修改原有对象。</li><li>StringBuilder提供了一系列方法来对字符串进行增删改查，这些操作都是直接作用于当前字符串对象的底层数组上的，不会生成新的String对象</li><li>StringBuilder不是线程安全的，意味着在没有外部同步的情况下，不适合多线程环境</li><li>StringBuffer与前两者类似，但是StringBuffer是线程安全的，方法前面加了synchronized 关键字</li></ul><h4 id="适用场景" tabindex="-1">适用场景 <a class="header-anchor" href="#适用场景" aria-label="Permalink to &quot;适用场景&quot;">​</a></h4><ul><li><strong>String</strong>：适用于字符串内容不会改变的场景，比如说作为 HashMap 的 key。</li><li><strong>StringBuilder</strong>：适用于单线程环境下需要频繁修改字符串内容的场景，比如在循环中拼接或修改字符串</li><li><strong>StringBuffer</strong>：现在已经不怎么用了</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("面试笔记/JavaSe/String.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const String = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  String as default
};
