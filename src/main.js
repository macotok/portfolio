import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App';
import routes from './routes';
import _store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routes);
const store = new Vuex.Store(_store);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
