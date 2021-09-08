import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/rem.js'
import "@s/common.scss";

// 注册全局 svg-icon 组件，用于 icon 图标的展示
import SvgIcon from '@/components/icon/index.vue'


const app = createApp(App)

app.use(router)
app.component('SvgIcon',SvgIcon)

app.mount('#app')
