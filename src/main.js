import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

// import server from './server'
// Vue.use(server)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// import iview from 'iview'
// Vue.use(iview)
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);


import _ from 'lodash';    
Object.defineProperty(Vue.prototype, '$_', { value: _ });


import { BootstrapVue, bootstrap } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue, bootstrap)


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



import commit from './commit';
Vue.mixin(commit);   // accessable all the project

Vue.config.productionTip = false



new Vue({
  router,
  store: store(),
  i18n,
  render: h => h(App)
}).$mount('#app')

