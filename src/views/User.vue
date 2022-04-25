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
                <el-form-item label="头像:">
                  <el-upload
                            list-type="picture-card"
                              class="avatar-uploader"
                              action="#"
                              :show-file-list="false"
                              :on-change="onChange"

                  >

                              <el-avatar
                                v-if="img.avatar"
                                shape="square"
                                :size="150"
                                :src="img.avatar"
                              ></el-avatar>
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
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
                <el-form-item label="邮箱:">
                  <el-input v-model="form.email"  placeholder="请输入邮箱地址"></el-input>
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
                  <el-input v-model="form.username" placeholder="请输入想要添加的账号" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input v-model="form.password" placeholder="请输入密码" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="姓名:">
                  <el-input v-model="form.name"  placeholder="请输入姓名" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                  <el-input v-model="form.address"  placeholder="请输入家庭住址" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="邮箱:">
                  <el-input v-model="form.email"  placeholder="请输入邮箱" :disabled="true" ></el-input>
                </el-form-item>
                
                <el-button @click="innerVisible = false" style="margin-left:320px;">取 消</el-button>
                <el-form-item>
                  <el-button type="primary" @click="insertUser()" style="margin-left:15px;">提交</el-button>
                </el-form-item>
                

              </el-form>  
              </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="insertaaa">提交</el-button>
          </div>
        </el-dialog>

      </div>
       <el-table
        :data="tableData"
        style="width: 100%;">

    <el-table-column prop="avatar" label="头像" width="100" align="center" >
          <template slot-scope="scope">
            <el-avatar style="margin-left: 10px" :src="scope.row.baseImg"></el-avatar>
          </template>
    </el-table-column>

    <el-table-column
      align="center"
      label="id"
      width="100">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column
    align="center"
      label="用户名"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.username }}</span>
      </template>
    </el-table-column>

    <el-table-column
    align="center"
      label="密码"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.password }}</span>
      </template>
    </el-table-column>

    

    <el-table-column
    align="center"
      label="姓名"
      width="80">
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

<el-table-column
       align="center"
      label="邮箱地址"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.email }}</span>
      </template>
    </el-table-column>

    <el-table-column
       align="center"
      label="注册时间"
      width="180">
      <template slot-scope="scope">
        <!-- <i class="el-icon-time"></i> -->
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作" align="center">
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
                <el-form-item label="邮箱:">
                  <el-input v-model="update.email"  placeholder="请输入邮箱住址"></el-input>
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
                  <el-input v-model="update.username" placeholder="请输入想要添加的账号" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input v-model="update.password" placeholder="请输入密码" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="姓名:">
                  <el-input v-model="update.name"  placeholder="请输入姓名" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="地址:">
                  <el-input v-model="update.address"  placeholder="请输入家庭住址" :disabled="true" ></el-input>
                </el-form-item>
                <el-form-item label="邮箱:">
                  <el-input v-model="update.email"  placeholder="请输入邮箱" :disabled="true" ></el-input>
                </el-form-item>
                
                <el-button @click="update.innerVisible = false" style="margin-left:320px;">取 消</el-button>
                <el-form-item>
                  <el-button type="primary" @click="updateUser" style="margin-left:15px;">提交</el-button>
                </el-form-item>
                

              </el-form>  
            </el-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="update.outerVisible = false">取 消</el-button>
            <el-button type="primary" @click="inner">提交</el-button>
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
          address:'',
          email:''
        },

        outerVisible: false,
        innerVisible: false,
        form:{
          username:'',
          password:'',
          name:'',
          address:'',
          email:''
        },

        tableData:[],
        selectByName:'',
        total:0,

        size:10,
        page:0,
        img:{
            iconBase64:'',
            resaa:'' ,   
            file:'',
            gender: '',
            avatar: '',
        }
      }
    },
    methods: {

   /**
    * img 上传  转base64
    */
   onChange(file) {
      console.log(file);
      this.img.avatar = window.webkitURL.createObjectURL(file.raw);


      console.log(file.raw);
     this.getBase64(file.raw).then(res => {
      console.log(res);
      this.imgresaa=res;
      });
    },

     getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function() {
          imgResult = reader.result;
        };
        reader.onerror = function(error) {
          reject(error);
        };
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
 },







     /**
      * 修改用户数据
      */

     
      handleEdit(index, row) {
        this.update.email=row.email;
        this.update.id=row.id;
        this.update.username=row.username;
        this.update.password=row.password;
        this.update.name=row.name;
        this.update.address=row.address;
        this.update.outerVisible=true;
      },
      inner(){
        var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;



          if(this.update.username === ''){
            this.$message({
                        message: '账号不能为空',
                    })
          }else if( this.update.password === ''){
            this.$message({
                        message: '密码不能为空',
                    })
          }else if( this.update.name === ''){
            this.$message({
                        message: '姓名不能为空',
                    })
          }else if(this.update.address === ''){
            this.$message({
                        message: '地址不能为空',
                    })
          }else  if (this.update.email ===''){
          this.$message({
                        message: '邮箱格式不正确',
                    })
        }else if(!regEmail.test(this.update.email)) {
                    this.$message({
                        message: '邮箱格式不正确',
                    })
        }else{
                this.update.innerVisible = true;
        }

      },

      updateUser(){

             this.$axios
            .put(`/api/updateUser`,this.update)
            .then((response) => {
              if(response.data.update==="have"){
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                this.select();
                this.selectBy();
                this.update.outerVisible=false;
                this.update.innerVisible=false;
              }else {
                this.$message({
                        message: '修改失败，系统出现问题了，请联系管理员',
                    })
              }   
            })
            .catch((error) => {
              alert(error+"系统出错了，请联系开发人员");
              
            });  
          
        
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
                
                this.$message({
                      message: '删除成功',
                      type: 'success'
                    });

                  this.select();
                  this.selectBy();

              }else if(response.data.del==="null"){
                if(this.selectSize == 0){
                    this.page=this.page-1;
                }
                this.$message.error('该数据已经被删除了');

                this.select();
                  this.selectBy();
              }
          else {
             this.$message.error('出错了哦，请联系工作人员');
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
          if(response.data.msg === "token verify fail"){
            this.$message({
            message: "token验证失败,请重新登录",
            type: "error",
          });
          this.$router.push("/login");
          }
          console.log("aaa",response.data);
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

    insertaaa(){
      var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;


       if(this.form.username === ''){
            this.$message({
                        message: '账号不能为空',
                    })
          }else if( this.form.password === ''){
            this.$message({
                        message: '密码不能为空',
                    })
          }else if( this.form.name === ''){
            this.$message({
                        message: '姓名不能为空',
                    })
          }else if(this.form.address===''){
            this.$message({
                        message: '地址不能为空',
                    })
          }else if(this.form.email===''){
            this.$message({
                        message: '邮箱不能为空',
                    })
          }else if(!regEmail.test(this.form.email)) {
                    this.$message({
                        message: '邮箱格式不正确',
                    })
          } else{
            this.innerVisible = true
          }
    },
    
     insertUser(){
       
         this.$axios
          .post(`/api/insertUser`,this.form)
          .then((response) => {
           if(response.data.ins==="have"){
            this.$message({message: '恭喜你，这是一条成功消息' });
            this.select();
            this.selectBy();
            this.outerVisible=false;
            this.innerVisible=false;
            
            this.form.username='',
            this.form.password='',
            this.form.name='',
            this.form.address='',
            this.form.email=''
            
          }else{
            this.$message({
                        message: '添加失败',
                    })
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

    },
    mounted(){
      this.select();
      this.selectBy();
    }
  }
</script>



