<template>
  <div class="fillcontain">
    <el-row class="tac" style="height: 100%">
       
      <el-col :span="4" style="min-height: 100%; background-color: #324057">
        <div style="margin-top:20px;height:60px;text-align:center;font-size:20px;color:#fff" >管理系统</div>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          background-color="#324057"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>

            <el-menu-item index="user">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>

            <el-menu-item index="jump2">
              <i class="el-icon-menu"></i>
              <span slot="title">测试2</span>
            </el-menu-item>
            <el-menu-item index="jump3">
              <i class="el-icon-menu"></i>
              <span slot="title">测试3</span>
            </el-menu-item>
            <el-menu-item index="jump4">
              <i class="el-icon-menu"></i>
              <span slot="title">测试4</span>
            </el-menu-item>
          </el-submenu>

          <el-menu-item  @click="exit">
            <i class="el-icon-menu"></i>
            <span slot="title">退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="20" style="height: 100%;overflow: auto;">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Manage",
  components: {},
  computed: {
    defaultActive: function() {
      console.log(this.$route.path)
      let index = this.$route.path.replace("/","");
      console.log(index);
      return this.$route.path.replace("/","");
    }
  },

  data() {
    return {
      me: {},
    };
  },
  methods:{
    exit(){

      
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
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      

    },

  }
};
</script>

<style scoped lang="less">
@import "../style/mixin";
</style>

