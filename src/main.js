import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

  try{
      // axios.defaults.withCredentials = false
      axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

      axios.defaults.baseURL = 'http://localhost:8081'
  
      let  token = document.head.querySelector('meta[name="csrf-token"]');
  
      if (token) {
        axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
        console.log('test success in main js');
          
      } else {
          console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
      }
    }catch($r){
        console.log('test error in main js');
      }


import _ from 'lodash';    
Object.defineProperty(Vue.prototype, '$_', { value: _ });


import { BootstrapVue, bootstrap } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue, bootstrap)


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



import commit from './commit';
Vue.mixin(commit);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

