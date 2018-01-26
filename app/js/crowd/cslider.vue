<!--
@Author: yuanmanxue
@Date:   2018-01-26 10:43:56
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 02:12:42
-->

<template lang="html">
  <panel title="fff" :class="$style.panel">
    <swiper :options="options" :class="$style.slider">
      <swiper-slide v-for="item in items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <span>{{item.new}}</span>
          <i class="iconfont">&#xe66b;</i></router-link>
      </swiper-slide>
    </swiper>
  </panel>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
      items:[{
        href:'home',
        new:'签到领流量，1元500M！'
      },{
        href:'home',
        new:'百万白条券免费送，速来领取！！'
      },{
        href:'home',
        new:'签到领流量，1元500M！'
      },{
        href:'home',
        new:'百万白条券免费送，速来领取！！'
      }]
    }
  },
  props:{
    options: {
      type:Object,
      default() {
        return {
          direction: 'vertical',
          slidesPerView: 1,
          speed: 1200,
          autoplay: true,
          loop: true
        }
      }
    }
  },
  components: {
    Panel,
    swiper,
    swiperSlide
  }
}
</script>
<style lang="scss" scoped>
@import "~swiper/dist/css/swiper.css";
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
    @include panel;
    margin-top: 120px !important;
    margin-bottom: 0px !important;
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    background:url('//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png') left top no-repeat;
    &>h4{
      display:none;
    }
    .slider{
      width: 458px;
      height: 100%;
      float: right;
      a{
        span{
          width:398px;
          display: inline-block;
          text-decoration: none;
          color:#333;
          font-size: 28px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i{
          font-size: 28px;
          float: right;
          margin-right: 15px;
        }
      }
    }
}
</style>
