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
    getSelectedProducts: state => (shop = "all") => {
      if (shop === "all") {
        return state.selected;
      }
      return state.selected[shop] || [];
    },
    getSelectionCount: state => {
      let ids = Object.keys(state.selected).reduce(function(r, k) {
        return r.concat(state.selected[k]);
      }, []);
      console.warn(ids);
      return ids.length;
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
    SELECT_ALL_PRODUCTS(state, payload) {
      if (payload.shop === "all") {
        // select from all shops
        let getProducts = state.products;

        for (const [shop, products] of Object.entries(getProducts)) {
          products.forEach(item => {
            // console.log(item.id);
            state.selected[shop].push(item.id);
          });
          state.selectedAll.all = true;
          // console.log(shop);
          // console.log(products);
          // console.table(state.selected[shop]);
        }
      } else {
        // remove all selected first
        // for (const [shop] of Object.entries(state.products)) {
        //   state.selected[shop] = [];
        // }
        state.selectedAll.all = false;

        // select the specific shop products
        let getProducts = state.products[payload.shop] || [];

        for (const key in getProducts) {
          // console.warn(getProducts[key].id);
          state.selected[payload.shop].push(getProducts[key].id);

          state.selectedAll[payload.shop] = true;
        }
      }
    },
    DESELECT_ALL_PRODUCTS(state, payload) {
      if (payload.shop === "all") {
        for (const [shop] of Object.entries(state.products)) {
          state.selected[shop] = [];
          // console.log(shop);
          // console.table(state.selected[shop]);
        }
        state.selectedAll.all = false;
      } else {
        state.selected[payload.shop] = [];

        state.selectedAll[payload.shop] = false;
        state.selectedAll.all = false;
      }
    },
    // payload : { shop: "id", products: [], reset: false}
    ADD_PRODUCTS_TO_SHOP(state, payload) {
      if (payload.reset) {
        state.products[payload.shop] = [];
      }

      state.products[payload.shop] = [...payload.products];
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
    },
    addProductsToShop({ commit }, payload) {
      commit("ADD_PRODUCTS_TO_SHOP", payload);
    }
  },
  modules: {}
});
