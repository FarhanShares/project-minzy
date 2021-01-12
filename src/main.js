import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/tailwind.css";

Vue.config.productionTip = false;

// Services

// eslint-disable-next-line
import http from "@/services/http";
// eslint-disable-next-line
import ou from "@/services/ou";
// eslint-disable-next-line
import gow from "@/services/gow";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
