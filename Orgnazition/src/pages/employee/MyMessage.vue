<template>
<div class="mymessage-container">
  <article class="person-title">
    <p>消息列表</p>
  </article>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="我的建议:" name="1">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="message-item-head"><img src="../images/header.jpg" class="el-avatar--circle" style="width: 40px;height: 40px;margin-right: 10px" alt=""><p style="color:#738c8d">代码里找方向</p></span>
          <el-button style="float: right; padding: 3px 0;transform: translateY(-20px)" type="text">删除此消息</el-button>
        </div>
        <div class="text item">
          <p class="item-title">hr给您的工作建议:</p>
          <div style="width: 100%">
            <el-input
              style="width: 60%;font-size: 20px;color: black;"
              type="textarea"
              readonly
              :rows="5"
              v-model="textarea">
            </el-input>
            <el-button type="primary">确认收到</el-button>
          </div>
        </div>
      </el-card>
    </el-collapse-item>
    <el-collapse-item title="本月评分:" name="2">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="message-item-head"><img src="../images/header.jpg" class="el-avatar--circle" style="width: 40px;height: 40px;margin-right: 10px" alt=""><p style="color:#738c8d">代码里找方向</p></span>
          <el-button style="float: right; padding: 3px 0;transform: translateY(-20px)" type="text">删除此消息</el-button>
        </div>
        <div class="text item">
          <p class="item-title">最新评分:</p>
          <div style="width: 100%">
            <template>
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="考核名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="scope"
                  label="考核方向"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="rate"
                  label="考核频率"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="result"
                  label="考核结果">
                </el-table-column>
              </el-table>
            </template>
            <div style="display: flex;justify-content: flex-end;margin-top: 20px">
            <el-button type="primary">确认</el-button>
            <el-button type="warning">申诉</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </el-collapse-item>
  </el-collapse>
</div>
</template>

<script>
export default {
  name: "MyMessage",
  data(){
    return{
      activeNames:'1',
      textarea:'',
      tableData: [{
        name: '每月销售量',
        scope: '工作能力',
        rate: '每月一次',
        result: 94
      }, {
        name: '每月销售量',
        scope: '工作能力',
        rate: '每月一次',
        result: 94
      }, {
        name: '每月销售量',
        scope: '工作能力',
        rate: '每月一次',
        result: 94
      }, {
        name: '每月销售量',
        scope: '工作能力',
        rate: '每月一次',
        result: 94
      }]
    }

  }
}
</script>

<style scoped>
.mymessage-container{
  width: 70%;
  margin: 60px auto;
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
.message-item-head{
  display: flex;
  align-items: center;

}
.item-title{
  color: #7e8c8d;
  margin-bottom: 20px;
}
</style>
