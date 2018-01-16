<!--
@Author: yuanmanxue
@Date:   2018-01-16 01:51:25
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-16 02:09:10
-->
<template lang="html">
  <section :class="[panelClass,cname]">
    <h4>-{{title}}-</h4>
    <slot/>
  </section>
</template>

<script>
export default {
  data(){
    return {
      panelClass:'panel'
    }
  },
  props:{
    title:{
      type:String,
      default:'123'
    },
    cname:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../css/element.scss";
  .panel{
    @include panel;
  }
</style>
