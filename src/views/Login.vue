<template>
  <div id="apm" style="width:400px; height:400px; padding-top:200px; padding-left:550px">
    <div class="title" style="margin-left:120px;" >
      <h3>登  录 页 面</h3>
    </div>
    <el-form
      ref="loginForm"
      :rules="rules"
      :model="login"
      label-width="80px"
    >
      <el-form-item label="用户名称" prop="username">
        <el-input
          v-model="login.username"
          style="width: 220px"
          placeholder="请输入用户名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input
          show-password
          v-model="login.password"
          style="width: 220px"
          placeholder="请输入用户密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" 
        @click="onSubmit"
        
        >登 录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sccessToke:'',
      login: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.login.username=="") {
        alert("账号不能为空");
      }else if (this.login.password=="") {
        alert("密码不能为空");
      }else{
        this.$axios
        .post("/api/index", this.login)
        .then((res) => {
          
          if (res.data.index == "have") {

            const sccessToke=res.data.sccessToke;
            localStorage.setItem('token',sccessToke);

            //登陆成功后给sesson设置username（用户名）
              window.sessionStorage.setItem('username', this.login.username);
              //获取后端传过来的图片 赋值给sesson
              window.sessionStorage.setItem('imgUrl', res.data.imgUrl);
              

         
            this.$router.push("/manage")
          }else if(res.data.index == "null"){
              alert("账号或者密码不正确");
          }else{
            alert("系统出现错误了，请联系开发人员");
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message({ message: "系统繁忙，请稍后再试", type: "error" });
        });

      }
        
    },
  },
};
</script>