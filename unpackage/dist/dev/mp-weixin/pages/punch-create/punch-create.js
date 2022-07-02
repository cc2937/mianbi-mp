"use strict";
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
var common_vendor = require("../../common/vendor.js");
var api_file = require("../../api/file.js");
var api_punch = require("../../api/punch.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      punch: {
        content: "",
        pics: []
      }
    };
  },
  onLoad(options) {
    const urls = options.urls ? JSON.parse(options.urls) : [];
    this.punch.pics = urls.map((url) => ({ url }));
  },
  methods: {
    handleSelect({ tempFilePaths }) {
      const promises = tempFilePaths.map((path) => api_file.upload(path));
      Promise.all(promises).then((results) => {
        const urls = results.map((res) => ({ url: JSON.parse(res.data).url }));
        this.punch.pics.push(...urls);
      });
    },
    submit() {
      api_punch.createPunch(__spreadProps(__spreadValues({}, this.punch), {
        pics: this.punch.pics.map((item) => item.url)
      })).then(() => {
        common_vendor.index.navigateBack();
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.punch.contentn,
    b: common_vendor.o(($event) => $data.punch.contentn = $event.detail.value),
    c: common_vendor.o($options.handleSelect),
    d: common_vendor.o(($event) => $data.punch.pics = $event),
    e: common_vendor.p({
      title: "\u6211\u7684\u4ECA\u65E5\u6218\u679C",
      modelValue: $data.punch.pics
    }),
    f: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a83e7e6"], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/punch-create/punch-create.vue"]]);
wx.createPage(MiniProgramPage);
