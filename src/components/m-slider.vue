<template>
  <div class="slider" ref="slider">
    <div class="sliderGroup" ref="sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        //循环
        intervalId: 0,
        //图片宽度
        imgWidth: 0
      }
    },
    mounted() {
      this.setSize();
      this.slide();
    },
    methods: {
      //设置轮播宽度为图片个数加1
      setSize() {
        let imgWidth = this.$refs.slider.offsetWidth;
        //data赋值
        this.imgWidth = imgWidth;
        console.log(imgWidth);
        this.$refs.slider.style.overflow = "hidden";
        this.$refs.sliderGroup.style.width = 5 * imgWidth + "px";
        for (let i = 0; i < document.getElementsByClassName("song_div").length; i++) {
          document.getElementsByClassName("song_div")[i].style.width = imgWidth + "px";
          document.getElementsByClassName("song_div")[i].style.float = "left";
        }

        //复制第一张图片的节点到末尾
        let firstNode = document.getElementsByClassName("song_div")[0].cloneNode(true);
        this.$refs.sliderGroup.appendChild(firstNode);
      },
      //轮播动画实现
      slide() {
        let index = 0;
        let intervalId = setInterval(() => {
          clearInterval(intervalId);
          index = index + 1;
          this.$refs.sliderGroup.style.transform = "translate(" + -this.imgWidth * index + "px,0px)";
          this.$refs.sliderGroup.style.transition = "all 1500ms";
        }, 3000)
        this.intervalId = intervalId;

        //监听过渡动画结束
        this.$refs.sliderGroup.addEventListener("webkitTransitionEnd", () => {

          if (index == 4) {
            index = 0;
            this.$refs.sliderGroup.style.transform = "translate(0px,0px)";
            this.$refs.sliderGroup.style.transition = "0ms";
          }
          intervalId = setInterval(() => {
            clearInterval(intervalId);
            index = index + 1;
            this.$refs.sliderGroup.style.transform = "translate(" + -this.imgWidth * index + "px,0px)";
            this.$refs.sliderGroup.style.transition = "all 1500ms";
          }, 3000)
          this.intervalId = intervalId;
        })

      }
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .songimg
    width 100%
</style>
