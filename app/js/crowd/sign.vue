<!--
@Author: yuanmanxue
@Date:   2018-01-26 10:24:32
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:49:19
-->

<template lang="html">
  <panel title="每天签到" :class="$style.panel">
    <div>
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      </router-link>
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
      </router-link>
    </div>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
    @include panel;
    &>div{
        @include list(row);
        justify-content: space-around;
        flex-flow: nowrap;
        height: 138px;
        padding-bottom:40px;
        img{
          width: 100%;
        }
    }
}
</style>
