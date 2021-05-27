/*
 * @Author: wangjie59
 * @Date: 2021-04-28 12:26:00
 * @LastEditors: wangjie59
 * @LastEditTime: 2021-05-10 13:15:39
 * @Description: 
 * @FilePath: /weixin/Users/wangjie/Documents/study/test/commitlint-with-demand/index.js
 */
'use strict'
module.exports = {
  parserOpts: {
    headerPattern: /^(.*)\s(\w*)(?:\((.*)\))?:\s(.*)$/,
    headerCorrespondence: ['demand', 'type', 'scope', 'subject']
  }
};