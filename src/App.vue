<template>
  <div id="app">
    <div id="nav">
      <Header />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/Product-Detils/2">product/2</router-link> |
      <router-link to="/login">login</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data() {
    return{
      //
    }
  },
  components:{
    Header
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header[data-v-61dd7a3d]{
    padding: 0 !important;
    text-shadow: 0 !important;
}
</style>
