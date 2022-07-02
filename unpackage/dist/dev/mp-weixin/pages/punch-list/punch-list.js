"use strict";
var common_vendor = require("../../common/vendor.js");
var api_punch = require("../../api/punch.js");
var api_file = require("../../api/file.js");
require("../../utils/request.js");
common_vendor.dayjs.locale("zh-cn");
common_vendor.dayjs.extend(common_vendor.relativeTime);
const _sfc_main = {
  data() {
    return {
      query: {
        page: 1,
        perPage: 2
      },
      total: 0,
      punches: []
    };
  },
  onShow() {
    this.getPunches();
  },
  onReachBottom() {
    this.getPunches();
  },
  methods: {
    punch() {
      common_vendor.index.chooseImage({
        success({ tempFilePaths }) {
          const promises = tempFilePaths.map((path) => api_file.upload(path));
          Promise.all(promises).then((results) => {
            const urls = results.map((res) => JSON.parse(res.data).url);
            common_vendor.index.navigateTo({
              url: `/pages/punch-create/punch-create?urls=${JSON.stringify(urls)}`
            });
          });
        }
      });
    },
    async getPunches() {
      const res = await api_punch.getPunches(this.query);
      this.punches.push(...res.data.data);
      this.total = res.data.total;
      this.query.page++;
    },
    formatTime(time) {
      return common_vendor.dayjs(time).toNow();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.punches, (item, k0, i0) => {
      return common_vendor.e({
        a: item.user.avatar,
        b: common_vendor.t(item.user.nick),
        c: item.user.status
      }, item.user.status ? {
        d: common_vendor.t(item.user.status)
      } : {}, {
        e: common_vendor.t(item.comtent),
        f: common_vendor.f(item.pics, (pic, picIdx, i1) => {
          return {
            a: picIdx,
            b: common_vendor.s(`background-image: url(${pic})`)
          };
        }),
        g: common_vendor.t($options.formatTime(item.createdAt)),
        h: item.likes.length
      }, item.likes.length ? {
        i: common_vendor.f(item.likes, (like, likeIdx, i1) => {
          return common_vendor.e({
            a: common_vendor.t(like.nick),
            b: likeIdx != item.likes.length - 1
          }, likeIdx != item.likes.length - 1 ? {} : {}, {
            c: like.id
          });
        })
      } : {}, {
        j: common_vendor.f(item.reviews, (review, k1, i1) => {
          return {
            a: common_vendor.t(review.user.nick),
            b: common_vendor.t(review.content),
            c: review.id
          };
        }),
        k: item.id
      });
    }),
    b: common_vendor.o((...args) => $options.punch && $options.punch(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3134b9b4"], ["__file", "/Users/huachen/Projects/mianbi/mianbi-mp/pages/punch-list/punch-list.vue"]]);
wx.createPage(MiniProgramPage);
