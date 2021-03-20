<template>
<!-- 主页面(负责进行大型页面跳转) -->
  <div class="nav">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"nav",
  data() {
    return {
      
    }
  },
  methods: {
    username1(){
      console.log(this.$route.params);
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
