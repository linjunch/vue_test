import Vue from 'vue';
import App from './App.vue';
// import ElementUI from "element-ui";

import {
  Button,
  Input,
  Table,
  TableColumn,
  Radio,
  Checkbox,
  Select,
  Option
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import animated from 'animate.css';

Vue.use(animated);

Vue.config.productionTip = false;
// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Option);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
