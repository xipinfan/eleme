<template>
  <div class="Reserve">
    <h1>Reserve</h1>
    <button class="ReserveButton" @click="ReserveAxiosDemo">来啦来啦</button>
  </div>
</template>

<script>
export default {
  name: 'Reserve',
  data() {
    return {
      
    }
  },
  props: {
    msg: String
  },
  methods: {
    ReserveAxiosDemo(){
      this.axios.post('/api/outfrom')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err); 
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ReserveButton{
  height: 30px;
  width: 100px;
  font-size: 20px;
}
</style>
