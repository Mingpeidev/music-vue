<template>
  <transition name="slider">
    <div class="detail">
      <div class="songimg">
        <img :src="songDetail.songImgSrc">
      </div>
      <div class="songtitle">
        {{songDetail.songName}}
      </div>
      <div class="song_audio">
        <audio autoplay="autoplay">
          <source src="static/song/song.ogg" type="audio/ogg"/>
          <source src="static/song/song.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    </div>
  </transition>
</template>
<script type="text/ecmascript-6">
  //辅助函数
  //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {songDetail: {}}
    },
    mounted() {
      //1.params方式传参---接收---刷新后数据丢失
      //this.songDetail = this.$route.params.item;

      //2.query方式传参---接收---刷新后数据还在
      this.songDetail = JSON.parse(this.$route.query.item);
    },
    computed: {
      //使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'song'
      ])
    },
    created() {
      //1.store原生get
      console.log(this.$store.getters.song.songName);
      //2.使用辅助函数获取
      console.log(this.song.songName);
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  // 四个状态，两个过程
  .slider-enter-active, .slider-leave-active
    transition all 0.3s

  .slider-enter, .slider-leave-to
    transform translateX(100%)

  .detail
    position fixed
    z-index 100
    top 0
    left 0
    right 0
    bottom 0
    background white

    .songtitle
      text-align center
      font-size 14px

    .songimg
      text-align center

      img
        width 50%;
        border-radius 50%

        animation: circling 20s infinite linear;

      @keyframes circling {
        from {
          -webkit-transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
        }
      }
</style>
