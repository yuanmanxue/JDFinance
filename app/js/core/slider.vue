<!--
@Author: yuanmanxue
@Date:   2018-01-16 01:51:32
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-18 09:03:36
-->
<template lang="html">
  <section :class="cname">
    <swiper :options="options">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt=""/>
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    cname: {
      type:String,
      default:''
    },
    items:{
      type:Array,
      default() {
        return []
      }
    },
    options: {
      type:Object,
      default() {
        return {
          autoplay: false,
          loop: false,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        }
      }
    }
  },
  componemts:{
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
@import "~swiper/dist/css/swiper.css";
</style>
