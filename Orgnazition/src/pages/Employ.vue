<script src="../router/index.js"></script>
<template>
  <div class="employ-container">
    <article class="employ-head">
      <el-menu
        :default-active="'1'"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">综合评分</el-menu-item>
        <el-submenu index="2">
          <template slot="title">单项评分</template>
          <el-menu-item index="2-1">工作任务</el-menu-item>
          <el-menu-item index="2-2">工作态度</el-menu-item>
          <el-menu-item index="2-3">工作能力</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">自定义评分</template>
          <el-menu-item index="3-1">
            工作任务
            <template>
              <el-input-number v-model="this.$data.num1" @change="handleChange" :min="1" :max="100" label="描述文字" size="mini"></el-input-number>
            </template>
          </el-menu-item>
          <el-menu-item index="3-2">
            工作态度
            <template>
              <el-input-number v-model="this.$data.num2" @change="handleChange" :min="1" :max="100" label="描述文字" size="mini"></el-input-number>
            </template>
          </el-menu-item>
          <el-menu-item index="3-3">
            工作能力
            <template>
              <el-input-number v-model="this.$data.num3" @change="handleChange" :min="1" :max="100" label="描述文字" size="mini"></el-input-number>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
<!--      <div class="head-item">智能排序<icon>=</icon></div>-->
<!--      <div class="head-item">工作岗位</div>-->
<!--      <div class="head-item">综合评分</div>-->
<!--      <div class="head-item">筛选</div>-->
      <div class="search">
        <input type="text" placeholder="搜索...">
        <button class="iconfont" @click="search">&#xe6e6</button>
      </div>
    </article>
    <article class="employee-list">
      <ul class="employee-item" @click="detail" v-for="(item,i) in this.$data.people">
        <li class="employee-avatar">
          <img :src="item.img" alt="">
        </li>
        <li class="employee-message">
<!--          左侧-->
          <div class="message-left">
            <div>姓名: &nbsp;{{item.name}}</div>
            <div>性别: &nbsp;{{item.sex}}</div>
            <div>年龄: &nbsp;{{item.age}}</div>
            <div>工作年龄: &nbsp;{{item.work_age}}</div>
          </div>
<!--右侧-->
          <div class="message-right">
            <div>学历: &nbsp;{{item.education}}</div>
            <div>毕业院校:&nbsp; {{item.school}}</div>
            <div>熟悉技能:&nbsp; {{ item.skill }}</div>
            <div>意向岗位: &nbsp;{{ item.position }}</div>
          </div>
        </li>
        <li class="employee-score">
          <div class="graph"></div>
        </li>
      </ul>

    </article>
  </div>
</template>

<script>
export default {
  name: "Employ",
  data(){
    return{
        chars:[],
        state2: '',
        num1:40,
        num2:30,
        num3:30,
        people:[
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
          {img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'},
        ],
        grades:[
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:"10%",
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],

            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [90, 80,95,85],
              },
            ],
          },
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:30,
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],
            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [95, 88,99,80],
              },
            ],
          },
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:30,
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],
            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [92, 85,90,95],
              },
            ],
          },
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:30,
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],
            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [82, 83,99,85],
              },
            ],
          },
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:30,
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],
            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [82, 83,99,85],
              },
            ],
          },
          {
            title: {
              text: "综合评分",
            },
            grid:{
              top:30,
              bottom:30,
              height:"65%"
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            legend: {},
            xAxis: {
              data: ["综合评分","工作任务", "工作态度","工作能力"],
            },
            yAxis: [
              {
                type: 'value',
                axisLabel: {
                  show: true,
                  interval: 'auto',
                  formatter: '{value} %'
                },
                show: true
              }
            ],
            series: [
              {
                name: "与同岗位员工相比",
                type: "bar",
                barWidth:"40",
                showBackground: true,
                data: [82, 83,99,85],
              },
            ],
          }
        ]

    }
  },
  methods:{
    search(){

      this.people = [{img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=328151449,413750715&fm=26&gp=0.jpg',name:'郭江富',sex:'男',age:25,work_age:'三年',education:'本科',school:'A大学',skill:'后端、分布式',position:'后端开发'}];
      this.grades = [{
        title: {
          text: "综合评分",
        },
        grid:{
          top:"10%",
          bottom:30,
          height:"65%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        xAxis: {
          data: ["综合评分","工作任务", "工作态度","工作能力"],
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            show: true
          }
        ],

        series: [
          {
            name: "与同岗位员工相比",
            type: "bar",
            barWidth:"40",
            showBackground: true,
            data: [90, 80,95,85],
          },
        ],
      }];
    },
    detail(){
      this.$router.push('/detail');
    },
    initChar(){
      // 指定图表的配置项和数据
      let grade1 = {
        title: {
          text: "综合评分",
        },
        grid:{
          top:"10%",
          bottom:30,
          height:"65%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        xAxis: {
          data: ["综合评分","工作任务", "工作态度","工作能力"],
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            show: true
          }
        ],

        series: [
          {
            name: "与同岗位员工相比",
            type: "bar",
            barWidth:"40",
            showBackground: true,
            data: [90, 80,95,85],
          },
        ],
      };
      let grade2 = {
        title: {
          text: "综合评分",
        },
        grid:{
          top:30,
          bottom:30,
          height:"65%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        xAxis: {
          data: ["综合评分","工作任务", "工作态度","工作能力"],
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            show: true
          }
        ],
        series: [
          {
            name: "与同岗位员工相比",
            type: "bar",
            barWidth:"40",
            showBackground: true,
            data: [95, 88,99,80],
          },
        ],
      };
      let grade3 = {
        title: {
          text: "综合评分",
        },
        grid:{
          top:30,
          bottom:30,
          height:"65%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        xAxis: {
          data: ["综合评分","工作任务", "工作态度","工作能力"],
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            show: true
          }
        ],
        series: [
          {
            name: "与同岗位员工相比",
            type: "bar",
            barWidth:"40",
            showBackground: true,
            data: [92, 85,90,95],
          },
        ],
      };
      let grade4 = {
        title: {
          text: "综合评分",
        },
        grid:{
          top:30,
          bottom:30,
          height:"65%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {},
        xAxis: {
          data: ["综合评分","工作任务", "工作态度","工作能力"],
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            show: true
          }
        ],
        series: [
          {
            name: "与同岗位员工相比",
            type: "bar",
            barWidth:"40",
            showBackground: true,
            data: [82, 83,99,85],
          },
        ],
      };
      // // 基于准备好的dom，初始化echarts实例
      // let gradeChar1 = this.$echarts.init(document.getElementById("test1"));
      // let gradeChar2 = this.$echarts.init(document.getElementById("test2"));
      // let gradeChar3 = this.$echarts.init(document.getElementById("test3"));
      // let gradeChar4 = this.$echarts.init(document.getElementById("test4"));
      let Nodes = document.querySelectorAll(".graph");
      console.log("nodes");
      console.log(Nodes)

      for(let i =0;i< Nodes.length;i++){
        let gradeChar = this.$echarts.init(Nodes[i]);
        gradeChar.setOption(this.grades[i]);
        this.chars.push(gradeChar);
      }
//      给图片渲染数据
// // 使用刚指定的配置项和数据显示图表。
      gradeChar1.setOption(grade1);
      gradeChar2.setOption(grade2);
      gradeChar3.setOption(grade3);
      gradeChar4.setOption(grade4);

    },
    handleSelect(key, keyPath) {
      this.people.splice(0,3);
      this.grades.splice(0,3);
    }
  },
  mounted() {
    this.initChar();
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
  transform: translateX(80px);

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
  justify-content: start;
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
  margin-top: 28px;
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

.graph{
  width: 400px;height: 300px
}

</style>
