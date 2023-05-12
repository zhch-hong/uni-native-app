import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: 300,
    screenHeight: 300
  },
  mutations: {
    setScreenWidth: (state, value) => state.screenWidth = value,
    setScreenHeight: (state, value) => state.screenHeight = value
  }
})