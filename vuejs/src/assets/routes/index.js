import Vue from 'vue'
import App from '../views/main.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: App }
]
  
const router = new VueRouter({
    routes
})

export default router