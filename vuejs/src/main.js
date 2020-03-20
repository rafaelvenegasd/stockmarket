import './assets/sass/main.scss';
import Vue from 'vue'
import './assets/components/main.vue';
import axios from 'axios';
import EventBus from './assets/js/event-bus'
import App from './assets/components/main.vue';
import navbar from './assets/components/navbar.vue';
import aside from './assets/components/aside.vue';
import details from './assets/components/details.vue'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    render: el => el(App)
}).$mount("#content");

new Vue({
    render: el => el(aside)
}).$mount("#aside");

new Vue({
    render: el => el(navbar)
}).$mount("#header");

