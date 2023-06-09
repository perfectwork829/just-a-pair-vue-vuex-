import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'
import router from './router'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'
import './filters'
import firebaseAuth from './firebaseAuth'
import Notifications from 'vue-notification'
import $ from 'jquery'

global.$ = $;

Vue.config.productionTip = false

// Global CSS styles
import '@/assets/scss/styles.scss'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(firebaseAuth)
Vue.use(Notifications)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')