//import axios from 'axios'

const state = {
    userId: "",
    userToken: ""
}

const getters = {
    UserId(state) {
        return state.userId
    },
    UserToken(state) {
        return state.userToken
    }
}

const mutations = {
    updateUser(state, user) {
        state.userId = user.userId
        state.userToken = user.userToken
    }
}

const actions = {
    auth(context, user) {
        context.commit('updateUser', user);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
