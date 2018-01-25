<!--
@Author: yuanmanxue
@Date:   2018-01-18 11:21:36
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-25 05:23:12
-->
<template lang="html">
  <ul :class="[listClass,cname]">
    <li v-for="item in items" :key="item.href">
      <router-link :to="{ name: item.href }">
        <img :src="item.src" alt="">
        <div>
          <h5>{{item.title}}</h5>
          <p>{{item.subtitle}}</p>
        </div>
        <span>{{item.todo}} <i class="iconfont">&#xe66b;</i></span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return{
      listClass:'list'
    }
  },
  props:{
    items:{
      type:Array,
      default(){
        return []
      }
    },
    cname:{
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss">
@import "../../css/element.scss";
.list{
  @include list;
  li{
    border-top: 1px solid #ddd;
    box-sizing: border-box;
    height: 140px;
    padding: 0 20px;
    a{
      text-decoration: none;
    }
    img{
      display: inline-block;
      float: left;
      width: 88px;
      height: 88px;
      margin: 26px 24px 0 0;
    }
    div{
      float: left;
      width: 224px;
      margin-top: 20px;
      line-height: 1em;
      overflow: hidden;
      h5{
        font-size: 32px;
        color: #333;
      }
      p{
        font-size: 24px;
        color: #ff3232;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    span{
      float: right;
      font-size: 28px;
      color: #FF801A;
      line-height: 140px;
      i{
        font-size: 28px;
        color: #666;
      }
    }
  }
}
</style>
