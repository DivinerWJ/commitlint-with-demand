/*
 * @Author: wangjie59
 * @Date: 2021-04-28 12:26:00
 * @LastEditors: wangjie59
 * @LastEditTime: 2022-03-23 13:38:45
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