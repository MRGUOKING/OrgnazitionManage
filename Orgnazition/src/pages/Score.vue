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
        <section class="department-detail">
          <li class="avatar"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=544201226,318312874&fm=26&gp=0.jpg" alt=""></li>
          <div class="message-item"><p>姓名:</p> <p>郭江富</p></div>
          <div class="message-item"><p>性别:</p> <p>男</p></div>
          <div class="message-item"><p>职位:</p> <p>技术总监</p></div>
          <div class="message-item"><p>入职时长:</p> <p>42天</p></div>

        </section>

      </article>


      <!--    右侧详情-->
      <article class="structure-right">
        <!--              右上-->
        <section class="right-top">
<!--                    <div class="button-container">-->
<!--                      <button>新增员工</button>-->
<!--                    </div>-->
          <div class="search">
            <input type="text" placeholder="搜索...">
            <button class="iconfont">&#xe6e6</button>
          </div>
        </section>
        <!--              右下-->
        <section class="right-bottom">
          <div class="three-types">
            <ul class="types-container">
              <li class="active">工作任务指标</li>
              <li>工作态度指标</li>
              <li>工作能力指标</li>
            </ul>
          </div>
          <table style="width: 100%">
            <thead style="width: 100%">
            <tr class="list-head">
              <th>考核名称</th>
              <th>考核方式</th>
              <th>考核频率</th>
              <th>权重分</th>
              <th>考核</th>
            </tr>
            </thead>
            <tbody>
            <tr class="list-head">
              <th>每月出货量完成度</th>
              <th>打分/评级</th>
              <th>每月考核一次</th>
              <th>7</th>
              <th>
                <div>
                  <el-input-number v-model="num" :step="1"  max="100" min="0"></el-input-number>
                </div>
              </th>
            </tr>
            <tr class="list-head">
              <th>工作态度</th>
              <th>评级</th>
              <th>每月考核一次</th>
              <th>10</th>
              <th>
                <div>
                  <el-rate v-model="value1"></el-rate>
                </div>
              </th>
            </tr>
            <div class="comment-container">
                <div class="score-button-container">
                  <button>取消</button>
                  <button @click="hasCommited">提交</button>
                </div>
            </div>
            </tbody>
          </table>
        </section>
<!--        评价，建议，重大过失-->
        <div class="three-area">
          <div style="width: 100%;border-bottom: 1px solid #e6e6e6;margin-bottom: 15px">
            <p style="font-size: 20px;margin-bottom: 10px;margin-left: 20px">对员工的评价:</p>
            <div style="width: 100%;display: flex;justify-content: start">
              <el-input
                style="width: 40%;font-size: 18px;margin-left: 20px;margin-bottom: 5px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="textarea_comment">
              </el-input>
              <el-button type="info" plain style="height: 50px;margin-top: 40px;margin-left: 15px" @click="textarea_comment=''">清空</el-button>
              <el-button type="primary" style="height: 50px;margin-top: 40px;" @click="comment">提交</el-button>
            </div>
          </div>
          <div style="width: 100%;border-bottom: 1px solid #e6e6e6;margin-bottom: 15px;margin-bottom: 5px">
            <p style="font-size: 20px;margin-bottom: 10px;margin-left: 20px">给员工的建议:</p>
            <div style="width: 100%;display: flex;justify-content: start">
              <el-input
                style="width: 40%;font-size: 18px;margin-left: 20px;margin-bottom: 5px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="textarea_advice">
              </el-input>
              <el-button type="info" plain style="height: 50px;margin-top: 40px;margin-left: 15px" @click="textarea_advice=''">取消</el-button>
              <el-button type="primary" style="height: 50px;margin-top: 40px;" @click="advice">提交</el-button>
            </div>
          </div>
          <div style="width: 100%;border-bottom: 1px solid #e6e6e6;margin-bottom: 15px">
            <p style="font-size: 20px;margin-bottom: 10px;margin-left: 20px">重大过失:</p>
            <div style="width: 100%;display: flex;justify-content: start">
              <el-input
                style="width: 40%;font-size: 18px;margin-left: 20px;margin-bottom: 5px"
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="textarea_error">
              </el-input>
              <el-switch
                style="margin-top: 60px;margin-left: 20px "
                v-model="is_public"
                active-text="公开"
                inactive-text="不公开">
              </el-switch>
              <el-button type="info" plain style="height: 50px;margin-top: 40px;margin-left: 15px" @click="textarea_error=''">取消</el-button>
              <el-button type="primary" style="height: 50px;margin-top: 40px;" @click="error">提交</el-button>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "Score",
  data(){
    return{
      is_public:true,
      value1:4,
      num: 60,
      textarea_comment:'',
      textarea_advice:'',
      textarea_error: '',
    }
  },
  methods:{
    error(){
      if(this.textarea_error == ''){
        this.$message({
          message: '请输入内容',
          type: 'warning'
        });
        return;
      }
      this.$message({
        message: '记录成功!',
        type: 'success'
      });
    },
    comment(){
      if(this.textarea_comment == ''){
        this.$message({
          message: '请输入内容',
          type: 'warning'
        });
        return;
      }
      this.$message({
        message: '评价成功!',
        type: 'success'
      });
    },
    advice(){
      if(this.textarea_advice == ''){
        this.$message({
          message: '请输入内容',
          type: 'warning'
        });
        return;
      }
      this.$message({
        message: '成功发送建议给员工',
        type: 'success'
      })
    },
    goScore(){
      this.$router.push('/scsore')
    },
    hasCommited(){
      this.$alert('已经给该员工评过分!', '提交失败', {
        confirmButtonText: '确定',
      });
    }
  }
}
</script>

<style scoped>
textarea{
  resize: none;
}
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
.avatar{
  margin-bottom: 20px;
  width: 100%;
  height: 150px;
  /*background-color: pink;*/
}
.department-detail li img{
  width: 100%;
  height: 100%;
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
.message-item{
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding:10px;
}
.message-item p{
  color: #d9d9d9;
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
.types-container li{
  text-align: center;
  cursor: pointer;
  width: 150px;
  height: 40px;
  border: 1px solid #ccccce;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 900;
  margin: 0 20px;
  line-height: 40px;
  color: #626364;
}
.three-types .types-container .active{
  border: 1px solid #00b5ad;
}
.input-number{
  border-radius: 5px;
  width: 80px;
  height: 30px;
  text-indent: 10px;
  border: 1px solid #50545e;
  background-color: pink;
  outline: none;
}
.start{
  cursor: pointer;
}
.start-active{
  color: #fad32d;
}
.comment-container{
  background-color: #fafafa;
  text-align: right;
}
.comment-container textarea{
  width: 400px;
  height:90px;
  box-sizing: border-box;
  padding: 15px;
  font-size: 15px;

}


.score-button-container button:nth-child(1){
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
.score-button-container button:nth-child(2){
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

.three-area{
  width: 100%;
  /*background-color: pink;*/
}
</style>
