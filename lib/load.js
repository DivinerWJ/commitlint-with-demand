/*
 * @Author: DivinerWJ
 * @Date: 2021-05-28 10:28:43
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2022-03-24 10:39:36
 * @Description: load配置
 * @FilePath: /commitlint-with-demand/lib/load.js
 */

const path = require("path");
const directoryPath = path.join(path.resolve(), ".demand.js");
const {
  headerPattern,
  headerCorrespondence,
} = require(directoryPath);

const type = Object.prototype.toString.call(headerPattern).slice(8, -1);

// 内置标准正则
let getHeaderPattern = /^(.*)\x20(\w*)(?:\((.*)\))?:\x20(.*)$/;
let getHeaderCorrespondence = ['demand', 'type', 'scope', 'subject'];

if (type === 'RegExp') {
  getHeaderPattern = headerPattern;
  getHeaderCorrespondence = headerCorrespondence
} else if (type === 'Boolean' && !headerPattern) {
  // 内置简单正则
  getHeaderPattern = /^(#ignore_scan#|[\S]*\x20?[\S]*)\x20+(.*)$/;
  getHeaderCorrespondence = ['demand', 'subject'];
}

module.exports = {
  headerPattern: getHeaderPattern,
  headerCorrespondence: getHeaderCorrespondence,
};
