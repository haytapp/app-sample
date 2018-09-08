import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Below we define the operations we would like to preserve in
// our application. On this case the token should be handled so
// a method is defined on action and mutation calls to do it

export default new Vuex.Store({
  strict: true,
  // Vuex defines the following concepts
  // State
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  // Mutation: requires the same methods as the actions
  mutations: {
    setToken (state, token) {
      state.token = token
      // toggle the isUserLogged state?
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    }
  },
  // Actions: Always invoked from vue components
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, token) {
      commit('setUser', token)
    }
  }
})
