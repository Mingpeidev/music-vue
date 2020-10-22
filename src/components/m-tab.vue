<template>
  <div class="tab">
    <nav>
      <li class="item">
        <router-link class="tab-item" to="/recommend">
          <span class="tab-link active-item">推荐音乐</span>
        </router-link>
      </li>

      <li class="item">
        <router-link class="tab-item" to="/hot">
          <span class="tab-link">热歌榜</span>
        </router-link>
      </li>
      <li class="item">
        <router-link class="tab-item" to="/search">
          <span class="tab-link">搜索</span>
        </router-link>
      </li>
    </nav>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  nav
    height 40px
    line-height 40px

    .item
      width 33.3%
      -webkit-box-flex 1
      -webkit-flex 1
      flex 1
      text-align center
      cursor pointer
      list-style none
      float left

      a
        text-decoration none

      .tab-link
        color #333
        font-size 15px
        line-height 40px
        text-decoration none
        display inline-block
        line-height 40px

      .router-link-active .tab-link
        color #d33a31
        border-bottom 2px solid #d33a31
</style>
