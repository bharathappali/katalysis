import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

import '../../node_modules/nprogress/nprogress.css'
import Quarkus from "../components/quarkus/Quarkus";
import QuarkusBaseline from "../components/quarkus/throughput/QuarkusThroughputBaseline";
import QuarkusConstantResources from "../components/quarkus/throughput/QuarkusThroughputConstantResources";
import QuarkusVirtioFS from "../components/quarkus/throughput/QuarkusThroughputVirtioFS";
import Petclinic from "../components/petclinic/Petclinic";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
      path: '/quarkus',
      name: 'Quarkus',
      component: Quarkus,
      children: [
        {
          path: '/',
          component: QuarkusBaseline
        },
        {
          path: 'baseline',
          component: QuarkusBaseline
        },
        {
          path: 'constResources',
          component: QuarkusConstantResources
        },
        {
          path: 'virtiofs',
          component: QuarkusVirtioFS
        }
      ]
  },
  {
    path: '/petclinic',
    name: 'Petclinic',
    component: Petclinic,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  NProgress.start()
  next()
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    NProgress.done()
})

export default router
