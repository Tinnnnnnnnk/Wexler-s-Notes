import { _ as _export_sfc, C as resolveComponent, o as openBlock, c as createElementBlock, j as createBaseVNode, a as createTextVNode, a7 as createStaticVNode, E as createVNode, w as withCtx } from "./chunks/framework.BaarDA_E.js";
const __pageData = JSON.parse('{"title":"3. 无重复字符的最长子串","description":"","frontmatter":{"tags":["LeetCode","哈希表","字符串","滑动窗口"],"difficulty":"Medium","status":"✅ 已解决","date":"2025-12-29T00:00:00.000Z"},"headers":[],"relativePath":"Code/Hot100/Sliding-Window/3-无重复字符的最长子串.md","filePath":"Code/Hot100/Sliding-Window/3-无重复字符的最长子串.md","lastUpdated":1772161575000}');
const _sfc_main = { name: "Code/Hot100/Sliding-Window/3-无重复字符的最长子串.md" };
const _hoisted_1 = { class: "info custom-block github-alert" };
const _hoisted_2 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.464ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "25.556ex",
  height: "2.436ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -871.8 11295.8 1076.8",
  "aria-hidden": "true"
};
const _hoisted_3 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "5.495ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2429 1000",
  "aria-hidden": "true"
};
const _hoisted_4 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "2.009ex",
  height: "1.545ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -683 888 683",
  "aria-hidden": "true"
};
const _hoisted_5 = {
  style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
  xmlns: "http://www.w3.org/2000/svg",
  width: "4.618ex",
  height: "2.262ex",
  role: "img",
  focusable: "false",
  viewBox: "0 -750 2041 1000",
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  const _component_mjx_container = resolveComponent("mjx-container");
  return openBlock(), createElementBlock("div", null, [
    _cache[26] || (_cache[26] = createBaseVNode("h1", {
      id: "_3-无重复字符的最长子串",
      tabindex: "-1"
    }, [
      createTextVNode("3. 无重复字符的最长子串 "),
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#_3-无重复字符的最长子串",
        "aria-label": 'Permalink to "3. 无重复字符的最长子串"'
      }, "​")
    ], -1)),
    createBaseVNode("div", _hoisted_1, [
      _cache[3] || (_cache[3] = createStaticVNode("", 6)),
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
                        "data-c": "30",
                        d: "M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",
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
                        "data-c": "1D460",
                        d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(3080.6,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "2E",
                        d: "M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(3525.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D459",
                        d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(3823.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D452",
                        d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(4289.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D45B",
                        d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(4889.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D454",
                        d: "M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(5366.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "1D461",
                        d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mi",
                      transform: "translate(5727.2,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "210E",
                        d: "M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(6581,0)"
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
                      transform: "translate(8414.8,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "35",
                        d: "M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "mo",
                      transform: "translate(9137,0)"
                    }, [
                      createBaseVNode("path", {
                        "data-c": "2217",
                        d: "M229 286Q216 420 216 436Q216 454 240 464Q241 464 245 464T251 465Q263 464 273 456T283 436Q283 419 277 356T270 286L328 328Q384 369 389 372T399 375Q412 375 423 365T435 338Q435 325 425 315Q420 312 357 282T289 250L355 219L425 184Q434 175 434 161Q434 146 425 136T401 125Q393 125 383 131T328 171L270 213Q283 79 283 63Q283 53 276 44T250 35Q231 35 224 44T216 63Q216 80 222 143T229 213L171 171Q115 130 110 127Q106 124 100 124Q87 124 76 134T64 161Q64 166 64 169T67 175T72 181T81 188T94 195T113 204T138 215T170 230T210 250L74 315Q65 324 65 338Q65 353 74 363T98 374Q106 374 116 368T171 328L229 286Z",
                        style: { "stroke-width": "3" }
                      })
                    ]),
                    createBaseVNode("g", {
                      "data-mml-node": "msup",
                      transform: "translate(9859.2,0)"
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
                    createBaseVNode("mn", null, "0"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mi", null, "s"),
                    createBaseVNode("mo", null, "."),
                    createBaseVNode("mi", null, "l"),
                    createBaseVNode("mi", null, "e"),
                    createBaseVNode("mi", null, "n"),
                    createBaseVNode("mi", null, "g"),
                    createBaseVNode("mi", null, "t"),
                    createBaseVNode("mi", null, "h"),
                    createBaseVNode("mo", null, "<="),
                    createBaseVNode("mn", null, "5"),
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
        _cache[2] || (_cache[2] = createBaseVNode("li", null, [
          createBaseVNode("code", null, "s"),
          createTextVNode(" 由英文字母、数字、符号和空格组成")
        ], -1))
      ])
    ]),
    _cache[27] || (_cache[27] = createStaticVNode("", 11)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[13] || (_cache[13] = createBaseVNode("strong", null, "时间复杂度：", -1)),
        _cache[14] || (_cache[14] = createTextVNode()),
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
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
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
            _cache[8] || (_cache[8] = createBaseVNode("em", null, "分析：", -1)),
            _cache[9] || (_cache[9] = createTextVNode(" 其中 ", -1)),
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
                  default: withCtx(() => [..._cache[7] || (_cache[7] = [
                    createBaseVNode("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                      createBaseVNode("mi", null, "N")
                    ], -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }),
            _cache[10] || (_cache[10] = createTextVNode(" 是字符串的长度。虽然有指针跳跃，但右指针 ", -1)),
            _cache[11] || (_cache[11] = createBaseVNode("code", null, "last", -1)),
            _cache[12] || (_cache[12] = createTextVNode(" 严格遍历一次字符串，没有嵌套循环，所以是线性的。", -1))
          ])
        ])
      ]),
      createBaseVNode("li", null, [
        _cache[24] || (_cache[24] = createBaseVNode("strong", null, "空间复杂度：", -1)),
        _cache[25] || (_cache[25] = createTextVNode()),
        createVNode(_component_mjx_container, {
          class: "MathJax",
          jax: "SVG",
          style: { "direction": "ltr", "position": "relative" }
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_5, [..._cache[15] || (_cache[15] = [
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
              default: withCtx(() => [..._cache[16] || (_cache[16] = [
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
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _cache[19] || (_cache[19] = createBaseVNode("em", null, "分析：", -1)),
            _cache[20] || (_cache[20] = createTextVNode(" 我们申请了一个固定长度为 128 的数组 ", -1)),
            _cache[21] || (_cache[21] = createBaseVNode("code", null, "index", -1)),
            _cache[22] || (_cache[22] = createTextVNode("。无论字符串有多长，这个辅助空间的大小是固定的常数（如果是扩展 ASCII 则是 256），所以是 ", -1)),
            createVNode(_component_mjx_container, {
              class: "MathJax",
              jax: "SVG",
              style: { "direction": "ltr", "position": "relative" }
            }, {
              default: withCtx(() => [
                (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[17] || (_cache[17] = [
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
                  default: withCtx(() => [..._cache[18] || (_cache[18] = [
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
            _cache[23] || (_cache[23] = createTextVNode("。", -1))
          ])
        ])
      ])
    ]),
    _cache[28] || (_cache[28] = createStaticVNode("", 7))
  ]);
}
const _3___________ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _3___________ as default
};
