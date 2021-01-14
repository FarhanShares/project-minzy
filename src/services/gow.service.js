import Vue from "vue";
import Axios from "axios";
import GowConfig from "@/config/gow.config";

Vue.prototype.$gow = Axios.create({
  baseURL: GowConfig.api.baseURL,
  timeout: 1000,
  headers: GowConfig.commonHeaders
});
