<!--
@Author: yuanmanxue
@Date:   2018-01-16 09:34:40
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-18 09:53:38
-->

<template lang="html">
    <div>
        <heador></heador>
        <slider></slider>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <footor></footor>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from '../home/hslider.vue'
import Novice from '../home/novice.vue'
import Borrow from '../home/borrow.vue'
import Money from '../home/money.vue'
import Product from '../home/product.vue'
import Life from '../home/life.vue'
import Footor from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
