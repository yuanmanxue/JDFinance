<!--
@Author: yuanmanxue
@Date:   2018-01-16 09:34:40
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 05:37:07
-->

<template lang="html">
    <div>
        <heador></heador>
        <!-- <slider></slider> -->
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from '../blank/bslider.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Heador,
    Slider,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
