import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//import axios from 'axios'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

//Vue.use(axios)
Vue.use(VueMeta, {refreshOnceOnNavigation: true})
Vue.use(Vuetify)
const vuetify = new Vuetify()

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')
