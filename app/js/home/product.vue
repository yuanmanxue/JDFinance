<!--
@Author: yuanmanxue
@Date:   2018-01-17 03:55:43
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 05:05:02
-->

<template lang="html">
  <panel :title="title" :class="$style.panel">
    <section :class="$style.cotent">
      <router-link :to="{ name: 'home' }" :class="$style.arrow">更多尖货&gt;</router-link>
      <slider :options="options" :items="items" :cname="procudtSlider"></slider>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
  data(){
    return {
      procudtSlider:'procudtSlider',
      title:'新品推荐',
      options:{
        slidesPerView:2.3,
        spaceBetween: 20,
        freeMode:true
      },
      items:[{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t14641/180/1638965003/42812/2f4a85a1/5a54aadbN5269a1f1.jpg?width=335&height=421'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t14584/14/1620812582/49401/2a98f763/5a54aaeeNde89f852.jpg?width=335&height=421'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t15670/84/1493061629/40102/9f58843d/5a54aaecNecedcefd.jpg?width=335&height=421'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t15175/239/1652258993/41684/2827c8e3/5a54ab0fN0c596f31.jpg?width=335&height=421'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t15175/239/1652258993/41684/2827c8e3/5a54ab0fN0c596f31.jpg?width=335&height=421'
      }]
    }
  },
  components:{
    Slider,
    Panel
  }
}
</script>

<style lang="scss">
// 更改的是插件的样式  不能用module来控制
.procudtSlider{
  .swiper-container{
    box-sizing:border-box;
    padding: 0 24px;
    .swiper-slide{
      a{
        display: inline-block;
        width: 100%;
        img{
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  .cotent{
    padding-bottom: 40px;
    position: relative;
    .arrow{
      text-decoration: none;
      font-size: 28px;
      color: #999;
      position: absolute;
      z-index: 100;
      right: 20px;
      top: -70px;
    }
  }
}
</style>
