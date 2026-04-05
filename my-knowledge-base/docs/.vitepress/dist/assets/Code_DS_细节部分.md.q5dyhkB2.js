import { _ as _export_sfc, o as openBlock, c as createElementBlock, a7 as createStaticVNode } from "./chunks/framework.BaarDA_E.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Code/DS/细节部分.md","filePath":"Code/DS/细节部分.md","lastUpdated":1774074607000}');
const _sfc_main = { name: "Code/DS/细节部分.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode("<ul><li>int转换成Long，使用Long.valueOf( value )</li><li>如果需要将一个List集合复制一份并使用，最好的办法就是使用构造函数—— List&lt; Integer&gt; dest=new ArrayList&lt;&gt;( src );</li><li>如果想要对一个集合中的所有数进行<strong>数值操作</strong>，可以使用list.replaceAll(x-&gt;x-root.val);</li><li>如果要把一个字符数组变成一个字符串，不可以使用 <code>toString</code>,需要使用<code>String string =  new String(charArray);</code></li><li>如果需要把一个数组作为一个新集合添加到另外一个集合中，可以使用<code>lists.add(Arrays.asList(a, b, c));</code></li></ul>", 1)
  ])]);
}
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ____ as default
};
