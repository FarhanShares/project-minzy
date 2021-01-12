import Vue from "vue";
import Axios from "axios";
import ApiConfig from "@/config/apiConfig";
import OuConfig from "@/config/ouConfig";
import GowConfig from "@/config/gowConfig";

Vue.prototype.$http = (shop = "ou") => {
  Vue.prototype.$http = Axios;

  Vue.prototype.$http.defaults.headers.common["Accept"] =
    ApiConfig.commonHeaders["Accept"];
  Vue.prototype.$http.defaults.headers.common["Content-Type"] =
    ApiConfig.commonHeaders["Content-Type"];

  let baseURL;

  if (shop === "ou") {
    baseURL = OuConfig.api.baseURL;
  }
  if (shop === "gow") {
    baseURL = GowConfig.api.baseURL;
  }

  Vue.prototype.$http.defaults.baseURL = baseURL;

  return Vue.prototype.$http;
};
