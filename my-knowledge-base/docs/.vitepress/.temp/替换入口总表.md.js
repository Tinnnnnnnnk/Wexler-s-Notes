import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"替换入口总表.md","filePath":"替换入口总表.md","lastUpdated":1774362243000}');
const _sfc_main = { name: "替换入口总表.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><ol><li><p>背景图/视频素材放置目录（两个风格共用）<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">home-bg 目录</a></p></li><li><p>液态风格 BGM 素材放置目录<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">home-bgm 目录</a></p></li><li><p>背景图/视频/BGM 的配置入口（最关键）<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">HomeFxBackdrop.vue</a><br> 在这里改：</p><ul><li>IMAGE_SRC：背景图路径</li><li>VIDEO_SRC：背景视频路径（填了就优先用视频）</li><li>LIQUID_BGM_SRC：液态模式 BGM 路径</li></ul></li><li><p>晶透风格（Glass）视觉细节改这里<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">style.css</a><br> 搜索：html.home-glass-mode</p></li><li><p>液态风格（Liquid）视觉细节改这里<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">style.css</a><br> 搜索：html.home-liquid-mode、.home-fx-layer.is-liquid、.home-fx-blob</p></li><li><p>液态模式“隐藏主页小卡片”的规则改这里<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">style.css</a><br> 搜索：html.home-liquid-mode .VPContent.is-home .oilhome-signal（这一组 display: none）</p></li><li><p>顶部两个风格按钮文案/顺序改这里<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">HomeFxToggle.vue</a></p></li><li><p>风格模式状态逻辑（default/glass/liquid）改这里<br><a href="https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/123/.vscode/extensions/openai.chatgpt-26.318.11754-win32-x64/webview/" target="_blank" rel="noreferrer">homeFxState.js</a></p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("替换入口总表.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ______ as default
};
