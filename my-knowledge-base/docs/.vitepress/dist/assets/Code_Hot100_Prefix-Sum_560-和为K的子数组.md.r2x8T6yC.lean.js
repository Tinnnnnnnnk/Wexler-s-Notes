import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, aj as createStaticVNode, E as createVNode, w as withCtx } from "./chunks/framework.ul-4IeKD.js";
const __pageData = JSON.parse('{"title":"560. 和为 K 的子数组","description":"","frontmatter":{"tags":["LeetCode","哈希表","前缀和","数组"],"difficulty":"Medium","status":"✅ 已解决","date":"2025-12-30T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Prefix-Sum/560-和为K的子数组.md","filePath":"Code/Hot100/Prefix-Sum/560-和为K的子数组.md","lastUpdated":1772267354000}');
const _sfc_main = { name: "Code/Hot100/Prefix-Sum/560-和为K的子数组.md" };
const _hoisted_1 = { class: "info custom-block github-alert" };
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.464ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "30.194ex",
  height: "2.436ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -871.8 13345.8 1076.8",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "28.102ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 12421.1 1000",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "18.994ex",
  height: "2.156ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -871.1 8395.2 953.1",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "32.114ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 14194.4 1000",
  "aria-hidden": "true"
};
const _hoisted_6 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "32.114ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 14194.4 1000",
  "aria-hidden": "true"
};
const _hoisted_7 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.479ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 1979.7 1000",
  "aria-hidden": "true"
};
const _hoisted_8 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 2919.8 1083.9",
  "aria-hidden": "true"
};
const _hoisted_9 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "10.682ex",
  height: "1.731ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 4721.6 765",
  "aria-hidden": "true"
};
const _hoisted_10 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "7.147ex",
  height: "2.005ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -864 3159 886",
  "aria-hidden": "true"
};
const _hoisted_11 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
  "aria-hidden": "true"
};
const _hoisted_12 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_13 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_14 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
  "aria-hidden": "true"
};
const _hoisted_15 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 2919.8 1083.9",
  "aria-hidden": "true"
};
const _hoisted_16 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_17 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_18 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.186ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.327ex",
  height: "1.756ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -694 2354.6 776",
  "aria-hidden": "true"
};
const _hoisted_19 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "58.307ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 25771.6 1000",
  "aria-hidden": "true"
};
const _hoisted_20 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "59.954ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 26499.6 1000",
  "aria-hidden": "true"
};
const _hoisted_21 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_22 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "6.606ex",
  height: "2.452ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -833.9 2919.8 1083.9",
  "aria-hidden": "true"
};
const _hoisted_23 = {
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
    _cache[111] || (_cache[111] = createBaseVNode("h1", {
      id: "_560-和为-k-的子数组",
      tabindex: "-1"
    }, [
      createTextVNode("560. 和为 K 的子数组 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#_560-和为-k-的子数组",
        "aria-label": 'Permalink to "560. 和为 K 的子数组"'
      }, "​")
    ], -1)),
    createBaseVNode("div", _hoisted_1, [
      _cache[6] || (_cache[6] = createStaticVNode("", 6)),
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createVNode(_component_mjx_container, {
            class: "MathJax",
            jax: "SVG",
            style: { "direction": "ltr", "position": "relative" }
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("svg", _hoisted_2, [..._cache[0] || (_cache[0] = [
                createBaseVNode("g", {
                  stroke: "currentColor",
                  fill: "currentColor",
                  "stroke-width": "0",
                  transform: "scale(1,-1)"
                }, [
                  createBaseVNode("g", { "data-mml-node": "math" }, [
                    createBaseVNode("g", { "data-mml-node": "mn" }, [
                      createBaseVNode("path", {
                        "data-c": "31",
                        d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(777.8,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(2611.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45B",
                        d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(3211.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D462",
                        d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(3783.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45A",
                        d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(4661.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(5130.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "2E",
                        d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(5575.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D459",
                        d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(5873.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D452",
                        d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(6339.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45B",
                        d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(6939.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D454",
                        d: "M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(7416.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D461",
                        d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(7777.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "210E",
                        d: "M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(8631,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(10464.8,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "32",
                        d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(11187,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "2217",
                        d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "msup",
                      transform: "translate(11909.2,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "mn" }, [
                        createBaseVNode("path", {
                          "data-c": "31",
                          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(500,0)",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(1033,393.1) scale(0.707)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "34",
                          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
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
                    createBaseVNode("mn", null, "1"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mi", null, "n"),
                    createBaseVNode("mi", null, "u"),
                    createBaseVNode("mi", null, "m"),
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mo", null, "."),
                    createBaseVNode("mi", null, "l"),
                    createBaseVNode("mi", null, "e"),
                    createBaseVNode("mi", null, "n"),
                    createBaseVNode("mi", null, "g"),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "h"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mn", null, "2"),
                    createBaseVNode("mo", null, "∗"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mn", null, "10"),
                      createBaseVNode("mn", null, "4")
                    ])
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_mjx_container, {
            class: "MathJax",
            jax: "SVG",
            style: { "direction": "ltr", "position": "relative" }
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("svg", _hoisted_3, [..._cache[2] || (_cache[2] = [
                createBaseVNode("g", {
                  stroke: "currentColor",
                  fill: "currentColor",
                  "stroke-width": "0",
                  transform: "scale(1,-1)"
                }, [
                  createBaseVNode("g", { "data-mml-node": "math" }, [
                    createBaseVNode("g", { "data-mml-node": "mo" }, [
                      createBaseVNode("path", {
                        "data-c": "2212",
                        d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(778,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "31",
                        d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(500,0)",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(1000,0)",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(1500,0)",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(3055.8,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(4889.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45B",
                        d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(5489.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D462",
                        d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(6061.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45A",
                        d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(6939.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(7408.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "5B",
                        d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(7686.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D456",
                        d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(8031.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "5D",
                        d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(8587.3,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mn",
                      transform: "translate(10421.1,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "31",
                        d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(500,0)",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(1000,0)",
                        style: { "stroke-width": "3" }
                      }),
                      createBaseVNode("path", {
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                        transform: "translate(1500,0)",
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
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("mn", null, "1000"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mi", null, "n"),
                    createBaseVNode("mi", null, "u"),
                    createBaseVNode("mi", null, "m"),
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mo", { stretchy: "false" }, "["),
                    createBaseVNode("mi", null, "i"),
                    createBaseVNode("mo", { stretchy: "false" }, "]"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mn", null, "1000")
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("li", null, [
          createVNode(_component_mjx_container, {
            class: "MathJax",
            jax: "SVG",
            style: { "direction": "ltr", "position": "relative" }
          }, {
            default: withCtx(() => [
              (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[4] || (_cache[4] = [
                createBaseVNode("g", {
                  stroke: "currentColor",
                  fill: "currentColor",
                  "stroke-width": "0",
                  transform: "scale(1,-1)"
                }, [
                  createBaseVNode("g", { "data-mml-node": "math" }, [
                    createBaseVNode("g", { "data-mml-node": "mo" }, [
                      createBaseVNode("path", {
                        "data-c": "2212",
                        d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "msup",
                      transform: "translate(778,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "mn" }, [
                        createBaseVNode("path", {
                          "data-c": "31",
                          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(500,0)",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(1033,393.1) scale(0.707)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "37",
                          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(2492.3,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(4326.1,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D458",
                        d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(5124.9,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "text" }, [
                        createBaseVNode("path", {
                          "data-c": "3C",
                          d: "M694 -11T694 -19T688 -33T678 -40Q671 -40 524 29T234 166L90 235Q83 240 83 250Q83 261 91 266Q664 540 678 540Q681 540 687 534T694 519T687 505Q686 504 417 376L151 250L417 124Q686 -4 687 -5Q694 -11 694 -19Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "text",
                        transform: "translate(778,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "msup",
                      transform: "translate(6958.7,0)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "mn" }, [
                        createBaseVNode("path", {
                          "data-c": "31",
                          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(500,0)",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(1033,393.1) scale(0.707)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "37",
                          d: "M55 458Q56 460 72 567L88 674Q88 676 108 676H128V672Q128 662 143 655T195 646T364 644H485V605L417 512Q408 500 387 472T360 435T339 403T319 367T305 330T292 284T284 230T278 162T275 80Q275 66 275 52T274 28V19Q270 2 255 -10T221 -22Q210 -22 200 -19T179 0T168 40Q168 198 265 368Q285 400 349 489L395 552H302Q128 552 119 546Q113 543 108 522T98 479L95 458V455H55V458Z",
                          style: { "stroke-width": "3" }
                        })
                      ])
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
                    createBaseVNode("mo", null, "−"),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mn", null, "10"),
                      createBaseVNode("mn", null, "7")
                    ]),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mi", null, "k"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("msup", null, [
                      createBaseVNode("mn", null, "10"),
                      createBaseVNode("mn", null, "7")
                    ])
                  ], -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _cache[112] || (_cache[112] = createBaseVNode("hr", null, null, -1)),
    _cache[113] || (_cache[113] = createBaseVNode("h2", {
      id: "💡-解题思路-kasumi-s-memo",
      tabindex: "-1"
    }, [
      createTextVNode("💡 解题思路 (Kasumi's Memo) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#💡-解题思路-kasumi-s-memo",
        "aria-label": `Permalink to "💡 解题思路 (Kasumi's Memo)"`
      }, "​")
    ], -1)),
    _cache[114] || (_cache[114] = createBaseVNode("h3", {
      id: "核心策略-前缀和-哈希表-两数之和进阶版",
      tabindex: "-1"
    }, [
      createTextVNode("核心策略：前缀和 + 哈希表 (两数之和进阶版) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#核心策略-前缀和-哈希表-两数之和进阶版",
        "aria-label": 'Permalink to "核心策略：前缀和 + 哈希表 (两数之和进阶版)"'
      }, "​")
    ], -1)),
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        _cache[16] || (_cache[16] = createBaseVNode("strong", null, "数学转换：", -1)),
        createBaseVNode("ul", null, [
          _cache[15] || (_cache[15] = createBaseVNode("li", null, [
            createTextVNode("原问题是寻找子数组 "),
            createBaseVNode("code", null, "nums[i..j]"),
            createTextVNode(" 使得和为 "),
            createBaseVNode("code", null, "k"),
            createTextVNode("。")
          ], -1)),
          createBaseVNode("li", null, [
            _cache[9] || (_cache[9] = createTextVNode("利用前缀和公式转化：", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[7] || (_cache[7] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(751,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1202,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1668,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2313,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2885,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(3763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(4041,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D457",
                          d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(4453,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(4953.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2212",
                          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(5953.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(6704.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(7155.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(7621.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(8266.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(8838.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(9716.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(9994.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D456",
                          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(10561.7,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2212",
                          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(11561.9,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "31",
                          d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(12061.9,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(12617.7,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(13673.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D458",
                          d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
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
                  default: withCtx(() => [..._cache[8] || (_cache[8] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "j"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "i"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mn", null, "1"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "k")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[10] || (_cache[10] = createTextVNode("。", -1))
          ]),
          createBaseVNode("li", null, [
            _cache[13] || (_cache[13] = createTextVNode("移项得到查找目标：", -1)),
            createBaseVNode("strong", null, [
              createVNode(_component_mjx_container, {
                class: "MathJax",
                jax: "SVG",
                style: { "direction": "ltr", "position": "relative" }
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[11] || (_cache[11] = [
                    createBaseVNode("g", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      "stroke-width": "0",
                      transform: "scale(1,-1)"
                    }, [
                      createBaseVNode("g", { "data-mml-node": "math" }, [
                        createBaseVNode("g", { "data-mml-node": "mi" }, [
                          createBaseVNode("path", {
                            "data-c": "1D443",
                            d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(751,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D45F",
                            d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(1202,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D452",
                            d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(1668,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D446",
                            d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(2313,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D462",
                            d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(2885,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D45A",
                            d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(3763,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "5B",
                            d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(4041,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D456",
                            d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(4608.2,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(5608.4,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(6108.4,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "5D",
                            d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(6664.2,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "3D",
                            d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(7720,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D443",
                            d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(8471,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D45F",
                            d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(8922,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D452",
                            d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(9388,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D446",
                            d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(10033,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D462",
                            d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(10605,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D45A",
                            d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(11483,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "5B",
                            d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(11761,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D457",
                            d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(12173,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "5D",
                            d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mo",
                          transform: "translate(12673.2,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "2212",
                            d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mi",
                          transform: "translate(13673.4,0)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "1D458",
                            d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
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
                    default: withCtx(() => [..._cache[12] || (_cache[12] = [
                      createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                        createBaseVNode("mi", null, "P"),
                        createBaseVNode("mi", null, "r"),
                        createBaseVNode("mi", null, "e"),
                        createBaseVNode("mi", null, "S"),
                        createBaseVNode("mi", null, "u"),
                        createBaseVNode("mi", null, "m"),
                        createBaseVNode("mo", { stretchy: "false" }, "["),
                        createBaseVNode("mi", null, "i"),
                        createBaseVNode("mo", null, "−"),
                        createBaseVNode("mn", null, "1"),
                        createBaseVNode("mo", { stretchy: "false" }, "]"),
                        createBaseVNode("mo", null, "="),
                        createBaseVNode("mi", null, "P"),
                        createBaseVNode("mi", null, "r"),
                        createBaseVNode("mi", null, "e"),
                        createBaseVNode("mi", null, "S"),
                        createBaseVNode("mi", null, "u"),
                        createBaseVNode("mi", null, "m"),
                        createBaseVNode("mo", { stretchy: "false" }, "["),
                        createBaseVNode("mi", null, "j"),
                        createBaseVNode("mo", { stretchy: "false" }, "]"),
                        createBaseVNode("mo", null, "−"),
                        createBaseVNode("mi", null, "k")
                      ], -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _cache[14] || (_cache[14] = createTextVNode("。", -1))
          ])
        ])
      ]),
      _cache[17] || (_cache[17] = createStaticVNode("", 1))
    ]),
    _cache[115] || (_cache[115] = createBaseVNode("h3", {
      id: "为什么选择这个解法-对比分析",
      tabindex: "-1"
    }, [
      createTextVNode("为什么选择这个解法？(对比分析) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#为什么选择这个解法-对比分析",
        "aria-label": 'Permalink to "为什么选择这个解法？(对比分析)"'
      }, "​")
    ], -1)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[33] || (_cache[33] = createBaseVNode("strong", null, "我的原解法 (暴力前缀和)：", -1)),
        _cache[34] || (_cache[34] = createTextVNode(" * 虽然想到了前缀和数组 ", -1)),
        _cache[35] || (_cache[35] = createBaseVNode("code", null, "keys[]", -1)),
        _cache[36] || (_cache[36] = createTextVNode("，但使用了", -1)),
        _cache[37] || (_cache[37] = createBaseVNode("strong", null, "双重循环", -1)),
        _cache[38] || (_cache[38] = createTextVNode("来枚举所有可能的起止点 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_7, [..._cache[18] || (_cache[18] = [
              createBaseVNode("g", {
                stroke: "currentColor",
                fill: "currentColor",
                "stroke-width": "0",
                transform: "scale(1,-1)"
              }, [
                createBaseVNode("g", { "data-mml-node": "math" }, [
                  createBaseVNode("g", { "data-mml-node": "mo" }, [
                    createBaseVNode("path", {
                      "data-c": "28",
                      d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(389,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D456",
                      d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(734,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "2C",
                      d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mi",
                    transform: "translate(1178.7,0)"
                  }, [
                    createBaseVNode("path", {
                      "data-c": "1D457",
                      d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createBaseVNode("g", {
                    "data-mml-node": "mo",
                    transform: "translate(1590.7,0)"
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
              default: withCtx(() => [..._cache[19] || (_cache[19] = [
                createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createBaseVNode("mo", { stretchy: "false" }, "("),
                  createBaseVNode("mi", null, "i"),
                  createBaseVNode("mo", null, ","),
                  createBaseVNode("mi", null, "j"),
                  createBaseVNode("mo", { stretchy: "false" }, ")")
                ], -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }),
        _cache[39] || (_cache[39] = createTextVNode("。 ", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[26] || (_cache[26] = createBaseVNode("strong", null, "缺点", -1)),
            _cache[27] || (_cache[27] = createTextVNode("：时间复杂度是 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_8, [..._cache[20] || (_cache[20] = [
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
                  default: withCtx(() => [..._cache[21] || (_cache[21] = [
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
            _cache[28] || (_cache[28] = createTextVNode("。当 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_9, [..._cache[22] || (_cache[22] = [
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
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(1165.8,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(2221.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "32",
                          d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(500,0)",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(1000,0)",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(1500,0)",
                          style: { "stroke-width": "3" }
                        }),
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                          transform: "translate(2000,0)",
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
                  default: withCtx(() => [..._cache[23] || (_cache[23] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "N"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mn", null, "20000")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[29] || (_cache[29] = createTextVNode(" 时，计算量高达 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_10, [..._cache[24] || (_cache[24] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mn" }, [
                        createBaseVNode("path", {
                          "data-c": "34",
                          d: "M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(722.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "D7",
                          d: "M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "msup",
                        transform: "translate(1722.4,0)"
                      }, [
                        createBaseVNode("g", { "data-mml-node": "mn" }, [
                          createBaseVNode("path", {
                            "data-c": "31",
                            d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                            style: { "stroke-width": "3" }
                          }),
                          createBaseVNode("path", {
                            "data-c": "30",
                            d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
                            transform: "translate(500,0)",
                            style: { "stroke-width": "3" }
                          })
                        ]),
                        createBaseVNode("g", {
                          "data-mml-node": "mn",
                          transform: "translate(1033,393.1) scale(0.707)"
                        }, [
                          createBaseVNode("path", {
                            "data-c": "38",
                            d: "M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z",
                            style: { "stroke-width": "3" }
                          })
                        ])
                      ])
                    ])
                  ], -1)
                ])])),
                createVNode(_component_mjx_assistive_mml, {
                  unselectable: "on",
                  display: "inline",
                  style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
                }, {
                  default: withCtx(() => [..._cache[25] || (_cache[25] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mn", null, "4"),
                      createBaseVNode("mo", null, "×"),
                      createBaseVNode("msup", null, [
                        createBaseVNode("mn", null, "10"),
                        createBaseVNode("mn", null, "8")
                      ])
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[30] || (_cache[30] = createTextVNode("，会导致 ", -1)),
            _cache[31] || (_cache[31] = createBaseVNode("strong", null, "TLE (超时)", -1)),
            _cache[32] || (_cache[32] = createTextVNode("。", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[49] || (_cache[49] = createBaseVNode("strong", null, "优化后解法 (哈希表)：", -1)),
        createBaseVNode("ul", null, [
          _cache[48] || (_cache[48] = createBaseVNode("li", null, "利用“两数之和”的思路，通过空间换时间。", -1)),
          createBaseVNode("li", null, [
            _cache[44] || (_cache[44] = createBaseVNode("strong", null, "优点", -1)),
            _cache[45] || (_cache[45] = createTextVNode("：只需要遍历一次数组，查找 Map 是 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_11, [..._cache[40] || (_cache[40] = [
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
                  default: withCtx(() => [..._cache[41] || (_cache[41] = [
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
            _cache[46] || (_cache[46] = createTextVNode(" 的操作。总时间复杂度降低为 ", -1)),
            createBaseVNode("strong", null, [
              createVNode(_component_mjx_container, {
                class: "MathJax",
                jax: "SVG",
                style: { "direction": "ltr", "position": "relative" }
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock("svg", _hoisted_12, [..._cache[42] || (_cache[42] = [
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
                    default: withCtx(() => [..._cache[43] || (_cache[43] = [
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
            _cache[47] || (_cache[47] = createTextVNode("，这在工程和面试中是质的飞跃。", -1))
          ])
        ])
      ])
    ]),
    _cache[116] || (_cache[116] = createStaticVNode("", 5)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[62] || (_cache[62] = createBaseVNode("strong", null, "时间复杂度：", -1)),
        _cache[63] || (_cache[63] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_13, [..._cache[50] || (_cache[50] = [
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
              default: withCtx(() => [..._cache[51] || (_cache[51] = [
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
            _cache[56] || (_cache[56] = createBaseVNode("em", null, "分析：", -1)),
            _cache[57] || (_cache[57] = createTextVNode(" 我们只对数组进行了一次遍历。", -1)),
            _cache[58] || (_cache[58] = createBaseVNode("code", null, "HashMap", -1)),
            _cache[59] || (_cache[59] = createTextVNode(" 的插入和查询操作平均时间复杂度为 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_14, [..._cache[52] || (_cache[52] = [
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
                  default: withCtx(() => [..._cache[53] || (_cache[53] = [
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
            _cache[60] || (_cache[60] = createTextVNode("。相比于暴力法的 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_15, [..._cache[54] || (_cache[54] = [
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
                  default: withCtx(() => [..._cache[55] || (_cache[55] = [
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
            _cache[61] || (_cache[61] = createTextVNode("，这是巨大的提升。", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[73] || (_cache[73] = createBaseVNode("strong", null, "空间复杂度：", -1)),
        _cache[74] || (_cache[74] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_16, [..._cache[64] || (_cache[64] = [
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
              default: withCtx(() => [..._cache[65] || (_cache[65] = [
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
            _cache[68] || (_cache[68] = createBaseVNode("em", null, "分析：", -1)),
            _cache[69] || (_cache[69] = createTextVNode(" 最坏情况下（例如数组所有元素为正数），所有的前缀和都不相同，", -1)),
            _cache[70] || (_cache[70] = createBaseVNode("code", null, "HashMap", -1)),
            _cache[71] || (_cache[71] = createTextVNode(" 需要存储 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[66] || (_cache[66] = [
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
                  default: withCtx(() => [..._cache[67] || (_cache[67] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "N")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[72] || (_cache[72] = createTextVNode(" 个键值对。", -1))
          ])
        ])
      ])
    ]),
    _cache[117] || (_cache[117] = createBaseVNode("hr", null, null, -1)),
    _cache[118] || (_cache[118] = createBaseVNode("h2", {
      id: "📝-错题本-复盘",
      tabindex: "-1"
    }, [
      createTextVNode("📝 错题本 / 复盘 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#📝-错题本-复盘",
        "aria-label": 'Permalink to "📝 错题本 / 复盘"'
      }, "​")
    ], -1)),
    createBaseVNode("blockquote", null, [
      _cache[85] || (_cache[85] = createBaseVNode("p", null, "[!failure] 遇到的坑 / 错误点", -1)),
      createBaseVNode("blockquote", null, [
        createBaseVNode("ol", null, [
          _cache[84] || (_cache[84] = createBaseVNode("li", null, [
            createBaseVNode("strong", null, "漏掉初始化"),
            createTextVNode("：忘记写 "),
            createBaseVNode("code", null, "map.put(0, 1)"),
            createTextVNode("。这会导致从数组开头 "),
            createBaseVNode("code", null, "nums[0...i]"),
            createTextVNode(" 就满足条件的子数组被漏算。")
          ], -1)),
          createBaseVNode("li", null, [
            _cache[77] || (_cache[77] = createBaseVNode("strong", null, "顺序问题", -1)),
            _cache[78] || (_cache[78] = createTextVNode("：在循环体内，应该是 ", -1)),
            _cache[79] || (_cache[79] = createBaseVNode("strong", null, "先查询 (Check)", -1)),
            _cache[80] || (_cache[80] = createTextVNode("，", -1)),
            _cache[81] || (_cache[81] = createBaseVNode("strong", null, "后更新 (Put)", -1)),
            _cache[82] || (_cache[82] = createTextVNode("。如果先 Put 再 Check，当 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_18, [..._cache[75] || (_cache[75] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D458",
                          d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(798.8,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mn",
                        transform: "translate(1854.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "30",
                          d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
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
                  default: withCtx(() => [..._cache[76] || (_cache[76] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "k"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mn", null, "0")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[83] || (_cache[83] = createTextVNode(" 时，会把当前这个空集也算进去（或者重复计算），逻辑上不严谨。", -1))
          ])
        ])
      ])
    ]),
    _cache[119] || (_cache[119] = createBaseVNode("div", { class: "tip custom-block github-alert" }, [
      createBaseVNode("p", { class: "custom-block-title" }, "关键技巧 / 总结"),
      createBaseVNode("p"),
      createBaseVNode("blockquote", null, [
        createBaseVNode("ol", null, [
          createBaseVNode("li", null, [
            createBaseVNode("strong", null, "前缀和 + 哈希表"),
            createTextVNode(" 是解决“连续子数组和”问题的黄金搭档。")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("code", null, "map.getOrDefault(key, 0) + 1"),
            createTextVNode(" 是统计频率的标准写法，一定要熟练掌握。")
          ])
        ])
      ])
    ], -1)),
    _cache[120] || (_cache[120] = createBaseVNode("hr", null, null, -1)),
    _cache[121] || (_cache[121] = createBaseVNode("h2", {
      id: "🧠-深度思考与感悟-reflections",
      tabindex: "-1"
    }, [
      createTextVNode("🧠 深度思考与感悟 (Reflections) "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#🧠-深度思考与感悟-reflections",
        "aria-label": 'Permalink to "🧠 深度思考与感悟 (Reflections)"'
      }, "​")
    ], -1)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[93] || (_cache[93] = createBaseVNode("strong", null, "💡 触类旁通：", -1)),
        _cache[94] || (_cache[94] = createTextVNode(" 这道题其实就是 ", -1)),
        _cache[95] || (_cache[95] = createBaseVNode("strong", null, "LeetCode 1. 两数之和", -1)),
        _cache[96] || (_cache[96] = createTextVNode(" 的变种！ ", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[88] || (_cache[88] = createTextVNode("两数之和：", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_19, [..._cache[86] || (_cache[86] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D45B",
                          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(600,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1172,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2050,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(2519,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2797,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D456",
                          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(3142,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(3642.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2B",
                          d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(4642.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45B",
                          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(5242.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(5814.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(6692.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(7161.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(7439.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D457",
                          d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(7851.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(8407.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(9463,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D461",
                          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(9824,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D44E",
                          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(10353,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(10804,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D454",
                          d: "M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(11281,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(11747,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D461",
                          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(12385.8,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2192",
                          d: "M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(13663.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45B",
                          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(14263.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(14835.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(15713.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(16182.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(16460.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D456",
                          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(16805.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(17361.3,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(18417.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D461",
                          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(18778.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D44E",
                          d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(19307.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(19758.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D454",
                          d: "M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(20235.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(20701.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D461",
                          d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(21284.3,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2212",
                          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(22284.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45B",
                          d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(22884.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(23456.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(24334.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D460",
                          d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(24803.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(25081.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D457",
                          d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(25493.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
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
                  default: withCtx(() => [..._cache[87] || (_cache[87] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "n"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mi", null, "s"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "i"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "+"),
                      createBaseVNode("mi", null, "n"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mi", null, "s"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "j"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "t"),
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "g"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "t"),
                      createBaseVNode("mo", { stretchy: "false" }, "→"),
                      createBaseVNode("mi", null, "n"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mi", null, "s"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "i"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "t"),
                      createBaseVNode("mi", null, "a"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "g"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "t"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mi", null, "n"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mi", null, "s"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "j"),
                      createBaseVNode("mo", { stretchy: "false" }, "]")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createBaseVNode("li", null, [
            _cache[91] || (_cache[91] = createTextVNode("本题：", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_20, [..._cache[89] || (_cache[89] = [
                  createBaseVNode("g", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    "stroke-width": "0",
                    transform: "scale(1,-1)"
                  }, [
                    createBaseVNode("g", { "data-mml-node": "math" }, [
                      createBaseVNode("g", { "data-mml-node": "mi" }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(751,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1202,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(1668,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2313,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(2885,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(3763,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(4041,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D457",
                          d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(4453,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(4953.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2212",
                          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(5953.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(6704.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(7155.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(7621.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(8266.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(8838.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(9716.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(9994.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D456",
                          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(10339.4,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(10895.2,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(11951,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D458",
                          d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(12749.8,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2192",
                          d: "M56 237T56 250T70 270H835Q719 357 692 493Q692 494 692 496T691 499Q691 511 708 511H711Q720 511 723 510T729 506T732 497T735 481T743 456Q765 389 816 336T935 261Q944 258 944 250Q944 244 939 241T915 231T877 212Q836 186 806 152T761 85T740 35T732 4Q730 -6 727 -8T711 -11Q691 -11 691 0Q691 7 696 25Q728 151 835 230H70Q56 237 56 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(14027.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(14778.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(15229.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(15695.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(16340.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(16912.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(17790.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(18068.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D456",
                          d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(18413.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(18969.3,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "3D",
                          d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(20025.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D443",
                          d: "M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(20776.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45F",
                          d: "M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(21227.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D452",
                          d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(21693.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D446",
                          d: "M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(22338.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D462",
                          d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(22910.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D45A",
                          d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(23788.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5B",
                          d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(24066.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D457",
                          d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(24478.1,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "5D",
                          d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mo",
                        transform: "translate(24978.3,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "2212",
                          d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                          style: { "stroke-width": "3" }
                        })
                      ]),
                      createBaseVNode("g", {
                        "data-mml-node": "mi",
                        transform: "translate(25978.6,0)"
                      }, [
                        createBaseVNode("path", {
                          "data-c": "1D458",
                          d: "M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z",
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
                  default: withCtx(() => [..._cache[90] || (_cache[90] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "j"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "i"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "k"),
                      createBaseVNode("mo", { stretchy: "false" }, "→"),
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "i"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "="),
                      createBaseVNode("mi", null, "P"),
                      createBaseVNode("mi", null, "r"),
                      createBaseVNode("mi", null, "e"),
                      createBaseVNode("mi", null, "S"),
                      createBaseVNode("mi", null, "u"),
                      createBaseVNode("mi", null, "m"),
                      createBaseVNode("mo", { stretchy: "false" }, "["),
                      createBaseVNode("mi", null, "j"),
                      createBaseVNode("mo", { stretchy: "false" }, "]"),
                      createBaseVNode("mo", null, "−"),
                      createBaseVNode("mi", null, "k")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _cache[92] || (_cache[92] = createBaseVNode("li", null, [
            createTextVNode("本质都是："),
            createBaseVNode("strong", null, "固定一个数，去哈希表里找另一个数是否存在。")
          ], -1))
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[103] || (_cache[103] = createBaseVNode("strong", null, "🔧 工程思维：", -1)),
        _cache[104] || (_cache[104] = createTextVNode()),
        _cache[105] || (_cache[105] = createBaseVNode("strong", null, "空间换时间", -1)),
        _cache[106] || (_cache[106] = createTextVNode(" (Space-Time Tradeoff)。我们牺牲了 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_21, [..._cache[97] || (_cache[97] = [
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
              default: withCtx(() => [..._cache[98] || (_cache[98] = [
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
        _cache[107] || (_cache[107] = createTextVNode(" 的内存来存储历史状态，换取了从 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_22, [..._cache[99] || (_cache[99] = [
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
              default: withCtx(() => [..._cache[100] || (_cache[100] = [
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
        _cache[108] || (_cache[108] = createTextVNode(" 到 ", -1)),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_23, [..._cache[101] || (_cache[101] = [
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
              default: withCtx(() => [..._cache[102] || (_cache[102] = [
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
        _cache[109] || (_cache[109] = createTextVNode(" 的速度提升。在海量数据处理中，这种交换通常是非常划算的。", -1))
      ]),
      _cache[110] || (_cache[110] = createBaseVNode("li", null, [
        createBaseVNode("strong", null, "✨ 瞬间感悟："),
        createTextVNode(" 不要总是想着“往回找”（双指针/暴力），试试“往前看”并把走过的路记在小本本（Map）上，需要的时候回头查一下本子就行了！ 思路是依此遍历nums数组，每一次都获取前i个数的前缀和；我们需要其中一截子数组b "),
        createBaseVNode("strong", null, "（我们假设前缀和有两截数组，不需要的是a，需要的是b）"),
        createTextVNode("，从某一个节点开始一直到当前的节点；这个b的和是k，也就是说k=总的前缀和-a；而a可以在我们每一次遍历中逐步添加，我们每遍历一次就往HashMap中添加一个数据，等我们需要的时候，就可以直接根据a的个数求得子串的个数")
      ], -1))
    ])
  ]);
}
const _560___K____ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _560___K____ as default
};
