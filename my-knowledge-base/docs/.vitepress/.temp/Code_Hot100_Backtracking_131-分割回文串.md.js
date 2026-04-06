import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"131. 分割回文串 (Palindrome Partitioning)","description":"","frontmatter":{"tags":["LeetCode","回溯法","动态规划","字符串"],"difficulty":"Medium","status":"✅ 已解决 (极致优化版)","date":"2026-03-02T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Backtracking/131-分割回文串.md","filePath":"Code/Hot100/Backtracking/131-分割回文串.md","lastUpdated":1772427750000}');
const _sfc_main = { name: "Code/Hot100/Backtracking/131-分割回文串.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="_131-分割回文串-palindrome-partitioning" tabindex="-1">131. 分割回文串 (Palindrome Partitioning) <a class="header-anchor" href="#_131-分割回文串-palindrome-partitioning" aria-label="Permalink to &quot;131. 分割回文串 (Palindrome Partitioning)&quot;">​</a></h1><div class="info custom-block github-alert"><p class="custom-block-title">- 题目描述 (点击展开)</p><p></p><blockquote><p>给你一个字符串 <code>s</code>，请你将 <code>s</code> 分割成一些子串，使每个子串都是 <strong>回文串</strong> 。返回 <code>s</code> 所有可能的分割方案。 示例: 输入 <code>s = &quot;aab&quot;</code>，输出 <code>[[&quot;a&quot;,&quot;a&quot;,&quot;b&quot;],[&quot;aa&quot;,&quot;b&quot;]]</code></p></blockquote></div><hr><h2 id="💡-解题思路-kasumi-s-memo" tabindex="-1">💡 解题思路 (Kasumi&#39;s Memo) <a class="header-anchor" href="#💡-解题思路-kasumi-s-memo" aria-label="Permalink to &quot;💡 解题思路 (Kasumi&#39;s Memo)&quot;">​</a></h2><h3 id="核心策略-for-loop-切蛋糕-dp-记忆化" tabindex="-1">核心策略 (For-Loop 切蛋糕 + DP 记忆化) <a class="header-anchor" href="#核心策略-for-loop-切蛋糕-dp-记忆化" aria-label="Permalink to &quot;核心策略 (For-Loop 切蛋糕 + DP 记忆化)&quot;">​</a></h3><p>彻底抛弃 0-1 选或不选的字符拼接法，改用<strong>区间切割</strong>的思想，并通过<strong>动态规划</strong>将回文判断的复杂度从 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.495ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2429 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1152,0)"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2040,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>N</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "N"),
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
            width: "5.495ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2429 1000",
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
                  "data-mml-node": "mi",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2040,0)"
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
                createVNode("mi", null, "N"),
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
  _push(` 降到 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.618ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2041 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(1152,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1652,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mn", null, "1"),
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
            width: "4.618ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2041 1000",
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
                  "data-mml-node": "mn",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1652,0)"
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
                createVNode("mn", null, "1"),
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
  _push(`。</p><ol><li><strong>第一步 (DP 预处理)：</strong> 建一个 <code>boolean[][] dp</code> 数组。利用双层循环，从下往上、从左往右推导，把字符串里所有子串是否为回文串的答案提前算出来，存入表中。</li><li><strong>第二步 (老板拦截门)：</strong> 进入 DFS 时，如果切割的起点 <code>startIndex == s.length()</code>，说明整条字符串都被切完了，直接把 <code>list</code> 克隆一份存入总名单 <code>lists</code> 并下班。</li><li><strong>第三步 (For 循环找落刀点)：</strong> 从 <code>startIndex</code> 开始，用 <code>i</code> 向后遍历所有的可能性。</li><li><strong>第四步 (光速安检与分支)：</strong> 直接查表 <code>if (dp[startIndex][i])</code>。如果是回文串，直接用 <code>substring</code> 截取出来放入 <code>list</code>，然后以 <code>i + 1</code> 为新起点，召唤分身进入下一层 DFS。</li><li><strong>第五步 (擦脚印)：</strong> 递归返回后，把刚才加进 <code>list</code> 的那段回文串删掉（切尾巴），让 <code>i</code> 继续往后走，尝试切更长的一段。</li></ol><hr><h2 id="💻-代码实现-java" tabindex="-1">💻 代码实现 (Java) <a class="header-anchor" href="#💻-代码实现-java" aria-label="Permalink to &quot;💻 代码实现 (Java)&quot;">​</a></h2><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">class</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> Solution</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    List&lt;List&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">String</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&gt; lists </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    List&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">String</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt; list </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> ArrayList&lt;&gt;();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    boolean</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">[][] dp; </span><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">// 神器：记录所有区间是否为回文串</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> List&lt;List&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">String</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&gt; </span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">partition</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(String </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">s</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        int</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> n </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">length</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        dp </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> new</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> boolean</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">[n][n];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">        // 1. DP 预处理：光速填表 (注意 i 要从后往前遍历)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">int</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> n </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">; i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">; i</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">--</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">            for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">int</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> j </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> i; j </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> n; j</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">++</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                // 如果头尾字符相等，且（长度&lt;=3 或者 中间也是回文）</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">                if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">charAt</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(i) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">==</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">charAt</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(j) </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&amp;&amp;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (j </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&lt;=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 2</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> ||</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> dp[i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">][j </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">])) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                    dp[i][j] </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> true</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">        // 2. 带着切蛋糕的刀 (startIndex = 0) 进入回溯</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">        DFS</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(s, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">0</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> lists;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">    public</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> void</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> DFS</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(String </span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}">s</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">int</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}"> startIndex</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">        // 拦截门：如果刀已经切到了字符串的末尾外，说明切割完毕</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (startIndex </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">==</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">length</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">()) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">            lists.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">add</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">new</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> ArrayList&lt;&gt;(list));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">            return</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        }</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">        // 核心：从 startIndex 开始，尝试所有的落刀点 i</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">        for</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">int</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> startIndex; i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">length</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(); i</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">++</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">            // 光速安检：只有切下来的这一块 [startIndex, i] 是回文，才准往下走</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">            if</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> (dp[startIndex][i]) {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                // 做选择：把这块蛋糕切下来存进队伍</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                list.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">add</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(s.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">substring</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(startIndex, i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">));</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                // 派分身：从 i + 1 的位置继续切剩下的蛋糕</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">                DFS</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(s, i </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">+</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                </span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">                // 撤销选择：把这块蛋糕拿出来，尝试在后面寻找别的落刀点</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">                list.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">remove</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(list.</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">size</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">() </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">-</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 1</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">            }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">        }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><hr><h2 id="📊-复杂度分析" tabindex="-1">📊 复杂度分析 <a class="header-anchor" href="#📊-复杂度分析" aria-label="Permalink to &quot;📊 复杂度分析&quot;">​</a></h2><ul><li><strong>时间复杂度：</strong> `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="9.87ex" height="2.48ex" role="img" focusable="false" viewBox="0 -846 4362.4 1096" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1152,0)"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2262.2,0)"${_scopeId}><path data-c="22C5" d="M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msup" transform="translate(2762.4,0)"${_scopeId}><g data-mml-node="mn"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(533,363) scale(0.707)"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(3973.4,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>N</mi><mo${_scopeId2}>⋅</mo><msup${_scopeId2}><mn${_scopeId2}>2</mn><mi${_scopeId2}>N</mi></msup><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "N"),
                  createVNode("mo", null, "⋅"),
                  createVNode("msup", null, [
                    createVNode("mn", null, "2"),
                    createVNode("mi", null, "N")
                  ]),
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
            width: "9.87ex",
            height: "2.48ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -846 4362.4 1096",
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
                  "data-mml-node": "mi",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2262.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "22C5",
                    d: "M78 250Q78 274 95 292T138 310Q162 310 180 294T199 251Q199 226 182 208T139 190T96 207T78 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "msup",
                  transform: "translate(2762.4,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mn" }, [
                    createVNode("path", {
                      "data-c": "32",
                      d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(533,363) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3973.4,0)"
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
                createVNode("mi", null, "N"),
                createVNode("mo", null, "⋅"),
                createVNode("msup", null, [
                  createVNode("mn", null, "2"),
                  createVNode("mi", null, "N")
                ]),
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
  _push(`<ul><li><em>分析：</em> 字符串长度为 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="2.009ex" height="1.545ex" role="img" focusable="false" viewBox="0 -683 888 683" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>N</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "N")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.009ex",
            height: "1.545ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 888 683",
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
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
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
                createVNode("mi", null, "N")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`，最多有 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.906ex" height="1.731ex" role="img" focusable="false" viewBox="0 -683 2610.4 765" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1110.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2110.4,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>N</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "N"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "5.906ex",
            height: "1.731ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 2610.4 765",
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
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1110.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(2110.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
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
                createVNode("mi", null, "N"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个切割点，共有 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="4.784ex" height="1.914ex" role="img" focusable="false" viewBox="0 -846 2114.6 846" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="msup"${_scopeId}><g data-mml-node="mn"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(888,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(1666,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><msup${_scopeId2}><mn${_scopeId2}>2</mn><mrow data-mjx-texclass="ORD"${_scopeId2}><mi${_scopeId2}>N</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn></mrow></msup></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("msup", null, [
                    createVNode("mn", null, "2"),
                    createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                      createVNode("mi", null, "N"),
                      createVNode("mo", null, "−"),
                      createVNode("mn", null, "1")
                    ])
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "4.784ex",
            height: "1.914ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -846 2114.6 846",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "msup" }, [
                  createVNode("g", { "data-mml-node": "mn" }, [
                    createVNode("path", {
                      "data-c": "32",
                      d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "TeXAtom",
                    transform: "translate(533,363) scale(0.707)",
                    "data-mjx-texclass": "ORD"
                  }, [
                    createVNode("g", { "data-mml-node": "mi" }, [
                      createVNode("path", {
                        "data-c": "1D441",
                        d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(888,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "2212",
                        d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(1666,0)"
                    }, [
                      createVNode("path", {
                        "data-c": "31",
                        d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ])
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
                createVNode("msup", null, [
                  createVNode("mn", null, "2"),
                  createVNode("mrow", { "data-mjx-texclass": "ORD" }, [
                    createVNode("mi", null, "N"),
                    createVNode("mo", null, "−"),
                    createVNode("mn", null, "1")
                  ])
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 种分割方法。每次将满足条件的分割方案加入结果集需要 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.495ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2429 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1152,0)"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2040,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>N</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "N"),
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
            width: "5.495ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2429 1000",
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
                  "data-mml-node": "mi",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2040,0)"
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
                createVNode("mi", null, "N"),
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
  _push(` 的字符串复制时间。因为使用了 DP 表，回文判断的时间被完全抹平了（`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.618ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2041 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(1152,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1652,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mn", null, "1"),
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
            width: "4.618ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2041 1000",
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
                  "data-mml-node": "mn",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1652,0)"
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
                createVNode("mn", null, "1"),
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
  _push(`）。</li></ul></li><li><strong>空间复杂度：</strong> `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="6.606ex" height="2.452ex" role="img" focusable="false" viewBox="0 -833.9 2919.8 1083.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msup" transform="translate(1152,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(975.3,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(2530.8,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><msup${_scopeId2}><mi${_scopeId2}>N</mi><mn${_scopeId2}>2</mn></msup><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("msup", null, [
                    createVNode("mi", null, "N"),
                    createVNode("mn", null, "2")
                  ]),
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
            width: "6.606ex",
            height: "2.452ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -833.9 2919.8 1083.9",
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
                  "data-mml-node": "msup",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(975.3,363) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "32",
                      d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2530.8,0)"
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
                createVNode("msup", null, [
                  createVNode("mi", null, "N"),
                  createVNode("mn", null, "2")
                ]),
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
  _push(`<ul><li><em>分析：</em> DP 数组占用了 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="6.606ex" height="2.452ex" role="img" focusable="false" viewBox="0 -833.9 2919.8 1083.9" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="msup" transform="translate(1152,0)"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(975.3,363) scale(0.707)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mo" transform="translate(2530.8,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><msup${_scopeId2}><mi${_scopeId2}>N</mi><mn${_scopeId2}>2</mn></msup><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("msup", null, [
                    createVNode("mi", null, "N"),
                    createVNode("mn", null, "2")
                  ]),
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
            width: "6.606ex",
            height: "2.452ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -833.9 2919.8 1083.9",
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
                  "data-mml-node": "msup",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("g", { "data-mml-node": "mi" }, [
                    createVNode("path", {
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(975.3,363) scale(0.707)"
                  }, [
                    createVNode("path", {
                      "data-c": "32",
                      d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2530.8,0)"
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
                createVNode("msup", null, [
                  createVNode("mi", null, "N"),
                  createVNode("mn", null, "2")
                ]),
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
  _push(` 的空间，递归调用栈的深度最大为 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="2.009ex" height="1.545ex" role="img" focusable="false" viewBox="0 -683 888 683" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>N</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "N")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "2.009ex",
            height: "1.545ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 888 683",
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
                    "data-c": "1D441",
                    d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
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
                createVNode("mi", null, "N")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。</li></ul></li></ul><hr><h2 id="📝-错题本-复盘" tabindex="-1">📝 错题本 / 复盘 <a class="header-anchor" href="#📝-错题本-复盘" aria-label="Permalink to &quot;📝 错题本 / 复盘&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">关键技巧 / 总结</p><p></p><blockquote><p><strong>区间切割法 (For-loop 回溯)：</strong> 这是处理组合、分割类问题的最强模板。<code>startIndex</code> 控制树的层级（我在哪），<code>for</code> 循环的 <code>i</code> 控制树的宽度（我能切多长）。 <strong>空间换时间：</strong> 在频繁的递归中，任何耗时超过 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.618ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 2041 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(763,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(1152,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1652,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>O</mi><mo stretchy="false"${_scopeId2}>(</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "O"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mn", null, "1"),
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
            width: "4.618ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 2041 1000",
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
                  "data-mml-node": "mn",
                  transform: "translate(1152,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1652,0)"
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
                createVNode("mn", null, "1"),
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
  _push(` 的底层操作（如判定回文），都可以提前在主函数里用 DP 或者哈希表预处理出来。</p></blockquote></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Code/Hot100/Backtracking/131-分割回文串.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _131______ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _131______ as default
};
