<template>
    <div class="weekend">
      <h3 class="title">周末去哪儿</h3>
      <ul>
        <router-link :to="{name:'weeklink',params:{id:item.id}}"
                     class="item border-bottom" v-for="(item,index) in weekendList"
                     :key="index">
          <img class='item-img' :src="item.imgUrl" alt="">
          <div class="item-info">
            <h4>{{item.title}}</h4>
            <p class='item-price'>{{item.desc}}</p>
          </div>
        </router-link>
      </ul>
    </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:['weekendList'],
  }
</script>

<style lang='stylus' scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #ddd
    text-indent: .2rem
    font-size: .32rem
  .item
    .item-img
      width:100%
    .item-info
      flex:1
      padding: .1rem
      margin-left:.1rem
      min-width: 0rem;
      h4
        line-height:.6rem
        font-size:.3rem
      .item-price
        font-size:.24rem
        line-height:.4rem
      .item-fav-info
        line-height:.6rem
        .item-fav-text
          position:relative
          display:inline-block
          float:left
          color:#ccc
          margin-right:.5rem
          .item-fav-star
            overflow:hidden
            position:absolute
            left:0
            top:0
            color:#ffb436
</style>
