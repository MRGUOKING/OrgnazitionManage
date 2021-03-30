<template>
<div class="message-container">
  <div class="avatar-container">
    <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3124319389,728293678&fm=26&gp=0.jpg" alt="" class="avatar">
    <el-upload
      style="transform: translateY(90px);margin-left: 20px"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">更换头像</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
  <div class="message-detail">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="padding-bottom: 50px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="号码" prop="photo">
        <el-input v-model="ruleForm.photo"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

<!--      <el-form-item label="活动区域" prop="region">-->
<!--        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">-->
<!--          <el-option label="区域一" value="shanghai"></el-option>-->
<!--          <el-option label="区域二" value="beijing"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
      <el-form-item label="出生日期">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="个人简介" prop="jianjie">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="ruleForm.jianjie">
        </el-input>
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
        jianjie:'自我评价：乐观开朗，热爱体育，喜欢编程，乐于学习各种新知识。对java语言有了解；了解MySQL数据库应用技术及基本的增删改查。对前端网页开发也有所了解。掌握PS,PR相关软件，并有过相关作品展示在校级活动中；易于融入集体文化，能与他人建立良好的关系。具有团队合作精神，创新意识，有进取心，对工作负责',
        name: '张三',
        age:26,
        sex:'男',
        photo:13144738973,
        email:'4273284237@qq.com',
        date1:'2021-03-09',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
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
