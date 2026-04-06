import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"PaiSmart/面试/v2-day6.md","filePath":"PaiSmart/面试/v2-day6.md","lastUpdated":1774780515000}');
const _sfc_main = { name: "PaiSmart/面试/v2-day6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="当用户从-搜索框-输入一句话然后-点击搜索-系统会经历什么流程" tabindex="-1">当用户从 搜索框 输入一句话然后 点击搜索，系统会经历什么流程 <a class="header-anchor" href="#当用户从-搜索框-输入一句话然后-点击搜索-系统会经历什么流程" aria-label="Permalink to &quot;当用户从 搜索框 输入一句话然后 点击搜索，系统会经历什么流程&quot;">​</a></h3><ul><li>用户在前端页面点击搜索，前端将查询语句、用户信息等参数封装成HTTP请求发送给后端，后端相关接口接收后，首先去进行权限提取，接着就根据外部Embedding 模型去将用户语句转换成向量来进行KNN搜索和BM25检索。首先是KNN语义搜索，去找到语义最接近的文本块，接着再去BM25搜索，去匹配关键词详细的文档，之后再使用之前提出的权限来进行权限过滤，保证返回的文档是公开或者是属于用户本人或者是相关组织的。最后，为了提高相关性和精度，还使用ElasticsSearch的rescore根据BM25与向量匹配的得分对于结果重排序，最后将排名靠前的文档打分并返回给前端</li></ul><h3 id="这和一般的百度搜索有什么不一样" tabindex="-1">这和一般的百度搜索有什么不一样？ <a class="header-anchor" href="#这和一般的百度搜索有什么不一样" aria-label="Permalink to &quot;这和一般的百度搜索有什么不一样？&quot;">​</a></h3><ul><li>这套搜索逻辑，在传统的关键词匹配的基础上还引入了语义理解的能力。</li><li>当用户查询的时候，系统会通过外部的Embedding模型将查询语句转换成高维向量，再根据这个特征去进行KNN检索。光有相似度检索还不够，因此还引入了BM25的关键词匹配，可以使得用户在查询专有名词时更准确。</li><li>所以我们先通过向量去初筛，再去使用BM25的rescore对初筛结果排序，这样就可以把语义匹配＋关键词命中的高质量结果优先返回</li><li>整体来看，传统搜索偏向的是“你说了什么，我就找什么”，而 RAG 希望做到的是“你没说，但你想表达的，我也能理解并找到”。</li></ul><h3 id="从用户输入一个问题-到系统给出回答-整个rag流程是怎样的吗" tabindex="-1">从用户输入一个问题，到系统给出回答，整个RAG流程是怎样的吗 <a class="header-anchor" href="#从用户输入一个问题-到系统给出回答-整个rag流程是怎样的吗" aria-label="Permalink to &quot;从用户输入一个问题，到系统给出回答，整个RAG流程是怎样的吗&quot;">​</a></h3><ul><li>查询理解 信息检索 答案生成 答案交付</li><li>用户在网页中输入问题，系统会根据这个查询内容，加上之前的历史对话，来理解用户的真实意图</li><li>系统获得了用户的真实意图后，首先会使用嵌入的大模型去向量化用户的查询语句，并且向量数据库中搜索相关的内容，并使用BM25算法去进行关键词匹配，提高搜索的准确率，最后再使用重排序模型对这些结果进行优先级排序，筛选出最合适的几段文本</li><li>在生成答案前，我们会将检索好的内容文本片段和用户的问题、对话历史等信息，按照设计好的prompt模板去拼接到一起，然后把这个prompt发送给大模型，避免大模型产生幻觉凭空生成答案</li><li>最后我们使用Websocket去实现类似于打字机形式的流式传输，同时还会告诉用户其中的一些回答是基于哪一些文档得出的</li></ul><h3 id="websocket连接是长连接-它比http要脆弱。如果用户的网络抖动一下-连接断了-会发生什么-你们有什么异常处理和重连机制吗" tabindex="-1">WebSocket连接是长连接，它比HTTP要脆弱。如果用户的网络抖动一下，连接断了，会发生什么？你们有什么异常处理和重连机制吗？ <a class="header-anchor" href="#websocket连接是长连接-它比http要脆弱。如果用户的网络抖动一下-连接断了-会发生什么-你们有什么异常处理和重连机制吗" aria-label="Permalink to &quot;WebSocket连接是长连接，它比HTTP要脆弱。如果用户的网络抖动一下，连接断了，会发生什么？你们有什么异常处理和重连机制吗？&quot;">​</a></h3><ul><li>在前端，我们使用了@vueuse库来管理websocket，这样可以保证即使连接断开了也可以自动尝试重连</li><li>在后端，我们使用了无状态连接的原则，用户重连后发送一条消息，我们可以在消息中找到携带的用户会话Id，并去缓存中找到上下文，这样就好像对话没有断过一样</li></ul><h3 id="从技术角度看-派聪明这个系统是怎么搭建的-是单体应用还是微服务-是前后端分离的吗" tabindex="-1">从技术角度看，派聪明这个系统是怎么搭建的？是单体应用还是微服务？是前后端分离的吗？ <a class="header-anchor" href="#从技术角度看-派聪明这个系统是怎么搭建的-是单体应用还是微服务-是前后端分离的吗" aria-label="Permalink to &quot;从技术角度看，派聪明这个系统是怎么搭建的？是单体应用还是微服务？是前后端分离的吗？&quot;">​</a></h3><ul><li>这是一个前后端分离的项目。在前端使用了Vue3作为核心框架，整合了构建工具Vite，状态管理Pinia，路由Vue Router。此外，前端还使用了Naive UI 和UnoCss来快速构建用户界面。后端基于Spring Boot构建，负责所有业务逻辑、数据处理。前后端通过标准的RESTful API 和Websocket来完成通信和实时交互</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("PaiSmart/面试/v2-day6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const v2Day6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  v2Day6 as default
};
