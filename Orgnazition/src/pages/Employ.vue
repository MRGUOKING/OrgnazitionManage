<script src="../router/index.js"></script>
<template>
  <div class="employ-container">
    <article class="employ-head">
      <div class="head-item">智能排序<icon>=</icon></div>
      <div class="head-item">工作岗位</div>
      <div class="head-item">综合评分</div>
      <div class="head-item">筛选</div>
      <div class="search">
        <input type="text" placeholder="搜索...">
        <button class="iconfont">&#xe6e6</button>
      </div>
    </article>
    <article class="employee-list">
      <ul class="employee-item" @click="detail">
        <li class="employee-avatar">
          <img src="./images/header.jpg" alt="">
        </li>
        <li class="employee-message">
<!--          左侧-->
          <div class="message-left">
            <div>姓名: &nbsp;郭江富</div>
            <div>性别: &nbsp;男</div>
            <div>年龄: &nbsp;28</div>
            <div>工作年龄: &nbsp;3年</div>
          </div>
<!--右侧-->
          <div class="message-right">
            <div>学历: &nbsp;本科</div>
            <div>毕业院校:&nbsp; 中南大学</div>
            <div>熟悉技能:&nbsp; java,mysql,分布式</div>
            <div>意向岗位: &nbsp;后端开发4t4e43534</div>
          </div>
        </li>
        <li class="employee-score">
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">综合评分</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作任务</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作态度</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作能力</p>
          </div>
        </li>
      </ul>
      <ul class="employee-item">
        <li class="employee-avatar">
          <img src="./images/header.jpg" alt="">
        </li>
        <li class="employee-message">
          <!--          左侧-->
          <div class="message-left">
            <div>姓名: &nbsp;郭江富</div>
            <div>性别: &nbsp;男</div>
            <div>年龄: &nbsp;28</div>
            <div>工作年龄: &nbsp;3年</div>
          </div>
          <!--右侧-->
          <div class="message-right">
            <div>学历: &nbsp;本科</div>
            <div>毕业院校:&nbsp; 中南大学</div>
            <div>熟悉技能:&nbsp; java,mysql,分布式</div>
            <div>意向岗位: &nbsp;后端开发4t4e43534</div>
          </div>
        </li>
        <li class="employee-score">
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">综合评分</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作任务</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作态度</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作能力</p>
          </div>
        </li>
      </ul>
      <ul class="employee-item">
        <li class="employee-avatar">
          <img src="./images/header.jpg" alt="">
        </li>
        <li class="employee-message">
          <!--          左侧-->
          <div class="message-left">
            <div>姓名: &nbsp;郭江富</div>
            <div>性别: &nbsp;男</div>
            <div>年龄: &nbsp;28</div>
            <div>工作年龄: &nbsp;3年</div>
          </div>
          <!--右侧-->
          <div class="message-right">
            <div>学历: &nbsp;本科</div>
            <div>毕业院校:&nbsp; 中南大学</div>
            <div>熟悉技能:&nbsp; java,mysql,分布式</div>
            <div>意向岗位: &nbsp;后端开发4t4e43534</div>
          </div>
        </li>
        <li class="employee-score">
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">综合评分</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作任务</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作态度</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作能力</p>
          </div>
        </li>
      </ul>
      <ul class="employee-item">
        <li class="employee-avatar">
          <img src="./images/header.jpg" alt="">
        </li>
        <li class="employee-message">
          <!--          左侧-->
          <div class="message-left">
            <div>姓名: &nbsp;郭江富</div>
            <div>性别: &nbsp;男</div>
            <div>年龄: &nbsp;28</div>
            <div>工作年龄: &nbsp;3年</div>
          </div>
          <!--右侧-->
          <div class="message-right">
            <div>学历: &nbsp;本科</div>
            <div>毕业院校:&nbsp; 中南大学</div>
            <div>熟悉技能:&nbsp; java,mysql,分布式</div>
            <div>意向岗位: &nbsp;后端开发4t4e43534</div>
          </div>
        </li>
        <li class="employee-score">
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">综合评分</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作任务</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作态度</p>
          </div>
          <div class="score-column">
            <p class="super-message">超过同岗位90%</p>
            <img src="./images/header.jpg" alt="">
            <p class="message-text">工作能力</p>
          </div>
        </li>
      </ul>

    </article>
  </div>
</template>

<script>
export default {
  name: "Employ",
  methods:{
    detail(){
      this.$router.push('/detail');
    }

  }
}
</script>

<style scoped>
.employ-container{
  cursor: pointer;
  width: 100%;
  margin-top: 60px;
  /*background-color: #fff;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.employ-head{
  background-color: rgba(80,84,94,0.2);
  width: 100%;
  height: 60px;
  /*background-color: pink;*/
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #73767e;
}

.head-item{
  /*width: 15%;*/
  /*background-color: purple;*/
  /*flex: 1;*/
  cursor: pointer;
  height: 50px;
  text-align: center;
  line-height: 50px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 500;
  color: black;
}

.search{
  display: flex;
  justify-content: center;
  /*margin-left: 900px;*/
  transform: translateX(100px);
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

.employee-list{
  margin: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  /*padding: 20px ;*/
  /*background-color: pink;*/
}
.employee-item{
  /*background-color: #f5f5f5;*/
  box-sizing: border-box;
  width: 30%;
  height: 500px;
  background-color: #ffffff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 15px;
}
.employee-item li:nth-child(1){
  flex: 1;
}
.employee-item li{
  flex: 2;
  /*background-color: purple;*/
}
.employee-avatar img{
  width: 100px;
  height: 100px;
}

.employee-message{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transform: translateY(-30px);
}

.message-left div{
  margin-bottom: 8px;
  font-weight: 500;
  color: #3a3a3a;
}

.message-right div{
  margin-bottom: 8px;
  font-weight: 500;
  color: #3a3a3a;

}

.employee-score{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.score-column{
  /*background-color: purple;*/
  margin: 5px;
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /*padding: 0 5px;*/
}

.score-column img{
  width: 50px;
  height: 100px;
}

.super-message{
  font-size: 10px;
  color: red;
  margin-bottom: 5px;
}

.message-text{
  margin-top: 5px;
  font-size: 20px;
  color: #3a3a3a;
}

</style>
