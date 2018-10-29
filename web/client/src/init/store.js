import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: {
      namespaced: true,
      state: {
        accessToken: null,
        idToken: null,
        expiresAt: null,
      },
      getters: {
        isAuthenticated(state) {
          return state.expiresAt && new Date().getTime() < state.expiresAt;
        },
      },
      mutations: {
        store(state, authDetails) {
          state.accessToken = authDetails.accessToken;
          state.idToken = authDetails.idToken;
          state.expiresAt = authDetails.expiresAt;
        },
        clear(state) {
          state.accessToken = null;
          state.idToken = null;
          state.expiresAt = null;
        },
      },
    },
  },
});
