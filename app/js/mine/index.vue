<!--
@Author: yuanmanxue
@Date:   2018-01-26 10:17:23
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 04:21:32
-->
<!-- 众筹 -->
<template lang="html">
    <div>
        <heador></heador>
        <sign></sign>
        <navbar></navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Sign from '../mine/sign.vue'
import Navbar from '../public/navbar.vue'
export default {
  components:{
    Heador,
    Sign,
    Navbar
  }
}
</script>

<style lang="scss">

</style>
