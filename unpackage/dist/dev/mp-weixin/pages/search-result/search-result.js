"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      keyword: "",
      results: []
    };
  },
  onLoad(options) {
    this.keyword = options.keyword;
    this.search();
  },
  methods: {
    search() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.keyword)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/search-result/search-result.vue"]]);
wx.createPage(MiniProgramPage);
