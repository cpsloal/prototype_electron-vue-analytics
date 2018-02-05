import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import analytics from './plugins/electron-vue-analytics'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

// Update with you own Google Analytics trackId
Vue.use(analytics, {
  trackId: 'UA-XXXXXXXXX-X'
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
