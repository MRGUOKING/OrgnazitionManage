<template>
<div class="detail-container">
  <section class="person-message">
<!--    个人信息标题-->
    <article class="person-title">
      <p>个人信息</p>
    </article>
    <table style="width: 100%">
      <thead style="width: 100%">
      <tr class="list-head">
        <th>姓名</th>
        <th>性别</th>
        <th>账号</th>
        <!--              <th>当月出勤率</th>-->
        <th>号码</th>
        <th>邮箱</th>
        <th>微信</th>
        <!--              <th>当月指标完成率</th>-->
        <th>出生日期</th>

      </tr>
      </thead>
      <tbody>
      <tr class="list-head">
        <th>郭江富</th>
        <th>男</th>
        <th>GUo123</th>
        <!--              <th>99%</th>-->
        <th>15055312615</th>
        <!--              <th>110%</th>-->
        <th>42091946@qq.com</th>
        <th>1505153131xyz</th>
        <th>2001/1/2</th>
      </tr>
      </tbody>
    </table>

<!--教育背景-->
    <article class="person-title">
      <p>教育背景</p>
    </article>
    <table style="width: 100%">
      <thead style="width: 100%">
      <tr class="list-head">
        <th>学历</th>
        <th>开始日期</th>
        <th>结束日期</th>
        <th>学校</th>
        <th>院系</th>
        <!--              <th>当月出勤率</th>-->
        <th>专业</th>

      </tr>
      </thead>
      <tbody>
      <tr class="list-head">
        <th>本科</th>
        <th>2015/9</th>
        <th>2019/6</th>
        <!--              <th>99%</th>-->
        <th>A大学</th>
        <!--              <th>110%</th>-->
        <th>计算机学院</th>
        <th>软件工程</th>
      </tr>
      <tr class="list-head">
        <th>硕士</th>
        <th>2019/9</th>
        <th>2023/6</th>
        <!--              <th>99%</th>-->
        <th>B大学</th>
        <!--              <th>110%</th>-->
        <th>计算机学院</th>
        <th>软件工程</th>
      </tr>
      </tbody>
    </table>

<!--工作经历-->
    <article class="person-title">
      <p>工作评价</p>
    </article>
    <div class="three-types">
      <ul class="types-container">
        <li class="active">公司1</li>
        <li>公司2</li>
        <li>公司3</li>
      </ul>
    </div>
    <div class="check-container">
<!--      左侧评价栏-->
      <article class="check-left">
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>今目标</span>
              </template>
              <el-menu-item index="1-1">工作时效</el-menu-item>
              <el-menu-item index="1-2">工作态度</el-menu-item>
              <el-submenu index="2">
                <template slot="title" style="width: 300px">工作能力</template>
                <el-menu-item index="1-4-1">解决问题能力</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3">工作评价</el-menu-item>
              <el-menu-item index="1-4">重大过失</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </article>
<!--      右侧图标-->
      <article class="check-right" v-show="!comment">
        <div id="test" style="width: 600px;height: 400px"></div>
        <div class="conlusion">
         <div class="conlusion-head"><p>总结</p></div>
          <div class="conlusion-item">
            <li class="conlusion-item-container">
              <p>工作任务:</p>
              <p>超过该公司90%的员工</p>
              <p>超过该岗位93%的员工</p>
            </li>
            <li class="conlusion-item-container">
              <p>工作任务:</p>
              <p>超过该公司90%的员工</p>
              <p>超过该岗位93%的员工</p>
            </li>
            <li class="conlusion-item-container">
              <p>工作任务:</p>
              <p>超过该公司90%的员工</p>
              <p>超过该岗位93%的员工</p>
            </li>
          </div>
        </div>
      </article>
      <article class="check-right-2" v-show="comment">
        <div class="comment-list">
          <el-input
            style="margin-bottom: 20px"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            readonly
            v-model="textarea"
          >
          </el-input>
          <el-input
            style="margin-bottom: 20px"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            readonly
            v-model="textarea"
          >
          </el-input>
          <el-input
            style="margin-bottom: 20px"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            readonly
            v-model="textarea"
          >
          </el-input>
          <el-input
            style="margin-bottom: 20px"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            readonly
            v-model="textarea"
          >
          </el-input>
          <el-input
            style="margin-bottom: 20px"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            readonly
            v-model="textarea"
          >
          </el-input>
        </div>
      </article>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "EmployDetail",
  methods:{
    initChar(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test"));

// 指定图表的配置项和数据
      let option = {
        title: {
          text: "评分详情",
        },
        tooltip: {},
        legend: {
          data: ["该员工的分数","该公司的平均分","相关职位的平均分"],
        },
        xAxis: {
          data: ["工作任务", "工作态度","工作能力"],
        },
        yAxis: {},
        series: [
          {
            name: "该员工的分数",
            type: "bar",
            data: [90, 88,99],
          },
          {
            name: "该公司的平均分",
            type: "bar",
            data: [88, 87,78],
          },
          {
            name: "相关职位的平均分",
            type: "bar",
            data: [75, 97,87],
          },
        ],
      };
// 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  data(){
    return{
      comment: false,
      textarea:"你好你好你好"
    }
  },
  mounted() {
    this.initChar()
  }
}
</script>

<style scoped>
.detail-container{
  margin-top: 60px;
  width: 100%;
  /*background-color: pink;*/
}

.person-message{
  width: 100%;
}
.person-title{
  padding-top: 20px;;
  /*margin-top: 30px;*/
  width: 100%;
  border-bottom: 1px solid #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 50px;
}

.person-title p{
  font-size: 30px;
  /*background-color: purple;*/
  transform: translateY(-10px);
}

.list-head{
  padding: 0 20px;
  /*width: 800px;*/
  /*width: 1550px;*/
  width: 100%;
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

.three-types{
  width: 100%;
  height: 80px;
  /*background-color: purple;*/
}
.types-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.types-container li{
  text-align: center;
  cursor: pointer;
  width: 150px;
  height: 40px;
  border: 1px solid #ccccce;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 900;
  margin: 0 20px;
  line-height: 40px;
  color: #626364;
}
.three-types .types-container .active{
  border: 1px solid #00b5ad;
}

.check-container{
  /*padding: 30px;*/
  padding-bottom: 50px;
  width: 100%;
  height: 600px;
  /*background-color: purple;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background-color: purple;*/
}
.check-left{
  width: 25%;
  /*height: 100px;*/
  height: 100%;
  background-color: #50545e;
}
.check-right{
  width: 75%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-right-2{
  width: 75%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
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
.conlusion{
  box-sizing: border-box;
  width: 40%;
  height: 500px;
  background-color: #f5f6f7;
  padding: 20px;
}

.conlusion-head{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 40px;
}
.conlusion-item-container{
  margin-bottom: 20px;
  border: 1px solid #7e8c8d;
}
.conlusion-item-container p{
  font-size: 20px;
  margin: 10px;
  font-weight: 500;
}

.comment-list{
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background-color: purple;

}
</style>
