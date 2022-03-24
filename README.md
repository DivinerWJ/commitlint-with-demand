<!--
 * @Author: wangjie59
 * @Date: 2021-04-28 12:53:56
 * @LastEditors: wangjie59
 * @LastEditTime: 2022-03-24 13:36:40
 * @Description: readme
 * @FilePath: /commitlint-with-demand/README.md
-->

# parserPreset插件

commitlintrc 中的 parserPreset 插件，新增了项目中所需的 demand 号

# Configuration

`commitlint-with-demand` picks up configuration from ./.demand.js

- **headerPattern**: { boolean|regexp, default true }: 默认为内置的校验规则，传入false时，只校验简单的message格式，传入正则时，根据该正则去分组捕获message.
- **headerCorrespondence**: { array }: 当且仅当 headerPattern 传值为正则时，该配置生效。值须与headerPattern捕获的分组一一对应.

```JavaScript
// .demand.js
module.exports = {
  headerPattern: false, // 默认true为内置的校验规则，传入false时，只校验简单的message格式，传入正则时，根据该正则去分组捕获message
  headerCorrespondence: [], // 当且仅当 headerPattern 传值为正则时，该配置生效。值须与headerPattern捕获的分组一一对应
}
```
