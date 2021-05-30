import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/portfolio/plugins/vuetify'
import store from './store'
import { sync } from 'vuex-router-sync'
import http from './services/http.js'
import auth from './store/modules/auth.js'

Vue.config.productionTip = false

sync(store, router)

new Vue({
    router,
    vuetify,
    store,
    created() {
        http.init()
        auth.init()
    },
    render: h => h(App),
}).$mount('#app')
