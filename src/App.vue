<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from './components/m-header'
  import MTab from './components/m-tab'

  export default {
    name: 'App',
    components: {
      MHeader,
      MTab
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import './common/css/reset'
  body
    margin 0
    padding 0
</style>
