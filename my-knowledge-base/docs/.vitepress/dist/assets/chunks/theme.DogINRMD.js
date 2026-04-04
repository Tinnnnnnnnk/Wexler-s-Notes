const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.DGQtm0l2.js","assets/chunks/framework.ul-4IeKD.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, c as createElementBlock, r as renderSlot, n as normalizeClass, o as openBlock, a as createTextVNode, t as toDisplayString, b as createBlock, w as withCtx, T as Transition, e as createCommentVNode, _ as _export_sfc, u as useData$1, i as isExternal, f as treatAsHtml, g as withBase, h as computed, j as createBaseVNode, k as unref, l as isActive, m as useMediaQuery, p as ref, q as watch, s as watchEffect, v as onMounted, x as onUnmounted, y as watchPostEffect, z as onUpdated, A as getScrollOffset, F as Fragment, B as renderList, C as resolveComponent, D as onContentUpdated, E as createVNode, G as shallowRef, H as resolveDynamicComponent, I as EXTERNAL_URL_RE, J as useRoute, K as mergeProps, L as inject, M as useWindowSize, N as normalizeStyle, O as onKeyStroke, P as nextTick, Q as useWindowScroll, R as inBrowser, S as readonly, U as defineAsyncComponent, V as __vitePreload, W as useScrollLock, X as provide, Y as toHandlers, Z as withKeys, $ as onBeforeUnmount, a0 as withModifiers, a1 as useSlots, a2 as withDirectives, a3 as vShow, a4 as Teleport, a5 as h } from "./framework.ul-4IeKD.js";
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(["VPBadge", __props.type])
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text), 1)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$M = {
  key: 0,
  class: "VPBackdrop"
};
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "fade" }, {
        default: withCtx(() => [
          __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$M)) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["__scopeId", "data-v-b06cdb19"]]);
const useData = useData$1;
function throttleAndDebounce(fn, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn, delay);
  };
}
function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link, addPath, path, addExt) {
  return addPath ? link.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link;
}
const _hoisted_1$L = { class: "NotFound" };
const _hoisted_2$s = { class: "code" };
const _hoisted_3$j = { class: "title" };
const _hoisted_4$b = { class: "quote" };
const _hoisted_5$a = { class: "action" };
const _hoisted_6$8 = ["href", "aria-label"];
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  setup(__props) {
    const { theme: theme2 } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return openBlock(), createElementBlock("div", _hoisted_1$L, [
        createBaseVNode("p", _hoisted_2$s, toDisplayString(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404"), 1),
        createBaseVNode("h1", _hoisted_3$j, toDisplayString(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND"), 1),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "divider" }, null, -1)),
        createBaseVNode("blockquote", _hoisted_4$b, toDisplayString(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading."), 1),
        createBaseVNode("div", _hoisted_5$a, [
          createBaseVNode("a", {
            class: "link",
            href: unref(withBase)(unref(currentLang).link),
            "aria-label": ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home"
          }, toDisplayString(((_e = unref(theme2).notFound) == null ? void 0 : _e.linkText) ?? "Take me home"), 9, _hoisted_6$8)
        ])
      ]);
    };
  }
});
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-951cab6c"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _hoisted_1$K = ["href", "title"];
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(["VPDocOutlineItem", __props.root ? "root" : "nested"])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, ({ children, link, title }) => {
          return openBlock(), createElementBlock("li", null, [
            createBaseVNode("a", {
              class: "outline-link",
              href: link,
              onClick,
              title
            }, toDisplayString(title), 9, _hoisted_1$K),
            (children == null ? void 0 : children.length) ? (openBlock(), createBlock(_component_VPDocOutlineItem, {
              key: 0,
              headers: children
            }, null, 8, ["headers"])) : createCommentVNode("", true)
          ]);
        }), 256))
      ], 2);
    };
  }
});
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-3f927ebe"]]);
const _hoisted_1$J = { class: "content" };
const _hoisted_2$r = {
  "aria-level": "2",
  class: "outline-title",
  id: "doc-outline-aria-label",
  role: "heading"
};
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        "aria-labelledby": "doc-outline-aria-label",
        class: normalizeClass(["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }]),
        ref_key: "container",
        ref: container
      }, [
        createBaseVNode("div", _hoisted_1$J, [
          createBaseVNode("div", {
            class: "outline-marker",
            ref_key: "marker",
            ref: marker
          }, null, 512),
          createBaseVNode("div", _hoisted_2$r, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
          createVNode(VPDocOutlineItem, {
            headers: headers.value,
            root: true
          }, null, 8, ["headers"])
        ])
      ], 2);
    };
  }
});
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-b38bf2ff"]]);
const _hoisted_1$I = { class: "VPDocAsideCarbonAds" };
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$I, [
        createVNode(unref(VPCarbonAds), { "carbon-ads": __props.carbonAds }, null, 8, ["carbon-ads"])
      ]);
    };
  }
});
const _hoisted_1$H = { class: "VPDocAside" };
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$H, [
        renderSlot(_ctx.$slots, "aside-top", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true),
        createVNode(VPDocAsideOutline),
        renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true),
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "spacer" }, null, -1)),
        renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true),
        unref(theme2).carbonAds ? (openBlock(), createBlock(_sfc_main$X, {
          key: 0,
          "carbon-ads": unref(theme2).carbonAds
        }, null, 8, ["carbon-ads"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
      ]);
    };
  }
});
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-6d7b3c46"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link) => link.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link) => {
      return isActive(page.value.relativePath, link.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e = candidates[index - 1]) == null ? void 0 : _e.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(tag.value), {
        class: normalizeClass(["VPLink", {
          link: __props.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": __props.noIcon
        }]),
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: __props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: __props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const _hoisted_1$G = { class: "VPLastUpdated" };
const _hoisted_2$q = ["datetime"];
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("p", _hoisted_1$G, [
        createTextVNode(toDisplayString(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated") + ": ", 1),
        createBaseVNode("time", { datetime: isoDatetime.value }, toDisplayString(datetime.value), 9, _hoisted_2$q)
      ]);
    };
  }
});
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["__scopeId", "data-v-475f71b8"]]);
const _hoisted_1$F = {
  key: 0,
  class: "VPDocFooter"
};
const _hoisted_2$p = {
  key: 0,
  class: "edit-info"
};
const _hoisted_3$i = {
  key: 0,
  class: "edit-link"
};
const _hoisted_4$a = {
  key: 1,
  class: "last-updated"
};
const _hoisted_5$9 = {
  key: 1,
  class: "prev-next",
  "aria-labelledby": "doc-footer-aria-label"
};
const _hoisted_6$7 = { class: "pager" };
const _hoisted_7$5 = ["innerHTML"];
const _hoisted_8$4 = ["innerHTML"];
const _hoisted_9$3 = { class: "pager" };
const _hoisted_10$2 = ["innerHTML"];
const _hoisted_11$2 = ["innerHTML"];
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme2.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return showFooter.value ? (openBlock(), createElementBlock("footer", _hoisted_1$F, [
        renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true),
        hasEditLink.value || hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_2$p, [
          hasEditLink.value ? (openBlock(), createElementBlock("div", _hoisted_3$i, [
            createVNode(_sfc_main$V, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-square-pen edit-link-icon" }, null, -1)),
                createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ])) : createCommentVNode("", true),
          hasLastUpdated.value ? (openBlock(), createElementBlock("div", _hoisted_4$a, [
            createVNode(VPDocFooterLastUpdated)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        ((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link) ? (openBlock(), createElementBlock("nav", _hoisted_5$9, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "doc-footer-aria-label"
          }, "Pager", -1)),
          createBaseVNode("div", _hoisted_6$7, [
            ((_c = unref(control).prev) == null ? void 0 : _c.link) ? (openBlock(), createBlock(_sfc_main$V, {
              key: 0,
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"
                  }, null, 8, _hoisted_7$5),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).prev.text
                  }, null, 8, _hoisted_8$4)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_9$3, [
            ((_d = unref(control).next) == null ? void 0 : _d.link) ? (openBlock(), createBlock(_sfc_main$V, {
              key: 0,
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx(() => {
                var _a2;
                return [
                  createBaseVNode("span", {
                    class: "desc",
                    innerHTML: ((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"
                  }, null, 8, _hoisted_10$2),
                  createBaseVNode("span", {
                    class: "title",
                    innerHTML: unref(control).next.text
                  }, null, 8, _hoisted_11$2)
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-4f9813fa"]]);
const _hoisted_1$E = { class: "container" };
const _hoisted_2$o = { class: "aside-container" };
const _hoisted_3$h = { class: "aside-content" };
const _hoisted_4$9 = { class: "content" };
const _hoisted_5$8 = { class: "content-container" };
const _hoisted_6$6 = { class: "main" };
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }])
      }, [
        renderSlot(_ctx.$slots, "doc-top", {}, void 0, true),
        createBaseVNode("div", _hoisted_1$E, [
          unref(hasAside) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["aside", { "left-aside": unref(leftAside) }])
          }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "aside-curtain" }, null, -1)),
            createBaseVNode("div", _hoisted_2$o, [
              createBaseVNode("div", _hoisted_3$h, [
                createVNode(VPDocAside, null, {
                  "aside-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
                  ]),
                  "aside-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
                  ]),
                  "aside-outline-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
                  ]),
                  "aside-outline-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
                  ]),
                  "aside-ads-before": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
                  ]),
                  "aside-ads-after": withCtx(() => [
                    renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
                  ]),
                  _: 3
                })
              ])
            ])
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_4$9, [
            createBaseVNode("div", _hoisted_5$8, [
              renderSlot(_ctx.$slots, "doc-before", {}, void 0, true),
              createBaseVNode("main", _hoisted_6$6, [
                createVNode(_component_Content, {
                  class: normalizeClass(["vp-doc", [
                    pageName.value,
                    unref(theme2).externalLinkIcon && "external-link-icon-enabled"
                  ]])
                }, null, 8, ["class"])
              ]),
              createVNode(VPDocFooter, null, {
                "doc-footer-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
                ]),
                _: 3
              }),
              renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
            ])
          ])
        ]),
        renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
      ], 2);
    };
  }
});
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-83890dd9"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || (props.href ? "a" : "button");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.value), {
        class: normalizeClass(["VPButton", [__props.size, __props.theme]]),
        href: __props.href ? unref(normalizeLink$1)(__props.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(__props.text), 1)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel"]);
    };
  }
});
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["__scopeId", "data-v-906d7fb4"]]);
const _hoisted_1$D = ["src", "alt"];
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      return __props.image ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof __props.image === "string" || "src" in __props.image ? (openBlock(), createElementBlock("img", mergeProps({
          key: 0,
          class: "VPImage"
        }, typeof __props.image === "string" ? _ctx.$attrs : { ...__props.image, ..._ctx.$attrs }, {
          src: unref(withBase)(typeof __props.image === "string" ? __props.image : __props.image.src),
          alt: __props.alt ?? (typeof __props.image === "string" ? "" : __props.image.alt || "")
        }), null, 16, _hoisted_1$D)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_component_VPImage, mergeProps({
            class: "dark",
            image: __props.image.dark,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"]),
          createVNode(_component_VPImage, mergeProps({
            class: "light",
            image: __props.image.light,
            alt: __props.image.alt
          }, _ctx.$attrs), null, 16, ["image", "alt"])
        ], 64))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-35a7d0b8"]]);
const _hoisted_1$C = { class: "container" };
const _hoisted_2$n = { class: "main" };
const _hoisted_3$g = { class: "heading" };
const _hoisted_4$8 = ["innerHTML"];
const _hoisted_5$7 = ["innerHTML"];
const _hoisted_6$5 = ["innerHTML"];
const _hoisted_7$4 = {
  key: 0,
  class: "actions"
};
const _hoisted_8$3 = {
  key: 0,
  class: "image"
};
const _hoisted_9$2 = { class: "image-container" };
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPHero", { "has-image": __props.image || unref(heroImageSlotExists) }])
      }, [
        createBaseVNode("div", _hoisted_1$C, [
          createBaseVNode("div", _hoisted_2$n, [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true),
            renderSlot(_ctx.$slots, "home-hero-info", {}, () => [
              createBaseVNode("h1", _hoisted_3$g, [
                __props.name ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: __props.name,
                  class: "name clip"
                }, null, 8, _hoisted_4$8)) : createCommentVNode("", true),
                __props.text ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  innerHTML: __props.text,
                  class: "text"
                }, null, 8, _hoisted_5$7)) : createCommentVNode("", true)
              ]),
              __props.tagline ? (openBlock(), createElementBlock("p", {
                key: 0,
                innerHTML: __props.tagline,
                class: "tagline"
              }, null, 8, _hoisted_6$5)) : createCommentVNode("", true)
            ], true),
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true),
            __props.actions ? (openBlock(), createElementBlock("div", _hoisted_7$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action) => {
                return openBlock(), createElementBlock("div", {
                  key: action.link,
                  class: "action"
                }, [
                  createVNode(VPButton, {
                    tag: "a",
                    size: "medium",
                    theme: action.theme,
                    text: action.text,
                    href: action.link,
                    target: action.target,
                    rel: action.rel
                  }, null, 8, ["theme", "text", "href", "target", "rel"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          __props.image || unref(heroImageSlotExists) ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
            createBaseVNode("div", _hoisted_9$2, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "image-bg" }, null, -1)),
              renderSlot(_ctx.$slots, "home-hero-image", {}, () => [
                __props.image ? (openBlock(), createBlock(VPImage, {
                  key: 0,
                  class: "image-src",
                  image: __props.image
                }, null, 8, ["image"])) : createCommentVNode("", true)
              ], true)
            ])
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-3d256e5e"]]);
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).hero ? (openBlock(), createBlock(VPHero, {
        key: 0,
        class: "VPHomeHero",
        name: unref(fm).hero.name,
        text: unref(fm).hero.text,
        tagline: unref(fm).hero.tagline,
        image: unref(fm).hero.image,
        actions: unref(fm).hero.actions
      }, {
        "home-hero-info-before": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-before")
        ]),
        "home-hero-info": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info")
        ]),
        "home-hero-info-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-info-after")
        ]),
        "home-hero-actions-after": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-actions-after")
        ]),
        "home-hero-image": withCtx(() => [
          renderSlot(_ctx.$slots, "home-hero-image")
        ]),
        _: 3
      }, 8, ["name", "text", "tagline", "image", "actions"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$B = { class: "box" };
const _hoisted_2$m = {
  key: 0,
  class: "icon"
};
const _hoisted_3$f = ["innerHTML"];
const _hoisted_4$7 = ["innerHTML"];
const _hoisted_5$6 = ["innerHTML"];
const _hoisted_6$4 = {
  key: 4,
  class: "link-text"
};
const _hoisted_7$3 = { class: "link-text-value" };
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$V, {
        class: "VPFeature",
        href: __props.link,
        rel: __props.rel,
        target: __props.target,
        "no-icon": true,
        tag: __props.link ? "a" : "div"
      }, {
        default: withCtx(() => [
          createBaseVNode("article", _hoisted_1$B, [
            typeof __props.icon === "object" && __props.icon.wrap ? (openBlock(), createElementBlock("div", _hoisted_2$m, [
              createVNode(VPImage, {
                image: __props.icon,
                alt: __props.icon.alt,
                height: __props.icon.height || 48,
                width: __props.icon.width || 48
              }, null, 8, ["image", "alt", "height", "width"])
            ])) : typeof __props.icon === "object" ? (openBlock(), createBlock(VPImage, {
              key: 1,
              image: __props.icon,
              alt: __props.icon.alt,
              height: __props.icon.height || 48,
              width: __props.icon.width || 48
            }, null, 8, ["image", "alt", "height", "width"])) : __props.icon ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "icon",
              innerHTML: __props.icon
            }, null, 8, _hoisted_3$f)) : createCommentVNode("", true),
            createBaseVNode("h2", {
              class: "title",
              innerHTML: __props.title
            }, null, 8, _hoisted_4$7),
            __props.details ? (openBlock(), createElementBlock("p", {
              key: 3,
              class: "details",
              innerHTML: __props.details
            }, null, 8, _hoisted_5$6)) : createCommentVNode("", true),
            __props.linkText ? (openBlock(), createElementBlock("div", _hoisted_6$4, [
              createBaseVNode("p", _hoisted_7$3, [
                createTextVNode(toDisplayString(__props.linkText) + " ", 1),
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-arrow-right link-text-icon" }, null, -1))
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["href", "rel", "target", "tag"]);
    };
  }
});
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-f5e9645b"]]);
const _hoisted_1$A = {
  key: 0,
  class: "VPFeatures"
};
const _hoisted_2$l = { class: "container" };
const _hoisted_3$e = { class: "items" };
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _cache) => {
      return __props.features ? (openBlock(), createElementBlock("div", _hoisted_1$A, [
        createBaseVNode("div", _hoisted_2$l, [
          createBaseVNode("div", _hoisted_3$e, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.features, (feature) => {
              return openBlock(), createElementBlock("div", {
                key: feature.title,
                class: normalizeClass(["item", [grid.value]])
              }, [
                createVNode(VPFeature, {
                  icon: feature.icon,
                  title: feature.title,
                  details: feature.details,
                  link: feature.link,
                  "link-text": feature.linkText,
                  rel: feature.rel,
                  target: feature.target
                }, null, 8, ["icon", "title", "details", "link", "link-text", "rel", "target"])
              ], 2);
            }), 128))
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-d0a190d7"]]);
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _cache) => {
      return unref(fm).features ? (openBlock(), createBlock(VPFeatures, {
        key: 0,
        class: "VPHomeFeatures",
        features: unref(fm).features
      }, null, 8, ["features"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  setup(__props) {
    const { width: vw } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vp-doc container",
        style: normalizeStyle(unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {})
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4);
    };
  }
});
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-7a48a447"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPHome", {
          "external-link-icon-enabled": unref(theme2).externalLinkIcon
        }])
      }, [
        renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true),
        createVNode(_sfc_main$O, null, {
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          _: 3
        }),
        renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true),
        renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true),
        createVNode(_sfc_main$L),
        renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true),
        unref(frontmatter).markdownStyles !== false ? (openBlock(), createBlock(VPHomeContent, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_Content)
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_Content, { key: 1 }))
      ], 2);
    };
  }
});
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-e40e30de"]]);
const _sfc_main$I = {};
const _hoisted_1$z = { class: "VPPage" };
function _sfc_render$1(_ctx, _cache) {
  const _component_Content = resolveComponent("Content");
  return openBlock(), createElementBlock("div", _hoisted_1$z, [
    renderSlot(_ctx.$slots, "page-top"),
    createVNode(_component_Content),
    renderSlot(_ctx.$slots, "page-bottom")
  ]);
}
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$1]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }]),
        id: "VPContent"
      }, [
        unref(page).isNotFound ? renderSlot(_ctx.$slots, "not-found", { key: 0 }, () => [
          createVNode(NotFound)
        ], true) : unref(frontmatter).layout === "page" ? (openBlock(), createBlock(VPPage, { key: 1 }, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout === "home" ? (openBlock(), createBlock(VPHome, { key: 2 }, {
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          _: 3
        })) : unref(frontmatter).layout && unref(frontmatter).layout !== "doc" ? (openBlock(), createBlock(resolveDynamicComponent(unref(frontmatter).layout), { key: 3 })) : (openBlock(), createBlock(VPDoc, { key: 4 }, {
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          _: 3
        }))
      ], 2);
    };
  }
});
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-91765379"]]);
const _hoisted_1$y = { class: "container" };
const _hoisted_2$k = ["innerHTML"];
const _hoisted_3$d = ["innerHTML"];
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _cache) => {
      return unref(theme2).footer && unref(frontmatter).footer !== false ? (openBlock(), createElementBlock("footer", {
        key: 0,
        class: normalizeClass(["VPFooter", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("div", _hoisted_1$y, [
          unref(theme2).footer.message ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: "message",
            innerHTML: unref(theme2).footer.message
          }, null, 8, _hoisted_2$k)) : createCommentVNode("", true),
          unref(theme2).footer.copyright ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: "copyright",
            innerHTML: unref(theme2).footer.copyright
          }, null, 8, _hoisted_3$d)) : createCommentVNode("", true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-c970a860"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _hoisted_1$x = { class: "menu-text" };
const _hoisted_2$j = { class: "header" };
const _hoisted_3$c = { class: "outline" };
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const props = __props;
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    const items = ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    function toggle() {
      open.value = !open.value;
      vh.value = window.innerHeight + Math.min(window.scrollY - props.navHeight, 0);
    }
    function onItemClick(e) {
      if (e.target.classList.contains("outline-link")) {
        if (items.value) {
          items.value.style.transition = "none";
        }
        nextTick(() => {
          open.value = false;
        });
      }
    }
    function scrollToTop() {
      open.value = false;
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPLocalNavOutlineDropdown",
        style: normalizeStyle({ "--vp-vh": vh.value + "px" }),
        ref_key: "main",
        ref: main
      }, [
        __props.headers.length > 0 ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: toggle,
          class: normalizeClass({ open: open.value })
        }, [
          createBaseVNode("span", _hoisted_1$x, toDisplayString(unref(resolveTitle)(unref(theme2))), 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-chevron-right icon" }, null, -1))
        ], 2)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: scrollToTop
        }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)),
        createVNode(Transition, { name: "flyout" }, {
          default: withCtx(() => [
            open.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "items",
              ref: items,
              class: "items",
              onClick: onItemClick
            }, [
              createBaseVNode("div", _hoisted_2$j, [
                createBaseVNode("a", {
                  class: "top-link",
                  href: "#",
                  onClick: scrollToTop
                }, toDisplayString(unref(theme2).returnToTopLabel || "Return to top"), 1)
              ]),
              createBaseVNode("div", _hoisted_3$c, [
                createVNode(VPDocOutlineItem, { headers: __props.headers }, null, 8, ["headers"])
              ])
            ], 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-168ddf5d"]]);
const _hoisted_1$w = { class: "container" };
const _hoisted_2$i = ["aria-expanded"];
const _hoisted_3$b = { class: "menu-text" };
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _cache) => {
      return unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(classes.value)
      }, [
        createBaseVNode("div", _hoisted_1$w, [
          unref(hasSidebar) ? (openBlock(), createElementBlock("button", {
            key: 0,
            class: "menu",
            "aria-expanded": __props.open,
            "aria-controls": "VPSidebarNav",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("open-menu"))
          }, [
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-align-left menu-icon" }, null, -1)),
            createBaseVNode("span", _hoisted_3$b, toDisplayString(unref(theme2).sidebarMenuLabel || "Menu"), 1)
          ], 8, _hoisted_2$i)) : createCommentVNode("", true),
          createVNode(VPLocalNavOutlineDropdown, {
            headers: unref(headers),
            navHeight: navHeight.value
          }, null, 8, ["headers", "navHeight"])
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-070ab83d"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$D = {};
const _hoisted_1$v = {
  class: "VPSwitch",
  type: "button",
  role: "switch"
};
const _hoisted_2$h = { class: "check" };
const _hoisted_3$a = {
  key: 0,
  class: "icon"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", _hoisted_1$v, [
    createBaseVNode("span", _hoisted_2$h, [
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_3$a, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])) : createCommentVNode("", true)
    ])
  ]);
}
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render], ["__scopeId", "data-v-4a1c76db"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPSwitch, {
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, {
        default: withCtx(() => [..._cache[0] || (_cache[0] = [
          createBaseVNode("span", { class: "vpi-sun sun" }, null, -1),
          createBaseVNode("span", { class: "vpi-moon moon" }, null, -1)
        ])]),
        _: 1
      }, 8, ["title", "aria-checked", "onClick"]);
    };
  }
});
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-e40a8bb6"]]);
const _hoisted_1$u = {
  key: 0,
  class: "VPNavBarAppearance"
};
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  setup(__props) {
    const { site } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_1$u, [
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-af096f4a"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _hoisted_1$t = { class: "VPMenuLink" };
const _hoisted_2$g = ["innerHTML"];
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createVNode(_sfc_main$V, {
          class: normalizeClass({
            active: unref(isActive)(
              unref(page).relativePath,
              __props.item.activeMatch || __props.item.link,
              !!__props.item.activeMatch
            )
          }),
          href: __props.item.link,
          target: __props.item.target,
          rel: __props.item.rel,
          "no-icon": __props.item.noIcon
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              innerHTML: __props.item.text
            }, null, 8, _hoisted_2$g)
          ]),
          _: 1
        }, 8, ["class", "href", "target", "rel", "no-icon"])
      ]);
    };
  }
});
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-acbfed09"]]);
const _hoisted_1$s = { class: "VPMenuGroup" };
const _hoisted_2$f = {
  key: 0,
  class: "title"
};
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$f, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createElementBlock(Fragment, null, [
            "link" in item ? (openBlock(), createBlock(VPMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : createCommentVNode("", true)
          ], 64);
        }), 256))
      ]);
    };
  }
});
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-48c802d0"]]);
const _hoisted_1$r = { class: "VPMenu" };
const _hoisted_2$e = {
  key: 0,
  class: "items"
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        __props.items ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createBlock(VPMenuLink, {
                key: 0,
                item
              }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
                key: 1,
                ref_for: true
              }, item.props), null, 16)) : (openBlock(), createBlock(VPMenuGroup, {
                key: 2,
                text: item.text,
                items: item.items
              }, null, 8, ["text", "items"]))
            ], 64);
          }), 128))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-7dd3104a"]]);
const _hoisted_1$q = ["aria-expanded", "aria-label"];
const _hoisted_2$d = {
  key: 0,
  class: "text"
};
const _hoisted_3$9 = ["innerHTML"];
const _hoisted_4$6 = {
  key: 1,
  class: "vpi-more-horizontal icon"
};
const _hoisted_5$5 = { class: "menu" };
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "VPFlyout",
        ref_key: "el",
        ref: el,
        onMouseenter: _cache[1] || (_cache[1] = ($event) => open.value = true),
        onMouseleave: _cache[2] || (_cache[2] = ($event) => open.value = false)
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "button",
          "aria-haspopup": "true",
          "aria-expanded": open.value,
          "aria-label": __props.label,
          onClick: _cache[0] || (_cache[0] = ($event) => open.value = !open.value)
        }, [
          __props.button || __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2$d, [
            __props.icon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass([__props.icon, "option-icon"])
            }, null, 2)) : createCommentVNode("", true),
            __props.button ? (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: __props.button
            }, null, 8, _hoisted_3$9)) : createCommentVNode("", true),
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "vpi-chevron-down text-icon" }, null, -1))
          ])) : (openBlock(), createElementBlock("span", _hoisted_4$6))
        ], 8, _hoisted_1$q),
        createBaseVNode("div", _hoisted_5$5, [
          createVNode(VPMenu, { items: __props.items }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ]),
            _: 3
          }, 8, ["items"])
        ])
      ], 544);
    };
  }
});
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-04f5c5e9"]]);
const _hoisted_1$p = ["href", "aria-label", "innerHTML"];
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a;
      await nextTick();
      const span = (_a = el.value) == null ? void 0 : _a.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: __props.link,
        "aria-label": __props.ariaLabel ?? (typeof __props.icon === "string" ? __props.icon : ""),
        target: "_blank",
        rel: "noopener",
        innerHTML: svg.value
      }, null, 8, _hoisted_1$p);
    };
  }
});
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-d26d30cb"]]);
const _hoisted_1$o = { class: "VPSocialLinks" };
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.links, ({ link, icon, ariaLabel }) => {
          return openBlock(), createBlock(VPSocialLink, {
            key: link,
            icon,
            link,
            ariaLabel
          }, null, 8, ["icon", "link", "ariaLabel"]);
        }), 128))
      ]);
    };
  }
});
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-ee7a9424"]]);
const _hoisted_1$n = {
  key: 0,
  class: "group translations"
};
const _hoisted_2$c = { class: "trans-title" };
const _hoisted_3$8 = {
  key: 1,
  class: "group"
};
const _hoisted_4$5 = { class: "item appearance" };
const _hoisted_5$4 = { class: "label" };
const _hoisted_6$3 = { class: "appearance-action" };
const _hoisted_7$2 = {
  key: 2,
  class: "group"
};
const _hoisted_8$2 = { class: "item social-links" };
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _cache) => {
      return hasExtraContent.value ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarExtra",
        label: "extra navigation"
      }, {
        default: withCtx(() => [
          unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", _hoisted_1$n, [
            createBaseVNode("p", _hoisted_2$c, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])) : createCommentVNode("", true),
          unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_3$8, [
            createBaseVNode("div", _hoisted_4$5, [
              createBaseVNode("p", _hoisted_5$4, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
              createBaseVNode("div", _hoisted_6$3, [
                createVNode(VPSwitchAppearance)
              ])
            ])
          ])) : createCommentVNode("", true),
          unref(theme2).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$2, [
              createVNode(VPSocialLinks, {
                class: "social-links-list",
                links: unref(theme2).socialLinks
              }, null, 8, ["links"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-925effce"]]);
const _hoisted_1$m = ["aria-expanded"];
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["VPNavBarHamburger", { active: __props.active }]),
        "aria-label": "mobile navigation",
        "aria-expanded": __props.active,
        "aria-controls": "VPNavScreen",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
      }, [..._cache[1] || (_cache[1] = [
        createBaseVNode("span", { class: "container" }, [
          createBaseVNode("span", { class: "top" }),
          createBaseVNode("span", { class: "middle" }),
          createBaseVNode("span", { class: "bottom" })
        ], -1)
      ])], 10, _hoisted_1$m);
    };
  }
});
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-5dea55bf"]]);
const _hoisted_1$l = ["innerHTML"];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$V, {
        class: normalizeClass({
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            __props.item.activeMatch || __props.item.link,
            !!__props.item.activeMatch
          )
        }),
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        tabindex: "0"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$l)
        ]),
        _: 1
      }, 8, ["class", "href", "target", "rel", "no-icon"]);
    };
  }
});
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-956ec74c"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(VPFlyout, {
        class: normalizeClass({
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, __props.item.activeMatch, !!__props.item.activeMatch) || childrenActive.value
        }),
        button: __props.item.text,
        items: __props.item.items
      }, null, 8, ["class", "button", "items"]);
    };
  }
});
const _hoisted_1$k = {
  key: 0,
  "aria-labelledby": "main-nav-aria-label",
  class: "VPNavBarMenu"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$k, [
        _cache[0] || (_cache[0] = createBaseVNode("span", {
          id: "main-nav-aria-label",
          class: "visually-hidden"
        }, " Main Navigation ", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: JSON.stringify(item)
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavBarMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
              key: 1,
              ref_for: true
            }, item.props), null, 16)) : (openBlock(), createBlock(_sfc_main$r, {
              key: 2,
              item
            }, null, 8, ["item"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-e6d46098"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _hoisted_1$j = ["aria-label"];
const _hoisted_2$b = { class: "DocSearch-Button-Container" };
const _hoisted_3$7 = { class: "DocSearch-Button-Placeholder" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, [
        createBaseVNode("span", _hoisted_2$b, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vp-icon DocSearch-Search-Icon" }, null, -1)),
          createBaseVNode("span", _hoisted_3$7, toDisplayString(unref(translate)("button.buttonText")), 1)
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "DocSearch-Button-Keys" }, [
          createBaseVNode("kbd", { class: "DocSearch-Button-Key" }),
          createBaseVNode("kbd", { class: "DocSearch-Button-Key" }, "K")
        ], -1))
      ], 8, _hoisted_1$j);
    };
  }
});
const _hoisted_1$i = { class: "VPNavBarSearch" };
const _hoisted_2$a = { id: "local-search" };
const _hoisted_3$6 = {
  key: 1,
  id: "docsearch"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  setup(__props) {
    const VPLocalSearchBox = defineAsyncComponent(() => __vitePreload(() => import("./VPLocalSearchBox.DGQtm0l2.js"), true ? __vite__mapDeps([0,1]) : void 0));
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    function isEditingContent(event) {
      const element = event.target;
      const tagName = element.tagName;
      return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    }
    const showSearch = ref(false);
    {
      onKeyStroke("k", (event) => {
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
      onKeyStroke("/", (event) => {
        if (!isEditingContent(event)) {
          event.preventDefault();
          showSearch.value = true;
        }
      });
    }
    const provider = "local";
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$i, [
        unref(provider) === "local" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          showSearch.value ? (openBlock(), createBlock(unref(VPLocalSearchBox), {
            key: 0,
            onClose: _cache[0] || (_cache[0] = ($event) => showSearch.value = false)
          })) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_2$a, [
            createVNode(_sfc_main$p, {
              onClick: _cache[1] || (_cache[1] = ($event) => showSearch.value = true)
            })
          ])
        ], 64)) : unref(provider) === "algolia" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          loaded.value ? (openBlock(), createBlock(unref(VPAlgoliaSearchBox), {
            key: 0,
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: _cache[2] || (_cache[2] = ($event) => actuallyLoaded.value = true)
          }, null, 8, ["algolia"])) : createCommentVNode("", true),
          !actuallyLoaded.value ? (openBlock(), createElementBlock("div", _hoisted_3$6, [
            createVNode(_sfc_main$p, { onClick: load })
          ])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavBarSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-164c457f"]]);
const _hoisted_1$h = ["href", "rel", "target"];
const _hoisted_2$9 = ["innerHTML"];
const _hoisted_3$5 = { key: 2 };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }])
      }, [
        createBaseVNode("a", {
          class: "title",
          href: link.value ?? unref(normalizeLink$1)(unref(currentLang).link),
          rel: rel.value,
          target: target.value
        }, [
          renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true),
          unref(theme2).logo ? (openBlock(), createBlock(VPImage, {
            key: 0,
            class: "logo",
            image: unref(theme2).logo
          }, null, 8, ["image"])) : createCommentVNode("", true),
          unref(theme2).siteTitle ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: unref(theme2).siteTitle
          }, null, 8, _hoisted_2$9)) : unref(theme2).siteTitle === void 0 ? (openBlock(), createElementBlock("span", _hoisted_3$5, toDisplayString(unref(site).title), 1)) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
        ], 8, _hoisted_1$h)
      ], 2);
    };
  }
});
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-0f4f798b"]]);
const _hoisted_1$g = { class: "items" };
const _hoisted_2$8 = { class: "title" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock(VPFlyout, {
        key: 0,
        class: "VPNavBarTranslations",
        icon: "vpi-languages",
        label: unref(theme2).langMenuLabel || "Change language"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$g, [
            createBaseVNode("p", _hoisted_2$8, toDisplayString(unref(currentLang).label), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
              return openBlock(), createBlock(VPMenuLink, {
                key: locale.link,
                item: locale
              }, null, 8, ["item"]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["label"])) : createCommentVNode("", true);
    };
  }
});
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-c80d9ad0"]]);
const _hoisted_1$f = { class: "wrapper" };
const _hoisted_2$7 = { class: "container" };
const _hoisted_3$4 = { class: "title" };
const _hoisted_4$4 = { class: "content" };
const _hoisted_5$3 = { class: "content-body" };
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavBar", classes.value])
      }, [
        createBaseVNode("div", _hoisted_1$f, [
          createBaseVNode("div", _hoisted_2$7, [
            createBaseVNode("div", _hoisted_3$4, [
              createVNode(VPNavBarTitle, null, {
                "nav-bar-title-before": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
                ]),
                "nav-bar-title-after": withCtx(() => [
                  renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
                ]),
                _: 3
              })
            ]),
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("div", _hoisted_5$3, [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true),
                createVNode(_sfc_main$o, { class: "search" }),
                createVNode(VPNavBarMenu, { class: "menu" }),
                createVNode(VPNavBarTranslations, { class: "translations" }),
                createVNode(VPNavBarAppearance, { class: "appearance" }),
                createVNode(VPNavBarSocialLinks, { class: "social-links" }),
                createVNode(VPNavBarExtra, { class: "extra" }),
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true),
                createVNode(VPNavBarHamburger, {
                  class: "hamburger",
                  active: __props.isScreenOpen,
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("toggle-screen"))
                }, null, 8, ["active"])
              ])
            ])
          ])
        ]),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "divider" }, [
          createBaseVNode("div", { class: "divider-line" })
        ], -1))
      ], 2);
    };
  }
});
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-822684d1"]]);
const _hoisted_1$e = {
  key: 0,
  class: "VPNavScreenAppearance"
};
const _hoisted_2$6 = { class: "text" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("p", _hoisted_2$6, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
        createVNode(VPSwitchAppearance)
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-ffb44008"]]);
const _hoisted_1$d = ["innerHTML"];
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$V, {
        class: "VPNavScreenMenuLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$d)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-735512b8"]]);
const _hoisted_1$c = ["innerHTML"];
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$V, {
        class: "VPNavScreenMenuGroupLink",
        href: __props.item.link,
        target: __props.item.target,
        rel: __props.item.rel,
        "no-icon": __props.item.noIcon,
        onClick: unref(closeScreen)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            innerHTML: __props.item.text
          }, null, 8, _hoisted_1$c)
        ]),
        _: 1
      }, 8, ["href", "target", "rel", "no-icon", "onClick"]);
    };
  }
});
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-372ae7c0"]]);
const _hoisted_1$b = { class: "VPNavScreenMenuGroupSection" };
const _hoisted_2$5 = {
  key: 0,
  class: "title"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_2$5, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
          return openBlock(), createBlock(VPNavScreenMenuGroupLink, {
            key: item.text,
            item
          }, null, 8, ["item"]);
        }), 128))
      ]);
    };
  }
});
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-4b8941ac"]]);
const _hoisted_1$a = ["aria-controls", "aria-expanded"];
const _hoisted_2$4 = ["innerHTML"];
const _hoisted_3$3 = ["id"];
const _hoisted_4$3 = {
  key: 0,
  class: "item"
};
const _hoisted_5$2 = {
  key: 1,
  class: "item"
};
const _hoisted_6$2 = {
  key: 2,
  class: "group"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["VPNavScreenMenuGroup", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "button",
          "aria-controls": groupId.value,
          "aria-expanded": isOpen.value,
          onClick: toggle
        }, [
          createBaseVNode("span", {
            class: "button-text",
            innerHTML: __props.text
          }, null, 8, _hoisted_2$4),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-plus button-icon" }, null, -1))
        ], 8, _hoisted_1$a),
        createBaseVNode("div", {
          id: groupId.value,
          class: "items"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
            return openBlock(), createElementBlock(Fragment, {
              key: JSON.stringify(item)
            }, [
              "link" in item ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
                createVNode(VPNavScreenMenuGroupLink, { item }, null, 8, ["item"])
              ])) : "component" in item ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
                (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null, 16))
              ])) : (openBlock(), createElementBlock("div", _hoisted_6$2, [
                createVNode(VPNavScreenMenuGroupSection, {
                  text: item.text,
                  items: item.items
                }, null, 8, ["text", "items"])
              ]))
            ], 64);
          }), 128))
        ], 8, _hoisted_3$3)
      ], 2);
    };
  }
});
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-875057a5"]]);
const _hoisted_1$9 = {
  key: 0,
  class: "VPNavScreenMenu"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).nav ? (openBlock(), createElementBlock("nav", _hoisted_1$9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(theme2).nav, (item) => {
          return openBlock(), createElementBlock(Fragment, {
            key: JSON.stringify(item)
          }, [
            "link" in item ? (openBlock(), createBlock(VPNavScreenMenuLink, {
              key: 0,
              item
            }, null, 8, ["item"])) : "component" in item ? (openBlock(), createBlock(resolveDynamicComponent(item.component), mergeProps({
              key: 1,
              ref_for: true
            }, item.props, { "screen-menu": "" }), null, 16)) : (openBlock(), createBlock(VPNavScreenMenuGroup, {
              key: 2,
              text: item.text || "",
              items: item.items
            }, null, 8, ["text", "items"]))
          ], 64);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _cache) => {
      return unref(theme2).socialLinks ? (openBlock(), createBlock(VPSocialLinks, {
        key: 0,
        class: "VPNavScreenSocialLinks",
        links: unref(theme2).socialLinks
      }, null, 8, ["links"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$8 = { class: "list" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    function toggle() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["VPNavScreenTranslations", { open: isOpen.value }])
      }, [
        createBaseVNode("button", {
          class: "title",
          onClick: toggle
        }, [
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "vpi-languages icon lang" }, null, -1)),
          createTextVNode(" " + toDisplayString(unref(currentLang).label) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "vpi-chevron-down icon chevron" }, null, -1))
        ]),
        createBaseVNode("ul", _hoisted_1$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
            return openBlock(), createElementBlock("li", {
              key: locale.link,
              class: "item"
            }, [
              createVNode(_sfc_main$V, {
                class: "link",
                href: locale.link
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(locale.text), 1)
                ]),
                _: 2
              }, 1032, ["href"])
            ]);
          }), 128))
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-362991c2"]]);
const _hoisted_1$7 = { class: "container" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onEnter: _cache[0] || (_cache[0] = ($event) => isLocked.value = true),
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => isLocked.value = false)
      }, {
        default: withCtx(() => [
          __props.open ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "VPNavScreen",
            ref_key: "screen",
            ref: screen,
            id: "VPNavScreen"
          }, [
            createBaseVNode("div", _hoisted_1$7, [
              renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true),
              createVNode(_sfc_main$e, { class: "menu" }),
              createVNode(VPNavScreenTranslations, { class: "translations" }),
              createVNode(VPNavScreenAppearance, { class: "appearance" }),
              createVNode(_sfc_main$d, { class: "social-links" }),
              renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
            ])
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 3
      });
    };
  }
});
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-833aabba"]]);
const _hoisted_1$6 = {
  key: 0,
  class: "VPNav"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _cache) => {
      return hasNavbar.value ? (openBlock(), createElementBlock("header", _hoisted_1$6, [
        createVNode(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["is-screen-open", "onToggleScreen"]),
        createVNode(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"])
      ])) : createCommentVNode("", true);
    };
  }
});
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-f1e365da"]]);
const _hoisted_1$5 = ["role", "tabindex"];
const _hoisted_2$3 = {
  key: 1,
  class: "items"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _cache) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      return openBlock(), createBlock(resolveDynamicComponent(sectionTag.value), {
        class: normalizeClass(["VPSidebarItem", classes.value])
      }, {
        default: withCtx(() => [
          __props.item.text ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "item",
            role: itemRole.value
          }, toHandlers(
            __props.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
            true
          ), {
            tabindex: __props.item.items && 0
          }), [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "indicator" }, null, -1)),
            __props.item.link ? (openBlock(), createBlock(_sfc_main$V, {
              key: 0,
              tag: linkTag.value,
              class: "link",
              href: __props.item.link,
              rel: __props.item.rel,
              target: __props.item.target
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  class: "text",
                  innerHTML: __props.item.text
                }, null, 8, ["innerHTML"]))
              ]),
              _: 1
            }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
              key: 1,
              class: "text",
              innerHTML: __props.item.text
            }, null, 8, ["innerHTML"])),
            __props.item.collapsed != null && __props.item.items && __props.item.items.length ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: "caret",
              role: "button",
              "aria-label": "toggle section",
              onClick: onCaretClick,
              onKeydown: withKeys(onCaretClick, ["enter"]),
              tabindex: "0"
            }, [..._cache[0] || (_cache[0] = [
              createBaseVNode("span", { class: "vpi-chevron-right caret-icon" }, null, -1)
            ])], 32)) : createCommentVNode("", true)
          ], 16, _hoisted_1$5)) : createCommentVNode("", true),
          __props.item.items && __props.item.items.length ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
            __props.depth < 5 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.item.items, (i) => {
              return openBlock(), createBlock(_component_VPSidebarItem, {
                key: i.text,
                item: i,
                depth: __props.depth + 1
              }, null, 8, ["item", "depth"]);
            }), 128)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a4b0d9bf"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.text,
          class: normalizeClass(["group", { "no-transition": disableTransition.value }])
        }, [
          createVNode(VPSidebarItem, {
            item,
            depth: 0
          }, null, 8, ["item"])
        ], 2);
      }), 128);
    };
  }
});
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9e426adc"]]);
const _hoisted_1$4 = {
  class: "nav",
  id: "VPSidebarNav",
  "aria-labelledby": "sidebar-aria-label",
  tabindex: "-1"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      return unref(hasSidebar) ? (openBlock(), createElementBlock("aside", {
        key: 0,
        class: normalizeClass(["VPSidebar", { open: __props.open }]),
        ref_key: "navEl",
        ref: navEl,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "curtain" }, null, -1)),
        createBaseVNode("nav", _hoisted_1$4, [
          _cache[1] || (_cache[1] = createBaseVNode("span", {
            class: "visually-hidden",
            id: "sidebar-aria-label"
          }, " Sidebar Navigation ", -1)),
          renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true),
          (openBlock(), createBlock(VPSidebarGroup, {
            items: unref(sidebarGroups),
            key: key.value
          }, null, 8, ["items"])),
          renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
        ])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-18756405"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    function focusOnTargetAnchor({ target }) {
      const el = document.getElementById(
        decodeURIComponent(target.hash).slice(1)
      );
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("span", {
          ref_key: "backToTop",
          ref: backToTop,
          tabindex: "-1"
        }, null, 512),
        createBaseVNode("a", {
          href: "#VPContent",
          class: "VPSkipLink visually-hidden",
          onClick: focusOnTargetAnchor
        }, toDisplayString(unref(theme2).skipToContentLabel || "Skip to content"), 1)
      ], 64);
    };
  }
});
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-492508fc"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return unref(frontmatter).layout !== false ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["Layout", unref(frontmatter).pageClass])
      }, [
        renderSlot(_ctx.$slots, "layout-top", {}, void 0, true),
        createVNode(VPSkipLink),
        createVNode(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, 8, ["show", "onClick"]),
        createVNode(VPNav, null, {
          "nav-bar-title-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
          ]),
          "nav-bar-title-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
          ]),
          "nav-bar-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
          ]),
          "nav-bar-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
          ]),
          "nav-screen-content-before": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
          ]),
          "nav-screen-content-after": withCtx(() => [
            renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, 8, ["open", "onOpenMenu"]),
        createVNode(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
          ]),
          "sidebar-nav-after": withCtx(() => [
            renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["open"]),
        createVNode(VPContent, null, {
          "page-top": withCtx(() => [
            renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
          ]),
          "page-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
          ]),
          "not-found": withCtx(() => [
            renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
          ]),
          "home-hero-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
          ]),
          "home-hero-info-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
          ]),
          "home-hero-info": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
          ]),
          "home-hero-info-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
          ]),
          "home-hero-actions-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
          ]),
          "home-hero-image": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
          ]),
          "home-hero-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
          ]),
          "home-features-before": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
          ]),
          "home-features-after": withCtx(() => [
            renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
          ]),
          "doc-footer-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
          ]),
          "doc-before": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
          ]),
          "doc-after": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
          ]),
          "doc-top": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
          ]),
          "doc-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
          ]),
          "aside-top": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
          ]),
          "aside-bottom": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
          ]),
          "aside-outline-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
          ]),
          "aside-outline-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
          ]),
          "aside-ads-before": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
          ]),
          "aside-ads-after": withCtx(() => [
            renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
          ]),
          _: 3
        }),
        createVNode(VPFooter),
        renderSlot(_ctx.$slots, "layout-bottom", {}, void 0, true)
      ], 2)) : (openBlock(), createBlock(_component_Content, { key: 1 }));
    };
  }
});
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a9a9e638"]]);
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$10);
  }
};
const _hoisted_1$3 = {
  key: 0,
  class: "reading-progress",
  "aria-hidden": "true"
};
const _hoisted_2$2 = ["aria-label"];
const _hoisted_3$2 = { class: "chapter-spotlight__body" };
const _hoisted_4$2 = ["href"];
const STORAGE_KEY$1 = "wexler.chapterSpotlight.position";
const COLLAPSE_KEY = "wexler.chapterSpotlight.collapsed";
const _sfc_main$4 = {
  __name: "ReadingEnhancer",
  setup(__props) {
    const route = useRoute();
    const progress = ref(0);
    const showBackToTop = ref(false);
    const isBackToTopAnimating = ref(false);
    const navItems = ref([]);
    const activeId = ref("");
    const isDocPage = ref(false);
    const isWideScreen = ref(false);
    const chapterPanel = ref(null);
    const chapterPosition = ref(null);
    const isDragging = ref(false);
    const isCollapsed = ref(false);
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let headingNodes = [];
    let rafId = 0;
    let routeTimer = null;
    const showProgress = computed(() => isDocPage.value);
    const showChapterNav = computed(
      () => isDocPage.value && isWideScreen.value && navItems.value.length > 0
    );
    const chapterStyle = computed(() => {
      if (!chapterPosition.value) return null;
      return {
        left: `${chapterPosition.value.left}px`,
        top: `${chapterPosition.value.top}px`
      };
    });
    function clamp2(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }
    function scrollToTop(smooth = true) {
      if (isBackToTopAnimating.value) return;
      isBackToTopAnimating.value = true;
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
      setTimeout(() => {
        isBackToTopAnimating.value = false;
      }, 600);
    }
    function shortText(value) {
      const text = (value || "").replace(/\s+/g, " ").trim();
      if (text.length <= 24) return text;
      return `${text.slice(0, 24)}...`;
    }
    function saveChapterPosition() {
      if (!chapterPosition.value) return;
      try {
        localStorage.setItem(STORAGE_KEY$1, JSON.stringify(chapterPosition.value));
      } catch (error) {
      }
    }
    function loadChapterPosition() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY$1);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        if (typeof (parsed == null ? void 0 : parsed.left) === "number" && Number.isFinite(parsed.left) && typeof (parsed == null ? void 0 : parsed.top) === "number" && Number.isFinite(parsed.top)) {
          chapterPosition.value = { left: parsed.left, top: parsed.top };
        }
      } catch (error) {
        chapterPosition.value = null;
      }
    }
    function saveCollapseState() {
      try {
        localStorage.setItem(COLLAPSE_KEY, isCollapsed.value ? "1" : "0");
      } catch (error) {
      }
    }
    function loadCollapseState() {
      try {
        isCollapsed.value = localStorage.getItem(COLLAPSE_KEY) === "1";
      } catch (error) {
        isCollapsed.value = false;
      }
    }
    function getPanelSize() {
      var _a, _b;
      const width = ((_a = chapterPanel.value) == null ? void 0 : _a.offsetWidth) || 216;
      const height = ((_b = chapterPanel.value) == null ? void 0 : _b.offsetHeight) || 300;
      return { width, height };
    }
    function clampPosition(left, top) {
      const { width, height } = getPanelSize();
      const margin = 10;
      const minLeft = margin;
      const maxLeft = Math.max(minLeft, window.innerWidth - width - margin);
      const minTop = margin;
      const maxTop = Math.max(minTop, window.innerHeight - height - margin);
      return {
        left: clamp2(left, minLeft, maxLeft),
        top: clamp2(top, minTop, maxTop)
      };
    }
    function ensureChapterPosition() {
      nextTick(() => {
        if (!showChapterNav.value) return;
        const panel = chapterPanel.value;
        if (!panel) return;
        if (chapterPosition.value) {
          chapterPosition.value = clampPosition(
            chapterPosition.value.left,
            chapterPosition.value.top
          );
          return;
        }
        const rect = panel.getBoundingClientRect();
        chapterPosition.value = clampPosition(rect.left, rect.top);
      });
    }
    function setWideScreen() {
      isWideScreen.value = window.matchMedia("(min-width: 1280px)").matches;
      if (chapterPosition.value) {
        chapterPosition.value = clampPosition(
          chapterPosition.value.left,
          chapterPosition.value.top
        );
      }
    }
    function toggleCollapse() {
      isCollapsed.value = !isCollapsed.value;
      saveCollapseState();
      ensureChapterPosition();
    }
    function stopDragging() {
      if (!isDragging.value) return;
      isDragging.value = false;
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      saveChapterPosition();
    }
    function handleDragMove(event) {
      if (!isDragging.value) return;
      chapterPosition.value = clampPosition(
        event.clientX - dragOffsetX,
        event.clientY - dragOffsetY
      );
    }
    function startDragging(event) {
      if (event.button !== 0) return;
      ensureChapterPosition();
      const panel = chapterPanel.value;
      if (!panel) return;
      const rect = panel.getBoundingClientRect();
      const currentPosition = chapterPosition.value || { left: rect.left, top: rect.top };
      dragOffsetX = event.clientX - currentPosition.left;
      dragOffsetY = event.clientY - currentPosition.top;
      isDragging.value = true;
      window.addEventListener("pointermove", handleDragMove);
      window.addEventListener("pointerup", stopDragging);
      window.addEventListener("pointercancel", stopDragging);
      event.preventDefault();
    }
    function collectHeadings() {
      var _a;
      const docRoot = document.querySelector(".VPDoc .vp-doc");
      if (!docRoot) {
        isDocPage.value = false;
        navItems.value = [];
        activeId.value = "";
        headingNodes = [];
        return;
      }
      isDocPage.value = true;
      headingNodes = Array.from(docRoot.querySelectorAll("h2[id], h3[id]"));
      navItems.value = headingNodes.map((node) => ({
        id: node.id,
        level: node.tagName.toLowerCase(),
        text: shortText(node.textContent)
      }));
      activeId.value = ((_a = navItems.value[0]) == null ? void 0 : _a.id) || "";
    }
    function paintActiveHeading() {
      if (!headingNodes.length) return;
      headingNodes.forEach((node) => {
        node.classList.toggle("is-reading", node.id === activeId.value);
      });
    }
    function updateProgress() {
      const docRoot = document.querySelector(".VPDoc .vp-doc");
      if (!docRoot) {
        progress.value = 0;
        return;
      }
      const articleStart = docRoot.getBoundingClientRect().top + window.scrollY - 96;
      const articleEnd = articleStart + docRoot.offsetHeight - window.innerHeight * 0.7;
      if (articleEnd <= articleStart) {
        progress.value = 1;
        return;
      }
      const ratio = (window.scrollY - articleStart) / (articleEnd - articleStart);
      progress.value = clamp2(ratio, 0, 1);
    }
    function updateActiveHeading() {
      if (!headingNodes.length) {
        activeId.value = "";
        return;
      }
      const marker = window.scrollY + 140;
      let current = headingNodes[0];
      for (const node of headingNodes) {
        if (node.offsetTop <= marker) {
          current = node;
        } else {
          break;
        }
      }
      activeId.value = (current == null ? void 0 : current.id) || "";
    }
    function handleScrollOrResize() {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateProgress();
        updateActiveHeading();
        paintActiveHeading();
        showBackToTop.value = window.scrollY > 400;
        rafId = 0;
      });
    }
    function reinitializeForRoute() {
      nextTick(() => {
        collectHeadings();
        setWideScreen();
        ensureChapterPosition();
        handleScrollOrResize();
      });
    }
    onMounted(() => {
      loadChapterPosition();
      loadCollapseState();
      reinitializeForRoute();
      window.addEventListener("scroll", handleScrollOrResize, { passive: true });
      window.addEventListener("resize", handleScrollOrResize, { passive: true });
      window.addEventListener("resize", setWideScreen, { passive: true });
    });
    watch(
      () => route.path,
      () => {
        if (routeTimer) window.clearTimeout(routeTimer);
        routeTimer = window.setTimeout(reinitializeForRoute, 90);
      }
    );
    watch(showChapterNav, (visible) => {
      if (visible) ensureChapterPosition();
    });
    onBeforeUnmount(() => {
      if (routeTimer) window.clearTimeout(routeTimer);
      if (rafId) window.cancelAnimationFrame(rafId);
      stopDragging();
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("resize", setWideScreen);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        showProgress.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
          createBaseVNode("span", {
            class: "reading-progress__bar",
            style: normalizeStyle({ transform: `scaleX(${progress.value})` })
          }, null, 4)
        ])) : createCommentVNode("", true),
        createVNode(Transition, { name: "back-to-top" }, {
          default: withCtx(() => [
            showBackToTop.value && isDocPage.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "back-to-top-btn",
              "aria-label": "返回顶部",
              onClick: _cache[0] || (_cache[0] = ($event) => scrollToTop())
            }, [..._cache[2] || (_cache[2] = [
              createBaseVNode("svg", {
                class: "back-to-top-icon",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createBaseVNode("path", { d: "M12 19V5M5 12l7-7 7 7" })
              ], -1)
            ])])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        showChapterNav.value ? (openBlock(), createElementBlock("aside", {
          key: 1,
          ref_key: "chapterPanel",
          ref: chapterPanel,
          class: normalizeClass(["chapter-spotlight", { "is-dragging": isDragging.value, "is-collapsed": isCollapsed.value }]),
          style: normalizeStyle(chapterStyle.value),
          "aria-label": "章节导航"
        }, [
          createBaseVNode("div", {
            class: "chapter-spotlight__drag",
            onPointerdown: startDragging
          }, [
            _cache[3] || (_cache[3] = createBaseVNode("p", { class: "chapter-spotlight__title" }, "章节导航", -1)),
            createBaseVNode("button", {
              class: normalizeClass(["chapter-spotlight__toggle", { "is-collapsed": isCollapsed.value }]),
              "aria-label": isCollapsed.value ? "展开章节导航" : "收起章节导航",
              type: "button",
              onPointerdown: _cache[1] || (_cache[1] = withModifiers(() => {
              }, ["stop"])),
              onClick: withModifiers(toggleCollapse, ["stop"])
            }, null, 42, _hoisted_2$2)
          ], 32),
          withDirectives(createBaseVNode("div", _hoisted_3$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(navItems.value, (item) => {
              return openBlock(), createElementBlock("a", {
                key: item.id,
                class: normalizeClass(["chapter-spotlight__link", [`is-${item.level}`, { "is-active": item.id === activeId.value }]]),
                href: `#${item.id}`
              }, toDisplayString(item.text), 11, _hoisted_4$2);
            }), 128))
          ], 512), [
            [vShow, !isCollapsed.value]
          ])
        ], 6)) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const STORAGE_KEY = "wexler.homeFx.mode";
const homeFxMode = ref("default");
let initialized$1 = false;
let writeRaf = 0;
let queuedMode = "default";
function safeReadStorage$1() {
  if (typeof window === "undefined") return "0";
  try {
    return localStorage.getItem(STORAGE_KEY) || "0";
  } catch (error) {
    return "0";
  }
}
function safeWriteStorage$1(value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch (error) {
  }
}
function normalizeMode(mode) {
  return mode === "glass" || mode === "liquid" ? mode : "default";
}
function applyHomeFxMode(mode) {
  if (homeFxMode.value === mode) return;
  homeFxMode.value = mode;
  safeWriteStorage$1(mode);
}
function initHomeFxState() {
  if (initialized$1) return;
  const savedMode = safeReadStorage$1();
  homeFxMode.value = normalizeMode(savedMode);
  queuedMode = homeFxMode.value;
  initialized$1 = true;
}
function setHomeFxMode(mode) {
  const normalized = normalizeMode(mode);
  if (typeof window === "undefined") {
    applyHomeFxMode(normalized);
    return;
  }
  queuedMode = normalized;
  if (writeRaf) {
    window.cancelAnimationFrame(writeRaf);
  }
  writeRaf = window.requestAnimationFrame(() => {
    writeRaf = 0;
    applyHomeFxMode(queuedMode);
  });
}
function toggleHomeFxMode(targetMode) {
  if (targetMode !== "glass" && targetMode !== "liquid") {
    setHomeFxMode("default");
    return;
  }
  setHomeFxMode(homeFxMode.value === targetMode ? "default" : targetMode);
}
const _hoisted_2$1 = {
  key: 2,
  class: "home-fx-layer__liquid-aura"
};
const _hoisted_3$1 = {
  key: 3,
  class: "home-fx-blob home-fx-blob--one"
};
const _hoisted_4$1 = {
  key: 4,
  class: "home-fx-blob home-fx-blob--two"
};
const _hoisted_5$1 = {
  key: 5,
  class: "home-fx-blob home-fx-blob--three"
};
const _hoisted_6$1 = {
  key: 1,
  class: "home-liquid-stage"
};
const _hoisted_7$1 = { class: "home-liquid-player__top" };
const _hoisted_8$1 = ["aria-label"];
const _hoisted_9$1 = { class: "home-liquid-player__transport" };
const _hoisted_10$1 = ["aria-label"];
const _hoisted_11$1 = {
  key: 0,
  class: "home-liquid-player__pause-icon"
};
const _hoisted_12$1 = {
  key: 1,
  class: "home-liquid-player__play-icon"
};
const _hoisted_13$1 = { class: "home-liquid-player__track" };
const _hoisted_14$1 = { class: "home-liquid-player__timeline" };
const _hoisted_15$1 = { class: "home-liquid-player__time" };
const _hoisted_16$1 = ["max", "value"];
const _hoisted_17$1 = { class: "home-liquid-player__time" };
const _hoisted_18$1 = { class: "home-liquid-player__volume" };
const _hoisted_19$1 = ["value"];
const _hoisted_20$1 = { class: "home-liquid-player__volume-value" };
const IMAGE_SRC = "";
const VIDEO_SRC = "/media/home-bg/Bg1.mp4";
const LIQUID_BGM_SRC = "/media/home-bgm/liquid-bgm.flac";
const LIQUID_BGM_TITLE = "60% Reverie";
const LIQUID_BGM_ARTIST = "ZZ-STUDIO x HOYO-MiX";
const LIQUID_HERO_LABEL = "Digital Garden";
const LIQUID_HERO_TITLE = "Wexler's Notes";
const LIQUID_HERO_SUBTITLE = "全栈开发与运维知识库";
const _sfc_main$3 = {
  __name: "HomeFxBackdrop",
  setup(__props) {
    const route = useRoute();
    const bgmRef = ref(null);
    const isPlaying = ref(false);
    const currentTime = ref(0);
    const duration = ref(0);
    const isSeeking = ref(false);
    const volume = ref(0.45);
    const isMiniPlayer = ref(false);
    const isVolumePanelVisible = ref(false);
    const isHome = computed(() => route.path === "/");
    const isSkyTakeOut = computed(() => route.path.startsWith("/Sky-Take-Out/"));
    const isGlassActive = computed(() => homeFxMode.value === "glass");
    const isLiquidActive = computed(() => homeFxMode.value === "liquid");
    const isActive2 = computed(() => isGlassActive.value || isLiquidActive.value);
    const isLiquidHomeStage = computed(() => isHome.value && homeFxMode.value === "liquid");
    const isLiquidHomeBgm = computed(() => isHome.value && homeFxMode.value === "liquid");
    const isMuted = computed(() => volume.value <= 1e-3);
    const volumePercent = computed(() => Math.round(volume.value * 100));
    const layerStyle = computed(() => ({
      "--home-fx-image": `url("${IMAGE_SRC}")`
    }));
    function syncHtmlClass() {
      if (typeof document === "undefined") return;
      const mode = homeFxMode.value;
      const sky = isSkyTakeOut.value;
      document.documentElement.classList.toggle("home-default-mode", isHome.value && mode === "default");
      document.documentElement.classList.toggle("home-glass-mode", mode === "glass");
      document.documentElement.classList.toggle("home-liquid-mode", mode === "liquid");
      document.documentElement.classList.toggle("sky-default-mode", sky && mode === "default");
      document.documentElement.classList.toggle("sky-glass-mode", sky && mode === "glass");
      document.documentElement.classList.toggle("sky-liquid-mode", sky && mode === "liquid");
    }
    function formatDuration(seconds) {
      if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }
    function clamp2(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }
    function setVolume(nextValue) {
      const resolved = clamp2(Number.isFinite(nextValue) ? nextValue : volume.value, 0, 1);
      volume.value = resolved;
      const audio = bgmRef.value;
      if (!audio) return;
      audio.volume = resolved;
      audio.muted = resolved <= 1e-3;
    }
    function syncPlaybackState() {
      const audio = bgmRef.value;
      if (!audio) return;
      isPlaying.value = !audio.paused && !audio.ended;
      duration.value = Number.isFinite(audio.duration) ? audio.duration : 0;
      if (!isSeeking.value) {
        currentTime.value = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
      }
    }
    function syncBgm() {
      const audio = bgmRef.value;
      if (!audio) return;
      if (isLiquidHomeBgm.value) {
        setVolume(volume.value);
        syncPlaybackState();
        return;
      }
      audio.pause();
      audio.currentTime = 0;
      syncPlaybackState();
    }
    function togglePlay() {
      const audio = bgmRef.value;
      if (!audio) return;
      if (audio.paused || audio.ended) {
        const playPromise = audio.play();
        if (playPromise == null ? void 0 : playPromise.catch) {
          playPromise.catch(() => {
          });
        }
        return;
      }
      audio.pause();
    }
    function handleSeekInput(event) {
      const value = Number(event.target.value);
      currentTime.value = Number.isFinite(value) ? value : 0;
      isSeeking.value = true;
    }
    function handleSeekCommit(event) {
      const audio = bgmRef.value;
      if (!audio) return;
      const value = Number(event.target.value);
      audio.currentTime = Number.isFinite(value) ? value : 0;
      currentTime.value = audio.currentTime;
      isSeeking.value = false;
    }
    function handleVolumeInput(event) {
      const value = Number(event.target.value);
      const percent = Number.isFinite(value) ? value : volumePercent.value;
      setVolume(percent / 100);
    }
    function toggleMiniPlayer() {
      isMiniPlayer.value = !isMiniPlayer.value;
      if (isMiniPlayer.value) {
        isVolumePanelVisible.value = false;
      }
    }
    function toggleVolumePanel() {
      if (isMiniPlayer.value) return;
      isVolumePanelVisible.value = !isVolumePanelVisible.value;
    }
    function seekBy(deltaSeconds) {
      const audio = bgmRef.value;
      if (!audio) return;
      const maxDuration = Number.isFinite(audio.duration) ? audio.duration : 0;
      const target = clamp2((Number.isFinite(audio.currentTime) ? audio.currentTime : 0) + deltaSeconds, 0, maxDuration);
      audio.currentTime = target;
      currentTime.value = target;
    }
    onMounted(async () => {
      initHomeFxState();
      syncHtmlClass();
      setVolume(volume.value);
      await nextTick();
      syncBgm();
    });
    watch([() => homeFxMode.value, () => route.path], async () => {
      syncHtmlClass();
      await nextTick();
      syncBgm();
    });
    onBeforeUnmount(() => {
      const audio = bgmRef.value;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      isVolumePanelVisible.value = false;
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("home-default-mode");
        document.documentElement.classList.remove("home-glass-mode");
        document.documentElement.classList.remove("home-liquid-mode");
        document.documentElement.classList.remove("sky-default-mode");
        document.documentElement.classList.remove("sky-glass-mode");
        document.documentElement.classList.remove("sky-liquid-mode");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        isActive2.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["home-fx-layer", { "is-liquid": isLiquidActive.value, "is-glass": isGlassActive.value }]),
          style: normalizeStyle(layerStyle.value),
          "aria-hidden": "true"
        }, [
          (openBlock(), createElementBlock("video", {
            key: 0,
            class: "home-fx-layer__video",
            autoplay: "",
            muted: "",
            loop: "",
            playsinline: "",
            src: VIDEO_SRC
          })),
          isLiquidActive.value ? (openBlock(), createElementBlock("div", _hoisted_2$1)) : createCommentVNode("", true),
          isLiquidActive.value ? (openBlock(), createElementBlock("span", _hoisted_3$1)) : createCommentVNode("", true),
          isLiquidActive.value ? (openBlock(), createElementBlock("span", _hoisted_4$1)) : createCommentVNode("", true),
          isLiquidActive.value ? (openBlock(), createElementBlock("span", _hoisted_5$1)) : createCommentVNode("", true)
        ], 6)) : createCommentVNode("", true),
        isLiquidHomeStage.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
          createBaseVNode("section", {
            class: "home-liquid-intro-card",
            "aria-label": "Site introduction"
          }, [
            createBaseVNode("p", { class: "home-liquid-intro-card__kicker" }, toDisplayString(LIQUID_HERO_LABEL)),
            createBaseVNode("h1", { class: "home-liquid-intro-card__title" }, toDisplayString(LIQUID_HERO_TITLE)),
            createBaseVNode("p", { class: "home-liquid-intro-card__lead" }, toDisplayString(LIQUID_HERO_SUBTITLE))
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["home-liquid-player", { "is-mini": isMiniPlayer.value }]),
            role: "group",
            "aria-label": "Background music controls"
          }, [
            createBaseVNode("div", _hoisted_7$1, [
              createBaseVNode("button", {
                type: "button",
                class: "home-liquid-player__mini-toggle",
                "aria-label": isMiniPlayer.value ? "Expand player" : "Minimize player",
                onClick: toggleMiniPlayer
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(["home-liquid-player__mini-icon", { "is-mini": isMiniPlayer.value }])
                }, null, 2)
              ], 8, _hoisted_8$1),
              createBaseVNode("div", _hoisted_9$1, [
                createBaseVNode("button", {
                  type: "button",
                  class: "home-liquid-player__ctrl",
                  "aria-label": "Back 10 seconds",
                  onClick: _cache[0] || (_cache[0] = ($event) => seekBy(-10))
                }, [..._cache[2] || (_cache[2] = [
                  createBaseVNode("span", { class: "home-liquid-player__ctrl-icon home-liquid-player__ctrl-icon--back" }, null, -1)
                ])]),
                createBaseVNode("button", {
                  type: "button",
                  class: "home-liquid-player__ctrl home-liquid-player__ctrl--main",
                  "aria-label": isPlaying.value ? "Pause background music" : "Play background music",
                  onClick: togglePlay
                }, [
                  isPlaying.value ? (openBlock(), createElementBlock("span", _hoisted_11$1)) : (openBlock(), createElementBlock("span", _hoisted_12$1))
                ], 8, _hoisted_10$1),
                createBaseVNode("button", {
                  type: "button",
                  class: "home-liquid-player__ctrl",
                  "aria-label": "Forward 10 seconds",
                  onClick: _cache[1] || (_cache[1] = ($event) => seekBy(10))
                }, [..._cache[3] || (_cache[3] = [
                  createBaseVNode("span", { class: "home-liquid-player__ctrl-icon home-liquid-player__ctrl-icon--forward" }, null, -1)
                ])])
              ]),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(["home-liquid-player__volume-toggle", { "is-active": isVolumePanelVisible.value }]),
                "aria-label": "Toggle volume controls",
                onClick: toggleVolumePanel
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(["home-liquid-player__volume-icon", { "is-muted": isMuted.value }]),
                  "aria-hidden": "true"
                }, null, 2)
              ], 2)
            ]),
            withDirectives(createBaseVNode("p", _hoisted_13$1, toDisplayString(LIQUID_BGM_TITLE) + " · " + toDisplayString(LIQUID_BGM_ARTIST), 512), [
              [vShow, !isMiniPlayer.value]
            ]),
            createBaseVNode("div", _hoisted_14$1, [
              createBaseVNode("span", _hoisted_15$1, toDisplayString(formatDuration(currentTime.value)), 1),
              createBaseVNode("input", {
                class: "home-liquid-player__slider",
                type: "range",
                min: "0",
                max: Math.max(duration.value, 0.1),
                value: currentTime.value,
                step: "0.1",
                "aria-label": "Seek background music",
                onInput: handleSeekInput,
                onChange: handleSeekCommit
              }, null, 40, _hoisted_16$1),
              createBaseVNode("span", _hoisted_17$1, toDisplayString(formatDuration(duration.value)), 1)
            ]),
            withDirectives(createBaseVNode("div", _hoisted_18$1, [
              createBaseVNode("span", {
                class: normalizeClass(["home-liquid-player__volume-icon", { "is-muted": isMuted.value }]),
                "aria-hidden": "true"
              }, null, 2),
              createBaseVNode("input", {
                class: "home-liquid-player__volume-slider",
                type: "range",
                min: "0",
                max: "100",
                value: volumePercent.value,
                step: "1",
                "aria-label": "Background music volume",
                onInput: handleVolumeInput
              }, null, 40, _hoisted_19$1),
              createBaseVNode("span", _hoisted_20$1, toDisplayString(volumePercent.value), 1)
            ], 512), [
              [vShow, isVolumePanelVisible.value && !isMiniPlayer.value]
            ])
          ], 2)
        ])) : createCommentVNode("", true),
        isLiquidHomeBgm.value ? (openBlock(), createElementBlock("audio", {
          key: 2,
          ref_key: "bgmRef",
          ref: bgmRef,
          preload: "metadata",
          loop: "",
          src: LIQUID_BGM_SRC,
          onPlay: syncPlaybackState,
          onPause: syncPlaybackState,
          onTimeupdate: syncPlaybackState,
          onLoadedmetadata: syncPlaybackState,
          onEnded: syncPlaybackState
        }, null, 544)) : createCommentVNode("", true)
      ], 64);
    };
  }
};
const _hoisted_1$2 = { class: "home-fx-switch" };
const _sfc_main$2 = {
  __name: "HomeFxToggle",
  setup(__props) {
    const isDark = ref(false);
    const isTransitioning = ref(false);
    const transitionOrigin = ref({ x: "100%", y: "0%" });
    let mediaQuery = null;
    let mutationObserver = null;
    let transitionTimer = null;
    function getEventPosition(event, buttonEl) {
      const button = buttonEl ?? (event == null ? void 0 : event.currentTarget);
      if (!(button == null ? void 0 : button.getBoundingClientRect)) return { x: "100%", y: "0%" };
      const rect = button.getBoundingClientRect();
      const x = `${(rect.left + rect.width / 2) / window.innerWidth * 100}%`;
      const y = `${(rect.top + rect.height / 2) / window.innerHeight * 100}%`;
      return { x, y };
    }
    function applyModeTransition(event, applyMode) {
      if (isTransitioning.value) return;
      triggerThemeTransition(event, event == null ? void 0 : event.currentTarget);
      applyMode();
    }
    function setDefault(event) {
      applyModeTransition(event, () => setHomeFxMode("default"));
    }
    function toggleGlass(event) {
      applyModeTransition(event, () => toggleHomeFxMode("glass"));
    }
    function toggleLiquid(event) {
      applyModeTransition(event, () => toggleHomeFxMode("liquid"));
    }
    function handleSystemDarkModeChange(e) {
      if (e.matches && !isDark.value) {
        isDark.value = true;
        document.documentElement.classList.add("dark");
      } else if (!e.matches && isDark.value) {
        isDark.value = false;
        document.documentElement.classList.remove("dark");
      }
    }
    function triggerThemeTransition(event, switchButton) {
      if (isTransitioning.value) return;
      isTransitioning.value = true;
      transitionOrigin.value = getEventPosition(event, switchButton);
      if (transitionTimer) window.clearTimeout(transitionTimer);
      transitionTimer = window.setTimeout(() => {
        isTransitioning.value = false;
        transitionTimer = null;
      }, 520);
    }
    function onAppearanceSwitchClickCapture(e) {
      var _a, _b;
      const switchBtn = (_b = (_a = e.target).closest) == null ? void 0 : _b.call(_a, "button.VPSwitchAppearance");
      if (!switchBtn) return;
      if (e.target.closest(".home-fx-switch")) return;
      triggerThemeTransition(e, switchBtn);
    }
    onMounted(() => {
      initHomeFxState();
      isDark.value = document.documentElement.classList.contains("dark");
      mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", handleSystemDarkModeChange);
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            isDark.value = document.documentElement.classList.contains("dark");
          }
        });
      });
      mutationObserver.observe(document.documentElement, { attributes: true });
      document.addEventListener("click", onAppearanceSwitchClickCapture, true);
    });
    onUnmounted(() => {
      if (mediaQuery) {
        mediaQuery.removeEventListener("change", handleSystemDarkModeChange);
        mediaQuery = null;
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = null;
      }
      if (transitionTimer) {
        window.clearTimeout(transitionTimer);
        transitionTimer = null;
      }
      document.removeEventListener("click", onAppearanceSwitchClickCapture, true);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass(["home-fx-toggle home-fx-toggle--default", { "is-active": unref(homeFxMode) === "default" }]),
            "aria-label": "Switch to default mode",
            title: "Default mode",
            onClick: setDefault
          }, [..._cache[0] || (_cache[0] = [
            createBaseVNode("span", { class: "home-fx-toggle__icon" }, null, -1),
            createBaseVNode("span", { class: "home-fx-toggle__text" }, "常态", -1)
          ])], 2),
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass(["home-fx-toggle", { "is-active": unref(homeFxMode) === "glass" }]),
            "aria-label": "Switch to glass mode",
            title: "Glass mode",
            onClick: toggleGlass
          }, [..._cache[1] || (_cache[1] = [
            createBaseVNode("span", { class: "home-fx-toggle__icon" }, null, -1),
            createBaseVNode("span", { class: "home-fx-toggle__text" }, "晶透", -1)
          ])], 2),
          createBaseVNode("button", {
            type: "button",
            class: normalizeClass(["home-fx-toggle home-fx-toggle--liquid", { "is-active": unref(homeFxMode) === "liquid" }]),
            "aria-label": "Switch to liquid mode",
            title: "Liquid mode",
            onClick: toggleLiquid
          }, [..._cache[2] || (_cache[2] = [
            createBaseVNode("span", { class: "home-fx-toggle__icon" }, null, -1),
            createBaseVNode("span", { class: "home-fx-toggle__text" }, "液态", -1)
          ])], 2)
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isTransitioning.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "theme-transition-overlay",
            style: normalizeStyle({
              "--transition-origin-x": transitionOrigin.value.x,
              "--transition-origin-y": transitionOrigin.value.y
            })
          }, null, 4)) : createCommentVNode("", true)
        ]))
      ], 64);
    };
  }
};
const EDIT_MODE_KEY = "wexler.editor.mode";
const ROUTE_DRAFT_KEY_PREFIX = "wexler.editor.layout.route.draft.v2.";
const ROUTE_PUBLISHED_KEY_PREFIX = "wexler.editor.layout.route.published.v2.";
const ROUTE_PUBLISHED_HISTORY_KEY_PREFIX = "wexler.editor.layout.route.published.history.v3.";
const LEGACY_ROUTE_LAYOUT_KEY_PREFIX = "wexler.editor.layout.route.v1.";
const EXPORT_SCHEMA = "wexler.editor.layout.bundle";
const EXPORT_VERSION = 3;
const MAX_PUBLISHED_HISTORY = 12;
const isEditorMode = ref(false);
const draftLayoutsByRoute = ref({});
const publishedLayoutsByRoute = ref({});
const publishedHistoryByRoute = ref({});
const selectedByRoute = ref({});
let initialized = false;
function normalizeRoute(routeInput) {
  const raw = typeof routeInput === "string" && routeInput.trim() ? routeInput.trim() : "/";
  const route = raw.split(/[?#]/)[0] || "/";
  if (route === "/") return "/";
  return route.startsWith("/") ? route : `/${route}`;
}
function createDefaultBlockSeed() {
  return {
    id: "block-1",
    kind: "text",
    x: 96,
    y: 140,
    w: 420,
    h: 180,
    z: 10,
    opacity: 0.9,
    radius: 16,
    blur: 12,
    bg: "rgba(16, 28, 40, 0.3)",
    color: "#f3f7fc",
    kicker: "Module",
    title: "Untitled",
    body: "Editable content block"
  };
}
function createDefaultLayout(routeInput) {
  const route = normalizeRoute(routeInput);
  if (route === "/") {
    return {
      version: 1,
      blocks: [
        {
          ...createDefaultBlockSeed(),
          id: "hero-intro",
          x: 76,
          y: 128,
          w: 560,
          h: 220,
          z: 10,
          opacity: 0.95,
          radius: 18,
          blur: 14,
          bg: "rgba(16, 28, 40, 0.36)",
          color: "#f3f7fc",
          kicker: "Digital Garden",
          title: "Wexler's Notes",
          body: "全栈开发与运维知识库"
        },
        {
          ...createDefaultBlockSeed(),
          id: "quick-link",
          x: 76,
          y: 372,
          w: 360,
          h: 136,
          z: 11,
          opacity: 0.92,
          radius: 16,
          blur: 12,
          bg: "rgba(12, 20, 30, 0.28)",
          color: "#e6eff8",
          kicker: "Launch",
          title: "Core Notes",
          body: "/Sky-Take-Out/00-后端开发知识大本营"
        }
      ]
    };
  }
  return {
    version: 1,
    blocks: []
  };
}
function clone(value) {
  return JSON.parse(JSON.stringify(value));
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function toSafeNumber(value, fallback) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return num;
}
function normalizeBlock(raw, index) {
  const fallback = createDefaultBlockSeed();
  return {
    id: typeof (raw == null ? void 0 : raw.id) === "string" && raw.id.trim() ? raw.id : `block-${index + 1}`,
    kind: "text",
    x: clamp(toSafeNumber(raw == null ? void 0 : raw.x, fallback.x), 0, 5e3),
    y: clamp(toSafeNumber(raw == null ? void 0 : raw.y, fallback.y), 0, 5e3),
    w: clamp(toSafeNumber(raw == null ? void 0 : raw.w, fallback.w), 180, 1200),
    h: clamp(toSafeNumber(raw == null ? void 0 : raw.h, fallback.h), 90, 900),
    z: clamp(toSafeNumber(raw == null ? void 0 : raw.z, fallback.z), 0, 200),
    opacity: clamp(toSafeNumber(raw == null ? void 0 : raw.opacity, fallback.opacity), 0.05, 1),
    radius: clamp(toSafeNumber(raw == null ? void 0 : raw.radius, fallback.radius), 0, 60),
    blur: clamp(toSafeNumber(raw == null ? void 0 : raw.blur, fallback.blur), 0, 24),
    bg: typeof (raw == null ? void 0 : raw.bg) === "string" && raw.bg.trim() ? raw.bg : fallback.bg,
    color: typeof (raw == null ? void 0 : raw.color) === "string" && raw.color.trim() ? raw.color : fallback.color,
    kicker: typeof (raw == null ? void 0 : raw.kicker) === "string" ? raw.kicker : "",
    title: typeof (raw == null ? void 0 : raw.title) === "string" ? raw.title : "",
    body: typeof (raw == null ? void 0 : raw.body) === "string" ? raw.body : ""
  };
}
function normalizeLayout(routeInput, raw) {
  const fallback = createDefaultLayout(routeInput);
  if (!raw || typeof raw !== "object") return fallback;
  const blocks = Array.isArray(raw.blocks) ? raw.blocks.map((block, index) => normalizeBlock(block, index)) : fallback.blocks;
  return {
    version: 1,
    blocks
  };
}
function normalizeRoutePayload(routeInput, payload) {
  const route = normalizeRoute(routeInput);
  const source = payload && typeof payload === "object" ? payload : {};
  const draftCandidate = source.draft && typeof source.draft === "object" ? source.draft : source.layout && typeof source.layout === "object" ? source.layout : source;
  const publishedCandidate = source.published && typeof source.published === "object" ? source.published : source.layout && typeof source.layout === "object" ? source.layout : draftCandidate;
  const historyCandidate = Array.isArray(source.publishedHistory) ? source.publishedHistory : Array.isArray(source.history) ? source.history : [];
  return {
    route,
    draft: normalizeLayout(route, draftCandidate),
    published: normalizeLayout(route, publishedCandidate),
    publishedHistory: normalizeHistoryList(route, historyCandidate)
  };
}
function stringifyLayout(routeInput, layout) {
  return JSON.stringify(normalizeLayout(routeInput, layout));
}
function createSnapshotId() {
  return `snap-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
function createHistorySnapshot(routeInput, layout, reason = "publish") {
  const route = normalizeRoute(routeInput);
  const snapshotReason = typeof reason === "string" && reason.trim() ? reason.trim() : "publish";
  return {
    id: createSnapshotId(),
    at: (/* @__PURE__ */ new Date()).toISOString(),
    reason: snapshotReason,
    layout: normalizeLayout(route, layout)
  };
}
function normalizeHistoryEntry(routeInput, raw, index = 0) {
  const route = normalizeRoute(routeInput);
  if (!raw || typeof raw !== "object") return null;
  const layoutSource = raw.layout && typeof raw.layout === "object" ? raw.layout : Array.isArray(raw.blocks) ? raw : null;
  if (!layoutSource) return null;
  return {
    id: typeof raw.id === "string" && raw.id.trim() ? raw.id.trim() : `${createSnapshotId()}-${index}`,
    at: typeof raw.at === "string" && raw.at.trim() ? raw.at.trim() : (/* @__PURE__ */ new Date()).toISOString(),
    reason: typeof raw.reason === "string" && raw.reason.trim() ? raw.reason.trim() : "publish",
    layout: normalizeLayout(route, layoutSource)
  };
}
function normalizeHistoryList(routeInput, rawList) {
  if (!Array.isArray(rawList)) return [];
  return rawList.map((item, index) => normalizeHistoryEntry(routeInput, item, index)).filter(Boolean).slice(0, MAX_PUBLISHED_HISTORY);
}
function routeDraftKey(routeInput) {
  return `${ROUTE_DRAFT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`;
}
function routePublishedKey(routeInput) {
  return `${ROUTE_PUBLISHED_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`;
}
function routePublishedHistoryKey(routeInput) {
  return `${ROUTE_PUBLISHED_HISTORY_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`;
}
function routeLegacyKey(routeInput) {
  return `${LEGACY_ROUTE_LAYOUT_KEY_PREFIX}${encodeURIComponent(normalizeRoute(routeInput))}`;
}
function safeReadStorage(key) {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}
function safeWriteStorage(key, value) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch (error) {
  }
}
function safeRemoveStorage(key) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch (error) {
  }
}
function persistEditorMode() {
  safeWriteStorage(EDIT_MODE_KEY, isEditorMode.value ? "1" : "0");
}
function persistDraftRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput);
  safeWriteStorage(routeDraftKey(route), JSON.stringify(draftLayoutsByRoute.value[route]));
}
function persistPublishedRouteLayout(routeInput) {
  const route = ensureRouteLayout(routeInput);
  safeWriteStorage(routePublishedKey(route), JSON.stringify(publishedLayoutsByRoute.value[route]));
}
function persistPublishedRouteHistory(routeInput) {
  const route = ensureRouteLayout(routeInput);
  safeWriteStorage(
    routePublishedHistoryKey(route),
    JSON.stringify(publishedHistoryByRoute.value[route] || [])
  );
}
function ensureSelectedValid(routeInput) {
  var _a, _b;
  const route = normalizeRoute(routeInput);
  const blocks = ((_a = draftLayoutsByRoute.value[route]) == null ? void 0 : _a.blocks) || [];
  const selectedId = selectedByRoute.value[route] || "";
  const stillExists = blocks.some((block) => block.id === selectedId);
  if (stillExists) return;
  selectedByRoute.value = {
    ...selectedByRoute.value,
    [route]: ((_b = blocks[0]) == null ? void 0 : _b.id) || ""
  };
}
function setDraftLayout(routeInput, layout, options = {}) {
  const route = normalizeRoute(routeInput);
  const persist = options.persist !== false;
  const normalized = normalizeLayout(route, layout);
  draftLayoutsByRoute.value = {
    ...draftLayoutsByRoute.value,
    [route]: normalized
  };
  ensureSelectedValid(route);
  if (persist) {
    persistDraftRouteLayout(route);
  }
}
function setPublishedLayout(routeInput, layout, options = {}) {
  const route = normalizeRoute(routeInput);
  const persist = options.persist !== false;
  const normalized = normalizeLayout(route, layout);
  publishedLayoutsByRoute.value = {
    ...publishedLayoutsByRoute.value,
    [route]: normalized
  };
  if (persist) {
    persistPublishedRouteLayout(route);
  }
}
function setPublishedHistory(routeInput, historyList, options = {}) {
  const route = normalizeRoute(routeInput);
  const persist = options.persist !== false;
  const normalized = normalizeHistoryList(route, historyList);
  publishedHistoryByRoute.value = {
    ...publishedHistoryByRoute.value,
    [route]: normalized
  };
  if (persist) {
    persistPublishedRouteHistory(route);
  }
}
function loadRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput);
  const draftRaw = safeReadStorage(routeDraftKey(route));
  const publishedRaw = safeReadStorage(routePublishedKey(route));
  const historyRaw = safeReadStorage(routePublishedHistoryKey(route));
  const legacyRaw = safeReadStorage(routeLegacyKey(route));
  let draftLayout = null;
  let publishedLayout = null;
  let publishedHistory = [];
  if (draftRaw) {
    try {
      draftLayout = normalizeLayout(route, JSON.parse(draftRaw));
    } catch (error) {
      draftLayout = null;
    }
  }
  if (publishedRaw) {
    try {
      publishedLayout = normalizeLayout(route, JSON.parse(publishedRaw));
    } catch (error) {
      publishedLayout = null;
    }
  }
  if (historyRaw) {
    try {
      publishedHistory = normalizeHistoryList(route, JSON.parse(historyRaw));
    } catch (error) {
      publishedHistory = [];
    }
  }
  if (!draftLayout && !publishedLayout && legacyRaw) {
    try {
      const legacyLayout = normalizeLayout(route, JSON.parse(legacyRaw));
      draftLayout = clone(legacyLayout);
      publishedLayout = clone(legacyLayout);
      publishedHistory = [];
      safeWriteStorage(routeDraftKey(route), JSON.stringify(draftLayout));
      safeWriteStorage(routePublishedKey(route), JSON.stringify(publishedLayout));
      safeWriteStorage(routePublishedHistoryKey(route), JSON.stringify(publishedHistory));
      safeRemoveStorage(routeLegacyKey(route));
    } catch (error) {
    }
  }
  if (!draftLayout && publishedLayout) {
    draftLayout = clone(publishedLayout);
  }
  if (draftLayout && !publishedLayout) {
    publishedLayout = clone(draftLayout);
  }
  if (!draftLayout && !publishedLayout) {
    const fallback = createDefaultLayout(route);
    draftLayout = clone(fallback);
    publishedLayout = clone(fallback);
  }
  draftLayoutsByRoute.value = {
    ...draftLayoutsByRoute.value,
    [route]: normalizeLayout(route, draftLayout)
  };
  publishedLayoutsByRoute.value = {
    ...publishedLayoutsByRoute.value,
    [route]: normalizeLayout(route, publishedLayout)
  };
  publishedHistoryByRoute.value = {
    ...publishedHistoryByRoute.value,
    [route]: normalizeHistoryList(route, publishedHistory)
  };
  ensureSelectedValid(route);
}
function ensureRouteLayout(routeInput) {
  const route = normalizeRoute(routeInput);
  if (!draftLayoutsByRoute.value[route] || !publishedLayoutsByRoute.value[route] || !publishedHistoryByRoute.value[route]) {
    loadRouteLayout(route);
  }
  return route;
}
function collectStoredRoutes() {
  const result = /* @__PURE__ */ new Set([
    ...Object.keys(draftLayoutsByRoute.value),
    ...Object.keys(publishedLayoutsByRoute.value),
    ...Object.keys(publishedHistoryByRoute.value)
  ]);
  if (typeof window === "undefined") {
    return [...result];
  }
  try {
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (!key) continue;
      if (key.startsWith(ROUTE_DRAFT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_DRAFT_KEY_PREFIX.length)));
      } else if (key.startsWith(ROUTE_PUBLISHED_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_PUBLISHED_KEY_PREFIX.length)));
      } else if (key.startsWith(ROUTE_PUBLISHED_HISTORY_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(ROUTE_PUBLISHED_HISTORY_KEY_PREFIX.length)));
      } else if (key.startsWith(LEGACY_ROUTE_LAYOUT_KEY_PREFIX)) {
        result.add(decodeURIComponent(key.slice(LEGACY_ROUTE_LAYOUT_KEY_PREFIX.length)));
      }
    }
  } catch (error) {
  }
  return [...result];
}
function initEditorState() {
  if (initialized) return;
  const savedMode = safeReadStorage(EDIT_MODE_KEY);
  isEditorMode.value = savedMode === "1";
  initialized = true;
}
function setEditorMode(nextValue) {
  isEditorMode.value = Boolean(nextValue);
  persistEditorMode();
}
function toggleEditorMode() {
  setEditorMode(!isEditorMode.value);
}
function setSelectedRouteBlock(routeInput, blockId) {
  const route = ensureRouteLayout(routeInput);
  selectedByRoute.value = {
    ...selectedByRoute.value,
    [route]: typeof blockId === "string" ? blockId : ""
  };
}
function getRouteBlocks(routeInput) {
  var _a;
  const route = ensureRouteLayout(routeInput);
  return ((_a = draftLayoutsByRoute.value[route]) == null ? void 0 : _a.blocks) || [];
}
function getPublishedRouteBlocks(routeInput) {
  var _a;
  const route = ensureRouteLayout(routeInput);
  return ((_a = publishedLayoutsByRoute.value[route]) == null ? void 0 : _a.blocks) || [];
}
function getOrderedRouteBlocks(routeInput) {
  return [...getRouteBlocks(routeInput)].sort((a, b) => a.z - b.z);
}
function getSelectedRouteBlockId(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return selectedByRoute.value[route] || "";
}
function getSelectedRouteBlock(routeInput) {
  const route = ensureRouteLayout(routeInput);
  const selectedId = selectedByRoute.value[route] || "";
  const blocks = getRouteBlocks(route);
  return blocks.find((block) => block.id === selectedId) || null;
}
function getRouteDraftLayout(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return clone(draftLayoutsByRoute.value[route] || createDefaultLayout(route));
}
function replaceRouteDraftLayout(routeInput, layout, options = {}) {
  const route = ensureRouteLayout(routeInput);
  setDraftLayout(route, layout, options);
  ensureSelectedValid(route);
  return {
    ok: true,
    route
  };
}
function duplicateRouteBlock(routeInput, blockId, options = {}) {
  const route = ensureRouteLayout(routeInput);
  const targetId = typeof blockId === "string" ? blockId : "";
  const sourceBlock = getRouteBlocks(route).find((item) => item.id === targetId);
  if (!sourceBlock) {
    return {
      ok: false,
      route,
      message: "未找到待复制的模块。"
    };
  }
  const offsetX = Number.isFinite(Number(options.offsetX)) ? Number(options.offsetX) : 24;
  const offsetY = Number.isFinite(Number(options.offsetY)) ? Number(options.offsetY) : 24;
  const persist = options.persist !== false;
  const nextLayout = clone(draftLayoutsByRoute.value[route]);
  const cloneId = `block-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
  const nextIndex = nextLayout.blocks.length;
  const nextZ = Math.max(...nextLayout.blocks.map((item) => item.z), 0) + 1;
  nextLayout.blocks.push(
    normalizeBlock(
      {
        ...sourceBlock,
        id: cloneId,
        x: sourceBlock.x + offsetX,
        y: sourceBlock.y + offsetY,
        z: nextZ
      },
      nextIndex
    )
  );
  setDraftLayout(route, nextLayout, { persist });
  setSelectedRouteBlock(route, cloneId);
  return {
    ok: true,
    route,
    id: cloneId
  };
}
function moveRouteBlockLayer(routeInput, blockId, direction, options = {}) {
  const route = ensureRouteLayout(routeInput);
  const targetId = typeof blockId === "string" ? blockId : "";
  const step = Number(direction);
  if (!Number.isFinite(step) || step === 0) {
    return {
      ok: false,
      route,
      message: "图层移动方向无效。"
    };
  }
  const ordered = [...getRouteBlocks(route)].sort((a, b) => a.z - b.z);
  const currentIndex = ordered.findIndex((item) => item.id === targetId);
  if (currentIndex < 0) {
    return {
      ok: false,
      route,
      message: "未找到目标模块。"
    };
  }
  const targetIndex = currentIndex + (step > 0 ? 1 : -1);
  if (targetIndex < 0 || targetIndex >= ordered.length) {
    return {
      ok: false,
      route,
      message: "已经在最顶层或最底层。"
    };
  }
  const persist = options.persist !== false;
  const currentBlock = ordered[currentIndex];
  const swapBlock = ordered[targetIndex];
  const nextLayout = clone(draftLayoutsByRoute.value[route]);
  const currentLayoutIndex = nextLayout.blocks.findIndex((item) => item.id === currentBlock.id);
  const swapLayoutIndex = nextLayout.blocks.findIndex((item) => item.id === swapBlock.id);
  if (currentLayoutIndex < 0 || swapLayoutIndex < 0) {
    return {
      ok: false,
      route,
      message: "图层交换失败。"
    };
  }
  const tempZ = nextLayout.blocks[currentLayoutIndex].z;
  nextLayout.blocks[currentLayoutIndex].z = nextLayout.blocks[swapLayoutIndex].z;
  nextLayout.blocks[swapLayoutIndex].z = tempZ;
  setDraftLayout(route, nextLayout, { persist });
  return {
    ok: true,
    route
  };
}
function getRoutePublishedHistory(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return publishedHistoryByRoute.value[route] || [];
}
function validateRouteLayout(routeInput, layoutInput) {
  const route = normalizeRoute(routeInput);
  const layout = normalizeLayout(route, layoutInput);
  const errors = [];
  const warnings = [];
  const seenIds = /* @__PURE__ */ new Set();
  if (layout.blocks.length > 80) {
    errors.push({
      code: "TOO_MANY_BLOCKS",
      message: `模块数量为 ${layout.blocks.length}，超过 80 的上限。`
    });
  }
  if (!layout.blocks.length) {
    warnings.push({
      code: "EMPTY_LAYOUT",
      message: "当前页面没有模块，发布后会是空白页面。"
    });
  }
  layout.blocks.forEach((block, index) => {
    const label = `模块 #${index + 1}${block.id ? `（${block.id}）` : ""}`;
    const contentLength = `${block.kicker}${block.title}${block.body}`.trim().length;
    if (seenIds.has(block.id)) {
      errors.push({
        code: "DUPLICATE_ID",
        blockId: block.id,
        index,
        message: `${label} 与其他模块使用了重复 ID。`
      });
    }
    seenIds.add(block.id);
    if (!contentLength) {
      warnings.push({
        code: "EMPTY_CONTENT",
        blockId: block.id,
        index,
        message: `${label} 没有任何文案内容。`
      });
    }
    if (block.title.length > 120) {
      warnings.push({
        code: "TITLE_TOO_LONG",
        blockId: block.id,
        index,
        message: `${label} 标题过长（>${120} 字）。`
      });
    }
    if (block.body.length > 2e3) {
      warnings.push({
        code: "BODY_TOO_LONG",
        blockId: block.id,
        index,
        message: `${label} 正文过长（>${2e3} 字），可能影响可读性。`
      });
    }
    if (block.x + block.w > 5e3 || block.y + block.h > 5e3) {
      warnings.push({
        code: "OUT_OF_VIEWPORT",
        blockId: block.id,
        index,
        message: `${label} 可能超出可编辑区域边界。`
      });
    }
  });
  return {
    ok: errors.length === 0,
    route,
    checkedAt: (/* @__PURE__ */ new Date()).toISOString(),
    blockCount: layout.blocks.length,
    errors,
    warnings
  };
}
function validateDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return validateRouteLayout(route, draftLayoutsByRoute.value[route]);
}
function pushPublishedHistorySnapshot(routeInput, layout, reason = "publish") {
  const route = ensureRouteLayout(routeInput);
  const snapshot = createHistorySnapshot(route, layout, reason);
  const nextHistory = [snapshot, ...getRoutePublishedHistory(route)].slice(0, MAX_PUBLISHED_HISTORY);
  setPublishedHistory(route, nextHistory, { persist: true });
  return snapshot;
}
function routeHasUnpublishedChanges(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return stringifyLayout(route, draftLayoutsByRoute.value[route]) !== stringifyLayout(route, publishedLayoutsByRoute.value[route]);
}
function getRouteEditStatus(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return {
    route,
    blockCount: getRouteBlocks(route).length,
    publishedBlockCount: getPublishedRouteBlocks(route).length,
    historyCount: getRoutePublishedHistory(route).length,
    dirty: routeHasUnpublishedChanges(route)
  };
}
function patchRouteBlock(routeInput, blockId, patch, options = {}) {
  const route = ensureRouteLayout(routeInput);
  const persist = options.persist !== false;
  const blocks = getRouteBlocks(route);
  const targetIndex = blocks.findIndex((block) => block.id === blockId);
  if (targetIndex < 0) return;
  const nextLayout = clone(draftLayoutsByRoute.value[route]);
  nextLayout.blocks[targetIndex] = normalizeBlock(
    { ...nextLayout.blocks[targetIndex], ...patch },
    targetIndex
  );
  setDraftLayout(route, nextLayout, { persist });
}
function addRouteTextBlock(routeInput) {
  const route = ensureRouteLayout(routeInput);
  const nextLayout = clone(draftLayoutsByRoute.value[route] || createDefaultLayout(route));
  const nextId = `block-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
  const count = nextLayout.blocks.length;
  nextLayout.blocks.push(
    normalizeBlock(
      {
        ...createDefaultBlockSeed(),
        id: nextId,
        x: 120 + count * 18,
        y: 170 + count * 18,
        z: 12 + count
      },
      count
    )
  );
  setDraftLayout(route, nextLayout, { persist: true });
  setSelectedRouteBlock(route, nextId);
}
function removeRouteBlock(routeInput, blockId) {
  var _a;
  const route = ensureRouteLayout(routeInput);
  const nextLayout = clone(draftLayoutsByRoute.value[route]);
  const filtered = nextLayout.blocks.filter((block) => block.id !== blockId);
  if (filtered.length === nextLayout.blocks.length) return;
  nextLayout.blocks = filtered;
  setDraftLayout(route, nextLayout, { persist: true });
  if (selectedByRoute.value[route] === blockId) {
    setSelectedRouteBlock(route, ((_a = nextLayout.blocks[0]) == null ? void 0 : _a.id) || "");
  }
}
function resetRouteLayout(routeInput) {
  var _a;
  const route = ensureRouteLayout(routeInput);
  const nextLayout = createDefaultLayout(route);
  setDraftLayout(route, nextLayout, { persist: true });
  setSelectedRouteBlock(route, ((_a = nextLayout.blocks[0]) == null ? void 0 : _a.id) || "");
}
function saveDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput);
  persistDraftRouteLayout(route);
  return {
    ok: true,
    route
  };
}
function publishDraftRoute(routeInput) {
  const route = ensureRouteLayout(routeInput);
  const draftLayout = clone(draftLayoutsByRoute.value[route]);
  const publishedLayout = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route));
  const validation = validateRouteLayout(route, draftLayout);
  if (!validation.ok) {
    return {
      ok: false,
      route,
      message: "发布校验未通过，请先修复错误项。",
      validation
    };
  }
  if (stringifyLayout(route, publishedLayout) !== stringifyLayout(route, draftLayout)) {
    pushPublishedHistorySnapshot(route, publishedLayout, "publish");
  }
  setPublishedLayout(route, draftLayout, { persist: true });
  persistDraftRouteLayout(route);
  return {
    ok: true,
    route,
    validation,
    historyCount: getRoutePublishedHistory(route).length
  };
}
function revertRouteDraft(routeInput) {
  const route = ensureRouteLayout(routeInput);
  const publishedLayout = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route));
  setDraftLayout(route, publishedLayout, { persist: true });
  ensureSelectedValid(route);
  return {
    ok: true,
    route
  };
}
function rollbackPublishedRoute(routeInput, snapshotId = "") {
  const route = ensureRouteLayout(routeInput);
  const history = getRoutePublishedHistory(route);
  if (!history.length) {
    return {
      ok: false,
      route,
      message: "没有可回滚的发布快照。"
    };
  }
  const targetIndex = snapshotId ? history.findIndex((item) => item.id === snapshotId) : 0;
  if (targetIndex < 0) {
    return {
      ok: false,
      route,
      message: "未找到指定的回滚快照。"
    };
  }
  const targetSnapshot = history[targetIndex];
  const currentPublished = clone(publishedLayoutsByRoute.value[route] || createDefaultLayout(route));
  const historyWithoutTarget = history.filter((_, index) => index !== targetIndex);
  const shouldKeepCurrentAsSnapshot = stringifyLayout(route, currentPublished) !== stringifyLayout(route, targetSnapshot.layout);
  const nextHistory = shouldKeepCurrentAsSnapshot ? [createHistorySnapshot(route, currentPublished, "rollback"), ...historyWithoutTarget] : historyWithoutTarget;
  setPublishedHistory(route, nextHistory.slice(0, MAX_PUBLISHED_HISTORY), { persist: true });
  setPublishedLayout(route, clone(targetSnapshot.layout), { persist: true });
  setDraftLayout(route, clone(targetSnapshot.layout), { persist: true });
  ensureSelectedValid(route);
  return {
    ok: true,
    route,
    snapshot: {
      id: targetSnapshot.id,
      at: targetSnapshot.at,
      reason: targetSnapshot.reason
    },
    historyCount: getRoutePublishedHistory(route).length
  };
}
function getRouteExportBundle(routeInput) {
  const route = ensureRouteLayout(routeInput);
  return {
    schema: EXPORT_SCHEMA,
    version: EXPORT_VERSION,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    scope: "route",
    route,
    draft: clone(draftLayoutsByRoute.value[route]),
    published: clone(publishedLayoutsByRoute.value[route]),
    publishedHistory: clone(getRoutePublishedHistory(route))
  };
}
function getAllRoutesExportBundle() {
  const routes = collectStoredRoutes();
  const payload = {};
  routes.forEach((rawRoute) => {
    const route = ensureRouteLayout(rawRoute);
    payload[route] = {
      draft: clone(draftLayoutsByRoute.value[route]),
      published: clone(publishedLayoutsByRoute.value[route]),
      publishedHistory: clone(getRoutePublishedHistory(route))
    };
  });
  return {
    schema: EXPORT_SCHEMA,
    version: EXPORT_VERSION,
    exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
    scope: "all",
    routes: payload
  };
}
function importRoutePayload(payload, fallbackRouteInput) {
  const fallbackRoute = ensureRouteLayout(fallbackRouteInput);
  const route = typeof (payload == null ? void 0 : payload.route) === "string" && payload.route.trim() ? normalizeRoute(payload.route) : fallbackRoute;
  const normalized = normalizeRoutePayload(route, payload);
  setDraftLayout(normalized.route, normalized.draft, { persist: true });
  setPublishedLayout(normalized.route, normalized.published, { persist: true });
  setPublishedHistory(normalized.route, normalized.publishedHistory, { persist: true });
  ensureSelectedValid(normalized.route);
  return {
    route: normalized.route
  };
}
function importAllRoutesPayload(routesMap) {
  if (!routesMap || typeof routesMap !== "object" || Array.isArray(routesMap)) {
    return {
      ok: false,
      message: "Invalid routes payload."
    };
  }
  const updatedRoutes = [];
  Object.entries(routesMap).forEach(([rawRoute, payload]) => {
    const normalized = normalizeRoutePayload(rawRoute, payload);
    setDraftLayout(normalized.route, normalized.draft, { persist: true });
    setPublishedLayout(normalized.route, normalized.published, { persist: true });
    setPublishedHistory(normalized.route, normalized.publishedHistory, { persist: true });
    ensureSelectedValid(normalized.route);
    updatedRoutes.push(normalized.route);
  });
  return {
    ok: true,
    message: `Imported ${updatedRoutes.length} route(s).`,
    routes: updatedRoutes
  };
}
function importEditorBundle(rawText, currentRouteInput = "/") {
  let parsed;
  try {
    parsed = JSON.parse(rawText);
  } catch (error) {
    return {
      ok: false,
      message: "Invalid JSON file."
    };
  }
  if (!parsed || typeof parsed !== "object") {
    return {
      ok: false,
      message: "Import payload must be an object."
    };
  }
  if (parsed.schema === EXPORT_SCHEMA) {
    if (parsed.scope === "route") {
      const result = importRoutePayload(parsed, currentRouteInput);
      return {
        ok: true,
        message: `Imported route layout: ${result.route}`,
        routes: [result.route]
      };
    }
    if (parsed.scope === "all") {
      return importAllRoutesPayload(parsed.routes);
    }
    return {
      ok: false,
      message: "Unsupported bundle scope."
    };
  }
  if (Array.isArray(parsed.blocks)) {
    const route = ensureRouteLayout(currentRouteInput);
    const normalized = normalizeLayout(route, parsed);
    setDraftLayout(route, normalized, { persist: true });
    ensureSelectedValid(route);
    return {
      ok: true,
      message: `Imported plain layout to draft: ${route}`,
      routes: [route]
    };
  }
  return {
    ok: false,
    message: "Unsupported import payload structure."
  };
}
const _hoisted_1$1 = { class: "home-editor-canvas__blocks" };
const _hoisted_2 = {
  class: "home-editor-guides",
  "aria-hidden": "true"
};
const _hoisted_3 = ["onPointerdown", "onClick", "onDblclick"];
const _hoisted_4 = { class: "home-editor-block__kicker" };
const _hoisted_5 = { class: "home-editor-block__title" };
const _hoisted_6 = { class: "home-editor-block__body" };
const _hoisted_7 = {
  key: 0,
  class: "home-editor-block__hint"
};
const _hoisted_8 = ["onPointerdown"];
const _hoisted_9 = ["onPointerdown"];
const _hoisted_10 = ["onPointerdown"];
const _hoisted_11 = {
  key: 0,
  class: "home-editor-toolbar"
};
const _hoisted_12 = ["disabled"];
const _hoisted_13 = ["disabled"];
const _hoisted_14 = ["disabled"];
const _hoisted_15 = ["disabled"];
const _hoisted_16 = {
  key: 1,
  class: "home-editor-panel"
};
const _hoisted_17 = { class: "home-editor-panel__route" };
const _hoisted_18 = { class: "home-editor-status" };
const _hoisted_19 = { class: "home-editor-chip home-editor-chip--count" };
const _hoisted_20 = { class: "home-editor-chip home-editor-chip--history" };
const _hoisted_21 = { class: "home-editor-chip home-editor-chip--history" };
const _hoisted_22 = { class: "home-editor-layer-panel" };
const _hoisted_23 = { class: "home-editor-layer-panel__head" };
const _hoisted_24 = { class: "home-editor-layer-panel__actions" };
const _hoisted_25 = ["disabled"];
const _hoisted_26 = ["disabled"];
const _hoisted_27 = { class: "home-editor-layer-list" };
const _hoisted_28 = ["onClick"];
const _hoisted_29 = { class: "home-editor-layer-item__title" };
const _hoisted_30 = { class: "home-editor-layer-item__meta" };
const _hoisted_31 = { class: "home-editor-actions home-editor-actions--secondary" };
const _hoisted_32 = ["disabled"];
const _hoisted_33 = {
  key: 1,
  class: "home-editor-report"
};
const _hoisted_34 = { class: "home-editor-report__head" };
const _hoisted_35 = { class: "home-editor-report__meta" };
const _hoisted_36 = {
  key: 0,
  class: "home-editor-report__list home-editor-report__list--error"
};
const _hoisted_37 = {
  key: 1,
  class: "home-editor-report__list home-editor-report__list--warn"
};
const _hoisted_38 = {
  key: 2,
  class: "home-editor-report__more"
};
const _hoisted_39 = { class: "home-editor-field" };
const _hoisted_40 = ["value"];
const _hoisted_41 = { class: "home-editor-field" };
const _hoisted_42 = ["value"];
const _hoisted_43 = { class: "home-editor-field" };
const _hoisted_44 = ["value"];
const _hoisted_45 = { class: "home-editor-grid" };
const _hoisted_46 = { class: "home-editor-field" };
const _hoisted_47 = ["value"];
const _hoisted_48 = { class: "home-editor-field" };
const _hoisted_49 = ["value"];
const _hoisted_50 = { class: "home-editor-grid" };
const _hoisted_51 = { class: "home-editor-field" };
const _hoisted_52 = ["value"];
const _hoisted_53 = { class: "home-editor-field" };
const _hoisted_54 = ["value"];
const _hoisted_55 = { class: "home-editor-grid" };
const _hoisted_56 = { class: "home-editor-field" };
const _hoisted_57 = ["value"];
const _hoisted_58 = { class: "home-editor-field" };
const _hoisted_59 = ["value"];
const _hoisted_60 = { class: "home-editor-field" };
const _hoisted_61 = ["value"];
const _hoisted_62 = {
  key: 3,
  class: "home-editor-empty-hint"
};
const SNAP_GRID = 12;
const SNAP_THRESHOLD = 8;
const MAX_HISTORY_STEPS = 50;
const CANVAS_LIMIT = 5e3;
const BLOCK_MIN_WIDTH = 180;
const BLOCK_MAX_WIDTH = 1200;
const BLOCK_MIN_HEIGHT = 90;
const BLOCK_MAX_HEIGHT = 900;
const _sfc_main$1 = {
  __name: "EditableHomeCanvas",
  setup(__props) {
    const route = useRoute();
    const currentRoute = ref("/");
    const interactionState = ref(null);
    const guideLines = ref({ vertical: [], horizontal: [] });
    const importInputRef = ref(null);
    const ioMessage = ref("");
    const ioMessageType = ref("info");
    const validationReport = ref(null);
    const routeEditHistory = ref({});
    let ioTimer = null;
    let interactionRafId = 0;
    let pendingPointer = null;
    const showCanvas = computed(() => isEditorMode.value);
    const isInteracting = computed(() => Boolean(interactionState.value));
    const orderedBlocks = computed(() => getOrderedRouteBlocks(currentRoute.value));
    const layerBlocks = computed(() => [...orderedBlocks.value].reverse());
    const selectedBlockId = computed(() => getSelectedRouteBlockId(currentRoute.value));
    const selectedBlock = computed(() => getSelectedRouteBlock(currentRoute.value));
    const routeStatus = computed(() => getRouteEditStatus(currentRoute.value));
    const routeHistory = computed(() => getRoutePublishedHistory(currentRoute.value));
    const latestHistory = computed(() => routeHistory.value[0] || null);
    const historyStats = computed(() => {
      const bucket = ensureRouteHistoryBucket(currentRoute.value);
      return {
        undo: bucket.undo.length,
        redo: bucket.redo.length
      };
    });
    const blockCountSummary = computed(
      () => `${routeStatus.value.blockCount}/${routeStatus.value.publishedBlockCount}`
    );
    function clamp2(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }
    function normalizeColorHex(value, fallback = "#ffffff") {
      if (typeof value !== "string") return fallback;
      const text = value.trim();
      return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(text) ? text : fallback;
    }
    function cloneJson(value) {
      return JSON.parse(JSON.stringify(value));
    }
    function ensureRouteHistoryBucket(routeInput) {
      const routePath = ensureRouteLayout(routeInput);
      const existing = routeEditHistory.value[routePath];
      if (existing) return existing;
      const next = {
        undo: [],
        redo: []
      };
      routeEditHistory.value = {
        ...routeEditHistory.value,
        [routePath]: next
      };
      return next;
    }
    function createLayoutSnapshot(routeInput, reason = "") {
      const routePath = ensureRouteLayout(routeInput);
      const layout = getRouteDraftLayout(routePath);
      const serialized = JSON.stringify(layout);
      return {
        route: routePath,
        reason,
        at: Date.now(),
        serialized,
        layout
      };
    }
    function pushUndoSnapshot(routeInput, reason = "") {
      const routePath = ensureRouteLayout(routeInput);
      const bucket = ensureRouteHistoryBucket(routePath);
      const snapshot = createLayoutSnapshot(routePath, reason);
      const last = bucket.undo[bucket.undo.length - 1];
      if ((last == null ? void 0 : last.serialized) === snapshot.serialized) {
        return;
      }
      bucket.undo.push(snapshot);
      if (bucket.undo.length > MAX_HISTORY_STEPS) {
        bucket.undo.shift();
      }
      bucket.redo = [];
    }
    function applyHistorySnapshot(snapshot) {
      if (!snapshot) return false;
      const routePath = ensureRouteLayout(snapshot.route || currentRoute.value);
      replaceRouteDraftLayout(routePath, cloneJson(snapshot.layout), { persist: true });
      return true;
    }
    function handleUndo() {
      const routePath = ensureRouteLayout(currentRoute.value);
      const bucket = ensureRouteHistoryBucket(routePath);
      if (!bucket.undo.length) {
        setMessage("error", "没有可撤销的操作。");
        return;
      }
      const currentSnapshot = createLayoutSnapshot(routePath, "current");
      const targetSnapshot = bucket.undo.pop();
      bucket.redo.push(currentSnapshot);
      if (bucket.redo.length > MAX_HISTORY_STEPS) {
        bucket.redo.shift();
      }
      applyHistorySnapshot(targetSnapshot);
    }
    function handleRedo() {
      const routePath = ensureRouteLayout(currentRoute.value);
      const bucket = ensureRouteHistoryBucket(routePath);
      if (!bucket.redo.length) {
        setMessage("error", "没有可重做的操作。");
        return;
      }
      const currentSnapshot = createLayoutSnapshot(routePath, "current");
      const targetSnapshot = bucket.redo.pop();
      bucket.undo.push(currentSnapshot);
      if (bucket.undo.length > MAX_HISTORY_STEPS) {
        bucket.undo.shift();
      }
      applyHistorySnapshot(targetSnapshot);
    }
    function getCanvasBounds() {
      if (typeof window === "undefined") {
        return { width: 1200, height: 900 };
      }
      return {
        width: clamp2(Math.round(window.innerWidth), 320, CANVAS_LIMIT),
        height: clamp2(Math.round(window.innerHeight - 72), 240, CANVAS_LIMIT)
      };
    }
    function resolvePointSnap(value, targets) {
      let bestValue = value;
      let bestDiff = SNAP_THRESHOLD + 1;
      let hasMatch = false;
      targets.forEach((target) => {
        const diff = Math.abs(target - value);
        if (diff <= SNAP_THRESHOLD && diff < bestDiff) {
          bestDiff = diff;
          bestValue = target;
          hasMatch = true;
        }
      });
      return {
        value: hasMatch ? bestValue : value,
        guide: hasMatch ? bestValue : null
      };
    }
    function resolveAxisSnap(start, span, targets) {
      const anchors = [
        { offset: 0, map: (target) => target },
        { offset: span / 2, map: (target) => target - span / 2 },
        { offset: span, map: (target) => target - span }
      ];
      let best = null;
      anchors.forEach((anchor) => {
        targets.forEach((target) => {
          const anchorPos = start + anchor.offset;
          const diff = Math.abs(target - anchorPos);
          if (diff > SNAP_THRESHOLD) return;
          if (!best || diff < best.diff) {
            best = {
              diff,
              start: anchor.map(target),
              guide: target
            };
          }
        });
      });
      if (!best) {
        return {
          value: start,
          guide: null
        };
      }
      return {
        value: best.start,
        guide: best.guide
      };
    }
    function collectSnapTargets(blockId) {
      const blocks = getRouteBlocks(currentRoute.value).filter((item) => item.id !== blockId);
      const { width: canvasWidth, height: canvasHeight } = getCanvasBounds();
      const vertical = [0, canvasWidth / 2, canvasWidth];
      const horizontal = [0, canvasHeight / 2, canvasHeight];
      blocks.forEach((block) => {
        vertical.push(block.x, block.x + block.w / 2, block.x + block.w);
        horizontal.push(block.y, block.y + block.h / 2, block.y + block.h);
      });
      return {
        vertical,
        horizontal
      };
    }
    function computeMovePatch(state, clientX, clientY) {
      const block = getRouteBlocks(currentRoute.value).find((item) => item.id === state.id);
      if (!block) return null;
      const dx = clientX - state.startX;
      const dy = clientY - state.startY;
      let nextX = clamp2(Math.round((state.initialX + dx) / SNAP_GRID) * SNAP_GRID, 0, CANVAS_LIMIT);
      let nextY = clamp2(Math.round((state.initialY + dy) / SNAP_GRID) * SNAP_GRID, 0, CANVAS_LIMIT);
      const guides = { vertical: [], horizontal: [] };
      const targets = collectSnapTargets(state.id);
      const xSnap = resolveAxisSnap(nextX, block.w, targets.vertical);
      if (xSnap.guide !== null) {
        nextX = clamp2(Math.round(xSnap.value), 0, CANVAS_LIMIT);
        guides.vertical.push(xSnap.guide);
      }
      const ySnap = resolveAxisSnap(nextY, block.h, targets.horizontal);
      if (ySnap.guide !== null) {
        nextY = clamp2(Math.round(ySnap.value), 0, CANVAS_LIMIT);
        guides.horizontal.push(ySnap.guide);
      }
      return {
        patch: { x: nextX, y: nextY },
        guides
      };
    }
    function computeResizePatch(state, clientX, clientY) {
      const block = getRouteBlocks(currentRoute.value).find((item) => item.id === state.id);
      if (!block) return null;
      const dx = clientX - state.startX;
      const dy = clientY - state.startY;
      let nextW = state.initialW;
      let nextH = state.initialH;
      if (state.handle.includes("e")) {
        nextW = state.initialW + dx;
      }
      if (state.handle.includes("s")) {
        nextH = state.initialH + dy;
      }
      nextW = clamp2(Math.round(nextW / SNAP_GRID) * SNAP_GRID, BLOCK_MIN_WIDTH, BLOCK_MAX_WIDTH);
      nextH = clamp2(Math.round(nextH / SNAP_GRID) * SNAP_GRID, BLOCK_MIN_HEIGHT, BLOCK_MAX_HEIGHT);
      const guides = { vertical: [], horizontal: [] };
      const targets = collectSnapTargets(state.id);
      if (state.handle.includes("e")) {
        const snapped = resolvePointSnap(block.x + nextW, targets.vertical);
        if (snapped.guide !== null) {
          nextW = clamp2(Math.round(snapped.value - block.x), BLOCK_MIN_WIDTH, BLOCK_MAX_WIDTH);
          guides.vertical.push(snapped.guide);
        }
      }
      if (state.handle.includes("s")) {
        const snapped = resolvePointSnap(block.y + nextH, targets.horizontal);
        if (snapped.guide !== null) {
          nextH = clamp2(Math.round(snapped.value - block.y), BLOCK_MIN_HEIGHT, BLOCK_MAX_HEIGHT);
          guides.horizontal.push(snapped.guide);
        }
      }
      return {
        patch: { w: nextW, h: nextH },
        guides
      };
    }
    function setMessage(type, text, duration = 2800) {
      ioMessageType.value = type;
      ioMessage.value = text;
      if (ioTimer) {
        window.clearTimeout(ioTimer);
      }
      ioTimer = window.setTimeout(() => {
        ioMessage.value = "";
        ioTimer = null;
      }, duration);
    }
    function clearMessage() {
      if (ioTimer) {
        window.clearTimeout(ioTimer);
        ioTimer = null;
      }
      ioMessage.value = "";
    }
    function syncRoute(nextPath) {
      currentRoute.value = ensureRouteLayout(nextPath);
      validationReport.value = null;
      clearMessage();
    }
    function formatSnapshotTime(value) {
      if (!value) return "未知时间";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return String(value);
      return new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(date);
    }
    function blockStyle(block) {
      return {
        transform: `translate3d(${block.x}px, ${block.y}px, 0)`,
        width: `${block.w}px`,
        minHeight: `${block.h}px`,
        zIndex: block.z,
        color: block.color,
        background: block.bg,
        opacity: block.opacity,
        borderRadius: `${block.radius}px`,
        backdropFilter: block.blur > 0 ? `blur(${block.blur}px) saturate(135%)` : "none"
      };
    }
    function applyInteractionPosition(clientX, clientY) {
      const state = interactionState.value;
      if (!state) return;
      let result = null;
      if (state.mode === "move") {
        result = computeMovePatch(state, clientX, clientY);
      } else if (state.mode === "resize") {
        result = computeResizePatch(state, clientX, clientY);
      }
      if (!result) return;
      patchRouteBlock(currentRoute.value, state.id, result.patch, { persist: false });
      guideLines.value = {
        vertical: result.guides.vertical,
        horizontal: result.guides.horizontal
      };
    }
    function flushInteractionFrame() {
      interactionRafId = 0;
      if (!interactionState.value || !pendingPointer) return;
      applyInteractionPosition(pendingPointer.x, pendingPointer.y);
      pendingPointer = null;
    }
    function beginInteraction(mode, event, block, extra = {}) {
      pushUndoSnapshot(currentRoute.value, mode === "resize" ? "缩放模块" : "拖拽模块");
      setSelectedRouteBlock(currentRoute.value, block.id);
      interactionState.value = {
        mode,
        id: block.id,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        initialX: block.x,
        initialY: block.y,
        initialW: block.w,
        initialH: block.h,
        ...extra
      };
      window.addEventListener("pointermove", onInteracting);
      window.addEventListener("pointerup", stopInteraction);
      window.addEventListener("pointercancel", stopInteraction);
      event.preventDefault();
    }
    function onBlockPointerDown(event, block) {
      if (!isEditorMode.value) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      beginInteraction("move", event, block);
    }
    function onResizeHandlePointerDown(event, block, handle) {
      if (!isEditorMode.value) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      beginInteraction("resize", event, block, { handle });
    }
    function onInteracting(event) {
      if (!interactionState.value) return;
      pendingPointer = { x: event.clientX, y: event.clientY };
      if (interactionRafId) return;
      interactionRafId = window.requestAnimationFrame(flushInteractionFrame);
    }
    function stopInteraction(event) {
      const state = interactionState.value;
      if (!state) return;
      if (event && event.pointerId && event.pointerId !== state.pointerId) return;
      if (interactionRafId) {
        window.cancelAnimationFrame(interactionRafId);
        interactionRafId = 0;
      }
      if (pendingPointer) {
        applyInteractionPosition(pendingPointer.x, pendingPointer.y);
        pendingPointer = null;
      }
      interactionState.value = null;
      guideLines.value = { vertical: [], horizontal: [] };
      window.removeEventListener("pointermove", onInteracting);
      window.removeEventListener("pointerup", stopInteraction);
      window.removeEventListener("pointercancel", stopInteraction);
      persistDraftRouteLayout(currentRoute.value);
    }
    function selectBlock(blockId) {
      setSelectedRouteBlock(currentRoute.value, blockId);
    }
    function bringToFront(blockId) {
      pushUndoSnapshot(currentRoute.value, "置顶模块");
      const currentMax = Math.max(...getRouteBlocks(currentRoute.value).map((item) => item.z), 0);
      patchRouteBlock(currentRoute.value, blockId, { z: currentMax + 1 });
    }
    function removeCurrentBlock() {
      if (!selectedBlock.value) return;
      pushUndoSnapshot(currentRoute.value, "删除模块");
      removeRouteBlock(currentRoute.value, selectedBlock.value.id);
    }
    function updateSelectedField(field, value) {
      if (!selectedBlock.value) return;
      patchRouteBlock(currentRoute.value, selectedBlock.value.id, { [field]: value });
    }
    function updateSelectedNumberField(field, value, min, max) {
      const parsed = Number(value);
      if (!Number.isFinite(parsed)) return;
      updateSelectedField(field, clamp2(parsed, min, max));
    }
    function updateTextColor(event) {
      const value = normalizeColorHex(event.target.value, "#ffffff");
      updateSelectedField("color", value);
    }
    function handleAddBlock() {
      pushUndoSnapshot(currentRoute.value, "新增模块");
      addRouteTextBlock(currentRoute.value);
    }
    function handleResetLayout() {
      pushUndoSnapshot(currentRoute.value, "重置布局");
      resetRouteLayout(currentRoute.value);
    }
    function handleDuplicateSelected() {
      if (!selectedBlock.value) return;
      pushUndoSnapshot(currentRoute.value, "复制模块");
      const result = duplicateRouteBlock(currentRoute.value, selectedBlock.value.id);
      if (!result.ok) {
        setMessage("error", result.message || "复制失败。");
        return;
      }
      setMessage("success", "已复制当前模块。");
    }
    function handleMoveLayer(direction) {
      if (!selectedBlock.value) return;
      pushUndoSnapshot(currentRoute.value, direction > 0 ? "图层上移" : "图层下移");
      const result = moveRouteBlockLayer(currentRoute.value, selectedBlock.value.id, direction);
      if (!result.ok) {
        setMessage("error", result.message || "图层调整失败。");
      }
    }
    function nudgeSelectedBlock(dx, dy) {
      if (!selectedBlock.value) return;
      pushUndoSnapshot(currentRoute.value, "微调位置");
      patchRouteBlock(currentRoute.value, selectedBlock.value.id, {
        x: clamp2(Math.round(selectedBlock.value.x + dx), 0, CANVAS_LIMIT),
        y: clamp2(Math.round(selectedBlock.value.y + dy), 0, CANVAS_LIMIT)
      });
    }
    function isTextEditableTarget(target) {
      if (!target || !(target instanceof HTMLElement)) return false;
      if (target.isContentEditable) return true;
      const tag = target.tagName;
      return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
    }
    function handleEditorHotkeys(event) {
      if (!isEditorMode.value) return;
      if (isTextEditableTarget(event.target)) return;
      const key = event.key.toLowerCase();
      const withCommand = event.ctrlKey || event.metaKey;
      if (withCommand && key === "z") {
        event.preventDefault();
        if (event.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
        return;
      }
      if (withCommand && key === "y") {
        event.preventDefault();
        handleRedo();
        return;
      }
      if (withCommand && key === "d") {
        event.preventDefault();
        handleDuplicateSelected();
        return;
      }
      if (event.altKey && event.key === "ArrowUp") {
        event.preventDefault();
        handleMoveLayer(1);
        return;
      }
      if (event.altKey && event.key === "ArrowDown") {
        event.preventDefault();
        handleMoveLayer(-1);
        return;
      }
      if (selectedBlock.value && (event.key === "Delete" || event.key === "Backspace")) {
        event.preventDefault();
        removeCurrentBlock();
        return;
      }
      if (selectedBlock.value && event.key.startsWith("Arrow")) {
        event.preventDefault();
        const step = event.shiftKey ? 10 : 1;
        if (event.key === "ArrowLeft") nudgeSelectedBlock(-step, 0);
        if (event.key === "ArrowRight") nudgeSelectedBlock(step, 0);
        if (event.key === "ArrowUp") nudgeSelectedBlock(0, -step);
        if (event.key === "ArrowDown") nudgeSelectedBlock(0, step);
      }
    }
    function toRouteSlug(path) {
      if (path === "/") return "root";
      const slug = path.replace(/[^\p{L}\p{N}_-]+/gu, "_").replace(/^_+|_+$/g, "");
      return slug || "route";
    }
    function downloadJson(filename, data) {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1e3);
    }
    function handleSaveDraft() {
      saveDraftRoute(currentRoute.value);
      {
        setMessage("success", "草稿已保存。");
      }
    }
    function handlePublish() {
      var _a, _b;
      const result = publishDraftRoute(currentRoute.value);
      validationReport.value = result.validation || null;
      if (result.ok) {
        const warningCount = ((_b = (_a = result.validation) == null ? void 0 : _a.warnings) == null ? void 0 : _b.length) || 0;
        const warningHint = warningCount ? `，含 ${warningCount} 条提醒` : "";
        setMessage("success", `当前页面布局已发布${warningHint}。`);
      } else {
        setMessage("error", result.message || "发布失败，请先修复校验问题。", 3800);
      }
    }
    function handleValidatePublish() {
      const report = validateDraftRoute(currentRoute.value);
      validationReport.value = report;
      if (!report.ok) {
        setMessage("error", `发布校验失败：${report.errors.length} 个错误。`, 4200);
        return;
      }
      const warningCount = report.warnings.length;
      if (warningCount) {
        setMessage("success", `校验通过，另有 ${warningCount} 条提醒。`, 3600);
      } else {
        setMessage("success", "校验通过，可安全发布。");
      }
    }
    function handleRevertDraft() {
      if (routeStatus.value.dirty) {
        const confirmed = window.confirm("将放弃当前草稿改动，并恢复为已发布版本，是否继续？");
        if (!confirmed) return;
      }
      revertRouteDraft(currentRoute.value);
      {
        setMessage("success", "草稿已恢复到已发布版本。");
      }
    }
    function handleRollbackPublished() {
      var _a;
      if (!routeHistory.value.length) {
        setMessage("error", "暂无可回滚快照。");
        return;
      }
      const latest = latestHistory.value;
      const targetHint = latest ? `（目标：${formatSnapshotTime(latest.at)}）` : "";
      const confirmed = window.confirm(`将回滚已发布版本并同步覆盖草稿${targetHint}，是否继续？`);
      if (!confirmed) return;
      const result = rollbackPublishedRoute(currentRoute.value);
      if (!result.ok) {
        setMessage("error", result.message || "回滚失败。", 3600);
        return;
      }
      validationReport.value = null;
      const snapshotTime = formatSnapshotTime((_a = result.snapshot) == null ? void 0 : _a.at);
      setMessage("success", `已回滚到快照：${snapshotTime}。`);
    }
    function handleExportCurrent() {
      const bundle = getRouteExportBundle(currentRoute.value);
      const filename = `editor-layout-${toRouteSlug(currentRoute.value)}-${Date.now()}.json`;
      downloadJson(filename, bundle);
      setMessage("success", "当前页面布局已导出。");
    }
    function handleExportAll() {
      const bundle = getAllRoutesExportBundle();
      const filename = `editor-layout-all-routes-${Date.now()}.json`;
      downloadJson(filename, bundle);
      setMessage("success", "全站页面布局已导出。");
    }
    function triggerImport() {
      var _a;
      (_a = importInputRef.value) == null ? void 0 : _a.click();
    }
    async function handleImportFile(event) {
      var _a, _b;
      const file = (_b = (_a = event.target) == null ? void 0 : _a.files) == null ? void 0 : _b[0];
      if (!file) return;
      try {
        const text = await file.text();
        const result = importEditorBundle(text, currentRoute.value);
        if (result.ok) {
          validationReport.value = null;
          setMessage("success", result.message || "导入完成。");
        } else {
          setMessage("error", result.message || "导入失败。", 3600);
        }
      } catch (error) {
        setMessage("error", "读取导入文件失败。", 3600);
      } finally {
        event.target.value = "";
      }
    }
    onMounted(() => {
      initEditorState();
      syncRoute(route.path);
      window.addEventListener("keydown", handleEditorHotkeys);
    });
    watch(
      () => route.path,
      (nextPath) => {
        stopInteraction();
        syncRoute(nextPath);
      }
    );
    onBeforeUnmount(() => {
      stopInteraction();
      window.removeEventListener("keydown", handleEditorHotkeys);
      clearMessage();
    });
    return (_ctx, _cache) => {
      return showCanvas.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["home-editor-canvas", { "is-editing": unref(isEditorMode), "is-interacting": isInteracting.value }]),
        "aria-label": "页面编辑画布"
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(guideLines.value.vertical, (x, index) => {
              return openBlock(), createElementBlock("span", {
                key: `v-${index}-${x}`,
                class: "home-editor-guide home-editor-guide--vertical",
                style: normalizeStyle({ left: `${x}px` })
              }, null, 4);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(guideLines.value.horizontal, (y, index) => {
              return openBlock(), createElementBlock("span", {
                key: `h-${index}-${y}`,
                class: "home-editor-guide home-editor-guide--horizontal",
                style: normalizeStyle({ top: `${y}px` })
              }, null, 4);
            }), 128))
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(orderedBlocks.value, (block) => {
            return openBlock(), createElementBlock("article", {
              key: block.id,
              class: normalizeClass(["home-editor-block", { "is-selected": selectedBlockId.value === block.id }]),
              style: normalizeStyle(blockStyle(block)),
              onPointerdown: ($event) => onBlockPointerDown($event, block),
              onClick: withModifiers(($event) => selectBlock(block.id), ["stop"]),
              onDblclick: withModifiers(($event) => bringToFront(block.id), ["stop"])
            }, [
              createBaseVNode("p", _hoisted_4, toDisplayString(block.kicker), 1),
              createBaseVNode("h2", _hoisted_5, toDisplayString(block.title), 1),
              createBaseVNode("p", _hoisted_6, toDisplayString(block.body), 1),
              unref(isEditorMode) ? (openBlock(), createElementBlock("span", _hoisted_7, "拖拽")) : createCommentVNode("", true),
              unref(isEditorMode) && selectedBlockId.value === block.id ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createBaseVNode("button", {
                  type: "button",
                  class: "home-editor-resize-handle home-editor-resize-handle--e",
                  "aria-label": "横向缩放",
                  onPointerdown: withModifiers(($event) => onResizeHandlePointerDown($event, block, "e"), ["stop", "prevent"])
                }, null, 40, _hoisted_8),
                createBaseVNode("button", {
                  type: "button",
                  class: "home-editor-resize-handle home-editor-resize-handle--s",
                  "aria-label": "纵向缩放",
                  onPointerdown: withModifiers(($event) => onResizeHandlePointerDown($event, block, "s"), ["stop", "prevent"])
                }, null, 40, _hoisted_9),
                createBaseVNode("button", {
                  type: "button",
                  class: "home-editor-resize-handle home-editor-resize-handle--se",
                  "aria-label": "自由缩放",
                  onPointerdown: withModifiers(($event) => onResizeHandlePointerDown($event, block, "se"), ["stop", "prevent"])
                }, null, 40, _hoisted_10)
              ], 64)) : createCommentVNode("", true)
            ], 46, _hoisted_3);
          }), 128))
        ]),
        unref(isEditorMode) ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            onClick: handleAddBlock
          }, " 新增 "),
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            disabled: !selectedBlock.value,
            onClick: handleDuplicateSelected
          }, " 复制 ", 8, _hoisted_12),
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            disabled: !selectedBlock.value,
            onClick: removeCurrentBlock
          }, " 删除 ", 8, _hoisted_13),
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            disabled: !historyStats.value.undo,
            onClick: handleUndo
          }, " 撤销 ", 8, _hoisted_14),
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            disabled: !historyStats.value.redo,
            onClick: handleRedo
          }, " 重做 ", 8, _hoisted_15),
          createBaseVNode("button", {
            type: "button",
            class: "home-editor-btn",
            onClick: handleResetLayout
          }, " 重置 ")
        ])) : createCommentVNode("", true),
        unref(isEditorMode) ? (openBlock(), createElementBlock("aside", _hoisted_16, [
          _cache[25] || (_cache[25] = createBaseVNode("h3", { class: "home-editor-panel__title" }, "页面编辑器", -1)),
          createBaseVNode("p", _hoisted_17, toDisplayString(currentRoute.value), 1),
          createBaseVNode("div", _hoisted_18, [
            _cache[11] || (_cache[11] = createBaseVNode("span", { class: "home-editor-chip home-editor-chip--draft" }, "草稿", -1)),
            createBaseVNode("span", {
              class: normalizeClass(["home-editor-chip", routeStatus.value.dirty ? "is-dirty" : "is-clean"])
            }, toDisplayString(routeStatus.value.dirty ? "有未发布改动" : "已与发布版同步"), 3),
            createBaseVNode("span", _hoisted_19, "草稿/发布 " + toDisplayString(blockCountSummary.value), 1),
            createBaseVNode("span", _hoisted_20, "回滚点 " + toDisplayString(routeStatus.value.historyCount), 1),
            createBaseVNode("span", _hoisted_21, "撤销 " + toDisplayString(historyStats.value.undo) + "/重做 " + toDisplayString(historyStats.value.redo), 1)
          ]),
          createBaseVNode("div", { class: "home-editor-actions" }, [
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              onClick: handleSaveDraft
            }, " 保存草稿 "),
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              onClick: handlePublish
            }, " 立即发布 "),
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              onClick: handleRevertDraft
            }, " 回滚草稿 ")
          ]),
          createBaseVNode("section", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              _cache[12] || (_cache[12] = createBaseVNode("strong", null, "图层面板", -1)),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("button", {
                  type: "button",
                  class: "home-editor-layer-btn",
                  disabled: !selectedBlock.value,
                  onClick: _cache[0] || (_cache[0] = ($event) => handleMoveLayer(1))
                }, " 上移 ", 8, _hoisted_25),
                createBaseVNode("button", {
                  type: "button",
                  class: "home-editor-layer-btn",
                  disabled: !selectedBlock.value,
                  onClick: _cache[1] || (_cache[1] = ($event) => handleMoveLayer(-1))
                }, " 下移 ", 8, _hoisted_26)
              ])
            ]),
            createBaseVNode("ul", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(layerBlocks.value, (block) => {
                return openBlock(), createElementBlock("li", {
                  key: `layer-${block.id}`
                }, [
                  createBaseVNode("button", {
                    type: "button",
                    class: normalizeClass(["home-editor-layer-item", { "is-active": selectedBlockId.value === block.id }]),
                    onClick: ($event) => selectBlock(block.id)
                  }, [
                    createBaseVNode("span", _hoisted_29, toDisplayString(block.title || block.kicker || block.id), 1),
                    createBaseVNode("span", _hoisted_30, "z" + toDisplayString(block.z), 1)
                  ], 10, _hoisted_28)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_31, [
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              onClick: handleValidatePublish
            }, " 校验发布 "),
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              disabled: !routeStatus.value.historyCount,
              onClick: handleRollbackPublished
            }, " 一键回滚 ", 8, _hoisted_32)
          ]),
          createBaseVNode("div", { class: "home-editor-actions" }, [
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn home-editor-btn--export",
              onClick: handleExportCurrent
            }, [..._cache[13] || (_cache[13] = [
              createBaseVNode("span", {
                class: "home-editor-export-icon",
                "aria-hidden": "true"
              }, null, -1),
              createBaseVNode("span", null, "导出当前页", -1)
            ])]),
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn home-editor-btn--export",
              onClick: handleExportAll
            }, [..._cache[14] || (_cache[14] = [
              createBaseVNode("span", {
                class: "home-editor-export-icon",
                "aria-hidden": "true"
              }, null, -1),
              createBaseVNode("span", null, "导出全站", -1)
            ])]),
            createBaseVNode("button", {
              type: "button",
              class: "home-editor-btn",
              onClick: triggerImport
            }, " 导入 JSON ")
          ]),
          createBaseVNode("input", {
            ref_key: "importInputRef",
            ref: importInputRef,
            class: "home-editor-import-input",
            type: "file",
            accept: "application/json,.json",
            onChange: handleImportFile
          }, null, 544),
          ioMessage.value ? (openBlock(), createElementBlock("p", {
            key: 0,
            class: normalizeClass(["home-editor-message", `is-${ioMessageType.value}`])
          }, toDisplayString(ioMessage.value), 3)) : createCommentVNode("", true),
          validationReport.value ? (openBlock(), createElementBlock("section", _hoisted_33, [
            createBaseVNode("div", _hoisted_34, [
              createBaseVNode("span", {
                class: normalizeClass(["home-editor-report__badge", validationReport.value.ok ? "is-pass" : "is-block"])
              }, toDisplayString(validationReport.value.ok ? "校验通过" : "校验失败"), 3),
              createBaseVNode("span", _hoisted_35, " 错误 " + toDisplayString(validationReport.value.errors.length) + " / 提醒 " + toDisplayString(validationReport.value.warnings.length), 1)
            ]),
            validationReport.value.errors.length ? (openBlock(), createElementBlock("ul", _hoisted_36, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(validationReport.value.errors.slice(0, 6), (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: `error-${index}`
                }, toDisplayString(item.message), 1);
              }), 128))
            ])) : createCommentVNode("", true),
            validationReport.value.warnings.length ? (openBlock(), createElementBlock("ul", _hoisted_37, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(validationReport.value.warnings.slice(0, 6), (item, index) => {
                return openBlock(), createElementBlock("li", {
                  key: `warning-${index}`
                }, toDisplayString(item.message), 1);
              }), 128))
            ])) : createCommentVNode("", true),
            validationReport.value.errors.length > 6 || validationReport.value.warnings.length > 6 ? (openBlock(), createElementBlock("p", _hoisted_38, " 仅展示前 6 条，请先优先处理关键问题。 ")) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          selectedBlock.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createBaseVNode("label", _hoisted_39, [
              _cache[15] || (_cache[15] = createBaseVNode("span", null, "前缀文案", -1)),
              createBaseVNode("input", {
                class: "home-editor-input",
                type: "text",
                value: selectedBlock.value.kicker,
                onInput: _cache[2] || (_cache[2] = ($event) => updateSelectedField("kicker", $event.target.value))
              }, null, 40, _hoisted_40)
            ]),
            createBaseVNode("label", _hoisted_41, [
              _cache[16] || (_cache[16] = createBaseVNode("span", null, "标题", -1)),
              createBaseVNode("input", {
                class: "home-editor-input",
                type: "text",
                value: selectedBlock.value.title,
                onInput: _cache[3] || (_cache[3] = ($event) => updateSelectedField("title", $event.target.value))
              }, null, 40, _hoisted_42)
            ]),
            createBaseVNode("label", _hoisted_43, [
              _cache[17] || (_cache[17] = createBaseVNode("span", null, "正文", -1)),
              createBaseVNode("textarea", {
                class: "home-editor-input home-editor-input--textarea",
                value: selectedBlock.value.body,
                onInput: _cache[4] || (_cache[4] = ($event) => updateSelectedField("body", $event.target.value))
              }, null, 40, _hoisted_44)
            ]),
            createBaseVNode("div", _hoisted_45, [
              createBaseVNode("label", _hoisted_46, [
                _cache[18] || (_cache[18] = createBaseVNode("span", null, "宽度", -1)),
                createBaseVNode("input", {
                  class: "home-editor-range",
                  type: "range",
                  min: "180",
                  max: "1200",
                  step: "1",
                  value: selectedBlock.value.w,
                  onInput: _cache[5] || (_cache[5] = ($event) => updateSelectedNumberField("w", $event.target.value, 180, 1200))
                }, null, 40, _hoisted_47)
              ]),
              createBaseVNode("label", _hoisted_48, [
                _cache[19] || (_cache[19] = createBaseVNode("span", null, "高度", -1)),
                createBaseVNode("input", {
                  class: "home-editor-range",
                  type: "range",
                  min: "90",
                  max: "900",
                  step: "1",
                  value: selectedBlock.value.h,
                  onInput: _cache[6] || (_cache[6] = ($event) => updateSelectedNumberField("h", $event.target.value, 90, 900))
                }, null, 40, _hoisted_49)
              ])
            ]),
            createBaseVNode("div", _hoisted_50, [
              createBaseVNode("label", _hoisted_51, [
                _cache[20] || (_cache[20] = createBaseVNode("span", null, "透明度", -1)),
                createBaseVNode("input", {
                  class: "home-editor-range",
                  type: "range",
                  min: "0.05",
                  max: "1",
                  step: "0.01",
                  value: selectedBlock.value.opacity,
                  onInput: _cache[7] || (_cache[7] = ($event) => updateSelectedNumberField("opacity", $event.target.value, 0.05, 1))
                }, null, 40, _hoisted_52)
              ]),
              createBaseVNode("label", _hoisted_53, [
                _cache[21] || (_cache[21] = createBaseVNode("span", null, "圆角", -1)),
                createBaseVNode("input", {
                  class: "home-editor-range",
                  type: "range",
                  min: "0",
                  max: "60",
                  step: "1",
                  value: selectedBlock.value.radius,
                  onInput: _cache[8] || (_cache[8] = ($event) => updateSelectedNumberField("radius", $event.target.value, 0, 60))
                }, null, 40, _hoisted_54)
              ])
            ]),
            createBaseVNode("div", _hoisted_55, [
              createBaseVNode("label", _hoisted_56, [
                _cache[22] || (_cache[22] = createBaseVNode("span", null, "模糊度", -1)),
                createBaseVNode("input", {
                  class: "home-editor-range",
                  type: "range",
                  min: "0",
                  max: "24",
                  step: "1",
                  value: selectedBlock.value.blur,
                  onInput: _cache[9] || (_cache[9] = ($event) => updateSelectedNumberField("blur", $event.target.value, 0, 24))
                }, null, 40, _hoisted_57)
              ]),
              createBaseVNode("label", _hoisted_58, [
                _cache[23] || (_cache[23] = createBaseVNode("span", null, "文字颜色", -1)),
                createBaseVNode("input", {
                  class: "home-editor-color",
                  type: "color",
                  value: normalizeColorHex(selectedBlock.value.color),
                  onInput: updateTextColor
                }, null, 40, _hoisted_59)
              ])
            ]),
            createBaseVNode("label", _hoisted_60, [
              _cache[24] || (_cache[24] = createBaseVNode("span", null, "背景样式", -1)),
              createBaseVNode("input", {
                class: "home-editor-input",
                type: "text",
                value: selectedBlock.value.bg,
                onInput: _cache[10] || (_cache[10] = ($event) => updateSelectedField("bg", $event.target.value))
              }, null, 40, _hoisted_61)
            ])
          ], 64)) : (openBlock(), createElementBlock("p", _hoisted_62, " 当前未选中模块。请点击画布中的模块，或先点击“新增”创建模块。 ")),
          _cache[26] || (_cache[26] = createBaseVNode("p", { class: "home-editor-shortcut-hint" }, " 快捷键：Ctrl/Cmd+Z 撤销，Shift+Ctrl/Cmd+Z 重做，Ctrl/Cmd+D 复制，Delete 删除，方向键微调，Alt+↑/↓ 调整图层。 ", -1))
        ])) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = ["aria-label"];
const _sfc_main = {
  __name: "PageEditorToggle",
  setup(__props) {
    onMounted(() => {
      initEditorState();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(["page-editor-toggle", { "is-active": unref(isEditorMode) }]),
        "aria-label": unref(isEditorMode) ? "Disable page editor mode" : "Enable page editor mode",
        title: "Page editor mode",
        onClick: _cache[0] || (_cache[0] = (...args) => unref(toggleEditorMode) && unref(toggleEditorMode)(...args))
      }, [..._cache[1] || (_cache[1] = [
        createBaseVNode("span", {
          class: "page-editor-toggle__icon",
          "aria-hidden": "true"
        }, null, -1),
        createBaseVNode("span", { class: "page-editor-toggle__state" }, null, -1)
      ])], 10, _hoisted_1);
    };
  }
};
const RawTheme = {
  extends: theme,
  Layout: () => {
    return h(theme.Layout, null, {
      "layout-top": () => [h(_sfc_main$3), h(_sfc_main$1), h(_sfc_main$4)],
      "nav-bar-content-after": () => [h(_sfc_main$2), h(_sfc_main)]
    });
  }
};
export {
  RawTheme as R,
  createSearchTranslate as c,
  useData as u
};
