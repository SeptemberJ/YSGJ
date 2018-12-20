import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const state = {
  menuIndex: '1'
}
// actions
const actions = {
  changeCurMenu ({commit, state}, INDEX) {
    commit('setCurMenu', INDEX)
  }
}

// mutations
const mutations = {
  setCurMenu (state, INDEX) {
    state.menuIndex = INDEX
  }
}

export default new Vuex.Store({
  state,
  modules: {
  },
  // getters,
  actions,
  mutations,
  // strict: debug,
  plugins: [vuexAlong]
  // plugins: debug ? [createLogger()] : []
})
