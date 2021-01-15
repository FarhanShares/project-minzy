import ApiConfig from "@/config/api.config";

export default {
  api: {
    ...ApiConfig,
    baseURL: "http://warhorse.kinsta.cloud/shopou/wp-json/wp/v2",
    orders: {
      index: "/receipts"
    },
    transactions: {
      index: "/transactions"
    }
  }
};
