<template>
<div class="message-container">
  <div class="avatar-container">
    <img src="../images/header.jpg" alt="" class="avatar">
  </div>
  <div class="message-detail">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding-bottom: 50px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="号码" prop="photo">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

<!--      <el-form-item label="活动区域" prop="region">-->
<!--        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
<!--          <el-option label="区域一" value="shanghai"></el-option>-->
<!--          <el-option label="区域二" value="beijing"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
      <el-form-item label="出生日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="个人简介" prop="jianjie">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="公开" prop="delivery" style="margin-left: 500px;width: 100px">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item style="margin-left: 400px">
        <el-button type="primary" @click="submitForm('ruleForm')">编辑</el-button>
        <el-button @click="resetForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
}
</script>

<style scoped>
.message-container{
  margin: 60px auto;
  width: 700px;
  height: 500px;
  /*background-color: purple;*/
}
.message-detail{
  margin: 30px 0;
  width: 100%;
}
.avatar-container{
  margin-top: 40px;
  display: flex;
  /*background-color: pink;*/
  justify-content: center;
  align-items: center;
}
.avatar{
  margin-top: 30px;
  width: 200px;
  height: 200px;
}
</style>
