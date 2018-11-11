import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import firebase from 'firebase';
import App from './App';
import routes from './routes';
import _store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter(routes);
const store = new Vuex.Store(_store);

const config = {
  apiKey: process.env.FIRE_BASE.API_KEY,
  authDomain: process.env.FIRE_BASE.AUTH_DOMAIN,
  databaseURL: process.env.FIRE_BASE.DATABASE_URL,
  projectId: process.env.FIRE_BASE.PROJECT_ID,
  storageBucket: process.env.FIRE_BASE.STORAGE_BUCKET,
  messagingSenderId: process.env.FIRE_BASE.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
