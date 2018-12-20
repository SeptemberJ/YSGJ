<template>
  <el-carousel :interval="5000" arrow="always" :autoplay="false" :height="carouseHeight" @change="changeCarousel">
    <el-carousel-item v-for="(Carousel, idx) in CarouselList" :key="idx">
      <img ref="carouselImg" :src="Carousel.img" style="width: 100%;">
    </el-carousel-item>
  </el-carousel>
 <!--  <el-carousel :interval="4000" type="card" height="400px" style="margin-top:40px;">
    <el-carousel-item v-for="(Carousel, idx) in CarouselList" :key="idx">
      <img ref="carouselImg" :src="Carousel.img" style="width: 100%;">
    </el-carousel-item>
  </el-carousel> -->
</template>

<script>
export default {
  name: 'CarouselCom',
  data () {
    return {
      CurIndex: 0,
      carouseHeight: '584px',
      CarouselList: [
        {'img': 'http://www.ymm56.com/data/upload/admin/20180121/5a6432401d15b.jpg'},
        {'img': 'http://www.ymm56.com/data/upload/admin/20171228/5a44947bcb9bb.jpg'},
        {'img': 'http://www.ymm56.com/data/upload/admin/20180121/5a64322f8de3d.jpg'}
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.selfAdaption()
    }, 500)
  },
  created () {
    window.onresize = () => {
      this.selfAdaption()
    }
  },
  methods: {
    changeCarousel () {
      this.selfAdaption()
    },
    selfAdaption () {
      let windowWidth = document.documentElement.clientWidth
      let imgWidth = this.$refs.carouselImg['0'].width
      let imgHeight = this.$refs.carouselImg['0'].height
      let H = windowWidth * imgHeight / imgWidth
      this.carouseHeight = `${H}px`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.el-carousel__item[data-v-e3565ce0]{
  background: transparent !important;
}
/*.el-carousel__item--card{
  width: 60% !important;
}*/
</style>
