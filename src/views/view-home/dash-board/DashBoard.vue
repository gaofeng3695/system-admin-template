<template>
  <div class="main">
    这里是主页

    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>
    <el-transfer v-model="value1" :data="data"></el-transfer>

    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value10"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
      </el-rate>
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        color1: '#409EFF',
        color2: null,
        data: generateData(),
        value1: [1, 4],
        value10: null,
        value2: null
      };
    }
  };
</script>

<style scoped>

</style>