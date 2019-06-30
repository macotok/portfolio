import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';
import dotenv from 'dotenv';
import VeeValidate, { Validator } from 'vee-validate';
import dictionary from './validate/disctionary';
import App from './App';
import routes from './routes';
import _store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VModal);
Vue.use(VeeValidate);

dotenv.config();
const router = new VueRouter(routes);
const store = new Vuex.Store(_store);
Validator.localize('ja', dictionary);

const app = new Vue({
  components: { App },
  template: '<App/>',
  router,
  store,
});
app.$mount('#app');
