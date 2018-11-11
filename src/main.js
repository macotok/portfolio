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
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
