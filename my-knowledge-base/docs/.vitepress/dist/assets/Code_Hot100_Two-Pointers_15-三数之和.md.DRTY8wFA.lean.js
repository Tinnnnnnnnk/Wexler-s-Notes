import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, aj as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.ul-4IeKD.js";
const __pageData = JSON.parse('{"title":"15. 三数之和 (3Sum)","description":"","frontmatter":{"tags":["LeetCode","双指针","数组","排序"],"difficulty":"Medium","status":"✅ 已解决","date":"2025-12-25T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Two-Pointers/15-三数之和.md","filePath":"Code/Hot100/Two-Pointers/15-三数之和.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/Hot100/Two-Pointers/15-三数之和.md" };
const _hoisted_1 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.451ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.2 2919.8 1083.2",
  "aria-hidden": "true"
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 2919.8 1083.9",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  return openBlock(), createElementBlock("div", null, [
    _cache[9] || (_cache[9] = createStaticVNode("", 5)),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("这道题暴力的复杂度是 ", -1)),
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
                  "data-mml-node": "msup",
                  transform: "translate(1152,0)"
                }, [
                  createBaseVNode("g", { "data-mml-node": "mi" }, [
                    createBaseVNode("path", {
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(975.3,363) scale(0.707)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "33",
                      d: "M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createBaseVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2530.8,0)"
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
                createBaseVNode("msup", null, [
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mn", null, "3")
                ]),
                createBaseVNode("mo", { stretchy: "false" }, ")")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      _cache[5] || (_cache[5] = createTextVNode("，绝对会超时。利用", -1)),
      _cache[6] || (_cache[6] = createBaseVNode("strong", null, "双指针", -1)),
      _cache[7] || (_cache[7] = createTextVNode("可以将复杂度降为 ", -1)),
      createVNode(_component_mjx_container, {
        class: "MathJax",
        jax: "SVG",
        style: { "direction": "ltr", "position": "relative" }
      }, {
        default: withCtx(() => [
          (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[2] || (_cache[2] = [
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
                      "data-c": "1D441",
                      d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mn",
                    transform: "translate(975.3,363) scale(0.707)"
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
                  transform: "translate(2530.8,0)"
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
            default: withCtx(() => [..._cache[3] || (_cache[3] = [
              createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                createBaseVNode("mi", null, "O"),
                createBaseVNode("mo", { stretchy: "false" }, "("),
                createBaseVNode("msup", null, [
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mn", null, "2")
                ]),
                createBaseVNode("mo", { stretchy: "false" }, ")")
              ], -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }),
      _cache[8] || (_cache[8] = createTextVNode("。", -1))
    ]),
    _cache[10] || (_cache[10] = createStaticVNode("", 10))
  ]);
}
const _15_____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _15_____ as default
};
