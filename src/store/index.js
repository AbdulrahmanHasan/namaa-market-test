import Vue from 'vue'
import Vuex from 'vuex'

//folders Vuex
import offers from './SpecialOffer/index'
import Blog from './Blog/index' 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex)

  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  axios.defaults.baseURL = 'http://localhost:9999'

  let token = document.head.querySelector('meta[name="csrf-token"]');

  if (token) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
  } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
  }

const Store = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
          offers,
          Blog
        },
    }
)}
export default Store