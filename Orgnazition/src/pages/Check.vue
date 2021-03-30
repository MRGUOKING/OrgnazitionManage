<script src="../router/index.js"></script>
<template>
  <div>
    <div class="structure-container">
      <!--    左侧职务表-->
      <article class="structure-left">
        <!--      左上-->
        <section class="department">
          <!--        -->
          <div><button @click="addCheck">+  新增考核项</button></div>
<!--          <div><button>+  删除职务</button></div>-->
          <!--        <div><button>+ &nbsp; </button></div>-->
        </section>

        <!--      左下-->
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
              <el-menu-item index="1-1" @click="changeDepartment(0)">总裁办</el-menu-item>
              <el-menu-item index="1-2" @click="changeDepartment(1)">人事部</el-menu-item>
              <el-submenu index="1-4">
                <template slot="title" style="width: 300px">技术部</template>
                <el-menu-item index="1-4-1"  @click="changeDepartment(3)">技术1部</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3" @click="changeDepartment(2)">销售部</el-menu-item>
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
              <div :class="curType == 0 ? 'types-item-active' :'types-item' " @click="changeType(0)">
                <li class="active">工作任务指标</li>
                <p>权重分:</p><el-input-number style="width: 100px;" size="mini" v-model="num_1" :step="1" step-strictly></el-input-number>
              </div>
              <div :class="curType == 1 ? 'types-item-active' :'types-item' " @click="changeType(1)">
                <li class="active">工作态度指标</li>
                <p>权重分:</p>
                <el-input-number style="width: 100px;" size="mini" v-model="num_2" :step="1" step-strictly></el-input-number>
              </div>
              <div :class="curType == 2 ? 'types-item-active' :'types-item' " @click="changeType(2)">
                <li class="active">工作能力指标</li>
                <p>权重分:</p><el-input-number style="width: 100px;" size="mini" v-model="num_3" :step="1" step-strictly></el-input-number>
              </div>

            </ul>
          </div>
          <table style="width: 100%">
            <thead style="width: 100%">
            <tr class="list-head">
              <th>考核名称</th>
              <th>考核方式</th>
              <th>考核频率</th>
              <th>权重分</th>
              <th>是否公开</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="list-head" v-for="(item,i) in curItem">
              <th v-text="item.name">{{ item.name }}</th>
              <th>
                <template>
                <el-select v-model="item.label" placeholder="请选择" style="width: 180px">
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
                  <el-select v-model="item.rate" placeholder="请选择" style="width: 180px">
                    <el-option
                      v-for="item in rates"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </th>
              <th><el-input-number style="width: 100px;" size="small" v-model="item.score" :step="1" step-strictly></el-input-number></th>
              <th>
                <el-switch
                v-model="item.is_public"
                active-text="公开"
                inactive-text="不公开">
                </el-switch>
              </th>
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
<!--    增加考核方式-->
    <el-dialog title="新增考核项" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="所在部门" :label-width="formLabelWidth">
          <el-input v-model="form.department" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="考核名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="考核方式" :label-width="formLabelWidth">
          <el-select v-model="form.label" placeholder="请选择考核方式">
            <el-option label="打分" value="打分"></el-option>
            <el-option label="评级" value="评级"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考核频率" :label-width="formLabelWidth">
          <el-select v-model="form.rate" placeholder="请选择考核频率">
            <el-option label="每天一次" value="每天一次"></el-option>
            <el-option label="每周一次" value="每周一次"></el-option>
            <el-option label="每月一次" value="每月一次"></el-option>
            <el-option label="每季度一次" value="每季度一次"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权重给分" :label-width="formLabelWidth">
          <el-input-number v-model="form.score" :min="1" :max="100" label="描述文字" size="min"></el-input-number>
        </el-form-item>
        <el-switch
          style="margin-left: 50px"
          v-model="form.is_public"
          active-text="公开"
          inactive-text="不公开">
        </el-switch>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCheckSure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Check",
  data(){
    return{
      is_public:false,
      test:'测试',
      departmentName:'技术1部',
      curDepartment:0,
      curType:0,
      checkType:[{
        value: '打分',
        label: '打分'
      }, {
        value: '评级',
        label: '评级'
      }],
      rates:[{
        value: '1',
        label: '每天一次'
      },{
        value: '2',
        label: "每周一次"
      },{
        value: '3',
        label: '每月一次'
      },{
        value: '4',
        label: '每季度一次'
      }],
      rate:'2',
      num_1: 30,
      num_2: 40,
      num_3: 30,
      showModal:false,
      curItem:[],
      department:[
       [
        ],
        [
          [{name:'员工招聘情况',label:'打分',rate:'每周一次',score:25,is_public:false},{name:'人才发展情况',label:'评级',rate:'每周一次',score:25,is_public:true}],
          [{name:'工作责任心',label:'评级',rate:'每月一次',score:25,is_public:false},{name:'遵守公司纪律',label:'评级',rate:'每月一次',score:32,is_public:true}],
        ],
        [
          [],
          [],
          []
        ],
        [
          [{name:'工作完成度',label:'打分',rate:'每周一次',score:25,is_public:false},{name:'工作质量',label:'评级',rate:'每周一次',score:25,is_public:true},{name:'代码质量',label:'评级',rate:'每月一次',score:25,is_public:true}],
          [{name:'工作责任心',label:'评级',rate:'每月一次',score:25,is_public:false},{name:'工作积极性',label:'评级',rate:'每月一次',score:32,is_public:true}],
          [{name:'执行能力',label:'评级',rate:'每月一次',score:25,is_public:false},{name:'解决问题能力',label:'评级',rate:'每月一次',score:40,is_public:true}]
        ]
      ],
      dialogFormVisible: false,
      form: {
        department: '销售部',
        name: '',
        label: '',
        rate: '',
        score: '',
        is_public: true,
      },
      formLabelWidth: '120px',
      value: ''
    }
  },
  methods:{
    changeType(typeId){
      this.curType = typeId;
      this.getCheckItems(this.curDepartment,this.curType);
    },
    changeDepartment(departmentId){
      this.curDepartment = departmentId;
      this.getCheckItems(this.curDepartment,this.curType);
    },
    addCheck(){
      this.dialogFormVisible = true;
    },
    addCheckSure(){
      this.dialogFormVisible = false;
      let check = new Object();
      console.log("进入addCheck");
      console.log(this.form)
      console.log(this.curType+this.curDepartment);
      check.name = this.form.name;
      check.label = this.form.label;
      check.name = this.form.name;
      check.rate = this.form.rate;
      check.score = this.form.score;
      check.is_public = this.form.is_public;
      console.log("check");
      console.log(check);
      this.department[this.curDepartment][this.curType].push(check);
      this.clearForm()
      this.$message({
        message: '添加成功!',
        type: 'success'
      });
    },
    getCheckItems(department,type){
      this.curItem = this.department[department][type];
    },
    clearForm(){
      this.form.name ='';
      this.form.label = '';
      this.form.rate='';
      this.form.score = '';
    }
  },
  mounted() {
    this.getCheckItems(this.curDepartment,this.curType)
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
  background-color: #73767e;
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
  /*border: 2px solid #00b5ad;*/
  padding: 5px;
}
.types-container .types-item-active{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  /*border: 1px solid #ccccce;*/
  border: 2px solid #00b5ad;
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

.add-department{
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}

.modal-container{
  margin: 100px 40%;
  background-color: #fff;
  outline: none;
  border: 1px solid #7e8c8d;
  width: 500px;
  position: relative;
}
.modal-container input{
  outline: none;
  border: 1px solid #7e8c8d;
  margin-left: 20px;
}
.modal-item{
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.department-textarea{
  box-sizing: border-box;
  width: 200px;
  height: 70px;
  padding: 10px;
  outline: none;
  font-size: 15px;
  font-weight: 300;
}
.delete{
  cursor: pointer;
  position: absolute;
  left: 100%;
  top: 5px;
  font-size: 20px;
  font-weight: 900;
  transform: translateX(-200%);

}
.modal-buttons{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.modal-buttons button:nth-child(1){
  margin: 15px;
  width: 70px;
  height: 40px;
  background-color: #f2f4f5;
  cursor: pointer;
  outline: none;
  border: 1px solid #7e8c8d;
  border-radius: 5px;
  font-size: 20px;
}
.modal-buttons button:nth-child(2){
  margin: 15px;
  width: 70px;
  height: 40px;
  background-color: #2299ee;
  cursor: pointer;
  outline: none;
  border: 1px solid #7e8c8d;
  border-radius: 5px;
  color: white;
  font-size: 20px;

}
</style>
