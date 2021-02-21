<template>
  <div class="Setup">
    <div class="SetAbove">
      <div class="SetReturn" @click="SetUpReturn">
        <svg t="1613877591143" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6024" width="20" height="20"><path d="M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z" p-id="6025" fill="#bfbfbf"></path></svg>
      </div>
      <div class="SetTitle">设置</div>
      <div></div>
    </div>
    <div style="margin-top:10px;"></div>
    <div>
      <Cell :CellName="GoodName" :CellFont="GoodFont"></Cell>
      <Divider></Divider>
      <Cell :CellName="GoodName1"></Cell>
      <Divider></Divider>
      <Cell :CellName="GoodName2"></Cell>
      <Divider></Divider>
      <Cell :CellName="GoodName3"></Cell>
      <Divider></Divider>
      <Cell :CellName="GoodName4"></Cell>
      <Divider></Divider>
    </div>
  </div>
</template>


<script>
import Cell from './components/assembly/Cell.vue';
import Divider from './components/assembly/Divider.vue';

export default {
  name:"Setup",
  data() {
    return {
      GoodName:"账号安全",
      GoodFont:"开启小额免密支付",
      GoodName1:"通用",
      GoodName2:"欢迎评分",
      GoodName3:"关于去哪儿",
      GoodName4:"隐私",
      GoodName5:"意见反馈",
    }
  },
  components: {
      Cell,
      Divider,
  },
  methods: {
    SetUpReturn(){
      this.$router.push({ name:'mine' });
    }
  },
}
</script>

<style>
.SetAbove{
  background-color: #ffffff;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.SetReturn{
  margin-left: 5px;
}
.SetTitle{
  font-size: 15px;
  font-weight: 600;
  margin-left: -23px;
}
</style>