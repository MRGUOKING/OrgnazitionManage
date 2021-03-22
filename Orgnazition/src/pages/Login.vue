<template>
<div>
  <div class="container">
<!--    标题-->
    <article class="title-container">
      <div class="title-container-div">
        <p>今目标</p>
      </div>
    </article>
<!--    内容-->
    <article class="input-container">
<!--      登录方式-->
      <section class="login-type-container">
        <div>扫码登录</div>
        <div>|</div>
        <div>账号登录</div>
      </section>
      <section class="login-input-container">
        <div>
          <p>账号:</p>
          <input type="text">
        </div>
        <div>
          <p>密码:</p>
          <input type="text"></div>
      </section>
      <!--    忘记密码-->
      <article class="forget-container">
        <div><input type="checkbox">下次自动登录</div>
        <div><p>忘记密码?</p></div>
      </article>
      <section class="login-container">
        <div><button>登录</button></div>
      </section>
      <section class="resister-container">
        <div>没有账号?赶快注册</div>
      </section>
    </article>
  </div>
</div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

.container{
  width: 500px;
  height: 550px;
  /*background: #ffffff;*/
  margin: 100px auto;
}
.title-container{
  width: 100%;
  height: 80px;
  /*background-color: purple;*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-container p{
  font-size: 40px;
  color: #2f9fef;
}
.input-container{
  border-radius: 5px;
  margin-top: 20px;
  background-color: #ffffff;
  width: 100%;
  height: 82%;
}
.login-type-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #e9f1f7;
}
.login-type-container div:nth-child(1){
  cursor: pointer;
  font-size: 20px;
  font-weight: 900;
  margin-right: 10px;
  text-align: center;
}
.login-type-container div:nth-child(3){
  cursor: pointer;
  font-size: 20px;
  font-weight: 900;
  margin-right: 10px;
  text-align: center;
  margin-left: 10px;
  color: #00a8ff;
}

.login-input-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*background-color: pink;*/
  width: 100%;
  height: 200px;
}
.login-input-container div{
  width: 80%;
  height: 30%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border: 1px solid #7e8c8d;*/
}
.login-input-container div:nth-child(1){
  margin-bottom: 20px;
}
.login-input-container input{
  margin: 20px;
  width: 80%;
  height: 80%;
  background-color: #e8f0fe;
  text-indent: 10px;
  outline: none;
  border: 1px solid #d9d9d9;
}
.forget-container{
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  /*background-color: pink;*/
  padding: 0 40px;
}
.forget-container p{
  color: #00a8ff;
  cursor: pointer;
}
.login-container{
  text-align: center;
}
.login-container button{
  margin-top: 10px;
  cursor: pointer;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  outline: none;
  border: 1px solid dodgerblue;
  background-color: #2299ee;
  font-size: 25px;
  color: #ffffff;
}
.login-container button:hover{
  background-color: #00a8ff;
}

.resister-container{
  margin-top: 20px;
  text-align: center;
}
.resister-container div{
  cursor: pointer;
  color: #00a8ff;
}
</style>
