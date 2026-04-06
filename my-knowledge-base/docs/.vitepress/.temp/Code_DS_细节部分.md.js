import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Code/DS/细节部分.md","filePath":"Code/DS/细节部分.md","lastUpdated":1775446323000}');
const _sfc_main = { name: "Code/DS/细节部分.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><ul><li>int转换成Long，使用Long.valueOf( value )</li><li>如果需要将一个List集合复制一份并使用，最好的办法就是使用构造函数—— List&lt; Integer&gt; dest=new ArrayList&lt;&gt;( src );</li><li>如果想要对一个集合中的所有数进行<strong>数值操作</strong>，可以使用list.replaceAll(x-&gt;x-root.val);</li><li>如果要把一个字符数组变成一个字符串，不可以使用 <code>toString</code>,需要使用<code>String string =  new String(charArray);</code></li><li>如果需要把一个数组作为一个新集合添加到另外一个集合中，可以使用<code>lists.add(Arrays.asList(a, b, c));</code></li><li>map.put(num, map.getOrDefault(num, 0) + 1);</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Code/DS/细节部分.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____ as default
};
