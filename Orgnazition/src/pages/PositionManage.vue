<template>
  <div>
    <div class="structure-container">
      <!--    左侧职务表-->
      <article class="structure-left">
        <!--      左上-->
        <section class="department">
          <!--        -->
          <div><button @click="addPosition">+  新增职务</button></div>
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
                <template slot="title" style="width: 300px" @click="changeDepartment(3)">技术部</template>
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
          <table style="width: 100%">
            <thead style="width: 100%">
            <tr class="list-head">
              <th>职务名称</th>
              <th>人数</th>
<!--              <th>权力</th>-->
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr class="list-head" v-for="(item,i) in curPosition">
              <th>{{item.name}}</th>
              <th>{{item.num}}</th>
<!--              <th>评价部门</th>-->
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
    <!--  增加部门-->
    <div class="add-department" v-if="showModal">
      <div class="modal-container">
        <div class="modal-item"><p>所在部门</p> <input type="text" style="text-indent: 5px" readonly value="销售部"></div>
        <div class="modal-item"><p>职位名称</p> <input type="text" style="text-indent: 5px" placeholder="请输入职务名称" v-model="newPosition.name"></div>
        <div class="modal-item"><p  class="department-descript">职位描述</p> <textarea  style="margin-left: 15px" class="department-textarea" placeholder="请输入员工描述"></textarea></div>
        <div class="delete" @click="showModal=false">x</div>
        <div class="modal-buttons"> <button>取消</button> <el-button :plain="true" style="text-align: center;" @click="addPositionSure">确定</el-button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PositionManage",
  data(){
    return{
      curDepartment:0,
      showModal:false,
      curPosition:[],
      newPosition:{
        name:'',
        num:0
      },
      positions:[
        [{name:'ceo',num:2},{name:'总经理',num:1}],
        [{name:'总经理',num:1}],
        [],
        [{name:'架构师',num:2}]
      ],
    }
  },
  mounted() {
    this.getCurPosition();
  },
  methods:{
    changeDepartment(id){
      this.curDepartment = id;
      this.getCurPosition();
      console.log(this.curPosition)
    },
    getCurPosition(){
      console.log("进入getCurpositon"+this.curDepartment);
      console.log(this.positions[this.curDepartment])
      this.curPosition = this.positions[this.curDepartment];
    },
    addPosition(){
      this.showModal = true;
    },
    addPositionSure(){
      this.showModal = false;
      let new_position = new Object();
      new_position.name = this.newPosition.name;
      new_position.num = 0;
      this.positions[this.curDepartment].push(new_position);
      this.newPosition.name = '';
      this.$message({
        message: '添加成功!',
        type: 'success'
      });
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
