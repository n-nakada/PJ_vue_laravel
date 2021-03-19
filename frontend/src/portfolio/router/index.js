// https://qiita.com/koduki/items/b4b56a27c6b7406a4ddb
import Vue from 'vue'
import VueRouter from 'vue-router'

// compornent
import Login from '@/portfolio/views/Login.vue'
import Home from '@/portfolio/views/Home.vue'

// store
import Store from '@/portfolio/store/index.js'

Vue.use(VueRouter)

const routes = [{
    name: 'Login',
    path: '/login',
    component: Login
},{
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
},{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
        next({ path: '/login', query: { redirect: to.fullPath } })
    } else {
        next()
    }
})

export default router
