<!--
@Author: yuanmanxue
@Date:   2018-01-17 02:35:23
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 02:41:18
-->

<template lang="html">
  <panel :title="title" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
      </router-link>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  data(){
    return{
      title:'极速借贷'
    }
  },
  components:{
    Panel
  }
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel{
  @include panel;
  .content{
    img{
      width: 100%;
      display: block;
    }
  }
}
</style>
