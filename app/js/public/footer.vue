<!--
@Author: yuanmanxue
@Date:   2018-01-16 04:40:58
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-18 09:47:55
-->

<template lang="html">
  <panel :class="$style.panel">
    <ul :class="$style.content">
      <li>
        <router-link :to="{ name: '' }">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
        </router-link>
      </li>
      <li>
        <div>
          <router-link :to="{ name: '' }">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
            <p>客户端</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: '' }">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
            <p>触屏版</p>
          </router-link>
        </div>
        <div>
          <router-link :to="{ name: '' }">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
            <p>电脑端</p>
          </router-link>
        </div>
      </li>
      <li>
        <router-link :to="{ name: '' }">Copyright © 2004-2017 京东JD.com 版权所有</router-link>
      </li>
      <li><router-link :to="{ name: '' }">投资有风险，购买需谨慎</router-link></li>
      <li><router-link :to="{ name: '' }">京东金融平台服务协议</router-link></li>
      <li><router-link :to="{ name: '' }">京东金融隐私政策</router-link></li>
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
@import "../../css/element.scss";
.panel{
  @include panel;
  margin-bottom: 100px;
  &>h4{
    display: none;
  }
  .content{
    @include list;
    a{
      text-decoration: none;
      color: #999;
    }
    li{
      color: #999;
      text-align: center;
      font-size: 24px;
      img{
        width: 100%;
        height: 142px;
      }
      &:nth-child(2){
        @include list(row);
        justify-content: space-around;
        padding: 40px 0 20px 0;
        background-color: #f5f5f5;
        img{
          width: 90px;
          height: 90px;
        }
        p{
          color: #999;
          margin-top: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      &:nth-child(n+3){
        padding: 25px 0;
        height: 30px;
        line-height: 30px;
        background-color: #f5f5f5;
        border-top: 1px solid #ddd;
      }
    }
  }
}
</style>
