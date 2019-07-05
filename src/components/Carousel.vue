<template>
  <el-carousel :initial-index="CurIndex" :interval="2000" arrow="always" :autoplay="true" :height="carouseHeight" @change="changeCarousel">
    <el-carousel-item v-for="(Carousel, idx) in CarouselList" :key="idx">
      <img ref="carouselImg" :src="Carousel.img" style="width: 100%;height:100%">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CarouselCom',
  data () {
    return {
      CurIndex: 0,
      SearchOrder: '',
      carouseHeight: '350px',
      CarouselList: [
        {img: '../../static/image/banner2.jpg'},
        {img: '../../static/image/banner3.jpeg'},
        {img: '../../static/image/banner4.jpeg'}
      ]
    }
  },
  methods: {
    ...mapActions([
      'changeCurMenu'
    ]),
    changeCarousel (idx) {
    },
    selfAdaption (idx) {
      let windowWidth = document.documentElement.clientWidth
      let imgWidth = this.$refs.carouselImg[idx].width
      let imgHeight = this.$refs.carouselImg[idx].height
      let H = windowWidth * imgHeight / imgWidth
      this.carouseHeight = `${H}px`
    },
    ToSearch () {
      if (this.SearchOrder.trim() === '') {
        this.$message({
          message: '请输入需要查询的单号',
          type: 'warning'
        })
      } else {
        this.$router.push({name: 'Order', params: { keyword: this.SearchOrder }})
        this.changeCurMenu(8)
      }
    }
  }
}
</script>

<style scoped>
.searchBox{
  width: 70%;
  height:60px;
  position: absolute;
  top:50%;
  left:50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 12px #6b6b6b !important;
}
.inputBlock{
  height:40px;
  line-height: 40px;
  background:#fff;
}
.searchBt{
  height:40px;
  line-height: 40px;
  background:#f60;
  color: #fff;
}
@media screen and (min-width: 768px) {
  .searchBox{
    width: 60%;
    height:60px;
    position: absolute;
    top:70%;
    left:50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 12px #6b6b6b !important;
  }
  .inputBlock{
    width: 100%;
    height:60px;
    line-height: 60px;
    background:#fff;
  }
  .searchBt{
    height:60px;
    line-height: 60px;
    color: #fff;
    background:#f60;
  }
}
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

</style>
