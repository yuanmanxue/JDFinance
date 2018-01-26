<!--
@Author: yuanmanxue
@Date:   2018-01-26 10:17:23
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 04:10:02
-->
<!-- 众筹 -->
<template lang="html">
    <div>
        <heador></heador>
        <slider></slider>
        <sign></sign>
        <recommend></recommend>
        <more></more>
        <footor :class="$style.footer"></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from '../crowd/cslider.vue'
import Sign from '../crowd/sign.vue'
import Recommend from '../crowd/recommend.vue'
import More from '../crowd/more.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Heador,
    Slider,
    Sign,
    More,
    Recommend,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss" module>
.footer{
  li{
    &:nth-child(1){
      display: none;
    }
  }
}
</style>
