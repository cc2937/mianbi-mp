"use strict";
var utils_request = require("../utils/request.js");
function getCourses(data = {}) {
  return utils_request.request({
    method: "GET",
    url: "/courses",
    data
  });
}
exports.getCourses = getCourses;
