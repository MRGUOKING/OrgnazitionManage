<script src="../router/index.js"></script>
<template>
  <div>
    <div class="structure-container">
      <!--    左侧职务表-->
      <article class="structure-left">
        <!--      左上-->
        <section class="department">
          <!--        -->
          <div><button>+  新增考核项</button></div>
<!--          <div><button>+  删除职务</button></div>-->
          <!--        <div><button>+ &nbsp; </button></div>-->
        </section>

        <!--      左下-->
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>今目标</span>
              </template>
              <el-menu-item index="1-1">总裁办</el-menu-item>
              <el-menu-item index="1-2">人事部</el-menu-item>
              <el-menu-item index="1-3">销售部</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title" style="width: 300px">技术部</template>
                <el-menu-item index="1-4-1">技术1部</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>

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
<!--          分类-->
          <div class="three-types">
            <ul class="types-container">
              <div class="types-item">
                <li class="active">工作任务指标</li>
                <p>占比:</p><el-input-number style="width: 100px;" size="mini" v-model="num_1" :step="1" step-strictly></el-input-number>
              </div>
              <div class="types-item">
                <li class="active">工作态度指标</li>
                <p>占比:</p>
                <el-input-number style="width: 100px;" size="mini" v-model="num_1" :step="1" step-strictly></el-input-number>
              </div>
              <div class="types-item">
                <li class="active">工作能力指标</li>
                <p>占比:</p><el-input-number style="width: 100px;" size="mini" v-model="num_1" :step="1" step-strictly></el-input-number>
              </div>

            </ul>
          </div>
          <table style="width: 100%">
            <thead style="width: 100%">
            <tr class="list-head">
              <th>考核名称</th>
              <th>考核方式</th>
              <th>考核频率</th>
              <th>考核占比</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="list-head">
              <th>每月出货量完成度</th>
              <th>
                <template>
                <el-select v-model="value" placeholder="请选择" style="width: 180px">
                  <el-option
                    v-for="item in  checkType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
              </th>
              <th>
                <template>
                  <el-select v-model="rate" placeholder="请选择" style="width: 180px">
                    <el-option
                      v-for="item in rates"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </th>
              <th><el-input-number style="width: 100px;" size="small" v-model="num_1" :step="1" step-strictly></el-input-number></th>
              <th>
                <div>
                  <button>编辑</button>
                  <button>删除</button>
                </div>
              </th>
            </tr>
            <tr class="list-head">
              <th>工作态度</th>
              <th>
                <template>
                  <el-select v-model="value" placeholder="请选择" style="width: 180px">
                    <el-option
                      v-for="item in  checkType"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </th>
              <th>
                <template>
                  <el-select v-model="rate" placeholder="请选择" style="width: 180px">
                    <el-option
                      v-for="item in rates"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </th>
              <th>20%</th>
              <th>
                <div>
                  <button>编辑</button>
                  <button>删除</button>
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
  name: "Check",
  data(){
    return{
      checkType: [{
        value: '打分',
        label: '打分'
      }, {
        value: '评级',
        label: '评级'
      }],
      value:'打分',
      rates:[{
        value: '1',
        label: '每天一次'
      },{
        value: '2',
        label: "每周一次"
      },{
        value: '3',
        label: '每月一次'
      }],
      rate:'2',
      num_1: 30,
      num_2: 40,
      num_3: 30
    }
  }
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
  justify-content: center;
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
.department button:hover{
  cursor: pointer;
  background-color: #85888f;
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
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
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
.types-container .types-item{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border: 1px solid #ccccce;
  padding: 5px;
}
.types-item p{
  margin-right: 10px;
}
.types-container li{
  margin-right: 10px;
  text-align: center;
  cursor: pointer;
  width: 100px;
  height: 40px;
  /*border: 1px solid #ccccce;*/
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
  line-height: 40px;
  color: #626364;
}
.three-types .types-container .active{
  /*border: 1px solid #00b5ad;*/
}
</style>
