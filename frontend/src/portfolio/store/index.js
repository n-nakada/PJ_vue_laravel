import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import auth from './modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth: auth
    },
    plugins: [createPersistedState({
        key: 'example',
        storage: window.sessionStorage
    })]
})

export default store

