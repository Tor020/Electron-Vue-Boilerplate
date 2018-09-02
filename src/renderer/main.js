import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'





if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

import './assets/sass_notworking/reset.css'
import './assets/sass_notworking/styles.css'
import './assets/sass_notworking/pieces.css'

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

