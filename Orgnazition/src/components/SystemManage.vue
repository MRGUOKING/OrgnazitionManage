<template>
  <div class="header">
    <!--    nickName-->
    <div class="head-nickname">
      <p>King</p>
    </div>
    <!--    中间内容-->
    <div class="head-nav">
      <router-link to="/structure" class="item" active-class="active">组织结构</router-link>
<!--      <router-link to="/myPeople" class="item" active-class="active"> 员工详情</router-link>-->
      <router-link to="/position" class="item" active-class="active">职务列表</router-link>
      <!--      <router-link to="/type" class="item" active-class="active"><i class="iconfont">&#xe746</i> 留言板</router-link>-->
      <router-link to="/check" class="item" active-class="active">考核方式 </router-link>
<!--      <router-link to="/employ" class="item" active-class="active">招聘员工 </router-link>-->
    </div>
    <!--    搜索框-->
    <div class="search">
<!--      <input type="text" placeholder="搜索...">-->
      <button>退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

.header{
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  /*background-color: rgba(0,0,0,1);*/
  background-color: #000;
  /*opacity: 0.5;*/
  z-index: 1000;
  margin: 0 auto;

}
.head-nav{
  display: flex;
}
.item{
  padding: 0 30px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 5px;
}
.item:hover{
  background-color: rgba(255,255,255,0.1);
}
.active{
  background-color: rgba(255,255,255,0.2);
}
.head-nickname{
  margin-right: 20px;
}
.head-nickname p{
  font-size: 25px;
  color: green;
  margin-right: 15px;
}
.search{
  margin-left: 700px;
}
.search button{
  border-radius: 5px;
  float: right;
  height: 30px;
  border: none;
  outline: none;
  background-color: #4e6ef2;
  cursor: pointer;
}
.search button:hover{
  background-color: #4662d9;
}

</style>
