<!--
@Author: yuanmanxue
@Date:   2018-01-26 04:19:16
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 04:35:30
-->

<template lang="html">
  <div :class="$style.mine">
    <p>暂无数据，请登录账号！</p>
    <router-link :to="{ name: 'home' }">登录</router-link>  /
    <router-link :to="{ name: 'home' }">注册</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.mine{
  position: absolute;
  height: 100px;
  top:50%;
  left:0;
  right:0;
  margin-top: -150px;
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  p{
    margin-bottom: 20px;
  }
  a{
    @include btn($size:30px,$padding:10px,$radius:10px);
  }
}
</style>
