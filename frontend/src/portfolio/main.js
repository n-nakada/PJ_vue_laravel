import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/portfolio/plugins/vuetify'
import store from './store'
import { sync } from 'vuex-router-sync'
require('@/portfolio/styles/variables.scss')

Vue.config.productionTip = false

sync(store, router)

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')
