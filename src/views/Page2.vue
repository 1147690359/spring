<template>
  <div class="fillcontain">
    <v-header></v-header>

    <el-upload
  action="#"
  list-type="picture-card"
  :auto-upload="false">
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
   </el-upload>

  </div>
</template>

  <script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        src:''
      };
    },
    methods: {
      handleRemove(file) {
        console.log(file);
        alert(file.url+123);
        
      },
      handleDownload(file) {
        console.log(file);
      }
    }
  }
</script>
<style scoped lang="less">
@import "../style/mixin";


</style>
