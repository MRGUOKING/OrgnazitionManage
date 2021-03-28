<template>
<div class="work-container">
  <div class="company-message"><p style="margin-right: 20px">当前入职公司: </p> 代码里找方向</div>
  <div style="width: 100%;background-color:#545f66;text-align: center">
    <el-calendar style="margin: 0 auto;">
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <div :class="isSelected(data.day.split('-').slice(1).join('-')) ? 'is-selected' : ''">
          {{ data.day.split('-').slice(1).join('-') }}
          <div style="margin-top: 20px">{{ isSelected(data.day.split('-').slice(1).join('-')) ? '✔️' : ''}}</div>
        </div>
      </template>
    </el-calendar>
  </div>
  <div class="daka">
    <el-button type="primary"  @click="dialogFormVisible = true" style="margin-right: 20px">新增任务</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="任务详情" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择日期" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-button type="primary" style="margin-right: 180px" @click="daka">打卡</el-button>
  </div>
  <div class="things-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>今日任务</span>
        <el-button style="float: right; padding: 3px 0" type="text">完成</el-button>
      </div>
      <div class="text item">
        无具体任务
      </div>
    </el-card>
  </div>
  <div style="width: 100%;text-align: right;margin-top: 10px">  <template>
    <el-button type="danger" @click="open">退出该公司</el-button>
  </template></div>

</div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      selected:['03-01','03-02','03-03','03-04','03-05','03-08','03-09','03-10','03-11','03-12','03-14','03-15','03-16',
        '03-17','03-18','03-19','03-22','03-23','03-24','03-25','03-26','03-29']
    };
  },
  methods:{
    daka(){
      this.selected.push('03-30');
      this.$message({
        message: '打卡成功!',
        type: 'success'
      });
    },
    isSelected(value){
      for(let i =0;i<this.selected.length;i++){
        if (this.selected[i] == value)
          return true;
      }
      return false;
    },
    open() {
      this.$confirm('确定退出该公司？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!该公司无法继续对您进行评价'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        });
      });
    }
  }
}
</script>

<style scoped>
.work-container{
  width: 1000px;
  margin: 100px auto;
  padding: 30px;
  box-sizing: border-box;
}
.daka{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.company-message{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  /*background-color: pink;*/
  font-size: 20px;
  font-weight: 900;
}
.is-selected {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #1989FA;
}
</style>
