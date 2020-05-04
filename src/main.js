// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'es6-promise/auto'
import App from './App'
import router from './router'
import store from "./store"
import firebase from "firebase/app"

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCxgNYFufLFf-eh-7xbHVzKrhD4We-J8fA",
  authDomain: "gw-app-7d809.firebaseapp.com",
  databaseURL: "https://gw-app-7d809.firebaseio.com",
  projectId: "gw-app-7d809",
  storageBucket: "gw-app-7d809.appspot.com",
  messagingSenderId: "300664636460",
  appId: "1:300664636460:web:157aef1cd417d840293d89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
