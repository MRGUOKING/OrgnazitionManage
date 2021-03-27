<template>
<div>
  <div class="structure-container">
<!--    左侧职务表-->
    <article class="structure-left">
<!--      左上-->
      <section class="department">
<!--        -->
        <div><button @click="addDepartment">+  新增部门</button></div>
        <div><button>+  编辑部门</button></div>
<!--        <div><button>+ &nbsp; </button></div>-->
      </section>

<!--      左下-->
<!--      <section class="department-detail">-->
<!--        <ul>>&nbsp;中南大学-->
<!--          <li>计算机学院</li>-->
<!--          <li>湘雅医学院</li>-->
<!--          <li>自动化学院</li>-->
<!--          <li>冶金学院</li>-->
<!--        </ul>-->

<!--      </section>-->
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
                <span>代码里找方向</span>
              </template>
                <el-menu-item index="1-1" @click="changeDepartment(0)">总裁办</el-menu-item>
                <el-menu-item index="1-2"  @click="changeDepartment(1)">人事部</el-menu-item>
              <el-submenu index="2">
                <template slot="title" style="width: 300px">技术部</template>
                <el-menu-item index="1-4-1">技术1部</el-menu-item>
              </el-submenu>
              <el-menu-item index="1-3" v-show="technology" @click="changeDepartment(2)">销售部</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>



    </article>


<!--    右侧详情-->
    <article class="structure-right">
<!--      右上-->
      <section class="right-top">
        <div class="button-container">
          <button @click="addEmployee">新增员工</button>
<!--          <button>新增部门主管</button>-->
        </div>
        <div class="search">
          <input type="text" placeholder="搜索...">
          <button class="iconfont">&#xe6e6</button>
        </div>
      </section>
<!--      右下-->
      <section class="right-bottom">
        <table style="width: 100%">
          <thead style="width: 100%">
          <tr class="list-head">
            <th>姓名</th>
            <th>性别</th>
            <th>部门</th>
            <th>职务</th>
            <th>账号</th>
            <th>邮箱</th>
            <th>手机</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr class="list-head" v-for="(item,i) in curPeople">
            <th>{{item.name}}</th>
            <th>{{item.sex}}</th>
            <th>{{item.department}}</th>
            <th>{{item.position}}</th>
            <th>{{item.account}}</th>
            <th>{{item.email}}</th>
            <th>{{item.phone}}</th>
            <th>
              <div>
<!--                <button>编辑</button>-->
                <button>停用</button>
                <button>冻结</button>
              </div>

            </th>
          </tr>
          </tbody>
        </table>
      </section>
    </article>
  </div>
<!--  增加部门-->
  <div class="add-department" v-if="showModal">
    <div class="modal-container">
      <div class="modal-item"><p>上级部门</p> <input type="text" v-model="department[index]" style="text-indent: 5px" readonly></div>
      <div class="modal-item"><p>部门名称</p> <input type="text" style="text-indent: 5px" placeholder="请输入部门名称"></div>
      <div class="modal-item"><p  class="department-descript">部门描述</p> <textarea  style="margin-left: 15px" class="department-textarea" placeholder="请输入部门描述"></textarea></div>
      <div class="delete" @click="showModal=false">x</div>
      <div class="modal-buttons"> <button>取消</button> <el-button :plain="true" @click="addDepartmentSure" style="text-align: center;">确定</el-button></div>
    </div>
  </div>
<!--  增加员工-->
<!--  <div class="add-department" v-if="showAddModel">-->
<!--    <div class="modal-container">-->
<!--      <div class="modal-item"><p>账号</p> <input type="text" placeholder="请输入账号" ></div>-->
<!--      <div class="modal-item"><p>部门</p> <input type="text" readonly value="技术部1"></div>-->
<!--      <div class="modal-item"><p style="margin-right: 30px">职位</p>-->
<!--        <template>-->
<!--        <el-select v-model="value" placeholder="请选择" style="width: 180px">-->
<!--          <el-option-->
<!--            v-for="item in  checkType"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </template>-->
<!--      </div>-->
<!--&lt;!&ndash;      <div class="modal-item"><p  class="department-descript">成员描述</p> <textarea  style="margin-left: 15px" class="department-textarea" placeholder="请输入部门描述"></textarea></div>&ndash;&gt;-->
<!--      <div class="delete" @click="showAddModel=false">x</div>-->
<!--      <div class="modal-buttons"> <button>取消</button> <button>登录</button></div>-->
<!--    </div>-->
<!--  </div>-->
  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="账号" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门" :label-width="formLabelWidth">
        <el-input v-model="form.department" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="职位" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择员工职位">
          <el-option label="普通员工" value="shanghai"></el-option>
          <el-option label="总经理" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "Structure",
  data(){
    return{
      showModal:false,
      dialogFormVisible:false,
      technology:false,
      technology_1:false,
      form:{
        name:'',
        department: '销售部'
      },
      formLabelWidth: '120px',
      index:0,
      department:['代码里找方向','技术部'],
      curPeople:[],
      curDepartment:0,
      people:[
        [{name:'郭江富',sex:'男',department:'总裁办',position:'ceo',account:'zn8209190310',email:'-',phone:'15112349876'},
          {name:'张三',sex:'男',department:'总裁办',position:'cfo',account:'zn8202412310',email:'-',phone:'151827490274'},
          ],
        [{name:'李四',sex:'男',department:'总裁办',position:'ceo',account:'zn8209190310',email:'-',phone:'15112349876'},
          {name:'张三',sex:'男',department:'总裁办',position:'cfo',account:'zn8202412310',email:'-',phone:'151827490274'},
        ],
        [],
        [{name:'郭江富',sex:'男',department:'总裁办',position:'ceo',account:'zn8209190310',email:'-',phone:'15112349876'},
          {name:'张三',sex:'男',department:'总裁办',position:'cfo',account:'zn8202412310',email:'-',phone:'151827490274'},
        ]
      ]
    }
  },
  mounted() {
    this.getPeople()
  },
  methods:{
    changeDepartment(id){
      console.log("进入changgeDepartment"+id);
      this.curDepartment = id;
      this.getPeople();
    },
    getPeople(){
      this.curPeople = this.people[this.curDepartment];
    },
    addDepartment(){
      this.showModal = true;
    },
    addDepartmentSure(){
      this.showModal = false;
      if (this.index == 0)
        this.technology=true;
      if (this.index == 1){
        this.technology = false;
        this.technology_1 = true;
      }
      this.index++;
      this.$message({
        message: '添加成功!',
        type: 'success'
      });
    },
    addEmployee(){
      this.dialogFormVisible = true;
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

.department button:hover{
  cursor: pointer;
  background-color: #85888f;
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
  display: flex;
  justify-content: start;
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
  margin-left: 20px;
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
