<!--
@Author: yuanmanxue
@Date:   2018-01-17 05:07:11
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 05:29:54
-->

<template lang="html">
  <panel :title='title' :class="$style.panel">
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in items">
        <router-link :to="{ name: 'home' }">
          <img :src="item.src" alt="">
          <p>{{item.title}}</p>
          <span v-if="item.new">{{item.new}}</span>
        </router-link>
      </div>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
        title:'生活服务',
        items:[{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
          title:'惠加油'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
          title:'小白信用',
          new:'全新升级'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
          title:'信用卡还款'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
          title:'卡转让'
        },{
          src:'//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
          title:'定期还款'
        }]
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
    flex-wrap: nowrap;
    justify-content: space-around;
    box-sizing: border-box;
    padding:0 10px;
    .item{
      box-sizing: border-box;
      text-align: center;
      width: 25%;
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
