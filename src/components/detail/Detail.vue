<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
    :bannerImg='bannerImg'
    :gallaryImgs="gallaryImgs"></detail-banner>

    <detail-header></detail-header>
    <detail-card :cardInfo="cardInfo"></detail-card>
    <detail-recommend :recommendInfo="recommendInfo">
      <h3 class="border-bottom">去哪儿推荐</h3>
    </detail-recommend>

    <detail-calendar :calendarInfo="calendarInfo"></detail-calendar>
    <detail-comment :commentInfo="commentInfo"></detail-comment>
  </div>
</template>

<script>
  import {getDetails} from '@/api'
  import DetailBanner from './base/Banner'
  import DetailHeader from './base/Header'
  import DetailCard from './base/Card'
  import DetailRecommend from './base/Recommend'
  import DetailCalendar from './base/Calendar'
  import DetailComment from './base/Comment'
    export default {
      name:'Detail',
      components:{
        DetailBanner,
        DetailHeader,
        DetailCard,
        DetailRecommend,
        DetailCalendar,
        DetailComment
      },
      data(){
        return {
          sightName:'',
          bannerImg:'',
          gallaryImgs:[],
          cardInfo:{},
          recommendInfo:[],
          calendarInfo:[],
          commentInfo:[]
        }
      },
      activated(){
        console.log('拉取第'+this.$route.params.id+'页数据')
        this.getData()
      },
      methods:{
        async getData(){
            let heaven =  await getDetails(this.$route.params.id)
            let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo,commentInfo} = await getDetails(this.$route.params.id)
            this.bannerImg = bannerImg
            this.sightName = sightName
            this.gallaryImgs = gallaryImgs
          this.cardInfo = cardInfo
          this.recommendInfo = recommendInfo
          this.calendarInfo = calendarInfo
          this.commentInfo = commentInfo
            console.log(heaven)
        }
      }
  }
</script>

<style lang='stylus' scoped>
.detail
    height:2000px
</style>
