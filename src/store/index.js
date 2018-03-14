import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    repo: 'Atinux/gh-clone',
    user: null,
    collaborators: []
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    SET_COLLABORATORS(state, collaborators) {
      state.collaborators = collaborators
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})

export default store
