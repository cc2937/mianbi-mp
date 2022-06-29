"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      keywords: [],
      value: ""
    };
  },
  onLoad() {
    this.restore();
  },
  methods: {
    restore() {
      this.keywords = common_vendor.index.getStorageSync("searchHistory") || [];
    },
    search({ value }) {
      if (this.keywords.includes(value))
        return;
      this.keywords.push(value);
      common_vendor.index.setStorageSync("searchHistory", this.keywords);
      this.value = "";
      common_vendor.index.navigateTo({
        url: `/pages/search-result/search-result?keyword=${value}`
      });
    },
    clear() {
      this.keywords = [];
      common_vendor.index.removeStorageSync("searchHistory");
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.search),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      focus: true,
      modelValue: $data.value
    }),
    d: $data.keywords.length
  }, $data.keywords.length ? {
    e: common_vendor.f($data.keywords, (word, k0, i0) => {
      return {
        a: common_vendor.t(word),
        b: word
      };
    }),
    f: common_vendor.o((...args) => $options.clear && $options.clear(...args))
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
