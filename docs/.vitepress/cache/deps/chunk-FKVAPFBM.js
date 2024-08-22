import {
  IconCheckCircleFill,
  IconClose,
  IconCloseCircleFill,
  IconExclamationCircleFill,
  IconInfoCircleFill,
  IconLoading,
  _export_sfc,
  getPrefixCls,
  isArray,
  isFunction,
  isString,
  isUndefined
} from "./chunk-XW2LYE2L.js";
import {
  Fragment,
  TransitionGroup,
  cloneVNode,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  isVNode,
  normalizeClass,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onUpdated,
  openBlock,
  reactive,
  readonly,
  ref,
  render,
  renderSlot,
  resolveComponent,
  watch,
  withCtx
} from "./chunk-PAUCAATC.js";

// node_modules/@arco-design/web-vue/es/_utils/constant.js
var MESSAGE_TYPES = ["info", "success", "warning", "error"];
var INPUT_EVENTS = [
  "onFocus",
  "onFocusin",
  "onFocusout",
  "onBlur",
  "onChange",
  "onBeforeinput",
  "onInput",
  "onReset",
  "onSubmit",
  "onInvalid",
  "onKeydown",
  "onKeypress",
  "onKeyup",
  "onCopy",
  "onCut",
  "onPaste",
  "onCompositionstart",
  "onCompositionupdate",
  "onCompositionend",
  "onSelect",
  "autocomplete",
  "autofocus",
  "maxlength",
  "minlength",
  "name",
  "pattern",
  "readonly",
  "required"
];

// node_modules/@arco-design/web-vue/es/_utils/dom.js
var NOOP = () => {
  return void 0;
};
var getDocumentSize = () => {
  const { body } = document;
  const html = document.documentElement;
  let topBody;
  try {
    const topWindow = window.top || window.self || window;
    topBody = topWindow.document.body;
  } catch {
  }
  return {
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight, (topBody == null ? void 0 : topBody.scrollHeight) || 0, (topBody == null ? void 0 : topBody.clientHeight) || 0),
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth, (topBody == null ? void 0 : topBody.scrollWidth) || 0, (topBody == null ? void 0 : topBody.clientWidth) || 0)
  };
};
var isServerRendering = (() => {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
})();
var on = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, event, handler, options = false) => {
    element.addEventListener(event, handler, options);
  };
})();
var off = (() => {
  if (isServerRendering) {
    return NOOP;
  }
  return (element, type, handler, options = false) => {
    element.removeEventListener(type, handler, options);
  };
})();
var contains = (root, ele) => {
  if (!root || !ele) {
    return false;
  }
  let node = ele;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};
var getOverlay = (type) => {
  const popper = document.createElement("div");
  popper.setAttribute("class", `arco-overlay arco-overlay-${type}`);
  return popper;
};
var querySelector = (selectors, container) => {
  var _a;
  if (isServerRendering) {
    return NOOP();
  }
  return (_a = (container != null ? container : document).querySelector(selectors)) != null ? _a : void 0;
};
var getElement = (target, container) => {
  if (isString(target)) {
    const selector = target[0] === "#" ? `[id='${target.slice(1)}']` : target;
    return querySelector(selector, container);
  }
  return target;
};
var getRelativeRect = (target, relative) => {
  const targetRect = target.getBoundingClientRect();
  const relativeRect = relative.getBoundingClientRect();
  return {
    top: targetRect.top - relativeRect.top,
    bottom: relativeRect.bottom - targetRect.bottom,
    left: targetRect.left - relativeRect.left,
    right: relativeRect.right - targetRect.right,
    width: targetRect.width,
    height: targetRect.height
  };
};
var isScroll = (element) => {
  return element.tagName === "BODY" ? document.documentElement.scrollHeight > window.innerHeight : element.scrollHeight > element.offsetHeight;
};
var getScrollBarWidth = (element) => {
  return element.tagName === "BODY" ? window.innerWidth - getDocumentSize().width : element.offsetWidth - element.clientWidth;
};

// node_modules/@arco-design/web-vue/es/_components/icon-hover.js
var _sfc_main = defineComponent({
  name: "IconHover",
  props: {
    prefix: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const prefixCls = getPrefixCls("icon-hover");
    return {
      prefixCls
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass([
      _ctx.prefixCls,
      {
        [`${_ctx.prefix}-icon-hover`]: _ctx.prefix,
        [`${_ctx.prefixCls}-size-${_ctx.size}`]: _ctx.size !== "medium",
        [`${_ctx.prefixCls}-disabled`]: _ctx.disabled
      }
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var IconHover = _export_sfc(_sfc_main, [["render", _sfc_render]]);

// node_modules/@arco-design/web-vue/es/message/message.js
var _sfc_main2 = defineComponent({
  name: "Message",
  components: {
    AIconHover: IconHover,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill,
    IconClose,
    IconLoading
  },
  props: {
    type: {
      type: String,
      default: "info"
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3e3
    },
    resetOnUpdate: {
      type: Boolean,
      default: false
    },
    resetOnHover: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("message");
    let timer = 0;
    const handleClose = () => {
      emit("close");
    };
    const startTimer = () => {
      if (props.duration > 0) {
        timer = window.setTimeout(handleClose, props.duration);
      }
    };
    const clearTimer = () => {
      if (timer) {
        window.clearTimeout(timer);
        timer = 0;
      }
    };
    onMounted(() => {
      startTimer();
    });
    onUpdated(() => {
      if (props.resetOnUpdate) {
        clearTimer();
        startTimer();
      }
    });
    onUnmounted(() => {
      clearTimer();
    });
    const handleMouseEnter = () => {
      if (props.resetOnHover) {
        clearTimer();
      }
    };
    const handleMouseLeave = () => {
      if (props.resetOnHover) {
        startTimer();
      }
    };
    return {
      handleMouseEnter,
      handleMouseLeave,
      prefixCls,
      handleClose
    };
  }
});
function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_info_circle_fill = resolveComponent("icon-info-circle-fill");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_close = resolveComponent("icon-close");
  const _component_a_icon_hover = resolveComponent("a-icon-hover");
  return openBlock(), createElementBlock("li", {
    role: "alert",
    class: normalizeClass([
      _ctx.prefixCls,
      `${_ctx.prefixCls}-${_ctx.type}`,
      { [`${_ctx.prefixCls}-closable`]: _ctx.closable }
    ]),
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseEnter && _ctx.handleMouseEnter(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args))
  }, [
    _ctx.showIcon && !(_ctx.type === "normal" && !_ctx.$slots.icon) ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.type === "info" ? (openBlock(), createBlock(_component_icon_info_circle_fill, { key: 0 })) : _ctx.type === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : _ctx.type === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : _ctx.type === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : _ctx.type === "loading" ? (openBlock(), createBlock(_component_icon_loading, { key: 4 })) : createCommentVNode("v-if", true)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createBaseVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.closable ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
    }, [
      createVNode(_component_a_icon_hover, null, {
        default: withCtx(() => [
          createVNode(_component_icon_close)
        ]),
        _: 1
      })
    ], 2)) : createCommentVNode("v-if", true)
  ], 34);
}
var Message = _export_sfc(_sfc_main2, [["render", _sfc_render2]]);

// node_modules/@arco-design/web-vue/es/_hooks/use-popup-manager.js
var POPUP_BASE_Z_INDEX = 1e3;
var MESSAGE_BASE_Z_INDEX = 5e3;
var Z_INDEX_STEP = 1;
var PopupManager = class {
  constructor() {
    this.popupStack = {
      popup: /* @__PURE__ */ new Set(),
      dialog: /* @__PURE__ */ new Set(),
      message: /* @__PURE__ */ new Set()
    };
    this.getNextZIndex = (type) => {
      const current = type === "message" ? Array.from(this.popupStack.message).pop() || MESSAGE_BASE_Z_INDEX : Array.from(this.popupStack.popup).pop() || POPUP_BASE_Z_INDEX;
      return current + Z_INDEX_STEP;
    };
    this.add = (type) => {
      const zIndex = this.getNextZIndex(type);
      this.popupStack[type].add(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.add(zIndex);
      }
      return zIndex;
    };
    this.delete = (zIndex, type) => {
      this.popupStack[type].delete(zIndex);
      if (type === "dialog") {
        this.popupStack.popup.delete(zIndex);
      }
    };
    this.isLastDialog = (zIndex) => {
      if (this.popupStack.dialog.size > 1) {
        return zIndex === Array.from(this.popupStack.dialog).pop();
      }
      return true;
    };
  }
};
var popupManager = new PopupManager();
function usePopupManager(type, {
  visible,
  runOnMounted
} = {}) {
  const zIndex = ref(0);
  const open = () => {
    zIndex.value = popupManager.add(type);
  };
  const close = () => {
    popupManager.delete(zIndex.value, type);
  };
  const isLastDialog = () => {
    if (type === "dialog") {
      return popupManager.isLastDialog(zIndex.value);
    }
    return false;
  };
  watch(() => visible == null ? void 0 : visible.value, (visible2) => {
    if (visible2) {
      open();
    } else {
      close();
    }
  }, {
    immediate: true
  });
  if (runOnMounted) {
    onMounted(() => {
      open();
    });
    onBeforeUnmount(() => {
      close();
    });
  }
  return {
    zIndex: readonly(zIndex),
    open,
    close,
    isLastDialog
  };
}

// node_modules/@arco-design/web-vue/es/_utils/vue-utils.js
var ShapeFlags;
(function(ShapeFlags2) {
  ShapeFlags2[ShapeFlags2["ELEMENT"] = 1] = "ELEMENT";
  ShapeFlags2[ShapeFlags2["FUNCTIONAL_COMPONENT"] = 2] = "FUNCTIONAL_COMPONENT";
  ShapeFlags2[ShapeFlags2["STATEFUL_COMPONENT"] = 4] = "STATEFUL_COMPONENT";
  ShapeFlags2[ShapeFlags2["COMPONENT"] = 6] = "COMPONENT";
  ShapeFlags2[ShapeFlags2["TEXT_CHILDREN"] = 8] = "TEXT_CHILDREN";
  ShapeFlags2[ShapeFlags2["ARRAY_CHILDREN"] = 16] = "ARRAY_CHILDREN";
  ShapeFlags2[ShapeFlags2["SLOTS_CHILDREN"] = 32] = "SLOTS_CHILDREN";
  ShapeFlags2[ShapeFlags2["TELEPORT"] = 64] = "TELEPORT";
  ShapeFlags2[ShapeFlags2["SUSPENSE"] = 128] = "SUSPENSE";
  ShapeFlags2[ShapeFlags2["COMPONENT_SHOULD_KEEP_ALIVE"] = 256] = "COMPONENT_SHOULD_KEEP_ALIVE";
  ShapeFlags2[ShapeFlags2["COMPONENT_KEPT_ALIVE"] = 512] = "COMPONENT_KEPT_ALIVE";
})(ShapeFlags || (ShapeFlags = {}));
var PatchFlags;
(function(PatchFlags2) {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["DEV_ROOT_FRAGMENT"] = 2048] = "DEV_ROOT_FRAGMENT";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
})(PatchFlags || (PatchFlags = {}));
var isElement = (vn) => {
  return Boolean(vn && vn.shapeFlag & 1);
};
var isComponent = (vn, type) => {
  return Boolean(vn && vn.shapeFlag & 6);
};
var isTextChildren = (child, children) => {
  return Boolean(child && child.shapeFlag & 8);
};
var isArrayChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 16);
};
var isSlotsChildren = (vn, children) => {
  return Boolean(vn && vn.shapeFlag & 32);
};
var getFirstComponent = (children) => {
  var _a, _b;
  if (!children) {
    return void 0;
  }
  for (const child of children) {
    if (isElement(child) || isComponent(child)) {
      return child;
    }
    if (isArrayChildren(child, child.children)) {
      const result = getFirstComponent(child.children);
      if (result)
        return result;
    } else if (isSlotsChildren(child, child.children)) {
      const children2 = (_b = (_a = child.children).default) == null ? void 0 : _b.call(_a);
      if (children2) {
        const result = getFirstComponent(children2);
        if (result)
          return result;
      }
    } else if (isArray(child)) {
      const result = getFirstComponent(child);
      if (result)
        return result;
    }
  }
  return void 0;
};
var isEmptyChildren = (children) => {
  if (!children) {
    return true;
  }
  for (const item of children) {
    if (item.children) {
      return false;
    }
  }
  return true;
};
var mergeFirstChild = (children, extraProps) => {
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isElement(child) || isComponent(child)) {
        const props = isFunction(extraProps) ? extraProps(child) : extraProps;
        children[i] = cloneVNode(child, props, true);
        return true;
      }
      const _children = getChildrenArray(child);
      if (_children && _children.length > 0) {
        const result = mergeFirstChild(_children, extraProps);
        if (result)
          return true;
      }
    }
  }
  return false;
};
var getChildrenArray = (vn) => {
  if (isArrayChildren(vn, vn.children)) {
    return vn.children;
  }
  if (isArray(vn)) {
    return vn;
  }
  return void 0;
};
var getFirstElementFromVNode = (vn) => {
  var _a, _b;
  if (isElement(vn)) {
    return vn.el;
  }
  if (isComponent(vn)) {
    if (((_a = vn.el) == null ? void 0 : _a.nodeType) === 1) {
      return vn.el;
    }
    if ((_b = vn.component) == null ? void 0 : _b.subTree) {
      const ele = getFirstElementFromVNode(vn.component.subTree);
      if (ele)
        return ele;
    }
  } else {
    const children = getChildrenArray(vn);
    return getFirstElementFromChildren(children);
  }
  return void 0;
};
var getFirstElementFromChildren = (children) => {
  if (children && children.length > 0) {
    for (const child of children) {
      const element = getFirstElementFromVNode(child);
      if (element)
        return element;
    }
  }
  return void 0;
};
var getAllElements = (children, includeText = false) => {
  var _a, _b;
  const results = [];
  for (const item of children != null ? children : []) {
    if (isElement(item) || isComponent(item) || includeText && isTextChildren(item, item.children)) {
      results.push(item);
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText));
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements((_b = (_a = item.children).default) == null ? void 0 : _b.call(_a), includeText));
    } else if (isArray(item)) {
      results.push(...getAllElements(item, includeText));
    }
  }
  return results;
};
function unFragment(nodeList) {
  function loop(nodes) {
    const unFragmentNodeList = [];
    nodes.forEach((node) => {
      var _a, _b;
      if (isVNode(node) && node.type === Fragment) {
        if (isSlotsChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(((_b = (_a = node.children).default) == null ? void 0 : _b.call(_a)) || []));
        } else if (isArrayChildren(node, node.children)) {
          unFragmentNodeList.push(...loop(node.children));
        } else if (isString(node.children)) {
          unFragmentNodeList.push(node.children);
        }
      } else {
        unFragmentNodeList.push(node);
      }
    });
    return unFragmentNodeList;
  }
  return loop(nodeList);
}
var getSlotFunction = (param) => {
  if (param) {
    if (isFunction(param))
      return param;
    return () => param;
  }
  return void 0;
};
var getComponentsFromVNode = (vn, name) => {
  var _a;
  const components = [];
  if (isComponent(vn, vn.type)) {
    if (vn.type.name === name) {
      if (vn.component) {
        components.push(vn.component.uid);
      }
    } else if ((_a = vn.component) == null ? void 0 : _a.subTree) {
      components.push(...getComponentsFromVNode(vn.component.subTree, name));
    }
  } else {
    const children = getChildrenArray(vn);
    if (children) {
      components.push(...getComponentsFromChildren(children, name));
    }
  }
  return components;
};
var getComponentsFromChildren = (children, name) => {
  const components = [];
  if (children && children.length > 0) {
    for (const child of children) {
      components.push(...getComponentsFromVNode(child, name));
    }
  }
  return components;
};

// node_modules/@arco-design/web-vue/es/message/message-list.js
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var MessageList = defineComponent({
  name: "MessageList",
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    position: {
      type: String,
      default: "top"
    }
  },
  emits: ["close", "afterClose"],
  setup(props, context) {
    const prefixCls = getPrefixCls("message-list");
    const {
      zIndex
    } = usePopupManager("message", {
      runOnMounted: true
    });
    return () => {
      let _slot;
      return createVNode(TransitionGroup, {
        "class": [prefixCls, `${prefixCls}-${props.position}`],
        "name": "fade-message",
        "tag": "ul",
        "style": {
          zIndex: zIndex.value
        },
        "onAfterLeave": () => context.emit("afterClose")
      }, _isSlot(_slot = props.messages.map((item) => {
        const slots = {
          default: getSlotFunction(item.content),
          icon: getSlotFunction(item.icon)
        };
        return createVNode(Message, {
          "key": item.id,
          "type": item.type,
          "duration": item.duration,
          "closable": item.closable,
          "resetOnUpdate": item.resetOnUpdate,
          "resetOnHover": item.resetOnHover,
          "onClose": () => context.emit("close", item.id)
        }, slots);
      })) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});

// node_modules/@arco-design/web-vue/es/message/index.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var MessageManger = class {
  constructor(config, appContext) {
    this.messageCount = 0;
    this.add = (config2) => {
      var _a;
      this.messageCount++;
      const id = (_a = config2.id) != null ? _a : `__arco_message_${this.messageCount}`;
      if (this.messageIds.has(id)) {
        return this.update(id, config2);
      }
      const message2 = reactive(__spreadValues({ id }, config2));
      this.messages.value.push(message2);
      this.messageIds.add(id);
      return {
        close: () => this.remove(id)
      };
    };
    this.update = (id, config2) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        if (this.messages.value[i].id === id) {
          const resetOnUpdate = !isUndefined(config2.duration);
          Object.assign(this.messages.value[i], __spreadProps(__spreadValues({}, config2), { id, resetOnUpdate }));
          break;
        }
      }
      return {
        close: () => this.remove(id)
      };
    };
    this.remove = (id) => {
      for (let i = 0; i < this.messages.value.length; i++) {
        const item = this.messages.value[i];
        if (item.id === id) {
          if (isFunction(item.onClose)) {
            item.onClose(id);
          }
          this.messages.value.splice(i, 1);
          this.messageIds.delete(id);
          break;
        }
      }
    };
    this.clear = () => {
      this.messages.value.splice(0);
    };
    this.destroy = () => {
      if (this.messages.value.length === 0 && this.container) {
        render(null, this.container);
        document.body.removeChild(this.container);
        this.container = null;
        messageInstance[this.position] = void 0;
      }
    };
    const { position = "top" } = config;
    this.container = getOverlay("message");
    this.messageIds = /* @__PURE__ */ new Set();
    this.messages = ref([]);
    this.position = position;
    const vm = createVNode(MessageList, {
      messages: this.messages.value,
      position,
      onClose: this.remove,
      onAfterClose: this.destroy
    });
    if (appContext != null ? appContext : Message2._context) {
      vm.appContext = appContext != null ? appContext : Message2._context;
    }
    render(vm, this.container);
    document.body.appendChild(this.container);
  }
};
var messageInstance = {};
var types = [...MESSAGE_TYPES, "loading", "normal"];
var message = types.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    if (isString(config)) {
      config = { content: config };
    }
    const _config = __spreadValues({ type: value }, config);
    const { position = "top" } = _config;
    if (!messageInstance[position]) {
      messageInstance[position] = new MessageManger(_config, appContext);
    }
    return messageInstance[position].add(_config);
  };
  return pre;
}, {});
message.clear = (position) => {
  var _a;
  if (position) {
    (_a = messageInstance[position]) == null ? void 0 : _a.clear();
  } else {
    Object.values(messageInstance).forEach((item) => item == null ? void 0 : item.clear());
  }
};
var Message2 = __spreadProps(__spreadValues({}, message), {
  install: (app) => {
    const _message = {
      clear: message.clear
    };
    for (const key of types) {
      _message[key] = (config, appContext = app._context) => message[key](config, appContext);
    }
    app.config.globalProperties.$message = _message;
  },
  _context: null
});

export {
  MESSAGE_TYPES,
  INPUT_EVENTS,
  NOOP,
  getDocumentSize,
  isServerRendering,
  on,
  off,
  contains,
  getOverlay,
  querySelector,
  getElement,
  getRelativeRect,
  isScroll,
  getScrollBarWidth,
  IconHover,
  usePopupManager,
  isSlotsChildren,
  getFirstComponent,
  isEmptyChildren,
  mergeFirstChild,
  getFirstElementFromChildren,
  getAllElements,
  unFragment,
  getSlotFunction,
  getComponentsFromChildren,
  Message2 as Message
};
//# sourceMappingURL=chunk-FKVAPFBM.js.map
