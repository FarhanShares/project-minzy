import ApiConfig from "@/config/apiConfig";

export default {
  api: {
    ...ApiConfig,
    baseURL: "http://warhorse.kinsta.cloud/shopgow/wp-json/wp/v2",
    orders: {
      index: "/receipts"
    },
    transactions: {
      index: "/transactions"
    }
  }
};
