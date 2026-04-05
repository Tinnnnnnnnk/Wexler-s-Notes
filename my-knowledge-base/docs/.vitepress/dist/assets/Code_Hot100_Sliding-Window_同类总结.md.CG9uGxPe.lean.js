import { _ as _export_sfc, o as openBlock, c as createElementBlock, j as createBaseVNode } from "./chunks/framework.SODGKGda.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Code/Hot100/Sliding-Window/同类总结.md","filePath":"Code/Hot100/Sliding-Window/同类总结.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/Hot100/Sliding-Window/同类总结.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createBaseVNode("p", null, "当一个题目第一反应需要使用到HashMap时，大概率就是滑动窗口相关的题目。对于此类题目，盲目无脑去建立HashMap并在其中进行增删改查，这是最暴力最费时的方法。应该建立一个数组，如果只有小写字母那就长度26，如果有大小写字母加数字和其他的内容，就可以建立长度128的数组，为什么是128？因为ASCII字符集总共就只有128个，0到127。然后根据需要去变动对应Ascii码的数组的值即可。这种方法会比强制使用HashMap省下很多空间和时间。", -1)
  ])]);
}
const ____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ____ as default
};
