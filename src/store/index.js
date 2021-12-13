import Vue from 'vue'
import Vuex from 'vuex'

//folders Vuex
import Products from './Products'
import Blog from './Blog/index' 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(Vuex)
 

const Store = () => {
  return new Vuex.Store({
      namespaced: true,
      modules: {
        Products,
        Blog
      },
  }
)}


export default Store