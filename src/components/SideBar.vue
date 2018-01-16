<template>
  <el-menu :default-active="onRoutes" background-color="#324157" text-color="white" router>
    <template v-for="item in items">
      <template v-if="item.subs">
        <el-submenu :index="item.index">
          <template slot="title">
            <i :class="item.icon"></i>{{ item.title }}</template>
          <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index">
          <i :class="item.icon"></i>{{ item.title }}
        </el-menu-item>
      </template>
    </template>

  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            icon: 'el-icon-setting',
            index: 'index',
            title: '自述'
          },
          {
            icon: 'el-icon-menu',
            index: '2',
            title: '表格',
            subs: [
              {
                index: 'view02',
                title: 'view02'
              },
              {
                index: 'vuetable',
                title: 'Vue表格组件'
              }
            ]
          },
          {
            icon: 'el-icon-upload2',
            index: 'drag',
            title: '拖拽'
          }
        ]
      }
    },
    computed: {
      onRoutes () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style scoped>

</style>
