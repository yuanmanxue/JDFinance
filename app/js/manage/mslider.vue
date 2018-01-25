<!--
@Author: yuanmanxue
@Date:   2018-01-18 10:28:50
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-18 10:43:49
-->

<template lang="html">
  <article>
    <slider :items="items" :cname="$style.slider"></slider>
    <panel :class="$style.panel">
      <router-link :to="{ name: 'manage' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
      </router-link>
    </panel>
  </article>
</template>

<script>
import Slider from '../core/slider.vue'
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
      items:[{
        href:'manage',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
      },{
        href:'manage',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400'
      },{
        href:'manage',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
      }]
    }
  },
  components:{
    Slider,
    Panel
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.slider{
  margin-top: 120px;
  img{
    width: 100%;
    height: 340px;
  }
}
.panel{
  @include panel;
  &>h4{
    display: none;
  }
  img{
    width: 100%;
    height: 230px;
  }
}
</style>
