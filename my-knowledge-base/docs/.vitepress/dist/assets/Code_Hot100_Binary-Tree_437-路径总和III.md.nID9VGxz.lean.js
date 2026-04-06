import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, a7 as createStaticVNode, j as createBaseVNode, a as createTextVNode, E as createVNode, w as withCtx } from "./chunks/framework.BaarDA_E.js";
const __pageData = JSON.parse('{"title":"437. 路径总和 III (Path Sum III)","description":"","frontmatter":{"tags":["LeetCode","二叉树","DFS","前缀和","哈希表"],"difficulty":"Medium","status":"✅ 已解决","date":"2026-02-26T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Binary-Tree/437-路径总和III.md","filePath":"Code/Hot100/Binary-Tree/437-路径总和III.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/Hot100/Binary-Tree/437-路径总和III.md" };
const _hoisted_1 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 2919.8 1083.9",
  "aria-hidden": "true"
};
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "10.27ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 4539.4 1000",
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
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  return openBlock(), createElementBlock("div", null, [
    _cache[38] || (_cache[38] = createStaticVNode("", 7)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[8] || (_cache[8] = createBaseVNode("strong", null, "降维打击：", -1)),
        _cache[9] || (_cache[9] = createTextVNode(" 彻底抛弃了在 List 中遍历加减的 ", -1)),
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
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
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
        _cache[10] || (_cache[10] = createTextVNode(" 或 ", -1)),
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
                    transform: "translate(2262.2,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "D7",
                      d: "M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(3262.4,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D43B",
                      d: "M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(4150.4,0)"
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
                  createBaseVNode("mi", null, "N"),
                  createBaseVNode("mo", null, "×"),
                  createBaseVNode("mi", null, "H"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[11] || (_cache[11] = createTextVNode(" 的笨方法。利用哈希表 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_3, [..._cache[4] || (_cache[4] = [
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
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
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
        _cache[12] || (_cache[12] = createTextVNode(" 的查询特性，让时间复杂度暴降至绝对的 ", -1)),
        createBaseVNode("strong", null, [
          createVNode(_component_mjx_container, {
            class: "MathJax",
            jax: "SVG",
            style: { "direction": "ltr", "position": "relative" }
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[6] || (_cache[6] = [
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
          })
        ]),
        _cache[13] || (_cache[13] = createTextVNode("。", -1))
      ])
    ]),
    _cache[39] || (_cache[39] = createStaticVNode("", 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[21] || (_cache[21] = createBaseVNode("strong", null, "时间复杂度：", -1)),
        _cache[22] || (_cache[22] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[14] || (_cache[14] = [
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
              default: withCtx(() => [..._cache[15] || (_cache[15] = [
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
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[18] || (_cache[18] = createBaseVNode("em", null, "分析：", -1)),
            _cache[19] || (_cache[19] = createTextVNode(" 完美的一遍 DFS。每个节点只会被访问一次，哈希表的存取操作时间复杂度为 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[16] || (_cache[16] = [
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
                  default: withCtx(() => [..._cache[17] || (_cache[17] = [
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
            _cache[20] || (_cache[20] = createTextVNode("，因此整体时间复杂度为线性。", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[36] || (_cache[36] = createBaseVNode("strong", null, "空间复杂度：", -1)),
        _cache[37] || (_cache[37] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[23] || (_cache[23] = [
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
              default: withCtx(() => [..._cache[24] || (_cache[24] = [
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
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[31] || (_cache[31] = createBaseVNode("em", null, "分析：", -1)),
            _cache[32] || (_cache[32] = createTextVNode(" 空间消耗取决于哈希表的大小（最坏情况下存储 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_8, [..._cache[25] || (_cache[25] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D441",
                          d: "M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z",
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
                  default: withCtx(() => [..._cache[26] || (_cache[26] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "N")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[33] || (_cache[33] = createTextVNode(" 个不同的前缀和）以及递归调用栈的深度 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[27] || (_cache[27] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D43B",
                          d: "M228 637Q194 637 192 641Q191 643 191 649Q191 673 202 682Q204 683 219 683Q260 681 355 681Q389 681 418 681T463 682T483 682Q499 682 499 672Q499 670 497 658Q492 641 487 638H485Q483 638 480 638T473 638T464 637T455 637Q416 636 405 634T387 623Q384 619 355 500Q348 474 340 442T328 395L324 380Q324 378 469 378H614L615 381Q615 384 646 504Q674 619 674 627T617 637Q594 637 587 639T580 648Q580 650 582 660Q586 677 588 679T604 682Q609 682 646 681T740 680Q802 680 835 681T871 682Q888 682 888 672Q888 645 876 638H874Q872 638 869 638T862 638T853 637T844 637Q805 636 794 634T776 623Q773 618 704 340T634 58Q634 51 638 51Q646 48 692 46H723Q729 38 729 37T726 19Q722 6 716 0H701Q664 2 567 2Q533 2 504 2T458 2T437 1Q420 1 420 10Q420 15 423 24Q428 43 433 45Q437 46 448 46H454Q481 46 514 49Q520 50 522 50T528 55T534 64T540 82T547 110T558 153Q565 181 569 198Q602 330 602 331T457 332H312L279 197Q245 63 245 58Q245 51 253 49T303 46H334Q340 38 340 37T337 19Q333 6 327 0H312Q275 2 178 2Q144 2 115 2T69 2T48 1Q31 1 31 10Q31 12 34 24Q39 43 44 45Q48 46 59 46H65Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Q285 635 228 637Z",
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
                  default: withCtx(() => [..._cache[28] || (_cache[28] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "H")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[34] || (_cache[34] = createTextVNode("。总空间复杂度为 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_10, [..._cache[29] || (_cache[29] = [
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
                  default: withCtx(() => [..._cache[30] || (_cache[30] = [
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
            _cache[35] || (_cache[35] = createTextVNode("。", -1))
          ])
        ])
      ])
    ]),
    _cache[40] || (_cache[40] = createStaticVNode("", 7))
  ]);
}
const _437_____III = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _437_____III as default
};
