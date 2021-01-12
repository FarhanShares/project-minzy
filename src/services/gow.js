import Vue from "vue";
import Axios from "axios";
import ApiConfig from "@/config/apiConfig";
import GowConfig from "@/config/gowConfig";

Vue.prototype.$gow = Axios;

Vue.prototype.$gow.defaults.headers.common["Accept"] =
  ApiConfig.commonHeaders["Accept"];
Vue.prototype.$gow.defaults.headers.common["Content-Type"] =
  ApiConfig.commonHeaders["Content-Type"];

Vue.prototype.$gow.defaults.baseURL = GowConfig.api.baseURL;
