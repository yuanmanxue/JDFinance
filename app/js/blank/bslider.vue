<!--
@Author: yuanmanxue
@Date:   2018-01-25 05:32:46
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 05:36:22
-->

<template lang="html">
  <div :class="$style.panel">
    <!-- <slider></slider> -->
  </div>
</template>

<script>
import slider from '../core/slider.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    slider
  }
}
</script>

<style lang="css" module>
@import "../../css/element.scss";
.panel{

}
</style>
