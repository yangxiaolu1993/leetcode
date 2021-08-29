import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

import "./utils/rem"

// css 配置
import './assets/css/reset.scss'
import './assets/css/common.scss'

Vue.config.productionTip = false

// 注册全局 svg-icon 组件，用于 icon 图标的展示
// 使用的是 iconfont 中的图标
import SvgIcon from './components/icon/index.vue'
Vue.component('SvgIcon', SvgIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
