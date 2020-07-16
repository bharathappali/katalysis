import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'

import '../../node_modules/nprogress/nprogress.css'

import KatalysisThroughput from "../components/throughput/KatalysisThroughput";
import KatalysisResponseTime from "../components/responsetime/KatalysisResponseTime";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/throughput',
    name: 'KatalysisThroughput',
    component: KatalysisThroughput
  },
  {
    path: '/responsetime',
    name: 'KatalysisResponseTime',
    component: KatalysisResponseTime
  }
  // {
  //     path: '/quarkus',
  //     name: 'Quarkus',
  //     component: Quarkus,
  //     children: [
  //       {
  //         path: 'throughput',
  //         component: QuarkusThroughput,
  //         children: [
  //           {
  //             path: '/',
  //             component: QuarkusThroughputBaseline
  //           },
  //           {
  //             path: 'baseline',
  //             component: QuarkusThroughputBaseline
  //           },
  //           {
  //             path: 'constResources',
  //             component: QuarkusThroughputConstantResources
  //           },
  //           {
  //             path: 'virtiofs',
  //             component: QuarkusThroughputVirtioFS
  //           },
  //           {
  //             path: 'summary',
  //             component: QuarkusThroughputSummary
  //           },
  //         ]
  //       },
  //       {
  //         path: 'responsetime',
  //         component: QuarkusResponseTime,
  //         children: [
  //           {
  //             path: '/',
  //             component: QuarkusResponseBaseline
  //           },
  //           {
  //             path: 'baseline',
  //             component: QuarkusResponseBaseline
  //           },
  //           {
  //             path: 'constResources',
  //             component: QuarkusResponseConstantResources
  //           },
  //           {
  //             path: 'virtiofs',
  //             component: QuarkusResponseVirtioFS
  //           },
  //           {
  //             path: 'summary',
  //             component: QuarkusResponseSummary
  //           }
  //         ]
  //       },
  //
  //     ]
  // },
  // {
  //   path: '/petclinic',
  //   name: 'Petclinic',
  //   component: Petclinic,
  //   children: [
  //     {
  //       path: 'throughput',
  //       component: QuarkusThroughput,
  //       children: [
  //         {
  //           path: '/',
  //           component: QuarkusThroughputBaseline
  //         },
  //         {
  //           path: 'baseline',
  //           component: QuarkusThroughputBaseline
  //         },
  //         {
  //           path: 'constResources',
  //           component: QuarkusThroughputConstantResources
  //         },
  //         {
  //           path: 'virtiofs',
  //           component: QuarkusThroughputVirtioFS
  //         },
  //         {
  //           path: 'summary',
  //           component: QuarkusThroughputSummary
  //         },
  //       ]
  //     },
  //     {
  //       path: 'responsetime',
  //       component: PetclinicResponseTime,
  //       children: [
  //         {
  //           path: '/',
  //           component: PetclinicResponseSummary
  //         }
  //       ]
  //     },
  //
  //   ]
  // }
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
