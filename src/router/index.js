import Vue from 'vue'
import Router from 'vue-router'


import Home from '@/view/home.vue'
import leetCodeRoutes from './leetcode'
// import LeetCode from '@/view/leetcode/home.vue'

Vue.use(Router)


let routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        title: '首页'
    }
}, ]

routes = routes.concat(leetCodeRoutes)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  document.title = to.meta.title
  next()

})

export default router