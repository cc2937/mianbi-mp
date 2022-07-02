"use strict";
var utils_request = require("../utils/request.js");
function getPunches(data = {}) {
  return utils_request.request({
    method: "GET",
    url: "/punches",
    data
  });
}
exports.getPunches = getPunches;
