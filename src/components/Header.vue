<template>
  <div class="header_container">

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in $route.meta.title"
        :key="index"
        >{{ item }}</el-breadcrumb-item
      >
    </el-breadcrumb>

    <div>
      <el-dropdown
        class="avatar-container right-menu-item hover-effect"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <el-avatar
          
              shape="square"
              :size="50"
              :src="imgUrl"
            ></el-avatar>
          <span >{{username}}</span>
          <i class="el-icon-caret-bottom" />
          
          
        </div>
       
        <el-dropdown-menu slot="dropdown">
          <router-link to="">
            <el-dropdown-item>查看个人信息</el-dropdown-item>
          </router-link>
          <router-link to="" @click.native="update">
            <el-dropdown-item>修改个人信息</el-dropdown-item>
          </router-link>
          
          <el-dropdown-item divided @click.native="quit()">
            <span >退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

   data() {
    return {
      username:'',
      imgUrl:null,
     
     
    };
  },
  methods: {
    user(){
      this.username=window.sessionStorage.getItem("username");
      console.log("username",this.username);

      this.imgUrl=window.sessionStorage.getItem("imgUrl");
      console.log("imgUrl",this.imgUrl);
    },
    quit(){
      this.$confirm('确定要退出本次登录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
          this.$message({
            type: 'success',
            message: '退出成功!' 
          });
          localStorage.removeItem('token');
          location.reload();
          sessionStorage.clear()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
    },
    update(){
      alert("修改按钮");
    }

  },
  mounted(){
    this.user();

  }
};

</script>

<style scoped lang="less">
.header_container {
  
  background-color: #a9b1bf;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  
}


.avatar-container {
  margin-right: 150px;

  .avatar-wrapper {
    margin-top: 5px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}

</style>
