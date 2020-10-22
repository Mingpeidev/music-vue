<template>
  <div class="search" ref="search">
    <div class="input_cover">
      <input type="search" v-model="currentSearch" name="search" class="input" placeholder="" value=""
             autocomplete="off">
    </div>
    <div class="hot_search" v-if="hotShow">
      <ul>
        <li class="item" v-for="item in hotSearchList" @click="getResult(item)">
          <a href="##">{{item.hotName}}</a>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <m-songlist :recommend-list="resultList" v-if="resultShow"></m-songlist>
    </transition>
  </div>
</template>
<script type="text/javascript">
  import MSonglist from './m-songlist'

  export default {
    data() {
      return {
        currentSearch: "",
        hotSearchList: [],
        resultList: [],
        hotShow: true,
        resultShow: false
      }
    },
    methods: {
      getHotList() {
        this.$axios.get('static/data/hotSearch.json').then((response) => {
          this.hotSearchList = response.data;
        })
      },
      getResult(item) {
        if (item.hotName) {
          this.currentSearch = item.hotName;
        } else {
          this.currentSearch = item;
        }
        this.$axios.get('static/data/recommendList.json').then((response) => {
          this.resultList = response.data;
        })
      }
    },
    mounted() {
      this.getHotList();
    },
    components: {
      MSonglist
    },
    watch: {
      //watch监听currentSearch数据变化 nVal为新数据 oVal为老数据
      //输入框数据变化时，隐藏和显示
      currentSearch: function (nVal, oVal) {
        if (nVal == "") {
          this.resultShow = false;
          this.hotShow = true;
        } else {
          this.getResult(nVal);
          this.resultShow = true;
          this.hotShow = false;
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../common/css/reset"
  .fade-enter-active, .fade-leave-active
    transition all 0.3s

  .fade-enter
    transform translateX(100%)

  .fade-leave-to
    transform translateX(100%)

  .search
    padding-left 20px
    padding-right 20px
    padding-top 10px

    .input_cover
      position: relative;
      width: 100%;
      height: 30px;
      padding: 0 30px;
      box-sizing: border-box;
      background: #ebecec;
      border-radius: 30px;
      margin-bottom 20px

      .input
        width: 100%;
        height: 30px;
        line-height: 18px;
        background: transparent;
        font-size: 16px;
        color: #333;
        -webkit-appearance: none;
        border-radius: 0;
        border: 0;

      .input:focus
        outline none

    .hot_search
      .item
        display: inline-block;
        height: 25px;
        margin-right: 8px;
        margin-bottom: 8px;
        padding: 0 14px;
        font-size: 12px;
        line-height: 25px;
        color: #333;
        border-radius: 32px;
        border: 1px solid #d3d4da

        a
          font-size 14px

    .resultlist
      .song
        background url('/static/img/search_sprite.png') left center no-repeat
        background-size 15px 15px
        padding-left 20%
        padding-top 8px
        padding-bottom 8px
        font-size 16px
        border-bottom 1px solid #eee
        border-top 1px solid #eee

</style>
