<template>
  <div class="search">
    <input
      type="text"
      class='header-input'
      placeholder='请输入城市名和拼音'
      v-model="keyword">
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class='search-item border-bottom'
              v-for="city in filterCities"
              :key="city.id"
              @click="handleClick(city.name)">{{city.name}}</li>
          <li v-if="isShow" class='search-item border-bottom'>未匹配到数据</li>
        </ul>
      </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'CitySearch',
    props:['cities'],
    data(){
      return {
        keyword:''
      }
    },
    computed:{
      filterCities(){
        const result = []
        for(let key in this.cities){
          this.cities[key].forEach((city,index)=>{
            if(city.name.includes(this.keyword)||city.spell.includes(this.keyword)){
              result.push(city)
            }
          })
        }
        return result
      },
      isShow(){
        return !this.filterCities.length
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      handleClick(city){
        this.$store.commit('changeCity',city)

        this.$router.push('/')
      }
    },
  }
</script>

<style lang='stylus' scoped>
.border-bottom::before
  border-color:#aaa
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#ccc
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>
