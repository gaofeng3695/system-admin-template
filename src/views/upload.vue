<template>
  <div id="main">
    <el-card class="box-card" :body-style="{padding:'0 20px'}">
      <p class="title">上传</p>
      <el-upload action="/upload/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </el-card>
    <el-card class="box-card" :body-style="{padding:'0 20px'}">
      <p class="title">走马灯</p>
      <el-carousel :interval="4000" type="card" height="200px" :autoplay='false' indicator-position='none'>
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <p></p>
    </el-card>

  </div>

</template>

<script>
export default {
  name: 'upload',
  data () {
    return {
      url: 'https://jsonplaceholder.typicode.com/posts/',
      dialogImageUrl: '',
      dialogVisible: false,
      autoplay: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      console.log('getData')
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.title {
  padding: 8px 0;
}
.box-card {
    width: 100%;
    margin-bottom: 15px;
  }
</style>