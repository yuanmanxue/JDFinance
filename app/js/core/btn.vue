<!--
@Author: yuanmanxue
@Date:   2018-01-16 01:51:11
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-16 05:25:55
-->
<template lang="html">
  <div :class="[btnClass,cname]">
    <slot/>
  </div>
</template>

<script>
export default {
  props:{
    cname:{
      type:String,
      default:''
    }
  },
  data(){
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/element.scss";
  .btn{
    @include btn;
  }
</style>
