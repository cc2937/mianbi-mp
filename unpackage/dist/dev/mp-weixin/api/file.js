"use strict";
var common_vendor = require("../common/vendor.js");
var utils_request = require("../utils/request.js");
function upload(filePath) {
  return new Promise((resolve, reject) => {
    common_vendor.index.uploadFile({
      url: `${utils_request.baseURL}/upload`,
      filePath,
      name: "file",
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      }
    });
  });
}
exports.upload = upload;
