import Vue from "vue";
import Vuex from "vuex";

import receipt from "./receipt.store";
import transaction from "./transaction.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  getters: {},

  mutations: {},

  actions: {},

  modules: {
    order: receipt,
    product: transaction
  }
});
