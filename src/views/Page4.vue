<template>
<div>
  
          <el-upload
           list-type="picture-card"
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="onChange"
          >

            <el-avatar
              v-if="avatar"
              shape="square"
              :size="150"
              :src="avatar"
            ></el-avatar>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
</div>

 </template>



<script>
  export default {
    data() {
      return {    
        iconBase64:'',
        resaa:'' ,   
        file:'',
        gender: '',
        avatar: '',
      
      };
    },
    methods: {
        onChange(file) {
      console.log(file);
      this.avatar = window.webkitURL.createObjectURL(file.raw);


      console.log(file.raw);
     this.getBase64(file.raw).then(res => {
      console.log(res);
      this.resaa=res;
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

    
    
    }

     
  }
</script>

