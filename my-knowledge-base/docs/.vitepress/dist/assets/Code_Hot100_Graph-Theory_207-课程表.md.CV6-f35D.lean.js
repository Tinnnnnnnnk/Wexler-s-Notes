import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, aj as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.ul-4IeKD.js";
const __pageData = JSON.parse('{"title":"207. 课程表 (Course Schedule) - Kahn 算法 (拓扑排序)","description":"","frontmatter":{"tags":["LeetCode","图论","BFS","拓扑排序","队列"],"difficulty":"Medium","status":"📝 已归纳模板","date":"2026-02-28T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Graph-Theory/207-课程表.md","filePath":"Code/Hot100/Graph-Theory/207-课程表.md","lastUpdated":1772256601000}');
const _sfc_main = { name: "Code/Hot100/Graph-Theory/207-课程表.md" };
const _hoisted_1 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
  "aria-hidden": "true"
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "10.842ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 4792.3 1083.9",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "9.72ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 4296.4 1000",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "9.72ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 4296.4 1000",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.74ex",
  height: "1.595ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 769 705",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "1.729ex",
  height: "1.538ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -680 764 680",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.226ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2310 1000",
  "aria-hidden": "true"
};
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
const _hoisted_12 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "9.72ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 4296.4 1000",
  "aria-hidden": "true"
};
const _hoisted_13 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.215ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2305 1000",
  "aria-hidden": "true"
};
const _hoisted_14 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.226ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2310 1000",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  return openBlock(), createElementBlock("div", null, [
    _cache[59] || (_cache[59] = createStaticVNode("", 5)),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("彻底抛弃极其耗时的 ", -1)),
      _cache[3] || (_cache[3] = createBaseVNode("code", null, "list.remove()", -1)),
      _cache[4] || (_cache[4] = createTextVNode(" 操作，转而使用“入度数组”和“邻接表”进行 ", -1)),
      createVNode(_component_mjx_container, {
        class: "MathJax",
        jax: "SVG",
        style: { "direction": "ltr", "position": "relative" }
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_1, [..._cache[0] || (_cache[0] = [
            createBaseVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createBaseVNode("g", { "data-mml-node": "math" }, [
                createBaseVNode("g", { "data-mml-node": "mi" }, [
                  createBaseVNode("path", {
                    "data-c": "1D442",
                    d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createBaseVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(763,0)"
                }, [
                  createBaseVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createBaseVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(1152,0)"
                }, [
                  createBaseVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createBaseVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1652,0)"
                }, [
                  createBaseVNode("path", {
                    "data-c": "29",
                    d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                    style: { "stroke-width": "3" }
                  })
                ])
              ])
            ], -1)
          ])])),
          createVNode(_component_mjx_assistive_mml, {
            unselectable: "on",
            display: "inline",
            style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "O"),
                createBaseVNode("mo", { stretchy: "false" }, "("),
                createBaseVNode("mn", null, "1"),
                createBaseVNode("mo", { stretchy: "false" }, ")")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      _cache[5] || (_cache[5] = createTextVNode(" 的状态更新。", -1))
    ]),
    _cache[60] || (_cache[60] = createStaticVNode("", 2)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[14] || (_cache[14] = createBaseVNode("strong", null, "极致的性能降维：", -1)),
        _cache[15] || (_cache[15] = createTextVNode(" 你的原版暴力解每次删除前置条件都要用 ", -1)),
        _cache[16] || (_cache[16] = createBaseVNode("code", null, "contains", -1)),
        _cache[17] || (_cache[17] = createTextVNode(" 和 ", -1)),
        _cache[18] || (_cache[18] = createBaseVNode("code", null, "remove(Object)", -1)),
        _cache[19] || (_cache[19] = createTextVNode("，底层是 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[6] || (_cache[6] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(2040,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[7] || (_cache[7] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[20] || (_cache[20] = createTextVNode(" 遍历。而 Kahn 算法用数组索引 ", -1)),
        _cache[21] || (_cache[21] = createBaseVNode("code", null, "inDegree[next]--", -1)),
        _cache[22] || (_cache[22] = createTextVNode(" 进行扣减，是绝对的光速 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_3, [..._cache[8] || (_cache[8] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "31",
                      d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(1652,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[9] || (_cache[9] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mn", null, "1"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[23] || (_cache[23] = createTextVNode("！整体时间从 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[10] || (_cache[10] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "msup",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "mi" }, [
                      createBaseVNode("path", {
                        "data-c": "1D449",
                        d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(861.3,363) scale(0.707)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "32",
                        d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                        style: { "stroke-width": "3" }
                      })
                    ])
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(2639.1,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "2B",
                      d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(3639.3,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D438",
                      d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(4403.3,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[11] || (_cache[11] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("msup", null, [
                    createBaseVNode("mi", null, "V"),
                    createBaseVNode("mn", null, "2")
                  ]),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[24] || (_cache[24] = createTextVNode(" 暴降到了 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[12] || (_cache[12] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D449",
                      d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(2143.2,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "2B",
                      d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(3143.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D438",
                      d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(3907.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[13] || (_cache[13] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[25] || (_cache[25] = createTextVNode("。", -1))
      ])
    ]),
    _cache[61] || (_cache[61] = createStaticVNode("", 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[45] || (_cache[45] = createBaseVNode("strong", null, "时间复杂度：", -1)),
        _cache[46] || (_cache[46] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[26] || (_cache[26] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D449",
                      d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(2143.2,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "2B",
                      d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(3143.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D438",
                      d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(3907.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[27] || (_cache[27] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[38] || (_cache[38] = createBaseVNode("em", null, "分析：", -1)),
            _cache[39] || (_cache[39] = createTextVNode()),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[28] || (_cache[28] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D449",
                          d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[29] || (_cache[29] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "V")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[40] || (_cache[40] = createTextVNode(" 是节点数（课程数），", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_8, [..._cache[30] || (_cache[30] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D438",
                          d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[31] || (_cache[31] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "E")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[41] || (_cache[41] = createTextVNode(" 是边数（先修要求数）。建图过程需要遍历所有的边 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[32] || (_cache[32] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D442",
                          d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "28",
                          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1152,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D438",
                          d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1916,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "29",
                          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[33] || (_cache[33] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "O"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "E"),
                      createBaseVNode("mo", { stretchy: "false" }, ")")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[42] || (_cache[42] = createTextVNode("。在 BFS 过程中，每个节点最多入队出队一次 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_10, [..._cache[34] || (_cache[34] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D442",
                          d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "28",
                          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1152,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D449",
                          d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1921,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "29",
                          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[35] || (_cache[35] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "O"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "V"),
                      createBaseVNode("mo", { stretchy: "false" }, ")")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[43] || (_cache[43] = createTextVNode("，每条边最多被访问一次 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_11, [..._cache[36] || (_cache[36] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D442",
                          d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "28",
                          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1152,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D438",
                          d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1916,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "29",
                          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[37] || (_cache[37] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "O"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "E"),
                      createBaseVNode("mo", { stretchy: "false" }, ")")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[44] || (_cache[44] = createTextVNode("。总时间极其高效。", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[57] || (_cache[57] = createBaseVNode("strong", null, "空间复杂度：", -1)),
        _cache[58] || (_cache[58] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_12, [..._cache[47] || (_cache[47] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D442",
                      d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(763,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1152,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D449",
                      d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(2143.2,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "2B",
                      d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(3143.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D438",
                      d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(3907.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "29",
                      d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ])
              ], -1)
            ])])),
            createVNode(_component_mjx_assistive_mml, {
              unselectable: "on",
              display: "inline",
              style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
            }, {
              default: withCtx(() => [..._cache[48] || (_cache[48] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mi", null, "O"),
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "V"),
                  createBaseVNode("mo", null, "+"),
                  createBaseVNode("mi", null, "E"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[53] || (_cache[53] = createBaseVNode("em", null, "分析：", -1)),
            _cache[54] || (_cache[54] = createTextVNode(" 邻接表需要存储所有的边 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_13, [..._cache[49] || (_cache[49] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D442",
                          d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "28",
                          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1152,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D438",
                          d: "M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1916,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "29",
                          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[50] || (_cache[50] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "O"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "E"),
                      createBaseVNode("mo", { stretchy: "false" }, ")")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[55] || (_cache[55] = createTextVNode("，入度数组和队列的长度最大为节点数 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_14, [..._cache[51] || (_cache[51] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D442",
                          d: "M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "28",
                          d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1152,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D449",
                          d: "M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1921,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "29",
                          d: "M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[52] || (_cache[52] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "O"),
                      createBaseVNode("mo", { stretchy: "false" }, "("),
                      createBaseVNode("mi", null, "V"),
                      createBaseVNode("mo", { stretchy: "false" }, ")")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[56] || (_cache[56] = createTextVNode("。", -1))
          ])
        ])
      ])
    ]),
    _cache[62] || (_cache[62] = createStaticVNode("", 7))
  ]);
}
const _207____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _207____ as default
};
