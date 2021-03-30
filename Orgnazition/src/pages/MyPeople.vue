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
        <el-col :span="12" style="width: 100%">
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>今目标</span>
              </template>
<!--              <el-menu-item index="1-1" @click="changeDepartment(0)">总裁办</el-menu-item>-->
<!--              <el-menu-item index="1-2" @click="changeDepartment(1)">人事部</el-menu-item>-->
              <el-submenu index="1-4">
                <template slot="title" style="width: 300px">技术部</template>
                <el-menu-item index="1-4-1" @click="changeDepartment(3)">技术1部</el-menu-item>
                <el-menu-item index="1-4-2" @click="changeDepartment(2)">技术2部</el-menu-item>
              </el-submenu>
<!--              <el-menu-item index="1-3" @click="changeDepartment(2)">销售部</el-menu-item>-->
            </el-submenu>
          </el-menu>
        </el-col>

      </article>


      <!--    右侧详情-->
      <article class="structure-right">
        <!--              右上-->
        <section class="right-top">
                    <div class="button-container">
                      <button @click="addEmployee">新增员工</button>
<!--                      <button>邀请员工</button>-->
                    </div>
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
              <th>职位</th>
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
            <tr class="list-head" v-for="(item,i) in curPeople">
              <th>{{item.name}}</th>
              <th>{{item.account}}</th>
              <th>{{item.position}}</th>
              <th>{{item.comScore}}</th>
<!--              <th>99%</th>-->
              <th>{{item.workScore}}</th>
<!--              <th>110%</th>-->
              <th>{{item.attitudeScore}}</th>
              <th>{{item.ablityScore}}</th>
              <th>
                <div>
                  <button @click="goScore">去评分</button>
                  <button @click="goDetail">查看详情</button>
                </div>
              </th>
            </tr>
            <tr class="list-head-2" v-show="ready">
              <th>郭五</th>
              <th>zn1234567</th>
              <th>前端部员</th>
              <th>--</th>
              <!--              <th>99%</th>-->
              <th>--</th>
              <!--              <th>110%</th>-->
              <th>--</th>
              <th>--</th>
              <th>
                <div>
                  <button @click="goScore" style="color:grey; font-weight: 900">等待确认</button>
                  <button @click="goDetail" style="font-weight: 900;font-size: 15px">删除</button>
                </div>
              </th>
            </tr>
            </tbody>
          </table>
        </section>
      </article>
    </div>
    <!--  增加员工-->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号">
          <el-input v-model="form.name" autocomplete="off" @blur="this.search"></el-input>
        </el-form-item>

        <el-form-item label="搜索成功!" v-if="searchSuccess">
          <p style="color: #67c23a">&nbsp;&nbsp;&nbsp;&nbsp;姓名:</p><el-input v-model="newName"></el-input>
        </el-form-item>

        <el-form-item label="部门" >
          <el-input v-model="form.department" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="职位">
          <el-select v-model="form.region" placeholder="请选择员工职位">
            <el-option label="架构师" value="shanghai"></el-option>
            <el-option label="前端部员" value="beijing"></el-option>
            <el-option label="后端部员" value="back"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addPeople" >确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyPeople",
  data(){
    return{
      newName:'郭五',
      searchSuccess:false,
      form:{
        name:'',
        department: '技术2部'
      },
      ready:false,
      showAddModel:false,
      curPeople:[],
      curDepartment:3,
      dialogFormVisible:false,
      people:[
        [{name:'张三',department:'总裁办',position:'总裁',account:'zn8209190310',email:'-',phone:'15112349876',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张三',department:'总裁办',position:'cfo',account:'zn8202412310',email:'-',phone:'151827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
        ],
        [{name:'李四',department:'总裁办',position:'ceo',account:'zn8209190310',email:'-',phone:'15112349876',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张三',department:'总裁办',position:'cfo',account:'zn8202412310',email:'-',phone:'151827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
        ],
        [{name:'马一',department:'技术2部',position:'架构师',account:'jd43432093245',email:'-',phone:'154134  349876',comScore:94,workScore:94,attitudeScore:84,ablityScore:98}],
        [{name:'张一',department:'技术1部',position:'架构师',account:'zn8203442',email:'-',phone:'1312349456',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张二',department:'技术1部',position:'前端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张三',department:'技术1部',position:'前端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张四',department:'技术1部',position:'前端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张五',department:'技术1部',position:'后端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'张六',department:'技术1部',position:'后端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'王一',department:'技术1部',position:'后端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
          {name:'王二',department:'技术1部',position:'后端部员',account:'zn820255454',email:'-',phone:'152827490274',comScore:94,workScore:94,attitudeScore:84,ablityScore:98},
        ]
      ]
    }
  },
  mounted() {
    this.getPeople();
  },
  methods:{
    addPeople(){
      this.ready = true;
      this.dialogFormVisible = false
    },
    addEmployee(){
      this.dialogFormVisible = true;
    },
    changeDepartment(id){
      this.curDepartment = id;
      this.getPeople();
    },
    getPeople(){
      this.curPeople = this.people[this.curDepartment];
    },
    goScore(){
      this.$router.push('/score')
    },
    goDetail(){
      this.$router.push("/peopleDetail")
    },
    search(){
      console.log("进入search函数")
      if (this.form.name == 'zn1234567')
        this.searchSuccess = true;

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
  margin-left: 400px;
  margin-right: 50px;
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
.list-head-2{

  background-color: #fff;
  opacity: 0.5;
  padding: 0 20px;
  /*width: 800px;*/
  width: 1220px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-head-2 th{
  flex: 1;
}
</style>
