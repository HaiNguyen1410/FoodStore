
import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/css/style.css";
import "./assets/css/responsive.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { CarouselPlugin } from "bootstrap-vue";
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuex from 'vuex'

library.add(faUserSecret);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(CarouselPlugin);

Vue.use(Vuex)

const store = new Vuex.Store({
  state(){
    return {
      cart:[]
    }
  }
})

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  store
}).$mount("#app");