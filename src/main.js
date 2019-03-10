import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VModal from 'vue-js-modal';
import App from './App';
import routes from './routes';
import _store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VModal);

const router = new VueRouter(routes);
const storeObj = Object.assign({}, _store, {
  strict: process.env.NODE_ENV !== 'production',
});
const store = new Vuex.Store(storeObj);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
