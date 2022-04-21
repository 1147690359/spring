<template >
  <div class="fillcontain">
    <v-header></v-header>
    


    <div class="table_container">
      <!-- <el-button @click="addUser" type="primary" size="mini"
        >新建用户</el-button
      > -->
      <div style="padding-top:20px; padding-left:15px;">
          <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="">
            <el-input v-model="selectByName" placeholder="请输入查询的信息"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="selectBy()">查询</el-button>
            <el-button type="primary" @click="outerVisible = true">添加新用户</el-button>
          </el-form-item>
       </el-form>

        
  
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

      </div>
       <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="id"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="用户名"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.username }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="密码"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.password }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row.id)">删除</el-button> -->

          <template>
              <el-popconfirm
                title="这是一段内容确定删除吗？"
                @confirm="handleDelete(scope.row.id)"
              >
                <el-button slot="reference" size="mini"
                  type="danger" >删除</el-button>
              </el-popconfirm>
          </template>

      </template>
    </el-table-column>
  </el-table>


  <!-- 修改的文本框 -->
  <el-dialog title="修改用户信息" :visible.sync="update.outerVisible"  width="600px">
            <div style="padding-top:20px; padding-left:15px;">
              <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="账号:">
                  <el-input v-model="update.username" placeholder="请输入想要添加的账号"  ></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input v-model="update.password" placeholder="请输入密码" ></el-input>
                </el-form-item>
                <el-form-item label="姓名:">
                  <el-input v-model="update.name"  placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                  <el-input v-model="update.address"  placeholder="请输入家庭住址"></el-input>
                </el-form-item>

              </el-form>
            </div>
            <el-dialog
                width="530px"
                title="请再次确认个人信息"
                :visible.sync="update.innerVisible"
                append-to-body>  

              <el-form :inline="true"  class="demo-form-inline">
                <el-form-item label="账号: ">
                  <el-input v-model="update.username" placeholder="请输入想要添加的账号" :readonly="true" ></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input v-model="update.password" placeholder="请输入密码" :readonly="true" ></el-input>
                </el-form-item>
                <el-form-item label="姓名:">
                  <el-input v-model="update.name"  placeholder="请输入姓名" :readonly="true" ></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                  <el-input v-model="update.address"  placeholder="请输入家庭住址" :readonly="true" ></el-input>
                </el-form-item>
                
                <el-button @click="update.innerVisible = false" style="margin-left:320px;">取 消</el-button>
                <el-form-item>
                  <el-button type="primary" @click="updateUser" style="margin-left:15px;">提交</el-button>
                </el-form-item>
                

              </el-form>  
            </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="update.outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="update.innerVisible = true">提交</el-button>
          </div>
   </el-dialog>

<!-- 
    分页功能
    :total="total"   总数
    :current-page.sync="page"  绑定当前页码
      
    @next-click="next"     下一页事件   
    @prev-click="prev"     上一页事件
    @current-change="fenye"   当前页事件-->
<el-pagination
  background
  layout="prev, pager, next"
  :total="total"
  :current-page.sync="page"
  
  @current-change="selectBy"
  >
</el-pagination>

  </div>
  
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "User",
  components: {
    "v-header": Header,
  },
    data() {
      return {
        selectSize:'',
        update:{
          outerVisible: false,
          innerVisible: false,
          id:'',
          username:'',
          password:'',
          name:'',
          address:''
        },

        outerVisible: false,
        innerVisible: false,
        form:{
          username:'',
          password:'',
          name:'',
          address:''
        },

        tableData:[],
        selectByName:'',
        total:'',

        size:10,
        page:''
      }
    },
    methods: {


     /**
      * 修改用户数据
      */
      handleEdit(index, row) {
        this.update.id=row.id;
        this.update.username=row.username;
        this.update.password=row.password;
        this.update.name=row.name;
        this.update.address=row.address;
        this.update.outerVisible=true;
      },

      updateUser(){
          if(this.update.username === ''){
            alert("账号不能出现空");
          }else if( this.update.password === ''){
            alert("密码不能为空");
          }else if( this.update.name === ''){
            alert("姓名不能为空");
          }else if(this.update.address===''){
            alert("地址不能为空");
          }else{

             this.$axios
            .put(`/api/updateUser`,this.update)
            .then((response) => {
              if(response.data.update==="have"){
                alert("修改成功");
                this.select();
                this.selectBy();
                this.update.outerVisible=false;
                this.update.innerVisible=false;
              }else {
                alert("修改失败");
              }   
            })
            .catch((error) => {
              alert(error+"系统出错了，请联系开发人员");
              
            });  
          }
        
      },

/**
 * 删除数据
 */
      handleDelete(row) {
        
         this.selectBy();

         this.$axios
       .delete(`/api/userDelete/${row}`)
        .then((response) => {
          if(response.data.del==="have"){
           


            if(this.selectSize == 1)
            {
                 this.page=this.page-1;
            }
            // this.select();
            
             alert("删除成功");

             this.select();
              this.selectBy();

          }else if(response.data.del==="null"){
             if(this.selectSize == 0){
                 this.page=this.page-1;
            }
            alert("删除失败，该数据已经被删除");

             this.select();
              this.selectBy();
          }
          else {
            alert("系统出错啦，请联系管理员");
          }      
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            message: "网络开小差了",
            type: "error",
          });
        });
      },

/**
 * 打开这个页面时 加载数据
 */
     select(){
       this.$axios
       .get(`/api/user`)
        // .get(`/api/user/query1`)
        // .get(`/api/user/query/${offset}/${this.pageSize}`)
        .then((response) => {
          // this.tableData = response.data;
          this.total = response.data.length;

        })
        .catch((error) => {
          console.log(error);
          this.$message({
            message: "网络开小差了",
            type: "error",
          });
        });
     },

/**
 * 查询
 * 1.根据username和 name 来进行模糊查询
 * 查询后分页 
 */
     selectBy(){
       var begin=this.size*(this.page-1);

       this.$axios
       .get(`/api/selectByName?selectByName=${this.selectByName}&begin=${begin}&size=${this.size}`)
        .then((response) => {
          this.tableData = response.data
          this.selectSize=response.data.length;
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            message: "网络开小差了",
            type: "error",
          });
        });
     },


     /**
      * 添加新的用户
      */

     insertUser(){
       if(this.form.username === ''){
            alert("账号不能出现空");
          }else if( this.form.password === ''){
            alert("密码不能为空");
          }else if( this.form.name === ''){
            alert("姓名不能为空");
          }else if(this.form.address===''){
            alert("地址不能为空");
          }else{
         this.$axios
       .post(`/api/insertUser`,this.form)
        .then((response) => {
          if(response.data.ins==="have"){
            alert("添加成功");
            this.select();
            this.selectBy();
            this.outerVisible=false;
            this.innerVisible=false;
            
            this.form.username='',
            this.form.password='',
            this.form.name='',
            this.form.address=''
            
          }else{
            alert("添加失败");
          }
          
        })
        .catch((error) => {
          console.log(error);
          this.$message({
            message: "网络开小差了",
            type: "error",
          });
        });

       }

       
     }




     /**
      * 分页功能
      */

    // fenye(){
    //   var begin=this.size*(this.page-1);
    //   this.$axios
    //    .get(`/api/pageSelect?begin=${begin}&size=${this.size}`)
    //     .then((response) => {
    //       this.tableData = response.data
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.$message({
    //         message: "网络开小差了",
    //         type: "error",
    //       });
    //     });

    // }
     
    
     

    },
    mounted(){
      this.select();
      this.selectBy();
    }
  }
</script>



