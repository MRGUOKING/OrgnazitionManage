<template>
<div>
  <div class="structure-container">
<!--    左侧职务表-->
    <article class="structure-left">
<!--      左上-->
      <section class="department">
<!--        -->
        <div><button>+  新增部门</button></div>
        <div><button>+  编辑部门</button></div>
<!--        <div><button>+ &nbsp; </button></div>-->
      </section>

<!--      左下-->
      <section class="department-detail">
        <ul>>&nbsp;中南大学
          <li>计算机学院</li>
          <li>湘雅医学院</li>
          <li>自动化学院</li>
          <li>冶金学院</li>
        </ul>

      </section>

    </article>


<!--    右侧详情-->
    <article class="structure-right">
      <section class="right-top"></section>
    </article>
  </div>
</div>
</template>

<script>
export default {
  name: "Structure"
}
</script>

<style scoped>
.structure-container{
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  /*background-color: black;*/
  width:1540px;
  height: 750px;
}
.structure-left{
  width: 20%;
  height: 100%;
  background-color: #50545e;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.structure-right{
  width: 80%;
  height: 100%;
  background-color: purple;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.department{
  /*background-color: purple;*/
  width: 80%;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #7e8c8d;
}
.department button{
  outline: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  margin: 20px;
  border: 1px solid #7e8c8d;
  background-color: #62656e;
  opacity: 0.8;
  font-size: 20px;
  color: #ffffff;
}
.department-detail{
  width: 80%;
  height: 75%;
  /*background-color: purple;*/
}
.department-detail ul{
  padding: 7px;
  cursor: pointer;
  outline: none;
  /*border-radius: 5px;*/
  width: 100%;
  height: 10px;
  /*background-color: #62656e;*/
  opacity: 0.8;
  font-size: 15px;
  color: #ffffff;
  background-color: #313135;;
}
/*.department-detail ul:hover{*/
/*  background-color: #73767e;*/
/*}*/
.department-detail ul li{
  padding: 10px;
  cursor: pointer;
  width: 100%;
  height: 10px;
  opacity: 0.85;
  font-size: 15px;
  color: #ffffff;
}
.department-detail ul li:hover{
  background-color: #73767e;
}

.right-top{
  width: 100%;
  height: 50px;
  background-color: pink;
}
</style>
