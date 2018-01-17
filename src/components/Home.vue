<template>
  <el-container style="height: 100%; border: 1px solid #eee">

    <el-header height="70px" style="background-color: #242f42">
        <vHead></vHead>
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: #324157">
        <vSidebar></vSidebar>
      </el-aside>
      <el-main>
        <transition name="move" mode="out-in"><router-view></router-view></transition>
      </el-main>
    </el-container>

</el-container>
</template>




<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import vHead from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
export default {
  components: {
    vHead,
    vSidebar
  }
}
</script>
