/*
 * @Author: DivinerWJ
 * @Date: 2021-04-28 12:26:00
 * @LastEditors: DivinerWJ
 * @LastEditTime: 2024-01-24 16:29:12
 * @Description: 
 * @FilePath: /commitlint-with-demand/index.js
 */
'use strict'
const {
  headerPattern,
  headerCorrespondence,
} = require("./lib/load");

module.exports = {
  parserOpts: {
    headerPattern,
    headerCorrespondence,
  }
};