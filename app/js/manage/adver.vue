<!--
@Author: yuanmanxue
@Date:   2018-01-18 01:12:05
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 02:56:24
-->

<template lang="html">
  <panel :class="$style.panel">
    <router-link :to="{ name: 'manage' }">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </router-link>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components:{
    Panel
  }
}
</script>

<style lang="scss" module>
.panel{
  background: rgba(255,255,255,0);
  &>h4{
    display: none;
  }
  img{
    width: 100%;
    height: 120px;
  }
}
</style>
