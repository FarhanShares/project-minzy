import Vue from "vue";
import Axios from "axios";
import ApiConfig from "@/config/apiConfig";
import OuConfig from "@/config/ouConfig";

Vue.prototype.$ou = Axios;

Vue.prototype.$ou.defaults.headers.common["Accept"] =
  ApiConfig.commonHeaders["Accept"];
Vue.prototype.$ou.defaults.headers.common["Content-Type"] =
  ApiConfig.commonHeaders["Content-Type"];

Vue.prototype.$ou.defaults.baseURL = OuConfig.api.baseURL;
