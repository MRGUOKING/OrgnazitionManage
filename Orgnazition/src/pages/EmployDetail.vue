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
        <th>2019/9</th>
        <th>2023/6</th>
        <!--              <th>99%</th>-->
        <th>中南大学</th>
        <!--              <th>110%</th>-->
        <th>计算机学院</th>
        <th>软件工程</th>
      </tr>
      <tr class="list-head">
        <th>硕士</th>
        <th>2023/9</th>
        <th>2025/6</th>
        <!--              <th>99%</th>-->
        <th>清华大学</th>
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
            </el-submenu>
          </el-menu>
        </el-col>
      </article>
<!--      右侧图标-->
      <article class="check-right">
        <div id="test" style="width: 600px;height: 400px"></div>
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
      console.log("进入echarts测试");
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("test"));

// 指定图表的配置项和数据
      let option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
// 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
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
  background-color: pink;
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


</style>
