import { resolveComponent, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"🏆 动态规划 (Dynamic Programming) 核心武功秘籍","description":"","frontmatter":{"tags":["LeetCode","动态规划 (DP)","核心思想"],"date":"2026-03-12T00:00:00.000Z"},"headers":[],"relativePath":"Code/DS/Dynamic Programming.md","filePath":"Code/DS/Dynamic Programming.md","lastUpdated":1773307313000}');
const _sfc_main = { name: "Code/DS/Dynamic Programming.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_mjx_container = resolveComponent("mjx-container");
  const _component_mjx_assistive_mml = resolveComponent("mjx-assistive-mml");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="🏆-动态规划-dynamic-programming-核心武功秘籍" tabindex="-1">🏆 动态规划 (Dynamic Programming) 核心武功秘籍 <a class="header-anchor" href="#🏆-动态规划-dynamic-programming-核心武功秘籍" aria-label="Permalink to &quot;🏆 动态规划 (Dynamic Programming) 核心武功秘籍&quot;">​</a></h1><blockquote><p>[!abstract] 什么是 DP？ DP 的本质是**“带记事本的递归”<strong>或者</strong>“历史经验的复用”**。 它的终极世界观是：<strong>未来某一步的最优解，绝对可以由过去某几步的最优解推导出来。</strong> 只要我们把过去的历史记录在案（<code>dp</code> 数组），就能像滚雪球一样推出最终答案。</p></blockquote><hr><h2 id="🧠-dp-破局的-标准工业-5-步法" tabindex="-1">🧠 DP 破局的“标准工业 5 步法” <a class="header-anchor" href="#🧠-dp-破局的-标准工业-5-步法" aria-label="Permalink to &quot;🧠 DP 破局的“标准工业 5 步法”&quot;">​</a></h2><p>无论是一维还是二维，做 DP 题必须在脑子里走完这 5 步，少一步都会在写代码时走火入魔：</p><ol><li><strong>定义 <code>dp</code> 数组的含义 (最重要的一步！)：</strong> 明确 <code>dp[i]</code> 或 <code>dp[i][j]</code> 到底代表什么（是最大价值？最小硬币数？还是方法总数？）。</li><li><strong>推导“状态转移方程”：</strong> 寻找现在的自己和过去的自己之间的关系。例如：`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="41.35ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 18276.6 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1023,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1301,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1646,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2201.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3257.6,0)"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5118.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(5507.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6027.6,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6530.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6808.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7375.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(8376,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8876,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(9154,0)"${_scopeId}><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(9598.7,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10118.7,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10621.7,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10899.7,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11466.9,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(12467.1,0)"${_scopeId}><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(12967.1,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(13467.3,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(14467.6,0)"${_scopeId}><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(15067.6,0)"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(15639.6,0)"${_scopeId}><path data-c="1D45A" d="M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(16517.6,0)"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(16986.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(17264.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(17609.6,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(17887.6,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>=</mo><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>,</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>2</mn><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>+</mo><mi${_scopeId2}>n</mi><mi${_scopeId2}>u</mi><mi${_scopeId2}>m</mi><mi${_scopeId2}>s</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "="),
                  createVNode("mo", {
                    "data-mjx-texclass": "OP",
                    movablelimits: "true"
                  }, "max"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, ","),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "2"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "+"),
                  createVNode("mi", null, "n"),
                  createVNode("mi", null, "u"),
                  createVNode("mi", null, "m"),
                  createVNode("mi", null, "s"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
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
            width: "41.35ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 18276.6 1000",
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
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(520,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1023,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1301,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1646,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2201.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3257.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "6D",
                    d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "61",
                    d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                    transform: "translate(833,0)",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "78",
                    d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                    transform: "translate(1333,0)",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(5118.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5507.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6027.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6530.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6808.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7375.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(8376,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8876,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(9154,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2C",
                    d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(9598.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10118.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10621.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10899.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11466.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(12467.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "32",
                    d: "M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(12967.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(13467.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(14467.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45B",
                    d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(15067.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(15639.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45A",
                    d: "M21 287Q22 293 24 303T36 341T56 388T88 425T132 442T175 435T205 417T221 395T229 376L231 369Q231 367 232 367L243 378Q303 442 384 442Q401 442 415 440T441 433T460 423T475 411T485 398T493 385T497 373T500 364T502 357L510 367Q573 442 659 442Q713 442 746 415T780 336Q780 285 742 178T704 50Q705 36 709 31T724 26Q752 26 776 56T815 138Q818 149 821 151T837 153Q857 153 857 145Q857 144 853 130Q845 101 831 73T785 17T716 -10Q669 -10 648 17T627 73Q627 92 663 193T700 345Q700 404 656 404H651Q565 404 506 303L499 291L466 157Q433 26 428 16Q415 -11 385 -11Q372 -11 364 -4T353 8T350 18Q350 29 384 161L420 307Q423 322 423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 181Q151 335 151 342Q154 357 154 369Q154 405 129 405Q107 405 92 377T69 316T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(16517.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D460",
                    d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(16986.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(17264.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(17609.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(17887.6,0)"
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
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "="),
                createVNode("mo", {
                  "data-mjx-texclass": "OP",
                  movablelimits: "true"
                }, "max"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, ","),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "2"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "+"),
                createVNode("mi", null, "n"),
                createVNode("mi", null, "u"),
                createVNode("mi", null, "m"),
                createVNode("mi", null, "s"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
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
  _push(`。</li><li><strong>初始化 <code>dp</code> 数组：</strong> 万丈高楼平地起，第 0 步或第 1 步的值必须准确无误（如 <code>dp[0] = 0</code>）。</li><li><strong>确定遍历顺序：</strong> 是一维的从左到右？还是二维的从上到下、从左到右？</li><li><strong>模拟打印 (Debug)：</strong> 如果代码出错了，把 <code>dp</code> 数组打印出来，和你在纸上推导的对比，一眼就能看出哪一步算错了。</li></ol><hr><h2 id="🗡️-第一层境界-一维-dp-1d-dp" tabindex="-1">🗡️ 第一层境界：一维 DP (1D DP) <a class="header-anchor" href="#🗡️-第一层境界-一维-dp-1d-dp" aria-label="Permalink to &quot;🗡️ 第一层境界：一维 DP (1D DP)&quot;">​</a></h2><p>一维 DP 通常用来解决**“单序列”**问题。历史状态只跟“前面几个位置”或者“容量”有关。</p><h3 id="_1-状态机模型-代表作-打家劫舍" tabindex="-1">1. 状态机模型 (代表作：打家劫舍) <a class="header-anchor" href="#_1-状态机模型-代表作-打家劫舍" aria-label="Permalink to &quot;1. 状态机模型 (代表作：打家劫舍)&quot;">​</a></h3><ul><li><strong>特点：</strong> 每个位置上有不同的选择（偷 or 不偷）。</li><li><strong>你的代码复盘：</strong> <code>dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);</code><ul><li><em>翻译：</em> 走到第 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个房间，我面临两个选择。要么不偷（保持前一个房间的最高收益 <code>dp[i-1]</code>）；要么偷（拿走现在的钱，加上大前个房间的收益 <code>dp[i-2] + nums[i]</code>）。取两者最大值！</li></ul></li></ul><h3 id="_2-背包模型变种-代表作-零钱兑换、完全平方数" tabindex="-1">2. 背包模型变种 (代表作：零钱兑换、完全平方数) <a class="header-anchor" href="#_2-背包模型变种-代表作-零钱兑换、完全平方数" aria-label="Permalink to &quot;2. 背包模型变种 (代表作：零钱兑换、完全平方数)&quot;">​</a></h3><ul><li><strong>特点：</strong> 给定一个容量（目标金额），用一堆物品（硬币、平方数）去填满它。</li><li><strong>你的代码复盘：</strong> <code>dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);</code><ul><li><em>翻译：</em> 我想凑出金额 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`。如果我决定用面值为 <code>coins[j]</code> 的这枚硬币，那我只需要知道“凑出金额 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="11.012ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 4867.4 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(567.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1567.4,0)"${_scopeId}><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2000.4,0)"${_scopeId}><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2485.4,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2830.4,0)"${_scopeId}><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(3430.4,0)"${_scopeId}><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3899.4,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4177.4,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4589.4,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mi${_scopeId2}>c</mi><mi${_scopeId2}>o</mi><mi${_scopeId2}>i</mi><mi${_scopeId2}>n</mi><mi${_scopeId2}>s</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mi", null, "c"),
                  createVNode("mi", null, "o"),
                  createVNode("mi", null, "i"),
                  createVNode("mi", null, "n"),
                  createVNode("mi", null, "s"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]")
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
            width: "11.012ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 4867.4 1000",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(567.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1567.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D450",
                    d: "M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2000.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45C",
                    d: "M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2485.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2830.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45B",
                    d: "M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(3430.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D460",
                    d: "M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3899.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4177.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4589.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
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
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mi", null, "c"),
                createVNode("mi", null, "o"),
                createVNode("mi", null, "i"),
                createVNode("mi", null, "n"),
                createVNode("mi", null, "s"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 的最少硬币数”，然后再加 1（也就是手里这枚硬币）就行了。</li></ul></li></ul><hr><h2 id="⚔️-第二层境界-二维-dp-2d-dp" tabindex="-1">⚔️ 第二层境界：二维 DP (2D DP) <a class="header-anchor" href="#⚔️-第二层境界-二维-dp-2d-dp" aria-label="Permalink to &quot;⚔️ 第二层境界：二维 DP (2D DP)&quot;">​</a></h2><p>当我们面对的是**“网格地图”<strong>、</strong>“两个字符串的匹配”<strong>，或者</strong>“极其复杂的背包限制”**时，一根直线的数组不够用了，我们需要一张二维的表格 <code>dp[i][j]</code>。</p><h3 id="场景一-网格路线问题-grid-paths" tabindex="-1">场景一：网格路线问题 (Grid Paths) <a class="header-anchor" href="#场景一-网格路线问题-grid-paths" aria-label="Permalink to &quot;场景一：网格路线问题 (Grid Paths)&quot;">​</a></h3><ul><li><strong>典型问题：</strong> LeetCode 62. 不同路径 (机器人从左上角走到右下角，有多少种走法)。</li><li><strong>定义：</strong> <code>dp[i][j]</code> 表示走到坐标 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.479ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1979.7 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(389,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(734,0)"${_scopeId}><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1178.7,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1590.7,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>,</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, ","),
                  createVNode("mi", null, "j"),
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
            width: "4.479ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1979.7 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mo" }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(389,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(734,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2C",
                    d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1178.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1590.7,0)"
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
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "i"),
                createVNode("mo", null, ","),
                createVNode("mi", null, "j"),
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
  _push(` 的路径总数。</li><li><strong>转移方程：</strong> 机器人只能向下或向右走。所以，走到 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="4.479ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 1979.7 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mo"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(389,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(734,0)"${_scopeId}><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1178.7,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1590.7,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>,</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, ","),
                  createVNode("mi", null, "j"),
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
            width: "4.479ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 1979.7 1000",
            "aria-hidden": "true"
          }, [
            createVNode("g", {
              stroke: "currentColor",
              fill: "currentColor",
              "stroke-width": "0",
              transform: "scale(1,-1)"
            }, [
              createVNode("g", { "data-mml-node": "math" }, [
                createVNode("g", { "data-mml-node": "mo" }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(389,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(734,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2C",
                    d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1178.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1590.7,0)"
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
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "i"),
                createVNode("mo", null, ","),
                createVNode("mi", null, "j"),
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
  _push(` 的方法数，等于走到它<strong>上面那格</strong>的方法数，加上走到它<strong>左边那格</strong>的方法数。 <ul><li>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="33.206ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 14676.9 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1023,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1301,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1646,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1924,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2202,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2614,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3169.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4225.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4745.6,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5248.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(5526.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6093.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(7094,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7594,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7872,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(8150,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8562,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(9062.2,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10062.4,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10582.4,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11085.4,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(11363.4,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11708.4,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11986.4,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12264.4,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(12898.7,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(13898.9,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(14398.9,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>=</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>+</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "="),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "+"),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]")
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
            width: "33.206ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 14676.9 1000",
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
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(520,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1023,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1301,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1646,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1924,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2202,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2614,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3169.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4225.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4745.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(5248.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5526.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6093.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(7094,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7594,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7872,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(8150,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8562,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(9062.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10062.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10582.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11085.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(11363.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11708.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11986.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12264.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(12898.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(13898.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(14398.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
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
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "="),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "+"),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul><h3 id="场景二-双字符串匹配-string-matching" tabindex="-1">场景二：双字符串匹配 (String Matching) <a class="header-anchor" href="#场景二-双字符串匹配-string-matching" aria-label="Permalink to &quot;场景二：双字符串匹配 (String Matching)&quot;">​</a></h3><ul><li><strong>典型问题：</strong> LeetCode 1143. 最长公共子序列 (LCS)。</li><li><strong>定义：</strong> <code>dp[i][j]</code> 表示字符串 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="1.697ex" height="1.62ex" role="img" focusable="false" viewBox="0 -716 750 716" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>A</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "A")
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
            width: "1.697ex",
            height: "1.62ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -716 750 716",
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
                    "data-c": "1D434",
                    d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
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
                createVNode("mi", null, "A")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 的前 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个字符，和字符串 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="1.717ex" height="1.545ex" role="img" focusable="false" viewBox="0 -683 759 683" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>B</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "B")
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
            width: "1.717ex",
            height: "1.545ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -683 759 683",
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
                    "data-c": "1D435",
                    d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
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
                createVNode("mi", null, "B")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 的前 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.932ex" height="1.957ex" role="img" focusable="false" viewBox="0 -661 412 865" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>j</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "j")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.932ex",
            height: "1.957ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 412 865",
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
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
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
                createVNode("mi", null, "j")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个字符，它们的最长公共子序列长度。</li><li><strong>转移方程：</strong> - 如果最后一个字符相等 (`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="20.214ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 8934.4 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(750,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1028,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1595.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(2595.4,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3095.4,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3651.2,0)"${_scopeId}><g data-mml-node="text"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="text" transform="translate(778,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g><g data-mml-node="mi" transform="translate(5485,0)"${_scopeId}><path data-c="1D435" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6244,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6522,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7156.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(8156.4,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8656.4,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>A</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>==</mo><mi${_scopeId2}>B</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "A"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "=="),
                  createVNode("mi", null, "B"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]")
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
            width: "20.214ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 8934.4 1000",
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
                    "data-c": "1D434",
                    d: "M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(750,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1028,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1595.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(2595.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3095.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3651.2,0)"
                }, [
                  createVNode("g", { "data-mml-node": "text" }, [
                    createVNode("path", {
                      "data-c": "3D",
                      d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                      style: { "stroke-width": "3" }
                    })
                  ]),
                  createVNode("g", {
                    "data-mml-node": "text",
                    transform: "translate(778,0)"
                  }, [
                    createVNode("path", {
                      "data-c": "3D",
                      d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                      style: { "stroke-width": "3" }
                    })
                  ])
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5485,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D435",
                    d: "M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6244,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6522,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7156.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(8156.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8656.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
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
                createVNode("mi", null, "A"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "=="),
                createVNode("mi", null, "B"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`)：`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="27.794ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 12284.9 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1023,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1301,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1646,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1924,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2202,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2614,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3169.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4225.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(4745.6,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(5248.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(5526.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6093.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(7094,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7594,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7872,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(8150,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8784.2,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(9784.4,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10284.4,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10784.7,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(11784.9,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>=</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>+</mo><mn${_scopeId2}>1</mn></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "="),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "+"),
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
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "27.794ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 12284.9 1000",
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
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(520,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1023,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1301,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1646,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1924,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2202,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2614,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3169.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4225.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(4745.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(5248.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(5526.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6093.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(7094,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7594,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7872,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(8150,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8784.2,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(9784.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10284.4,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10784.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(11784.9,0)"
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
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "="),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "+"),
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
  _push(`<ul><li>如果不相等：`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="37.417ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 16538.1 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1023,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1301,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1646,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1924,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2202,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2614,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3169.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4225.6,0)"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6086.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6475.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6995.6,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7498.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(7776.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8343.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(9344,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(9844,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10122,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10400,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10812,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11090,0)"${_scopeId}><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(11534.7,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12054.7,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(12557.7,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12835.7,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(13180.7,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(13458.7,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(13736.7,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(14370.9,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(15371.1,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(15871.1,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(16149.1,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>=</mo><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>,</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "="),
                  createVNode("mo", {
                    "data-mjx-texclass": "OP",
                    movablelimits: "true"
                  }, "max"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, ","),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
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
            width: "37.417ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 16538.1 1000",
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
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(520,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1023,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1301,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1646,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1924,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2202,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2614,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3169.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4225.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "6D",
                    d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "61",
                    d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                    transform: "translate(833,0)",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "78",
                    d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                    transform: "translate(1333,0)",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6086.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6475.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6995.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7498.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(7776.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8343.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(9344,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(9844,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10122,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10400,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10812,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11090,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2C",
                    d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(11534.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12054.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(12557.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12835.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(13180.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(13458.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(13736.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(14370.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(15371.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(15871.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(16149.1,0)"
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
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "="),
                createVNode("mo", {
                  "data-mjx-texclass": "OP",
                  movablelimits: "true"
                }, "max"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, ","),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
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
  _push(` (要么抛弃 A 的末尾，要么抛弃 B 的末尾，看谁保留的子序列长)。</li></ul></li></ul><h3 id="场景三-正宗的-0-1-背包问题-knapsack" tabindex="-1">场景三：正宗的 0-1 背包问题 (Knapsack) <a class="header-anchor" href="#场景三-正宗的-0-1-背包问题-knapsack" aria-label="Permalink to &quot;场景三：正宗的 0-1 背包问题 (Knapsack)&quot;">​</a></h3><ul><li><strong>定义：</strong> <code>dp[i][j]</code> 表示从前 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个物品中任选，放进容量为 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.932ex" height="1.957ex" role="img" focusable="false" viewBox="0 -661 412 865" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>j</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "j")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.462ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.932ex",
            height: "1.957ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 412 865",
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
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
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
                createVNode("mi", null, "j")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 的背包里，能装出的最大价值。</li><li><strong>转移方程：</strong> 不选第 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个物品 vs 选第 `);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="0.781ex" height="1.52ex" role="img" focusable="false" viewBox="0 -661 345 672" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>i</mi></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "i")
                ]))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          (openBlock(), createBlock("svg", {
            style: { "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" },
            xmlns: "http://www.w3.org/2000/svg",
            width: "0.781ex",
            height: "1.52ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -661 345 672",
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
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
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
                createVNode("mi", null, "i")
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` 个物品。 <ul><li>`);
  _push(ssrRenderComponent(_component_mjx_container, {
    class: "MathJax",
    jax: "SVG",
    style: { "direction": "ltr", "position": "relative" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="58.995ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 26076 1000" aria-hidden="true"${_scopeId}><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"${_scopeId}><g data-mml-node="math"${_scopeId}><g data-mml-node="mi"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(520,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1023,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(1301,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1646,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(1924,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(2202,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(2614,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(3169.8,0)"${_scopeId}><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(4225.6,0)"${_scopeId}><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="61" d="M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z" transform="translate(833,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path><path data-c="78" d="M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z" transform="translate(1333,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(6086.6,0)"${_scopeId}><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6475.6,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(6995.6,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(7498.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(7776.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(8343.8,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(9344,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(9844,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10122,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(10400,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(10812,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(11090,0)"${_scopeId}><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(11534.7,0)"${_scopeId}><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12054.7,0)"${_scopeId}><path data-c="1D45D" d="M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(12557.7,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(12835.7,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(13402.9,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mn" transform="translate(14403.1,0)"${_scopeId}><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(14903.1,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(15181.1,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(15459.1,0)"${_scopeId}><path data-c="1D457" d="M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(16093.3,0)"${_scopeId}><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(17093.6,0)"${_scopeId}><path data-c="1D464" d="M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(17809.6,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(18275.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(18620.6,0)"${_scopeId}><path data-c="1D454" d="M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(19097.6,0)"${_scopeId}><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(19673.6,0)"${_scopeId}><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(20034.6,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(20312.6,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(20657.6,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(20935.6,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(21435.8,0)"${_scopeId}><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(22436,0)"${_scopeId}><path data-c="1D463" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(22921,0)"${_scopeId}><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(23450,0)"${_scopeId}><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(23748,0)"${_scopeId}><path data-c="1D462" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(24320,0)"${_scopeId}><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(24786,0)"${_scopeId}><path data-c="5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mi" transform="translate(25064,0)"${_scopeId}><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(25409,0)"${_scopeId}><path data-c="5D" d="M22 710V750H159V-250H22V-210H119V710H22Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g><g data-mml-node="mo" transform="translate(25687,0)"${_scopeId}><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"${_scopeId}></path></g></g></g></svg>`);
        _push2(ssrRenderComponent(_component_mjx_assistive_mml, {
          unselectable: "on",
          display: "inline",
          style: { "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" }
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<math xmlns="http://www.w3.org/1998/Math/MathML"${_scopeId2}><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>=</mo><mo data-mjx-texclass="OP" movablelimits="true"${_scopeId2}>max</mo><mo stretchy="false"${_scopeId2}>(</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>,</mo><mi${_scopeId2}>d</mi><mi${_scopeId2}>p</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo${_scopeId2}>−</mo><mn${_scopeId2}>1</mn><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>j</mi><mo${_scopeId2}>−</mo><mi${_scopeId2}>w</mi><mi${_scopeId2}>e</mi><mi${_scopeId2}>i</mi><mi${_scopeId2}>g</mi><mi${_scopeId2}>h</mi><mi${_scopeId2}>t</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>]</mo><mo${_scopeId2}>+</mo><mi${_scopeId2}>v</mi><mi${_scopeId2}>a</mi><mi${_scopeId2}>l</mi><mi${_scopeId2}>u</mi><mi${_scopeId2}>e</mi><mo stretchy="false"${_scopeId2}>[</mo><mi${_scopeId2}>i</mi><mo stretchy="false"${_scopeId2}>]</mo><mo stretchy="false"${_scopeId2}>)</mo></math>`);
            } else {
              return [
                (openBlock(), createBlock("math", { xmlns: "http://www.w3.org/1998/Math/MathML" }, [
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "="),
                  createVNode("mo", {
                    "data-mjx-texclass": "OP",
                    movablelimits: "true"
                  }, "max"),
                  createVNode("mo", { stretchy: "false" }, "("),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, ","),
                  createVNode("mi", null, "d"),
                  createVNode("mi", null, "p"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", null, "−"),
                  createVNode("mn", null, "1"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "j"),
                  createVNode("mo", null, "−"),
                  createVNode("mi", null, "w"),
                  createVNode("mi", null, "e"),
                  createVNode("mi", null, "i"),
                  createVNode("mi", null, "g"),
                  createVNode("mi", null, "h"),
                  createVNode("mi", null, "t"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", { stretchy: "false" }, "]"),
                  createVNode("mo", null, "+"),
                  createVNode("mi", null, "v"),
                  createVNode("mi", null, "a"),
                  createVNode("mi", null, "l"),
                  createVNode("mi", null, "u"),
                  createVNode("mi", null, "e"),
                  createVNode("mo", { stretchy: "false" }, "["),
                  createVNode("mi", null, "i"),
                  createVNode("mo", { stretchy: "false" }, "]"),
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
            width: "58.995ex",
            height: "2.262ex",
            role: "img",
            focusable: "false",
            viewBox: "0 -750 26076 1000",
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
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(520,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1023,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(1301,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1646,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(1924,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(2202,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(2614,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(3169.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "3D",
                    d: "M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(4225.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "6D",
                    d: "M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "61",
                    d: "M137 305T115 305T78 320T63 359Q63 394 97 421T218 448Q291 448 336 416T396 340Q401 326 401 309T402 194V124Q402 76 407 58T428 40Q443 40 448 56T453 109V145H493V106Q492 66 490 59Q481 29 455 12T400 -6T353 12T329 54V58L327 55Q325 52 322 49T314 40T302 29T287 17T269 6T247 -2T221 -8T190 -11Q130 -11 82 20T34 107Q34 128 41 147T68 188T116 225T194 253T304 268H318V290Q318 324 312 340Q290 411 215 411Q197 411 181 410T156 406T148 403Q170 388 170 359Q170 334 154 320ZM126 106Q126 75 150 51T209 26Q247 26 276 49T315 109Q317 116 318 175Q318 233 317 233Q309 233 296 232T251 223T193 203T147 166T126 106Z",
                    transform: "translate(833,0)",
                    style: { "stroke-width": "3" }
                  }),
                  createVNode("path", {
                    "data-c": "78",
                    d: "M201 0Q189 3 102 3Q26 3 17 0H11V46H25Q48 47 67 52T96 61T121 78T139 96T160 122T180 150L226 210L168 288Q159 301 149 315T133 336T122 351T113 363T107 370T100 376T94 379T88 381T80 383Q74 383 44 385H16V431H23Q59 429 126 429Q219 429 229 431H237V385Q201 381 201 369Q201 367 211 353T239 315T268 274L272 270L297 304Q329 345 329 358Q329 364 327 369T322 376T317 380T310 384L307 385H302V431H309Q324 428 408 428Q487 428 493 431H499V385H492Q443 385 411 368Q394 360 377 341T312 257L296 236L358 151Q424 61 429 57T446 50Q464 46 499 46H516V0H510H502Q494 1 482 1T457 2T432 2T414 3Q403 3 377 3T327 1L304 0H295V46H298Q309 46 320 51T331 63Q331 65 291 120L250 175Q249 174 219 133T185 88Q181 83 181 74Q181 63 188 55T206 46Q208 46 208 23V0H201Z",
                    transform: "translate(1333,0)",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(6086.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "28",
                    d: "M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6475.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(6995.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(7498.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(7776.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(8343.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(9344,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(9844,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10122,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(10400,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(10812,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(11090,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2C",
                    d: "M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(11534.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D451",
                    d: "M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12054.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D45D",
                    d: "M23 287Q24 290 25 295T30 317T40 348T55 381T75 411T101 433T134 442Q209 442 230 378L240 387Q302 442 358 442Q423 442 460 395T497 281Q497 173 421 82T249 -10Q227 -10 210 -4Q199 1 187 11T168 28L161 36Q160 35 139 -51T118 -138Q118 -144 126 -145T163 -148H188Q194 -155 194 -157T191 -175Q188 -187 185 -190T172 -194Q170 -194 161 -194T127 -193T65 -192Q-5 -192 -24 -194H-32Q-39 -187 -39 -183Q-37 -156 -26 -148H-6Q28 -147 33 -136Q36 -130 94 103T155 350Q156 355 156 364Q156 405 131 405Q109 405 94 377T71 316T59 280Q57 278 43 278H29Q23 284 23 287ZM178 102Q200 26 252 26Q282 26 310 49T356 107Q374 141 392 215T411 325V331Q411 405 350 405Q339 405 328 402T306 393T286 380T269 365T254 350T243 336T235 326L232 322Q232 321 229 308T218 264T204 212Q178 106 178 102Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(12557.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(12835.7,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(13402.9,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mn",
                  transform: "translate(14403.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "31",
                    d: "M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(14903.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(15181.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(15459.1,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D457",
                    d: "M297 596Q297 627 318 644T361 661Q378 661 389 651T403 623Q403 595 384 576T340 557Q322 557 310 567T297 596ZM288 376Q288 405 262 405Q240 405 220 393T185 362T161 325T144 293L137 279Q135 278 121 278H107Q101 284 101 286T105 299Q126 348 164 391T252 441Q253 441 260 441T272 442Q296 441 316 432Q341 418 354 401T367 348V332L318 133Q267 -67 264 -75Q246 -125 194 -164T75 -204Q25 -204 7 -183T-12 -137Q-12 -110 7 -91T53 -71Q70 -71 82 -81T95 -112Q95 -148 63 -167Q69 -168 77 -168Q111 -168 139 -140T182 -74L193 -32Q204 11 219 72T251 197T278 308T289 365Q289 372 288 376Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(16093.3,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2212",
                    d: "M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(17093.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D464",
                    d: "M580 385Q580 406 599 424T641 443Q659 443 674 425T690 368Q690 339 671 253Q656 197 644 161T609 80T554 12T482 -11Q438 -11 404 5T355 48Q354 47 352 44Q311 -11 252 -11Q226 -11 202 -5T155 14T118 53T104 116Q104 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Q21 293 29 315T52 366T96 418T161 441Q204 441 227 416T250 358Q250 340 217 250T184 111Q184 65 205 46T258 26Q301 26 334 87L339 96V119Q339 122 339 128T340 136T341 143T342 152T345 165T348 182T354 206T362 238T373 281Q402 395 406 404Q419 431 449 431Q468 431 475 421T483 402Q483 389 454 274T422 142Q420 131 420 107V100Q420 85 423 71T442 42T487 26Q558 26 600 148Q609 171 620 213T632 273Q632 306 619 325T593 357T580 385Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(17809.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(18275.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(18620.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D454",
                    d: "M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(19097.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "210E",
                    d: "M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(19673.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D461",
                    d: "M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(20034.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(20312.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(20657.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(20935.6,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(21435.8,0)"
                }, [
                  createVNode("path", {
                    "data-c": "2B",
                    d: "M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(22436,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D463",
                    d: "M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(22921,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D44E",
                    d: "M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(23450,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D459",
                    d: "M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(23748,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D462",
                    d: "M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(24320,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D452",
                    d: "M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(24786,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5B",
                    d: "M118 -250V750H255V710H158V-210H255V-250H118Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mi",
                  transform: "translate(25064,0)"
                }, [
                  createVNode("path", {
                    "data-c": "1D456",
                    d: "M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(25409,0)"
                }, [
                  createVNode("path", {
                    "data-c": "5D",
                    d: "M22 710V750H159V-250H22V-210H119V710H22Z",
                    style: { "stroke-width": "3" }
                  })
                ]),
                createVNode("g", {
                  "data-mml-node": "mo",
                  transform: "translate(25687,0)"
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
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "="),
                createVNode("mo", {
                  "data-mjx-texclass": "OP",
                  movablelimits: "true"
                }, "max"),
                createVNode("mo", { stretchy: "false" }, "("),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, ","),
                createVNode("mi", null, "d"),
                createVNode("mi", null, "p"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", null, "−"),
                createVNode("mn", null, "1"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "j"),
                createVNode("mo", null, "−"),
                createVNode("mi", null, "w"),
                createVNode("mi", null, "e"),
                createVNode("mi", null, "i"),
                createVNode("mi", null, "g"),
                createVNode("mi", null, "h"),
                createVNode("mi", null, "t"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", { stretchy: "false" }, "]"),
                createVNode("mo", null, "+"),
                createVNode("mi", null, "v"),
                createVNode("mi", null, "a"),
                createVNode("mi", null, "l"),
                createVNode("mi", null, "u"),
                createVNode("mi", null, "e"),
                createVNode("mo", { stretchy: "false" }, "["),
                createVNode("mi", null, "i"),
                createVNode("mo", { stretchy: "false" }, "]"),
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
  _push(`</li></ul></li></ul><hr><h2 id="🚫-架构师避坑指南" tabindex="-1">🚫 架构师避坑指南 <a class="header-anchor" href="#🚫-架构师避坑指南" aria-label="Permalink to &quot;🚫 架构师避坑指南&quot;">​</a></h2><blockquote><p>[!failure] DP 最容易死在哪里？</p><ol><li><strong>无穷大溢出陷阱：</strong> 找最小值时，很多人喜欢把 <code>dp</code> 数组初始化为 <code>Integer.MAX_VALUE</code>。结果在转移方程里做 <code>+1</code> 时，直接越界变成负数！ <em>✅ 你的解法极其完美：用 <code>amount + 1</code> 或 <code>100000</code> 作为无穷大，安全又实用。</em></li><li><strong>数组越界：</strong> 在写 <code>dp[i-1]</code> 或 <code>dp[i-2]</code> 时，永远要先处理好 <code>i=0</code> 和 <code>i=1</code> 的初始化，并且循环从合适的地方开始。</li><li><strong>搞反遍历顺序：</strong> 大部分题是从左往右，但有些背包问题（如一维数组优化的 0-1 背包）必须<strong>从右往左</strong>遍历，防止物品被重复使用。</li></ol></blockquote></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("Code/DS/Dynamic Programming.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dynamic_Programming = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  Dynamic_Programming as default
};
