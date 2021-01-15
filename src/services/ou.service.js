import Vue from "vue";
import Axios from "axios";
import OuConfig from "@/config/ou.config";

Vue.prototype.$ou = Axios.create({
  baseURL: OuConfig.api.baseURL,
  timeout: 30000,
  headers: OuConfig.commonHeaders
});
