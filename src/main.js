import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Vuesax from 'vuesax'
import Chart from 'vue2-frappe'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax)
Vue.use(Chart)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
