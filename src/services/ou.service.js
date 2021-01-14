import Vue from "vue";
import Axios from "axios";
import ApiConfig from "@/config/apiConfig";
import OuConfig from "@/config/ouConfig";

Vue.prototype.$gow = Axios.create({
  baseURL: OuConfig.api.baseURL,
  timeout: 1000,
  headers: ApiConfig.commonHeaders
});
