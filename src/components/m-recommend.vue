<template>
  <div class="recommend" v-if="songList.length">
    <h2 class="recommend_list">推荐歌单</h2>
    <slider>
      <div v-for="item in songList" class="song_div">
        <a :href="item.linkUrl">
          <img class="needsclick songimg" :src="item.songImgSrc">
        </a>
      </div>
    </slider>

    <h2 class="recommend_list">推荐歌单</h2>
    <m-songlist :recommend-list="recommendList"></m-songlist>

    <div class="loading_container">
      <m-loading v-show="!recommendList.length"></m-loading>
    </div>
  </div>
</template>
<script type="text/javascript">
  import MSlider from './m-slider'
  import MSonglist from './m-songlist'
  import MLoading from './m-loading'

  export default {
    data() {
      return {
        songList: [],
        recommendList: []
      }
    },
    methods: {
      getSongList() {
        let selfVue = this;
        this.$axios.get('static/data/songList.json').then(function (response) {
          selfVue.songList = response.data;
          console.log(response.data)
        })
      },
      getRecommendList() {
        let selfVue = this;
        this.$axios.get('static/data/recommendList.json').then(function (response) {
          selfVue.recommendList = response.data;
          console.log(response.data);
        })
      }
    },
    mounted() {
      this.getSongList();
      setTimeout(() => {
        this.getRecommendList();
      }, 500)
    },
    components: {
      /*使用并重命名组件*/
      "slider": MSlider,
      "m-songlist": MSonglist,
      MLoading
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset.styl"
  .recommend
    background #fcfcfd
    height 300px
    min-height 100%

    ul
      height 300px

    .clearleft
      clear left

    li
      width 32%
      float left
      padding-left 1%
      position relative
      text-align center

      img
        width 100%
        height 100%
        border-radius 10px

  .songName
    position absolute
    top 0px
    text-align center
    color white
    font-family "微软雅黑"
    font-size 12px
    margin 0 auto

  .recommend_list
    padding-left 9px
    height 20px
    line-height 20px
    font-size 15px
    margin-top 10px
    text-align center
    margin-bottom 10px
    font-weight 400
    border-left 2px solid #d33a31

  .loading_container
    position relative
    top 50px
</style>
