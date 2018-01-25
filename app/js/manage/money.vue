<!--
@Author: yuanmanxue
@Date:   2018-01-18 11:33:52
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 02:55:47
-->

<template lang="html">
  <panel :class="$style.panel" title="理财精选">
    <list :items="items"></list>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
import List from '../core/list.vue'
export default {
  components:{
    Panel,
    List
  },
  data(){
    return{
      items:[{
        src:'//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
        href:'manage',
        subtitle:'预期年化收益率4.50%',
        title:'月度理财',
        todo:'去赚钱'
      },{
        src:'//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
        href:'manage',
        subtitle:'历史年化回报率5.50%',
        title:'季度理财',
        todo:'去赚钱'
      },{
        src:'//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
        href:'manage',
        subtitle:'历史年化回报率5.50%',
        title:'一年理财',
        todo:'去赚钱'
      }]
    }
  }
}
</script>

<style lang="scss" module>
</style>
