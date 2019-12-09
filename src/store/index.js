import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    letter:'',
    city:localStorage.getItem('city1')||'长沙'
  },
  mutations:{
    changeLetter(state,letter){
      state.letter = letter
    },
    changeCity(state,city){
      state.city = city
      localStorage.setItem('city1',city)
    }
  }
})
