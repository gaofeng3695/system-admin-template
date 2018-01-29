<template>
  <baidu-map :style="style" :scroll-wheel-zoom="true" :center="center" :zoom="zoom" @ready="handler" ak="ggGUMM84vpa9GRP6HkOvt2H5UneQeXCQ">
    <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="1" :stroke-weight="4" :editing="true">
    </bm-polyline>

  </baidu-map>
</template>

<script>
  import { BaiduMap } from 'vue-baidu-map/components/Map/Map.vue';
  import BmPolyline from 'vue-baidu-map/components/overlays/Polyline.vue';
  export default {
    data () {
      return {
        style: {
          width: '100%',
          height: '100%'
        },
        center: { lng: 0, lat: 0 },
        zoom: 3,
        polylinePath: [
          { lng: 116.404, lat: 39.915 },
          { lng: 116.405, lat: 39.92 },
          { lng: 116.423493, lat: 39.907445 }
        ]
      };
    },
    methods: {
      handler ({ BMap, map }) {
        this.center.lng = 116.404;
        this.center.lat = 39.915;
        this.zoom = 15;
      }
    },
    components: {
      BaiduMap,
      BmPolyline
    }
  };
</script>

