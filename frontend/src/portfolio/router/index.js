// https://qiita.com/koduki/items/b4b56a27c6b7406a4ddb
import Vue from 'vue'
import VueRouter from 'vue-router'

// compornent
import Login from '@/portfolio/views/Login.vue'
import Register from '@/portfolio/views/Register.vue'
import Usersview from '@/portfolio/views/UsersView.vue'
import Home from '@/portfolio/views/Home.vue'
import Next from '@/portfolio/views/Next.vue'
import SimpleTable from '@/portfolio/views/SimpleTable.vue'

// store
import Store from '@/portfolio/store/index.js'

const routes = [
    {name: 'ログイン', path: '/portfolio', component: Login},
    {name: 'アカウント登録', path: '/portfolio/register', component: Register, meta: { requiresAuth: true }},
    {name: 'アカウント一覧', path: '/portfolio/usersview', component: Usersview, meta: { requiresAuth: true }},
    {name: 'ダッシュボード', path: '/portfolio/home', component: Home, meta: { requiresAuth: true }},
    {name: 'Next', path: '/portfolio/next', component: Next, meta: { requiresAuth: true }},
    {name: 'シンプルテーブル', path: '/portfolio/simpletable', component: SimpleTable, meta: { requiresAuth: true }},
    {name: 'About', path: '/about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')}
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.auth.authenticated) {
        next({ path: '/portfolio', query: { redirect: to.fullPath } })
    } else {
        next()
    }
})

export default router
