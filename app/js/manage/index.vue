<!--
@Author: yuanmanxue
@Date:   2018-01-18 10:16:06
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:16:38
-->
<!-- 理财 -->
<template lang="html">
  <div>
    <heador></heador>
    <mslider></mslider>
    <hmoney></hmoney>
    <mmoney></mmoney>
    <adver></adver>
    <footor :class="$style.footor"></footor>
    <navbar></navbar>
  </div>
</template>

<script>
import Heador from '../public/header.vue';
import Mslider from '../manage/mslider.vue'
import Footor from '../public/footer.vue';
import Navbar from '../public/navbar.vue'
import Hmoney from '../home/money.vue'
import Mmoney from '../manage/money.vue'
import Adver from '../manage/adver.vue'
export default {
  components:{
    Heador,
    Mslider,
    Hmoney,
    Footor,
    Navbar,
    Mmoney,
    Adver
  }
}
</script>

<style lang="scss" module>
.footor{
 li{
   &:nth-child(1){
     display: none;
   }
 }
}
</style>
