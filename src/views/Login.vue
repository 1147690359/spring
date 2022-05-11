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
   async onSubmit() {
     
     
      if (this.login.username=="") {
        alert("账号不能为空");
      }else if (this.login.password=="") {
        alert("密码不能为空");
      }else{
      
      await this.setimg();
      await this.number();


        this.$axios
        .get(
            `/tokenApi/oauth/token?grant_type=password&client_id=bitware_client&client_secret=bitware&scope=all&username=${this.login.username}&password=${this.login.password}`
        )
         .then((res) => {
          
        

             if (res.data && res.data.access_token) {
                
                localStorage.setItem("token", res.data.access_token);
                console.log(localStorage.getItem("token"));
                this.$router.push("/manage");
                this.$message({ message: "登录成功", type: "success" });
              }
        })
        .catch((error) => {
          if(error.message === "Request failed with status code 400")
          {
            this.$message({ message: "错误代码:400   可能是账号或者密码错误 ", type: "error" });
          }else{
            console.log(error);
            this.$message({ message: "系统繁忙，请稍后再试", type: "error" });
          }
          
        });

      }
        
    },

    /**获取该账号的 用户名和 头像 */
    async setimg(){
      this.$axios
        .post("/api/index",this.login)
        .then((res) => {
          //登陆成功后给sesson设置username（用户名）
              window.sessionStorage.setItem('username', this.login.username);
              //获取后端传过来的图片 赋值给sesson
              window.sessionStorage.setItem('imgUrl', res.data.imgUrl);
              console.log(this.login.username,res.data.imgUrl);

        })
        .catch((error) => {
          console.log(error);
          this.$message({ message: "系统繁忙，请稍后再试", type: "error" });
        });
                  
    },
    async number(){
       this.$axios
        .get("/api/number")
        .then((res) => {
          //登陆成功后给sesson设置username（用户名）
              window.sessionStorage.setItem('number', res.data.num);
              
        })
        .catch((error) => {
          console.log(error);
          this.$message({ message: "系统繁忙，请稍后再试", type: "error" });
        });
    }
  },
};
</script>