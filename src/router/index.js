import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

import '../../node_modules/nprogress/nprogress.css'

import QuarkusThroughput from "../components/quarkus/QuarkusThroughput";

import Petclinic from "../components/petclinic/Petclinic";

import QuarkusThroughputBaseline from "../components/quarkus/throughput/QuarkusThroughputBaseline";
import QuarkusThroughputConstantResources from "../components/quarkus/throughput/QuarkusThroughputConstantResources";
import QuarkusThroughputVirtioFS from "../components/quarkus/throughput/QuarkusThroughputVirtioFS";
import QuarkusThroughputSummary from "../components/quarkus/throughput/QuarkusThroughputSummary";

import QuarkusResponseBaseline from "../components/quarkus/responsetime/QuarkusResponseBaseline";
import QuarkusResponseConstantResources from "../components/quarkus/responsetime/QuarkusResponseConstantResources";
import QuarkusResponseVirtioFS from "../components/quarkus/responsetime/QuarkusResponseVirtioFS";
import QuarkusResponseSummary from "../components/quarkus/responsetime/QuarkusResponseSummary";
import QuarkusResponseTime from "../components/quarkus/QuarkusResponseTime";
import Quarkus from "../components/quarkus/Quarkus";

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
          path: 'throughput',
          component: QuarkusThroughput,
          children: [
            {
              path: '/',
              component: QuarkusThroughputBaseline
            },
            {
              path: 'baseline',
              component: QuarkusThroughputBaseline
            },
            {
              path: 'constResources',
              component: QuarkusThroughputConstantResources
            },
            {
              path: 'virtiofs',
              component: QuarkusThroughputVirtioFS
            },
            {
              path: 'summary',
              component: QuarkusThroughputSummary
            },
          ]
        },
        {
          path: 'responsetime',
          component: QuarkusResponseTime,
          children: [
            {
              path: '/',
              component: QuarkusResponseBaseline
            },
            {
              path: 'baseline',
              component: QuarkusResponseBaseline
            },
            {
              path: 'constResources',
              component: QuarkusResponseConstantResources
            },
            {
              path: 'virtiofs',
              component: QuarkusResponseVirtioFS
            },
            {
              path: 'summary',
              component: QuarkusResponseSummary
            }
          ]
        },

      ]
  },
  {
    path: '/petclinic',
    name: 'Petclinic',
    component: Petclinic,
  }
]

const router = new VueRouter({
  mode: 'hash',
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
