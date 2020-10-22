import Vue from 'vue'
import Vuex from 'vuex'
// import createLogger  from 'vuex/disk/logger'

import * as getters from './getters'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  //获取
  getters,
  //存储
  state,
  //修改
  mutations
  // plugins: debug? [createLogger()]:[]
})
