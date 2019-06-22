import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';
import VeeValidate from 'vee-validate';
import App from './App';
import routes from './routes';
import _store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VModal);
Vue.use(VeeValidate);

const router = new VueRouter(routes);
const store = new Vuex.Store(_store);

const app = new Vue({
  components: { App },
  template: '<App/>',
  router,
  store,
});
app.$mount('#app');
