"use strict";
var api_banner = require("../../api/banner.js");
var common_vendor = require("../../common/vendor.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      q: "",
      banners: []
    };
  },
  onLoad() {
    this.getBanners();
  },
  methods: {
    async getBanners() {
      const res = await api_banner.getBanners();
      this.banners = res.data;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.q,
    b: common_vendor.o(($event) => $data.q = $event.detail.value),
    c: common_vendor.f($data.banners, (banner, k0, i0) => {
      return {
        a: banner.url,
        b: banner.id
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
