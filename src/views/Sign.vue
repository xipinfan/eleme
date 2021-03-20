//登录模块
<template>
  <div class="Sign">
    <div class="SignLayout" v-if="SignMethend==true">
      <div class="SignBlank"></div>
      <div class="SignAbove">
        <div @click="SignReturn">
          <svg t="1613972146004" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5783" width="20" height="20"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" p-id="5784"></path></svg>
        </div>
        <div style="font-size:13px;font-weight: 550;" @click="SignChange()">密码登录</div>
      </div>
      <div class="SignLoginTips">手机号登录</div>
      <div class="SignText">
        <input type="text" @change="SignPhoneInput()" class="field_control" v-model="SignPhone" placeholder="请输入手机号">
      </div>
      <div class="SignText">
        <input type="text" class="field_control" placeholder="验证码">
        <button class="SignButton1">获取验证码</button>
      </div>
      <div class="SignButton">
        <button class="Signbutton1">同意协议并登录</button>
      </div>
      <div class="SignRegister">未注册手机号登录后将自动生成账号，且代表你已圆读井同意《用户服务协议》、《院私政策》</div>  
    </div>
    <div class="SignLayout" v-if="SignMethend==false">
      <div class="SignBlank"></div>
      <div class="SignAbove">
        <div @click="SignReturn">
          <svg t="1613972146004" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5783" width="20" height="20"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" p-id="5784"></path></svg>
        </div>
        <div style="font-size:13px;font-weight: 550;" @click="SignChange()">手机号登录</div>
      </div>
      <div class="SignLoginTips">密码登录</div>
      <div class="SignText">
        <input type="text" class="field_control" placeholder="手机/用户名">
      </div>
      <div class="SignText">
        <input type="password" class="field_control" placeholder="密码">
      </div>
      <div class="SignButton">
        <button class="Signbutton1">登录</button>
      </div>
      <div class="SignRegister" style="color:#02B6FD;text-algin:left;">忘记密码</div>  
    </div>
  </div>
</template>

<script>
export default {
  name:"Sign",
  data() {
    return {
      SignMethend:true,
      SignPhone:"",
    }
  },
  methods: {
    SignReturn(){
      this.$router.push({ name:'mine' });
    },
    SignChange(){
      if(this.SignMethend === true){
        this.SignMethend=false;
      }
      else{
        this.SignMethend=true;
      }
    },
    SignPhoneInput(){
      if(this.SignPhone.length === 11){
        console.log("Sb");
      }
    },
  },
}
</script>

<style>
input,button{
  outline: none;
  display:block;
}
.field_control{
  font-size: 15px;
  cursor: none;
  box-sizing: border-box;
  width: 100% ;
  margin: 0;
  padding: 0;
  border: 0;
  line-height: inherit;
  text-align: left;
}
.Sign{
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
}
.SignLayout{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.SignBlank{
  display: flex;
  height: 20px;
}
.SignAbove{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.SignLoginTips{
  display: flex;
  align-self: flex-start;
  font-size: 24px;
  font-weight:unset;
  margin-top: 10px;
  margin-bottom: 20px;
}
.SignText{
  display: flex;
  box-sizing: border-box;
  padding: 10px 16px;
  overflow: hidden;
  background-color: #fff;
  color: #E1E1E1;
  line-height: 24px;
  min-width: 320px;
  border-bottom: 1px solid #ebedf0;
}
.SignButton{
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 20px;
}
.Signbutton1{
  flex-grow: 1;
  font-size: 13px;
  border-radius: 25px;
  border: 0;
  height: 35px;
  background-color: #E5E5E5;
  color: #B2B2B2;
}
.SignRegister{
  margin-left: 20px;
  margin-top: 5px;
  display: flex;
  align-self: flex-start;
  font-size: xx-small;
}
.SignButton1{
  width: 90px;
  font-size: 8px;
  background-color: #ffffff;
  border: 0.1px solid #E1E1E1;
  color: #E1E1E1;
  border-radius: 25px;
}

/* 转换input内部提示字体 */
input:-moz-placeholder,
textarea:-moz-placeholder { 
    color: #BCBCBC;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder { 
    color: #BCBCBC;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder { 
    color: #BCBCBC ;
} 
</style>