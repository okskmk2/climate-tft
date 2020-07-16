import Vue from "vue";
import App from "./views/App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import axios from "axios";
import firebase from "firebase";

// axios.defaults.withCredentials = false;
// axios.defaults.headers = {'Access-Control-Allow-Origin': 'https://www.tistory.com/'};
// axios.defaults.proxy =  {
//   host: 'okskmk2.github.io',
//   port: 80,
// },

var firebaseConfig = {
  apiKey: "AIzaSyCgNgip47j_8yaqksKYuu259RnRCzPkbrQ",
  authDomain: "beauntest2.firebaseapp.com",
  databaseURL: "https://beauntest2.firebaseio.com",
  projectId: "beauntest2",
  storageBucket: "beauntest2.appspot.com",
  messagingSenderId: "529606047384",
  appId: "1:529606047384:web:9f3f8627b23a7f9d1882ed",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit("setUser", user.toJSON());
  }
});

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
