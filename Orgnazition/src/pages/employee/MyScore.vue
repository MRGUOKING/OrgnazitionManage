<template>
<div class="detail-container">
  <section class="person-message">


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
                <el-menu-item index="1-4-1" @click="changeAbility">解决问题能力</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3">工作评价</el-menu-item>
              <el-menu-item index="1-4">重大过失</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </article>
<!--      右侧图标-->
      <article class="check-right" v-if="comment">

        <div id="test" style="width: 600px;height: 400px" ></div>
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
      </article >
      <article class="check-right" v-if="ability">
        <div id="ability" style="width: 600px;height: 400px"></div>
        <p>111</p>
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
      let totalGradeChar = this.$echarts.init(document.getElementById("test"));

// 指定图表的配置项和数据
      let totalGrade = {
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
      totalGradeChar.setOption(totalGrade);
      let monthGradechar=this.$echarts.init(document.getElementById("ability"))
      let monthGrade={
        title:{
          text: "每月评分"
        },
        legend: {
          data: ["2019","2020","2021"],
        },
        grid:{
          show:true,
          backgroundColor :'transparent'
        },
        xAxis: {
          type: "category",
          data: ["1","2","3","4","5","6","7","8","9","10","11","12"],
          name:"月份",
          nameLocation:"end"
        },
        yAxis: {
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
        },
        dataZoom:[
          {
            id: 'dataZoomX',
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter',
            start:0,
            end:100
          },
          {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: [0],
            filterMode: 'empty',
            start:50,
            end: 100
          }
        ],
        series: [
          {
            type: "line",
            name:"2019",
            // stack: '总量',
            data: [90,80,85,70,85,90,87,76,88,95,85,95],

          },
          {
            type: "line",
            name:"2020",
            // stack: '总量',
            data: [80,90,85,80,75,95,74,95,80,90,75,90],

          },
          {
            type: "line",
            name:"2021",
            // stack: '总量',
            data: [85,75,95,88,70,90,95,90,85,75,85,80],

          },
        ]
      }
      monthGradechar.setOption(monthGrade)
    },
    changeAbility(){
      // this.$echarts.dispose(document.getElementById("test"))
      this.$data.comment=false
      this.$data.ability=true

    }
  },
  data(){
    return{
      comment: true,
      ability:false,
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
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.check-right-2{
  width: 75%;
  height: 100%;
  background-color: pink;
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
  background-color: purple;
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
