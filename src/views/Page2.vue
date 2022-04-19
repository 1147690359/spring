<template>
  <div class="fillcontain">
    <v-header></v-header>
    <template>
  <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
  
  <el-dialog title="添加新用户" :visible.sync="outerVisible"  width="600px">
      <div style="padding-top:20px; padding-left:15px;">
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="账号:">
            <el-input v-model="form.username" placeholder="请输入想要添加的账号"  ></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="form.password" placeholder="请输入密码" ></el-input>
          </el-form-item>
          <el-form-item label="姓名:">
            <el-input v-model="form.name"  placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="地址:">
            <el-input v-model="form.address"  placeholder="请输入家庭住址"></el-input>
          </el-form-item>

        </el-form>
      </div>
        <el-dialog
          width="530px"
          title="请再次确认个人信息"
          :visible.sync="innerVisible"
          append-to-body>  

          <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="账号: ">
            <el-input v-model="form.username" placeholder="请输入想要添加的账号" :readonly="true" ></el-input>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input v-model="form.password" placeholder="请输入密码" :readonly="true" ></el-input>
          </el-form-item>
          <el-form-item label="姓名:">
            <el-input v-model="form.name"  placeholder="请输入姓名" :readonly="true" ></el-input>
          </el-form-item>
          <el-form-item label="地址:">
            <el-input v-model="form.address"  placeholder="请输入家庭住址" :readonly="true" ></el-input>
          </el-form-item>
          
          <el-button @click="innerVisible = false" style="margin-left:320px;">取 消</el-button>
          <el-form-item>
            <el-button type="primary" @click="insertUser()" style="margin-left:15px;">提交</el-button>
          </el-form-item>
          

        </el-form>  
        </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="innerVisible = true">提交</el-button>
    </div>
  </el-dialog>
  </template>
  </div>
</template>

  <script>
  import Header from "../components/Header.vue";
export default {
  name: "pagr2",
  components: {
    "v-header": Header,
  },
  
  data() {
    return {
       outerVisible: false,
        innerVisible: false,

        form:{
          username:'',
          password:'',
          name:'',
          address:''
        },

      selectedUser: {
        id: "",
        username: "test090",
        mail: "111@qq.com",
        name: "asdf",
        age: "",
        gender: "",
        avatar: "",
      },

      tableData: [
        {
          date: "2016-05-02",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "赵四",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "老五",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "小六子",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    insertUser(){
      alert(this.form);
    },
    async testAdd() {
      let path = "/api/user/insert";
      this.$axios
        .post(path, this.selectedUser)
        .then((respone) => {
          if (respone.data.updateRows > 0) {
            this.dialogVisible = false;
            this.$message({ message: "修改成功", type: "success" });
            this.query();
          }
        })
        .catch((error) => {
          console.log(error);
          this.$message({ message: "修改失败", type: "error" });
        });
    },
    async query() {
      console.log("--------this is a fake log....")
    },
  },
};
</script>
<style scoped lang="less">
@import "../style/mixin";
</style>