<template>
<!-- 主页面(负责进行大型页面跳转) -->
  <router-view/>
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
      console.log("sb");
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
