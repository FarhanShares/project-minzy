import Vue from "vue";
import Axios from "axios";
import OuConfig from "@/config/ou.config";

Vue.prototype.$gow = Axios.create({
  baseURL: OuConfig.api.baseURL,
  timeout: 1000,
  headers: OuConfig.commonHeaders
});
