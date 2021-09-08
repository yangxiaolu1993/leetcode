# Vue 3 + Typescript + Vite

使用 Vue3+TS+Vite 搭建的 vue 模板，应用与 xl-rookie-cli 脚手架中。

## 移动端适配

postcss-px2rem/amfe-flexible / rem.js

其中， rem.ts 与 amfe-flexible 的作用是一样的，配置可伸缩布局方案。

postcss-px2rem 将 px 转化为 rem ，需新建 postcss.config.js


## vue3+vite 中无法使用 require

解决办法：requirejs 官网下载一份