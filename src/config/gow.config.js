import ApiConfig from "@/config/api.config";

export default {
  api: {
    ...ApiConfig,
    baseURL: "http://warhorse.kinsta.cloud/shopgow/wp-json/wp/v2",
    orders: {
      index: "/receipts"
    },
    products: {
      index: "/transactions"
    }
  },
  events: {
    labelsPopup: "labels-popup"
  }
};
