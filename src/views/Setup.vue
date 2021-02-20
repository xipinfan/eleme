<template>
  <div class="Setup">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name:"Setup",
  created:function(){
    console.log(this.$route.params)
  },
}
</script>