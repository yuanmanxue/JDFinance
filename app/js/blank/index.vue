<!--
@Author: yuanmanxue
@Date:   2018-01-16 09:34:40
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:16:06
-->
<!-- 白条 -->
<template lang="html">
    <div>
        <heador></heador>
        <slider></slider>
        <money></money>
        <life></life>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from '../blank/bslider.vue'
import Money from '../blank/money.vue'
import Life from '../blank/life.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Heador,
    Slider,
    Money,
    Life,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
