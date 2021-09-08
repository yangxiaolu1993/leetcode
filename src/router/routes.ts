import Home from '@/views/home.vue'

const routes = [
    { path: '/home',name: 'home',component: Home,meta:{title:'首页'} }, // 首页
    { path: '/',redirect:'/home'}, // 首页
]

export default routes