import Vue from "vue";
import App from "./App.vue";
// import ElementUI from "element-ui";
import { Button, Input, Table, TableColumn } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
