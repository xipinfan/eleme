<template>
  <div class="Field">
    <input class="van-field__control" :placeholder="Tips" :type="Type" :value="Input">
  </div>
  <FieldCss></FieldCss>
</template>

<script>
import FieldCss from './assembly-css/FieldCss.vue'

export default {
  name: 'Field',
  components: {
      FieldCss,
  },
  props:["Type","Input","Tips"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>