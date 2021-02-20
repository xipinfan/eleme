//登录模块
<template>
  <div class="Sign">
    <h1>This is an about page111</h1>
  </div>
</template>

<script>
export default {
  name:"Sign",
  created:function(){
    console.log(this.$route.params)
  },
}
</script>