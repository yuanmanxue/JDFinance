<!--
@Author: yuanmanxue
@Date:   2018-01-17 02:44:59
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 03:54:18
-->

<template lang="html">
  <panel :title="title" :class="$style.panel">
    <section :class="$style.content">
        <dl :class="$style.item" v-for="item in items" :key="item.title">
          <router-link :to="{ name: 'home'}">
            <dt>{{item.title}} <span>{{item.subtitle}}</span></dt>
            <dd>{{item.rate}}</dd>
            <dd>{{item.text}}</dd>
          </router-link>
        </dl>
    </section>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
      items:[{
        title:'定期理财',
        subtitle:'理财首选',
        rate:'5.60%',
        text:'历史年化回报率'
      },{
        title:'小白理财',
        subtitle:'理财首选',
        rate:'5.60%',
        text:'历史年化回报率'
      },{
        title:'定期理财',
        subtitle:'理财首选',
        rate:'5.60%',
        text:'历史年化回报率'
      },{
        title:'小白基金',
        subtitle:'理财首选',
        rate:'5.60%',
        text:'历史年化回报率'
      }],
      title:'理财精选'
    }
  },
  components:{
    Panel
  }
}
</script>

<style lang="scss" module>
// 高级选择器   活用html标签
// position:relative   top:-200px;  小技巧运用
@import "../../css/element.scss";
.panel{
  @include panel;
  .content{
    @include flex(row);
    box-sizing: border-box;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    &:after{
      content: '';
      display: block;
      width: 100%;
      height: 0px;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -208px;
    }
    .item{
      width: 50%;
      font-size: 28px;
      box-sizing: border-box;
      position: relative;
      padding: 34px 16px;
      &:after{
        content: '';
        width: 1px;
        height: 136px;
        display: block;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -68px;
        border-right: 1px solid #ddd;
      }
      &:nth-child(2n){
        &:after{
          display: none;
        }
      }
      dt{
        font-size: 30px;
        color: #333;
        font-weight: 700;
        line-height: 42px;
        height: 42px;
        span{
          color: red;
          min-width: 104px;
          line-height: 34px;
          height: 34px;
          border: 1px solid #ff5155;
          font-size: 22px;
          padding: 0 8px;
          vertical-align:3px;
          margin-left: 4px;
        }
      }
      dd{
        &:nth-child(2){
          font-weight: 700;
          line-height: 58px;
          height: 58px;
          font-size: 44px;
          color:#ff5155;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        &:nth-child(3){
          font-size: 24px;
          height: 34px;
          line-height: 34px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #999;
        }
      }
    }
  }
}
</style>
