<!--
@Author: yuanmanxue
@Date:   2018-01-26 03:11:54
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 04:07:13
-->

<template lang="html">
  <panel :class="$style.panel" title="更多福利">
    <router-link :to="{ name: 'home' }">专项福利 <i class="iconfont">&#xe66b;</i></router-link>
    <div>
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
      </router-link>
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
      </router-link>
      <router-link :to="{ name: 'home' }">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
      </router-link>
    </div>
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
@import "../../css/element.scss";
.panel{
  @include panel;
  position: relative;
  &>div{
    @include list(row);
    flex-wrap: nowrap;
    padding-bottom: 30px;
    a{
      img{
        width: 100%;
      }
    }
  }
  &>a{
    position: absolute;
    font-size: 28px;
    color: #999;
    right: 20px;
    height: 30px;
    line-height: 30px;
    top: 42px;
    i{
      font-size: 28px;
    }
  }
}
</style>
