<template>
  <div id="hot">
    <div class="banner">
      热门歌曲
    </div>
    <m-songlist :recommend-list="hotList"></m-songlist>
  </div>
</template>
<script type="text/ecmascript-6">
  import MSonglist from './m-songlist'

  export default {
    data() {
      return {hotList: []}
    },
    methods: {
      getHotList() {
        var selfVue = this;
        this.$axios.get('static/data/recommendList.json').then(function (response) {
          selfVue.hotList = response.data;
          console.log(response.data);
        })
      }
    },
    mounted() {
      this.getHotList();
    },
    components: {
      MSonglist
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset"
  .banner
    padding-top 70px;
    background url('/static/img/hot_banner.jpg')
    font-size 20px
    color white
    padding-left 50px
    padding-bottom 70px
    margin-bottom 20px
</style>
