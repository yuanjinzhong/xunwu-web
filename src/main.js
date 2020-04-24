import Vue from "vue";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "./routes/routes";
import axios from "axios";

Vue.config.productionTip = true;

Vue.use(ViewUI);

Vue.use(VueRouter);

Vue.prototype.$ajax = axios;

const router = new VueRouter({ routes });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
