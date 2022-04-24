<template>
  <div>

    <el-upload

        class=""

        action=""

        :on-success="handleSuccess"

        :http-request="uploadFile"

        multiple

        :limit="3"

        :file-list="fileList">

      <el-button size="small" type="primary">点击上传</el-button>

    </el-upload>

    <img :src="imgUrl"/>
  </div>
 </template>

// js部分

<script>

const OSS = require('ali-oss');

const client= new OSS({

  accessKeyId: '*****',  // 查看你自己的阿里云KEY

  accessKeySecret: '****', // 查看自己的阿里云KEYSECRET

  bucket: 'hs-image-oss', // 你的 OSS bucket 名称

  region: 'oss-cn-beijing', // bucket 所在地址，我的是 华北2 北京

  // cname: true // 开启自定义域名上传

  // endpoint:"file.xxxx.live" // 自己的域名

});

export default {

  props: {

    msg: String

  },

  data () {

    return {

      fileList: [],

      imgUrl: ''

    }

  },

  methods: {

    async uploadFile (options) {

      try {

        let file = options.file; // 拿到 file

        let fileName = file.name.substr(0,file.name.lastIndexOf('.'))

        let date = new Date().getTime()

        let fileNames = `${date}_${fileName}` // 拼接文件名，保证唯一，这里使用时间戳+原文件名

        // 上传文件,这里是上传到OSS的 uploads文件夹下

        client.put('banner/' + fileNames, file).then(res=>{

          if (res.res.statusCode === 200) {

            options.onSuccess(res)

          }else {

            options.onError("上传失败")

          }

        })

      }catch (e) {

        options.onError("上传失败")

      }

    },

    // 上传成功回调函数

    handleSuccess (res) {

      console.log(res.url)

      this.imgUrl = res.url

    }

  }

}

</script>