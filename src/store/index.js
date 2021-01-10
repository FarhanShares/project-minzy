import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: {
      ou: [],
      gow: [],
      dow: [],
      aows: []
    },
    selectedAll: {
      all: false,
      ou: false,
      gow: false,
      aows: false
    },
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
      return state.selected.ou;
    }
  },
  mutations: {
    SELECT_A_PRODUCT(state, payload) {
      let shop = state.selected[payload.shop];
      if (shop && shop.includes(payload.id)) return;

      shop.push(payload.id);
    },
    DESELECT_A_PRODUCT(state, payload) {
      let shop = state.selected[payload.shop];
      if (shop) {
        let index = shop.indexOf(payload.id);

        if (index !== -1) shop.splice(index, 1);
      }
    },
    SELECT_ALL_PRODUCTS(state) {
      for (const [shop, products] of Object.entries(state.products)) {
        products.forEach(item => {
          // console.log(item.id);
          state.selected[shop].push(item.id);
        });
        state.selectedAll.all = true;
        // console.log(shop);
        // console.log(products);
        // console.table(state.selected[shop]);
      }
    },
    DESELECT_ALL_PRODUCTS(state) {
      for (const [shop] of Object.entries(state.products)) {
        state.selected[shop] = [];
        // console.log(shop);
        // console.table(state.selected[shop]);
      }
      state.selectedAll.all = false;
    }
  },
  actions: {
    isSelected({ state }, payload) {
      let shop = state.selected[payload.shop];

      return shop && shop.includes(payload.id);
    },
    selectAProduct({ commit, state }, payload) {
      let shop = state.selected[payload.shop];

      if (shop && shop.includes(payload.id)) {
        commit("DESELECT_A_PRODUCT", payload);
      } else {
        commit("SELECT_A_PRODUCT", payload);
      }
    },
    selectAllProducts({ state, commit }, payload) {
      if (state.selectedAll[payload.shop]) {
        commit("DESELECT_ALL_PRODUCTS", payload);
      } else {
        commit("SELECT_ALL_PRODUCTS", payload);
      }
    }
  },
  modules: {}
});
