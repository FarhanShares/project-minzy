import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

// Services

// eslint-disable-next-line
import http from "@/services/http.service";
// eslint-disable-next-line
import ou from "@/services/ou.service";
// eslint-disable-next-line
import gow from "@/services/gow.service";

import VueTailwind from "vue-tailwind";
import vueTailwindTheme from "@/config/vue-tailwind.config";
Vue.use(VueTailwind, vueTailwindTheme);

import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
  color: "#FCD34D",
  failedColor: "red",
  height: "10px"
});

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
Vue.use(Loading, {
  // props
  color: "white",
  isFullPage: false,
  opacity: 0,
  blur: null
});

import SpinnerSkeleton from "@/components/skeleton/SpinnerSkeleton";
Vue.component(SpinnerSkeleton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
