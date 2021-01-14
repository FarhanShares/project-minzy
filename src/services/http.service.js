import Vue from "vue";
import Axios from "axios";
import ApiConfig from "@/config/apiConfig";

Vue.prototype.$http = Axios.create({
  baseURL: ApiConfig.baseURL,
  timeout: 60,
  headers: ApiConfig.commonHeaders
});

// Vue.prototype.$http.defaults.headers.common["Accept"] =
//   ApiConfig.commonHeaders["Accept"];
// Vue.prototype.$http.defaults.headers.common["Content-Type"] =
//   ApiConfig.commonHeaders["Content-Type"];

// Vue.prototype.$http.defaults.baseURL = ApiConfig.baseURL;
