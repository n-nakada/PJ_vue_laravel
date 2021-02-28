import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'  // eslint-disable-line
//import VueMeta from 'vue-meta'
//import 'vuetify/dist/vuetify.min.css'
//import axios from 'axios'

Vue.config.productionTip = false

//Vue.use(axios)
//Vue.use(VueMeta, {refreshOnceOnNavigation: true})
Vue.use(Vuetify)
const vuetify = new Vuetify()

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
