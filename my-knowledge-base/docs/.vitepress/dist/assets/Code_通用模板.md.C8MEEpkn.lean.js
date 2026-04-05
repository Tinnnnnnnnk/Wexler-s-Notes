import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, t as toDisplayString, al as createStaticVNode } from "./chunks/framework.SODGKGda.js";
const __pageData = JSON.parse('{"title":"{{title}}","description":"","frontmatter":{"tags":["LeetCode","待分类"],"difficulty":"Medium","status":"📝 进行中","date":"2025-12-25T00:00:00.000Z"},"headers":[],"relativePath":"Code/通用模板.md","filePath":"Code/通用模板.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/通用模板.md" };
const _hoisted_1 = {
  id: "title",
  tabindex: "-1"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("h1", _hoisted_1, [
      createTextVNode(toDisplayString(_ctx.title) + " ", 1),
      _cache[0] || (_cache[0] = createBaseVNode("a", {
        class: "header-anchor",
        href: "#title",
        "aria-label": 'Permalink to "{{title}}"'
      }, "​", -1))
    ]),
    _cache[1] || (_cache[1] = createStaticVNode("", 9))
  ]);
}
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ____ as default
};
