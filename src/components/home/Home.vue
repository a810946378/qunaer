<template>
    <div class="home">
      <home-header></home-header>
      <div class='contaniner' ref="wrapper">
        <div>
          <home-swiper :swiperList="swiperList"></home-swiper>
          <home-nav :imgsList="iconList"></home-nav>
          <home-favourite :favList="recommendList"></home-favourite>
          <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
      </div>
    </div>
</template>

<script>
  import {getHome} from '@/api'

  import HomeHeader from './base/Header'
  import HomeSwiper from './base/Swiper'
  import HomeNav from './base/Nav'
  import HomeFavourite from './base/Favourite'
  import HomeWeekend from './base/Weekend'
  import BScroll from 'better-scroll'
  export default {
      name:'Home',
      components:{
        HomeHeader,
        HomeSwiper,
        HomeNav,
        HomeFavourite,
        HomeWeekend
      },
      data(){
        return {
          iconList:[],
          recommendList:[],
          swiperList:[],
          weekendList:[]
        }
      },
      created(){
        //this.getData()
      },
      mounted(){
          this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
          })
      },
      methods:{
          async getData(){
            let {iconList,recommendList,swiperList,weekendList} = await getHome()
            this.iconList = iconList
            this.recommendList = recommendList
            this.swiperList = swiperList
            this.weekendList = weekendList
          }
      },
      activated(){//当组件被展示的时候触发
        this.getData()
        console.log('home activated')
      },
      deactivated(){//当组件没有展示的时候触发
        console.log('home deactivated')
      }
  }
</script>

<style scoped lang="stylus">
.contaniner
  position:fixed
  overflow:hidden
  right:0
  left:0
  bottom:0
  top:.88rem
</style>
