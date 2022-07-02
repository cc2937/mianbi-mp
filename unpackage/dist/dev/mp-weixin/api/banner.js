"use strict";
var utils_request = require("../utils/request.js");
function getBanners(data = {}) {
  return utils_request.request({
    method: "GET",
    url: "/banners"
  });
}
exports.getBanners = getBanners;
