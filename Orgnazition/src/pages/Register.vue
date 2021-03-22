<template>
<div>
  <div class="container">
<!--    标题-->
    <article class="title-container">
      <div class="title-container-div">
        <p>注册今目标账号</p>
      </div>
    </article>
<!--    内容-->
    <article class="input-container">
<!--      登录方式-->
      <section class="login-type-container">
<!--        <div>扫码登录</div>-->
<!--        <div>|</div>-->
        <div>注册账号</div>
      </section>
      <section class="login-input-container">
        <div>
          <p>手机号:</p>
          <input type="text" placeholder="输入手机号">
        </div>
        <div>
          <p>验证码:</p>
          <input type="text" class="input-picture" placeholder="输入图片验证码">
          <div class="picture"></div>
        </div>
        <div>
<!--          <p>验证码:</p>-->
          <input type="text" class="message-input" placeholder="输入短信验证码">
          <div class="picture"><button>获取短信验证码</button></div>
        </div>

      </section>
      <!--    忘记密码-->
<!--      <article class="forget-container">-->
<!--        <div><input type="checkbox">下次自动登录</div>-->
<!--        <div><p>忘记密码?</p></div>-->
<!--      </article>-->
      <section class="login-container">
        <div><button>注册</button></div>
      </section>
      <section class="resister-container">
        <div>已有账号?去登录</div>
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
.login-input-container .picture{
  width: 100px;
  height: 50px;
  background-color: pink;
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

.login-input-container div p{
  width: 70px;
  font-size: 15px;
  font-weight: 900;
  /*background-color: pink;*/
  text-align: left;
  }

  .login-input-container div:nth-child(1){
    margin-bottom: 20px;
  }
  .login-input-container input{
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
  width: 150px;
  height: 40px;
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
.input-picture{
  margin-left: 20px;
}
.input-container .message-input{
  width: 250px;
  margin-left: 76px;
}
</style>
