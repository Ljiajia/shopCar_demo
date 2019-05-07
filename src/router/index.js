import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index';
import my from '../views/my';
import shopcar from '../views/shopcar';
import type from '../views/type';
Vue.use(Router)
import Mydllist from "../components/Mydllidt";
Vue.component('Mydllist', Mydllist)
export default new Router({
    routes: [{
        path: '/',
        redirect: "/index"
    }, {
        path: '/index',
        name: 'index',
        component: index
    }, {
        path: '/type',
        name: 'type',
        component: type
    }, {
        path: '/shopcar',
        name: 'shopcar',
        component: shopcar
    }, {
        path: '/my',
        name: 'my',
        component: my
    }]
})