<template>
  <div>
    <div class="structure-container">
      <!--    左侧职务表-->
      <article class="structure-left">
        <!--      左上-->
<!--        <section class="department">-->
<!--          &lt;!&ndash;        &ndash;&gt;-->
<!--          <div><button>+  新增职务</button></div>-->
<!--          <div><button>+  删除职务</button></div>-->
<!--          &lt;!&ndash;        <div><button>+ &nbsp; </button></div>&ndash;&gt;-->
<!--        </section>-->

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
        <!--              右上-->
        <section class="right-top">
          <!--          <div class="button-container">-->
          <!--            <button>新增员工</button>-->
          <!--            <button>邀请员工</button>-->
          <!--          </div>-->
          <div class="search">
            <input type="text" placeholder="搜索...">
            <button class="iconfont">&#xe6e6</button>
          </div>
        </section>
        <!--              右下-->
        <section class="right-bottom">
          <table style="width: 100%">
            <thead style="width: 100%">
            <tr class="list-head">
              <th>姓名</th>
              <th>账号</th>
<!--              <th>当月出勤率</th>-->
              <th>综合评分</th>
              <th>工作任务评分</th>
<!--              <th>当月指标完成率</th>-->
              <th>工作态度评分</th>
              <th>工作能力评分</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="list-head">
              <th>郭江富</th>
              <th>Guo1323</th>
              <th>97</th>
<!--              <th>99%</th>-->
              <th>96</th>
<!--              <th>110%</th>-->
              <th>95</th>
              <th>无</th>
              <th>
                <div>
                  <button>去评分</button>
                </div>
              </th>
            </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyPeople"
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
  background-color: #ffffff;
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
  margin-top: 30px;
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
  display: flex;
  justify-content: right;
  align-items: center;
}
.right-top .button-container{
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 30px;
}
.button-container button{
  /*margin-top: 10px;*/
  margin-right: 20px;
  width: 100px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #7e8c8d;
}

.search{
  display: flex;
  justify-content: center;
  margin-left: 900px;
}
.search input{
  width: 200px;
  height: 30px;
  text-indent: 10px;
  border-radius: 10px 0 0 10px;
  outline: none;
  margin-right: 0;

}
.right-bottom{
  width: 100%;
}
.search button{
  border-radius: 0px 5px 5px 0px;
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
.list-head{
  padding: 0 20px;
  /*width: 800px;*/
  width: 1220px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-head th{
  flex: 1;
}
tbody{

}
tr{
  box-sizing: border-box;
  padding: 5px;
  border-bottom: 1px solid #e6e6e6;
  color: #666666;
}
thead tr{
  background-color: #fafafa;
}
th button{
  background-color: rgba(0,0,0,0);
  outline: none;
  border: none;
  color: #00a8ff;
  cursor: pointer;
}
</style>
