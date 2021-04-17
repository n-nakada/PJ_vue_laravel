const state = {
    userName: "",
    userToken: ""
}

const getters = {
    UserName(state) {
        return state.userName
    },
    UserToken(state) {
        return state.userToken
    }
}

const mutations = {
    updateUser(state, user) {
        state.userId = user.account
        state.userToken = user.token
    }
}

const actions = {
    init(context) {
        context.commit('updateUser', {
            userId: '',
            userToken: ''
        })
    },
    auth(context, user) {
        context.commit('updateUser', user)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
