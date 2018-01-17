<!--
@Author: yuanmanxue
@Date:   2018-01-16 04:40:50
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 08:44:32
-->
<template lang="html">
  <div :class="$style.header">
      <span :class="$style.left">
        <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        <btn :class="$style.btnDownload">App下载</btn>
      </span>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
  components:{
    btn
  }
}
</script>

<style lang="scss" scoped module>
  .header{
    color: #666;
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
    .left{
      font-size: 28px;
      height: 30px;
      margin: 17px 0 0 18px;
    }
    .btnDownload{
      float: right;
      font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      padding: 0;
      border-radius: 4px;
      margin: 28px 24px 0 0;
    }
  }
</style>
