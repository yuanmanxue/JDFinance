<!--
@Author: yuanmanxue
@Date:   2018-01-16 04:41:07
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 05:26:43
-->
<template lang="html">
  <panel :class="$style.panel">
    <ul :class="$style.content">
      <li>
        <router-link :to="{ name: 'home' }">
          <i class="iconfont">&#xe61d;</i>
          <p>首页</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'manage' }">
          <i class="iconfont">&#xe6aa;</i>
          <p>理财</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'blank' }">
          <i class="iconfont">&#xe615;</i>
          <p>白条</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: '' }">
          <i class="iconfont">&#xe6a6;</i>
          <p>众筹</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: '' }">
          <i class="iconfont">&#xe64f;</i>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
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
@import '../../css/element.scss';
.panel{
  @include panel;
  margin-bottom: 0px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  &>h4{
    display: none;
  }
  .content{
    @include list(row);
    height: 100px;
    box-sizing: border-box;
    justify-content: space-around;
    li{
      text-align: center;
      font-size: 22px;
      a{
        text-decoration: none;
        color: #656565;
        i{
          display: inline-block;
          width: 100%;
          height: 44px;
          margin: 12px auto 6px;
          font-size: 48px;
        }
        p{
          height: 36px;
          line-height: 36px;
          font-size: 28px;
        }
      }
    }
  }

}
</style>
