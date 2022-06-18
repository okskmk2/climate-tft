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
  apiKey: "AIzaSyArnCVV0YwLNFEyRGiUUcgjirmIxogKsjY",
  authDomain: "baeundev-e80f2.firebaseapp.com",
  projectId: "baeundev-e80f2",
  storageBucket: "baeundev-e80f2.appspot.com",
  messagingSenderId: "1004641766437",
  appId: "1:1004641766437:web:1d49c67ff22592cda103cc"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
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
  render: h => h(App)
}).$mount("#app");
