import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"{{title}}","description":"","frontmatter":{"tags":["LeetCode","待分类"],"difficulty":"Medium","status":"📝 进行中","date":"2025-12-25T00:00:00.000Z"},"headers":[],"relativePath":"Code/通用模板new.md","filePath":"Code/通用模板new.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/通用模板new.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="title" tabindex="-1">${ssrInterpolate(_ctx.title)} <a class="header-anchor" href="#title" aria-label="Permalink to &quot;{{title}}&quot;">​</a></h1><div class="info custom-block github-alert"><p class="custom-block-title">- 题目描述 (点击展开)</p><p></p><blockquote></blockquote></div><hr><h2 id="💡-解题思路-kasumi-s-memo" tabindex="-1">💡 解题思路 (Kasumi&#39;s Memo) <a class="header-anchor" href="#💡-解题思路-kasumi-s-memo" aria-label="Permalink to &quot;💡 解题思路 (Kasumi&#39;s Memo)&quot;">​</a></h2><h3 id="核心策略" tabindex="-1">核心策略 <a class="header-anchor" href="#核心策略" aria-label="Permalink to &quot;核心策略&quot;">​</a></h3><ol><li><strong>第一步：</strong></li><li><strong>第二步：</strong> ### 为什么选择这个解法？</li></ol><hr><h2 id="💻-代码实现-java" tabindex="-1">💻 代码实现 (Java) <a class="header-anchor" href="#💻-代码实现-java" aria-label="Permalink to &quot;💻 代码实现 (Java)&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 在这里粘贴你的代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Solution</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> solve</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><hr><h2 id="📊-复杂度分析" tabindex="-1">📊 复杂度分析 <a class="header-anchor" href="#📊-复杂度分析" aria-label="Permalink to &quot;📊 复杂度分析&quot;">​</a></h2><ul><li><strong>时间复杂度：</strong> `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.554ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2013 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1152,0)"${_scopeId}><path data-c="3F" d="M226 668Q190 668 162 656T124 632L114 621Q116 621 119 620T130 616T145 607T157 591T162 567Q162 544 147 529T109 514T71 528T55 566Q55 625 100 661T199 704Q201 704 210 704T224 705H228Q281 705 320 692T378 656T407 612T416 567Q416 503 361 462Q267 395 247 303Q242 279 242 241V224Q242 205 239 202T222 198T205 201T202 218V249Q204 320 220 371T255 445T292 491T315 537Q317 546 317 574V587Q317 604 315 615T304 640T277 661T226 668ZM162 61Q162 89 180 105T224 121Q247 119 264 104T281 61Q281 31 264 16T222 1Q197 1 180 16T162 61Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1624,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mo${_scopeId2}>?</mo><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mo", null, "?"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "4.554ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2013 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D442",
                    d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(763,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3F",
                    d: "M226 668Q190 668 162 656T124 632L114 621Q116 621 119 620T130 616T145 607T157 591T162 567Q162 544 147 529T109 514T71 528T55 566Q55 625 100 661T199 704Q201 704 210 704T224 705H228Q281 705 320 692T378 656T407 612T416 567Q416 503 361 462Q267 395 247 303Q242 279 242 241V224Q242 205 239 202T222 198T205 201T202 218V249Q204 320 220 371T255 445T292 491T315 537Q317 546 317 574V587Q317 604 315 615T304 640T277 661T226 668ZM162 61Q162 89 180 105T224 121Q247 119 264 104T281 61Q281 31 264 16T222 1Q197 1 180 16T162 61Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1624,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "O"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mo", null, "?"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><em>分析：</em> - <strong>空间复杂度：</strong> `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.554ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2013 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1152,0)"${_scopeId}><path data-c="3F" d="M226 668Q190 668 162 656T124 632L114 621Q116 621 119 620T130 616T145 607T157 591T162 567Q162 544 147 529T109 514T71 528T55 566Q55 625 100 661T199 704Q201 704 210 704T224 705H228Q281 705 320 692T378 656T407 612T416 567Q416 503 361 462Q267 395 247 303Q242 279 242 241V224Q242 205 239 202T222 198T205 201T202 218V249Q204 320 220 371T255 445T292 491T315 537Q317 546 317 574V587Q317 604 315 615T304 640T277 661T226 668ZM162 61Q162 89 180 105T224 121Q247 119 264 104T281 61Q281 31 264 16T222 1Q197 1 180 16T162 61Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1624,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mo${_scopeId2}>?</mo><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mo", null, "?"),
                  createVNode("mo", { stretchy: "false" }, ")")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "4.554ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2013 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mi" }, [
                  createVNode("path", {
                    "data-c": "1D442",
                    d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(763,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3F",
                    d: "M226 668Q190 668 162 656T124 632L114 621Q116 621 119 620T130 616T145 607T157 591T162 567Q162 544 147 529T109 514T71 528T55 566Q55 625 100 661T199 704Q201 704 210 704T224 705H228Q281 705 320 692T378 656T407 612T416 567Q416 503 361 462Q267 395 247 303Q242 279 242 241V224Q242 205 239 202T222 198T205 201T202 218V249Q204 320 220 371T255 445T292 491T315 537Q317 546 317 574V587Q317 604 315 615T304 640T277 661T226 668ZM162 61Q162 89 180 105T224 121Q247 119 264 104T281 61Q281 31 264 16T222 1Q197 1 180 16T162 61Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1624,0)"
                }, [
                  createVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ])
          ])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createVNode("mi", null, "O"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mo", null, "?"),
                createVNode("mo", { stretchy: "false" }, ")")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><em>分析：</em> ## 📝 错题本 / 复盘</li></ul></li></ul><blockquote><p>[!failure] 遇到的坑 / 错误点</p><blockquote><ol><li></li></ol></blockquote></blockquote><div class="tip custom-block github-alert"><p class="custom-block-title">关键技巧 / 总结</p><p></p><blockquote></blockquote></div><hr><h2 id="🧠-深度思考与感悟-reflections" tabindex="-1">🧠 深度思考与感悟 (Reflections) <a class="header-anchor" href="#🧠-深度思考与感悟-reflections" aria-label="Permalink to &quot;🧠 深度思考与感悟 (Reflections)&quot;">​</a></h2><ul><li><strong>💡 触类旁通：</strong></li><li><strong>🔧 工程思维：</strong></li><li><strong>✨ 瞬间感悟：</strong> \`\`\`\`</li></ul><hr></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Code/通用模板new.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____new = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ____new as default
};
