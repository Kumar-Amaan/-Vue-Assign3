import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import About from "@/components/About";
import Home from "@/components/Home";
import Contact from '@/components/Contact'
import User from '@/components/User'
import Watcher from '@/components/Watcher'
import Computed from '@/components/Computed'
import Dynamic from '@/components/Dynamic'

import './assets/style.css'

Vue.use(VueRouter);
const routes=[
  {
    path:'/',
    component: Home
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/contact',
    component: Contact
  },
  {
    path:'/user/:id',
    component: User
  },
  {
    path:'/watcher',
    component: Watcher
  },
  {
    path:'/computed',
    component: Computed
  },

  {
    path:'/dynamic',
    component: Dynamic
  },
]

const router=new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  router:router,
  render: (h) => h(App),
}).$mount("#app");
