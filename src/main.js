import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';

Vue.config.productionTip = false

const http = Axios.create({
  baseURL: 'localhost:8081'
})

new Vue({
  render: h => h(App),
  http,
}).$mount('#app')
