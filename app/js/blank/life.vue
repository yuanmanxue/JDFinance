<!--
@Author: yuanmanxue
@Date:   2018-01-26 10:09:12
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:14:01
-->

<!--
@Author: yuanmanxue
@Date:   2018-01-17 05:07:11
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 10:14:01
-->

<template lang="html">
  <panel title='更多服务' :class="$style.panel">
    <ul :class="$style.list">
      <li :class="$style.item" v-for="item in items">
        <router-link :to="{ name: 'home' }">
          <img :src="item.src" alt="">
          <p>{{item.title}}</p>
          <span v-if="item.new">{{item.new}}</span>
        </router-link>
      </li>
    </ul>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
        items:[{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
          title:'小白卡'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
          title:'白条商城 '
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
          title:'小白卡'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
          title:'白条商城 '
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
          title:'小白卡'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
          title:'白条商城 '
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
          title:'小白卡'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
          title:'白条商城 '
        },]
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
  .list{
    @include list(row);
    flex-wrap: wrap;
    justify-content: space-around;
    box-sizing: border-box;
    padding:0 10px;
    padding-bottom: 40px;
    .item{
      box-sizing: border-box;
      text-align: center;
      width: 25%;
      margin-bottom:40px;
      a{
        text-decoration: none;
      }
      img{
        height: 90px;
        width: 90px;
        margin: 0 10px;
      }
      p{
        width: 100%;
        font-size: 26px;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 12px;
        color: #666;
      }
      span{
        display: block;
        font-size: 22px;
        color: #ff801a;
        margin-top: 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
