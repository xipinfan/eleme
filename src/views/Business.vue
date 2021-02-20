<template>
  <div class="Business">
    <router-view></router-view>
    <div id="Busdivision"></div>
    <!-- 下边导航栏 -->
    <div id="BusNavbar">    
      <div @click="Buschange(0)" class="Busitem">    <!-- 判断导航切换,实现点击变色 -->
        <!-- 调用阿里云矢量库图标 -->
        <svg t="1613634114810" class="icon abc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2742" width="25" height="25"><path d="M320 480h384v-64H320zM320 608h256v-64h-256zM320 736h256v-64h-256z" :fill="BusAvg[0]" p-id="2743"></path><path d="M832 160h-128V96H320v64H192c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h640c19.2 0 32-12.8 32-32V192c0-19.2-12.8-32-32-32zM384 160h256v64h-256V160z m416 704H224V224h96v64h384V224h96v640z" :fill="BusAvg[0]" p-id="2744"></path></svg>
        <!-- 提示文字 -->
        <div class="Busfont" :style="{ color:BusAvg[0] }">预定</div>
      </div>
      <div @click="Buschange(1)" class="Busitem">
        <svg t="1613634238998" class="icon abc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2873" width="25" height="25"><path d="M512 787.392l-212.64-212.64-96.832-96.832-9.12-9.12A127.04 127.04 0 0 1 160 383.36c0-70.624 57.408-128 128-128 32.8 0 62.432 12.704 85.12 33.088l9.76 9.76 96.544 96.512L512 427.36l32.576-32.64 96.544-96.512 9.76-9.76A126.912 126.912 0 0 1 736 255.36c70.592 0 128 57.408 128 128a127.04 127.04 0 0 1-33.408 85.472l-9.12 9.12-96.832 96.832L512 787.392zM736 191.36c-47.584 0-90.944 17.6-124.48 46.272l-0.16-0.16-2.144 2.176-19.232 19.232L512 336.832 434.016 258.88l-19.232-19.2-2.144-2.208-0.16 0.16A190.944 190.944 0 0 0 288 191.36a192 192 0 0 0-192 192c0 58.176 25.984 110.176 66.848 145.408L512 877.888l349.152-349.12A191.488 191.488 0 0 0 928 383.296a192 192 0 0 0-192-192z" :fill="BusAvg[1]" p-id="2874"></path></svg>
        <div class="Busfont" :style="{ color:BusAvg[1] }">真香</div>
      </div>
      <div @click="Buschange(2)" class="Busitem">
        <svg t="1613632893962" class="icon abc" viewBox="0 0 1024 1024" width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2612"><path d="M384 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 384 768M704 768a64 64 0 1 0 0.032 128.032A64 64 0 0 0 704 768M312.672 512l-51.456-192h560.96l-51.456 192H312.672z m583.36-224a32 32 0 0 0-32-32H244.064L209.824 128H96v64h64.672l145.728 544H800v-64H355.52l-25.664-96H819.84l12.16-45.376 64-238.88-0.768-0.192C895.424 290.336 896 289.28 896 288z" :fill="BusAvg[2]" p-id="2613"></path></svg>
        <div class="Busfont" :style="{ color:BusAvg[2] }">订单</div>
      </div>
      <div @click="Buschange(3)" class="Busitem">
        <svg t="1613634290672" class="icon abc" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3003" width="25" height="25"><path d="M512 448c-35.296 0-64-28.704-64-64s28.704-64 64-64 64 28.704 64 64-28.704 64-64 64m0-192c-70.592 0-128 57.408-128 128s57.408 128 128 128 128-57.408 128-128-57.408-128-128-128" :fill="BusAvg[3]" p-id="3004"></path><path d="M768 797.632v-69.92a151.904 151.904 0 0 0-151.712-151.68h-208.576A151.904 151.904 0 0 0 256 727.68v69.92C177.632 727.36 128 625.6 128 512 128 299.904 299.936 128 512 128s384 171.904 384 384c0 113.6-49.632 215.36-128 285.632m-448 46.56v-116.48a87.776 87.776 0 0 1 87.712-87.68h208.576A87.776 87.776 0 0 1 704 727.68v116.48a381.568 381.568 0 0 1-384 0m192-780.16C264.96 64 64 264.96 64 512c0 246.976 200.96 448 448 448s448-201.024 448-448c0-247.04-200.96-448-448-448" :fill="BusAvg[3]" p-id="3005"></path></svg>
        <div class="Busfont" :style="{ color:BusAvg[3] }">我的</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Business',
  data() {
    return {
      Buscolor:'#181818',    //设定默认颜色
      Buscolor1:"#1296db",    //设定选中颜色
      BusAvg:['#181818','#181818','#181818','#181818'],    //保存每个图标设定颜色
      BusParams:[ 'reserve','good','order','mine' ],
    }
  },  
  methods: {
    //点击切换颜色
    Buschange(BusSign){    //传入需要切换的图标下标
      for(let i=0;i<this.BusAvg.length;i++){    //先初始化所有的颜色
        this.BusAvg[i]=this.Buscolor;
      }
      this.BusAvg[BusSign]=this.Buscolor1;    //将下标为BusSign的进行颜色的改变
      this.$router.push({name:this.BusParams[BusSign]});
    },
    BusInit(){
      //通过判断目前请求的路由来设置颜色,以及初始化颜色
      for(let i=0;i<this.BusAvg.length;i++){
        this.BusAvg[i]=this.Buscolor;
      }
      this.BusAvg[this.BusParams.findIndex(item=>item === this.$route.name)]=this.Buscolor1;
    },
  },  
  //内容初始化
  created() {
    this.BusInit()
  },
}
</script>

<style scoped>
#Busdivision{
  height: 0.02px;
  width: 100%;
  background-color: #e7e7e7;
  position: fixed;
  left: 0;
  bottom: 50px;
}
#BusNavbar{
  position: fixed;  /* 绝对定位 */
  bottom: 0;       /* 设定元素与底部距离为0 */
  left: 0;          /* 初始会有默认的left长度 */
  z-index: 1;      /* 元素所在图层 */
  display: flex;    /* 盒模型弹性布局 */
  width: 100%;
  height: 50px;
  align-items: stretch;    /* 元素拉伸适应容器 */
  background-color: #F7F7F7;
}
.Busitem{
  display: flex;    /* 盒模型弹性布局 */
  flex: 1;       /* 让所有的弹性盒模型对象的子元素都有相同的长度 */
  justify-content: center;   /* 设置项目位于容器何处 */
  flex-direction: column;  /* 设置flex元素方向 */
  color: #646566;      
  font-size: 0.25em;
  /* cursor: pointer;    用来设置点击提示的 */
  align-items: center;  /* 居中对齐元素 */
}
.Busfont{
  margin-top: 5px;
}
.abc{
  margin-top: 3px;
  color: rgb(228, 34, 34);
}
</style>