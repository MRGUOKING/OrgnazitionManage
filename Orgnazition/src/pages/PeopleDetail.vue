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
        <th>入职时间</th>
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
        <th>2001-4</th>
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
        <li :class="company_1 ? 'active' : ''" @click="changeCompany(1)">公司1</li>
        <li :class="!company_1 ? 'active' : ''" @click="changeCompany(2)">公司2</li>
        <li>公司3</li>
      </ul>
    </div>
    <div class="check-container">
<!--      左侧评价栏-->
      <article class="check-left" v-show="company_1">
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>今目标</span>
              </template>
              <el-menu-item index="1-1" @click="change('work')">工作任务</el-menu-item>
              <el-menu-item index="1-2" @click="change('attitude')">工作态度</el-menu-item>
              <el-submenu index="2">
                <template slot="title" style="width: 300px" @click="changeAbility" >工作能力</template>
                <el-menu-item index="1-4-1" @click="change('ability')"  >解决问题能力</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3" @click="change('work_comment')">工作评价</el-menu-item>
              <el-menu-item index="1-4" @click="change('comment_error')">重大过失</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </article>
      <article class="check-left" v-show = "!company_1">
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>今目标</span>
              </template>
              <el-menu-item index="1-1" @click="change('work')">工作任务</el-menu-item>
              <el-menu-item index="1-2" @click="change('attitude')">工作态度</el-menu-item>
              <el-submenu index="2">
                <template slot="title" style="width: 300px" @click="changeAbility" >工作能力</template>
                <el-menu-item index="1-4-1" @click="change('ability')"  >个人能力</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3" @click="change('work_comment')">工作评价</el-menu-item>
              <el-menu-item index="1-4" @click="change('comment_error')">重大过失</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </article>
<!--      右侧图标-->
      <article  class="check-right" v-show="comment">

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
      <article  class="check-right" v-show="work">
        <div id="work" style="width: 600px;height: 400px"></div>
        <div class="conlusion">
          <div class="conlusion-head"><p>总结</p></div>
          <div class="conlusion-item">
            <li class="conlusion-item-container">
              <p>横向比较:</p>
              <p>在19年到21年入职的三年中，每月的工作任务得分都在一个较高的水平，比较稳定</p>
            </li>
            <li class="conlusion-item-container">
              <p>纵向比较:</p>
              <p>该员工从19年到21年,工作任务每年的平均得分都在稳定增长，处于较高水平</p>
            </li>
            <li class="conlusion-item-container">
              <p>结论:</p>
              <p>改员工在本公司近三年的工作任务得分都较高且稳定，高于绝大部分员工</p>
            </li>
          </div>
        </div>
      </article>
      <article  class="check-right" v-show="attitude">
          <div id="attitude" style="width: 600px;height: 400px"></div>
          <div class="conlusion">
            <div class="conlusion-head"><p>总结</p></div>
            <div class="conlusion-item">
              <li class="conlusion-item-container">
                <p>横向比较:</p>
                <p>在19年到21年入职的三年中，每月的工作任务得分都在一个较高的水平，比较稳定</p>
              </li>
              <li class="conlusion-item-container">
                <p>纵向比较:</p>
                <p>该员工从19年到21年,工作任务每年的平均得分都在稳定增长，处于较高水平</p>
              </li>
              <li class="conlusion-item-container">
                <p>结论:</p>
                <p>改员工在本公司近三年的工作任务得分都较高且稳定，高于绝大部分员工</p>
              </li>
            </div>
          </div>
        </article>
      <article  class="check-right" v-show="ability">
        <div id="ability" style="width: 600px;height: 400px"></div>
        <div class="conlusion">
          <div class="conlusion-head"><p>总结</p></div>
          <div class="conlusion-item">
            <li class="conlusion-item-container">
              <p>横向比较:</p>
              <p>在19年到21年入职的三年中，每月的工作任务得分都在一个较高的水平，比较稳定</p>
            </li>
            <li class="conlusion-item-container">
              <p>纵向比较:</p>
              <p>该员工从19年到21年,工作任务每年的平均得分都在稳定增长，处于较高水平</p>
            </li>
            <li class="conlusion-item-container">
              <p>结论:</p>
              <p>改员工在本公司近三年的工作任务得分都较高且稳定，高于绝大部分员工</p>
            </li>
          </div>
        </div>
      </article>
      <article  class="comment-error" v-show="work_comment">
        <div style="width: 600px;height: 400px;margin-left: 30px;padding: 10px;background-color:#fff;">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="2019-2-7" name="1">
              <div>好人一生平安；</div>
            </el-collapse-item>
            <el-collapse-item title="2019-8-19" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="2020-12-7" name="3">
              <div style="color: #f56c6c">涉及公司敏感信息，详细内容未公开</div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="conlusion">
          <div class="conlusion-head"><p>总结</p></div>
          <div class="conlusion-item">
            <li class="conlusion-item-container">
              <p>在19年到21年，共犯了三个重大错误，平均每年犯一个错误，高于平均水平</p>
            </li>
          </div>
        </div>
      </article>
      <article  class="comment-error" v-show="comment_error">
          <div style="width: 600px;height: 400px;margin-left: 30px;padding: 10px;background-color:#fff;">
            <el-collapse v-model="activeName" accordion>
              <el-collapse-item title="2019-2-7" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="2019-8-19" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>
              <el-collapse-item title="2020-12-7" name="3">
                <div style="color: #f56c6c">涉及公司敏感信息，详细内容未公开</div>
              </el-collapse-item>
            </el-collapse>
          </div>

          <div class="conlusion">
              <div class="conlusion-head"><p>总结</p></div>
              <div class="conlusion-item">
                <li class="conlusion-item-container">
                  <p>在19年到21年，共犯了三个重大错误，平均每年犯一个错误，高于平均水平</p>
                </li>
              </div>
            </div>
        </article>

    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "PeopleDetail",
  data(){
    return{
      company_1:true,
      company_2:false,
      activeName: '1',
      comment: true,  //总体
      ability:false,  //能力
      attitude: false,  //态度
      work: false,  //任务
      work_comment: false, //工作评价
      comment_error:false,  //重大过失
    }
  },
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
      let monthGradechar=this.$echarts.init(document.getElementById("ability"));
      let monthGradechar_1=this.$echarts.init(document.getElementById("work"));
      let monthGradechar_2=this.$echarts.init(document.getElementById("attitude"));
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
      monthGradechar_1.setOption(monthGrade)
      monthGradechar_2.setOption(monthGrade)


    },
    changeAbility(){
      // this.$echarts.dispose(document.getElementById("test"))
      this.comment=false
      this.ability=true

    },
    change(type){
      if(type == 'comment_error'){
        this.comment_error = true;
        this.comment = false;
        this.work_comment = false;
        this.ability = false;
        this.attitude = false;
        this.work = false;
      }
      else if(type == 'ability'){
        this.comment_error = false;
        this.comment = false;
        this.work_comment = false;
        this.ability = true;
        this.attitude = false;
        this.work = false;
      }
      else if(type == 'attitude'){
        this.comment_error = false;
        this.comment = false;
        this.work_comment = false;
        this.ability = false;
        this.attitude = true;
        this.work = false;
      }
      else if(type == 'work'){
        this.comment_error = false;
        this.comment = false;
        this.work_comment = false;
        this.ability = false;
        this.attitude = false;
        this.work = true;
      }
      if(type == 'work_comment'){
        this.comment_error = false;
        this.comment = false;
        this.work_comment = true;
        this.ability = false;
        this.attitude = false;
        this.work = false;
      }
    },
    changeCompany(num){
      if (num == 1){
        this.company_1 = true;
        this.company_2 = false;
      }else{
        this.company_1 = false;
        this.company_2 = true;
      }
    }

  },
  mounted() {
    this.initChar();
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

.comment-error{
  width: 75%;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comment-error-container{
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
