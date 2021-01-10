import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: ["OU_01"],
    products: {
      ou: [
        { id: "OU_01", name: "order-01", sku: "SKU001" },
        { id: "OU_02", name: "order-02", sku: "SKU002" },
        { id: "OU_03", name: "order-03", sku: "SKU003" },
        { id: "OU_04", name: "order-04", sku: "SKU004" },
        { id: "OU_05", name: "order-05", sku: "SKU005" }
      ],
      gow: [
        { id: "GOW_01", name: "order-01", sku: "SKU001" },
        { id: "GOW_02", name: "order-02", sku: "SKU002" },
        { id: "GOW_03", name: "order-03", sku: "SKU003" },
        { id: "GOW_04", name: "order-04", sku: "SKU004" },
        { id: "GOW_05", name: "order-05", sku: "SKU005" }
      ],
      dow: [
        { id: "DOW_01", name: "order-01", sku: "SKU001" },
        { id: "DOW_02", name: "order-02", sku: "SKU002" },
        { id: "DOW_03", name: "order-03", sku: "SKU003" },
        { id: "DOW_04", name: "order-04", sku: "SKU004" },
        { id: "DOW_05", name: "order-05", sku: "SKU005" }
      ],
      aows: [
        { id: "AOWS_01", name: "order-01", sku: "SKU001" },
        { id: "AOWS_02", name: "order-02", sku: "SKU002" },
        { id: "AOWS_03", name: "order-03", sku: "SKU003" },
        { id: "AOWS_04", name: "order-04", sku: "SKU004" },
        { id: "AOWS_05", name: "order-05", sku: "SKU005" }
      ]
    }
  },
  getters: {
    getSelectedProducts: state => {
      return state.selected;
    }
  },
  mutations: {
    SELECT_A_PRODUCT(state, payload) {
      if (state.selected.includes(payload.id)) return;

      state.selected.push(payload.id);
    },
    DESELECT_A_PRODUCT(state, payload) {
      let index = state.selected.indexOf(payload.id);

      if (index !== -1) state.selected.splice(index, 1);
    },
    SELECT_ALL_PRODUCTS(state) {
      state.selected = state.products.ou;
    }
  },
  actions: {
    isSelected({ state }, payload) {
      return state.selected.includes(payload.id);
    },
    selectAProduct({ commit, state }, payload) {
      if (state.selected.includes(payload.id)) {
        // console.warn("alreadySelected");
        commit("DESELECT_A_PRODUCT", payload);
      } else {
        commit("SELECT_A_PRODUCT", payload);
      }
    },
    selectAllProducts({ commit }) {
      commit("SELECT_ALL_PRODUCTS");
    }
  },
  modules: {}
});
