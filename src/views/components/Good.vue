<template>
  <div class="Good">
    <h1>Good</h1>
    <Cell :CellName="GoodName" :CellFont="GoodFont"></Cell><br>
    <Field></Field>
  </div>
</template>

<script>
import Cell from './assembly/Cell.vue';
import Field from './assembly/Field.vue'

export default {
  name: 'Good',
  data() {
    return {
      GoodName:"账号安全",
      GoodFont:"开启小额免密支付",

    }
  },
  components: {
      Cell,
      Field,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
