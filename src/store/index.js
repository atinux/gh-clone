import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    repo: 'Atinux/gh-clone',
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})

export default store
