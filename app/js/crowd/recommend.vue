<!--
@Author: yuanmanxue
@Date:   2018-01-26 02:06:59
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-26 03:21:42
-->

<template lang="html">
  <panel :class="$style.panel" title="In货推荐 ">
    <dl class="" v-for="item in items" :key="item.href">
      <dt><router-link :to="{ name: item.href }"><img :src="item.banner" alt=""></router-link></dt>
      <dd v-for="shop in item.list">
        <router-link :to="{ name: shop.href }">
          <span v-show="shop.sub">{{shop.sub}}</span>
          <img :src="shop.src" alt="">
          <p :class="$style.title">{{shop.title}}</p>
          <p><span>{{shop.price}}</span> 起</p>
          <div>
            <div :class="$style.bar"></div>
            <span>{{shop.percent}}</span>
          </div>
        </router-link>
      </dd>
    </dl>
  </panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  data(){
    return {
      items: [{
        banner:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        href:'home',
        list:[{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          sub:'精选',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        },{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        }]
      },{
        banner:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        href:'home',
        list:[{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          sub:'精选',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        },{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        }]
      },{
        banner:'//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        href:'home',
        list:[{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          sub:'精选',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        },{
          src:'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          href:'home',
          title:'双响炮蓝牙音箱',
          price:'29.00  ',
          percent:'172%'
        }]
      } ]
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
  dl{
    @include list(row);
    display: inline-flex;
    justify-content:space-around;
    dt{
      height: 170px;
      img{
        width: 100%;
      }
    }
    dd{
      width: 290px;
      box-sizing: border-box;
      height: 496px;
      background-color: rgba(0,0,0,.02);
      &:nth-child(2n){
        margin: 0 10px 0 20px;
        margin-bottom: 40px;
      }
      &:nth-child(2n+1){
        margin: 0 20px 0 10px;
        margin-bottom: 40px;
      }
      a{
        position: relative;
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        font-size: 28px;
        &>span{
          position: absolute;
          display: inline-block;
          height: 44px;
          line-height: 44px;
          background-color: #ddd;
          color:red;
          padding: 0 5px;
          margin: 10px 0;
        }
        img{
          width: 180px;
          height: 180px;
          display: block;
          margin: 64px auto 20px;
        }
        .title{
          color:#333;
          font-size: 28px;
          font-weight: bold;
          height: 40px;
          line-height: 40px;
        }
        p{
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 24px;
          color: #999;
          margin-bottom: 16px;
          span{
            font-weight: 600;
            color:#FF3232;
            font-size: 40px;
            &:before{
              content:'￥';
              font-weight: normal;
              font-size: 28px;
            }
          }
        }
        &>div{
          height: 48px;
          padding: 0 24px;
          .bar{
            width: 144px;
            height: 10px;
            float: left;
            margin-top: 19px;
            border-radius: 5px;
            background:linear-gradient(270deg, #F55 1%, #FF9C31 100%);
          }
          span{
            float: right;
            line-height: 48px;
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
