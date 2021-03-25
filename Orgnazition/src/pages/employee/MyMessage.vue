<template>
<div class="mymessage-container">
  <article class="person-title">
    <p>消息列表</p>
  </article>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="message-item-head"><img src="../images/header.jpg" class="el-avatar--circle" style="width: 40px;height: 40px;margin-right: 10px" alt=""><p style="color:#738c8d">系统消息</p></span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
export default {
  name: "MyMessage"
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
</style>
