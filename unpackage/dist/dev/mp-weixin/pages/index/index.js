"use strict";
var api_banner = require("../../api/banner.js");
var api_course = require("../../api/course.js");
var common_vendor = require("../../common/vendor.js");
require("../../utils/request.js");
const _sfc_main = {
  data() {
    return {
      q: "",
      banners: [],
      active: 0,
      tabs: ["\u8BFE\u7A0B", "\u7B14\u8BB0", "\u9762\u8BD5\u9898"],
      courseQuery: {
        page: 1,
        perPage: 4
      },
      courses: [],
      courseTotal: 0,
      courseLoading: false,
      courseHasMore: true
    };
  },
  onLoad() {
    this.getBanners();
    this.getCourses();
  },
  onReachBottom() {
    this.getCourses();
  },
  methods: {
    async getBanners() {
      const res = await api_banner.getBanners();
      this.banners = res.data;
    },
    async getCourses() {
      if (!this.courseHasMore)
        return;
      this.courseLoading = true;
      const res = await api_course.getCourses(this.courseQuery);
      this.courseLoading = false;
      this.courses.push(...res.data.data);
      this.courseTotal = res.data.total;
      this.courseQuery.page++;
      const maxPage = Math.ceil(this.courseTotal / this.courseQuery.perPage);
      this.courseHasMore = this.courseQuery.page <= maxPage;
    },
    handleTabClick(e) {
      this.active = e.currentIndex;
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  _easycom_uni_segmented_control2();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.q,
    b: common_vendor.o(($event) => $data.q = $event.detail.value),
    c: common_vendor.f($data.banners, (banner, k0, i0) => {
      return {
        a: banner.url,
        b: banner.id
      };
    }),
    d: common_vendor.o($options.handleTabClick),
    e: common_vendor.p({
      current: $data.active,
      values: $data.tabs,
      styleType: "text",
      activeColor: "#f9d965"
    }),
    f: $data.active === 0
  }, $data.active === 0 ? {
    g: common_vendor.f($data.courses, (course, k0, i0) => {
      return {
        a: course.pic,
        b: common_vendor.t(course.title),
        c: course.id
      };
    }),
    h: $data.courseLoading ? "block" : "none",
    i: $data.courseHasMore ? "none" : "block"
  } : {}, {
    j: $data.active === 1
  }, $data.active === 1 ? {} : {}, {
    k: $data.active === 2
  }, $data.active === 2 ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
