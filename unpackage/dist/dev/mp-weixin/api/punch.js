"use strict";
var utils_request = require("../utils/request.js");
function getPunches(data = {}) {
  return utils_request.request({
    method: "GET",
    url: "/punches",
    data
  });
}
function createPunch(data) {
  return utils_request.request({
    method: "POST",
    url: "/punches",
    data
  });
}
exports.createPunch = createPunch;
exports.getPunches = getPunches;
