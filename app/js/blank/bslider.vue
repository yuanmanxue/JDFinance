<!--
@Author: yuanmanxue
@Date:   2018-01-25 05:32:46
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 09:58:03
-->

<template lang="html">
  <article>
    <slider :items="items" :cname="$style.slider"></slider>
  </article>
</template>

<script>
import slider from '../core/slider.vue'
export default {
  data(){
    return {
      items: [{
          href: 'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
        },{
          href:'home',
          src:'//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
        }
      ]
    }
  },
  components:{
    slider
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.slider{
  margin-top: 120px;
}
</style>
