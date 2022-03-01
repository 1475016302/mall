<template>
  <swiper>
      <swiper-item  v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index"; //index可省

export default {
  name:'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      isLoad:false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
   methods: {
    imageLoad() {
      // console.log('轮播图加载');
      // 只需要发送一次
      if (!this.isLoad) {
        this.$emit("swiperImageLoad");
        this.isLoad = true;
      }
    },
  },
}
</script>

<style>

</style>