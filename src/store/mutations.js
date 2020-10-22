import * as types from './mutation-types'

const mutations = {
  //函数
  [types.GET_SONG](state, song) {
    state.song = song
  }
}

export default mutations
