// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Myfooter from "./components/Myfooter";
Vue.component("Myfooter", Myfooter)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper);
import axios from "axios";
Vue.prototype.$ajax = axios;
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})