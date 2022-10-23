import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import "./assets/css/style.css"
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router
}).$mount("#app");
