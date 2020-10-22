<template>
  <div class="song_list">
    <ul>
      <li class="song_li" v-for="item in recommendList" @click="selectSong(item)">
        <div class="song_in_for">
          <p class="title">{{item.songName}}</p>
          <p class="singer" style="font-size:12px;color:#888">{{item.singer}}</p>
        </div>
        <p class="start">
          <img src="../../static/img/start.png">
        </p>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  /*vuex的辅组函数*/
  import {mapMutations} from 'vuex'

  export default {
    props: ["recommendList"],
    methods: {
      selectSong(item) {

        //1.params方式传参---发送---刷新后数据丢失
        /*this.$router.push({
          //组件名
          "name": "Detail",
          //参数
          "params": {item: item}
        })*/

        //2.query方式传参---发送---刷新后数据还在
        this.$router.push({
          //组件路径
          "path": "/detail/:item",
          //参数，字符串形式
          "query": {item: JSON.stringify(item)}
        })

        //1、原生修改state方法
        this.$store.commit("GET_SONG", item)

        //2、使用映射修改state，需引入mapMutations
        //this.getSong(item);
      },
      //使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
      //将已定义的GET_SONG方法映射到getSong，可用后者调用前者
      ...mapMutations({
        getSong: "GET_SONG"
      })
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset"
  .song_li
    display flex
    padding-bottom 15px

    .song_in_for
      -webkit-box-flex 1
      -webkit-flex 1 1 auto
      width 0
      padding-left 20px

    .start
      display -webkit-box
      display -webkit-flex
      display flex
      -webkit-box-align center
      -webkit-align-items center
      align-items center
      padding 0 20px
      width 5%

      img
        width 100%
</style>
