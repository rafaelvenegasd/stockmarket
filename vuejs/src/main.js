import Vue from 'vue'
import axios from 'axios';
import router from './assets/routes/index.js'
import App from './assets/views/main.vue'
import './assets/sass/main.scss';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({ el: '#app', router, render: h => h(App) })

