<!--
@Author: yuanmanxue
@Date:   2018-01-17 09:02:54
@Last modified by:   yuanmanxue
@Last modified time: 2018-01-17 05:21:46
-->
<template lang="html">
  <article class="">
    <slider :items="items" :cname="$style.slider"></slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="{ name: item.href }">
          <img :src="item.img" alt="">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import Slider from '../core/slider.vue'
export default {
  components:{
    Slider
  },
  data() {
    return {
      items: [{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t16444/286/1699672177/43068/8316058d/5a5ddc2bNd5dc980e.jpg?width=750&height=320'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t18490/159/112030789/41525/a766babf/5a5ddcb9N88ff9654.jpg?width=750&height=320'
      },{
        href:'home',
        src:'//img12.360buyimg.com/jrpmobile/jfs/t16216/327/1713269497/35186/e7cbace/5a5ddc76N70d0eb6a.jpg?width=750&height=320'
      }],
      enters: [{
        img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        href:'home',
        title:'优惠券'
      },{
        img:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        href:'home',
        title:'领红包'
      },{
        img:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        href:'home',
        title:'抢钢镚'
      },{
        img:'//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        href:'home',
        title:'领京豆'
      },{
        img:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        href:'home',
        title:'白条提额'
      }]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.slider{
  margin-top: 120px;
  img{
    width: 100%;
  }
}
.list{
  @include list(row);
  background: #ffffff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a{
    text-decoration: none;
  }
  .item{
    text-align: center;
    img{
      display: inline-block;
      width: 90px;
      height: 90px;
      padding:
    }
    h4{
      font-size: 26px;
      padding-top: 12px;
      color:#666;
    }
  }
}
</style>
