<!--
@Author: yuanmanxue
@Date:   2018-01-26 09:59:46
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:06:44
-->

<template lang="html">
  <panel :class="$style.panel" title="白条福利">
    <list :items="items" :cname="$style.list"></list>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import list from '../core/list.vue'
export default {
  data(){
    return {
      items: [{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
        title:'开通白条',
        subtitle:'送188元礼包',
        todo:'立即开通'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
        title:'白条闪付',
        subtitle:'新手享158元礼包',
        todo:'随机立减'
      },
      {
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
        title:'白条提额',
        subtitle:'金融app专享提额礼包',
        todo:'去提额'
      }]
    }
  },
  components:{
    panel,
    list
  }
}
</script>

<style lang="scss" module>
  .panel{
    .list{

    }
  }
</style>
