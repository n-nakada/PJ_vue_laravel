// https://qiita.com/koduki/items/b4b56a27c6b7406a4ddb
import Vue from 'vue'
import VueRouter from 'vue-router'

// compornent
import Login from '@/portfolio/views/Login.vue'
import Home from '@/portfolio/views/Home.vue'

// store
import Store from '@/portfolio/store/index.js'

const routes = [
    {path: '/portfolio', component: Login},
    {path: '/portfolio/login', component: Login},
    //{name: 'Login', path: '/login', component: Login},
    //{name: 'Home', path: '/', component: Home, meta: { requiresAuth: true }},
    {name: 'Home', path: '/portfolio/home', component: Home, meta: { requiresAuth: true }},
    {name: 'About', path: '/about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.userToken) {
        //next({ path: '/login', query: { redirect: to.fullPath } })
        next({ path: '/', query: { redirect: to.fullPath } })
    } else {
        next()
    }
})

export default router
