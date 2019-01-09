<template>
  <el-carousel :initial-index="CurIndex" :interval="2000" arrow="always" :autoplay="true" :height="carouseHeight" @change="changeCarousel">
    <el-carousel-item v-for="(Carousel, idx) in CarouselList" :key="idx">
      <img ref="carouselImg" :src="Carousel.img" style="width: 100%;">
    </el-carousel-item>
    <el-row class="searchBox">
      <el-col :span="20">
        <div class="inputBlock">
          <el-input v-model="SearchOrder" clearable placeholder="请输入您要查询的运单号" style="border: 0px solid #fff !important;"></el-input>
        </div>
      </el-col>
      <el-col class="searchBt CursorPointer" :span="4"><div @click="ToSearch">查询</div></el-col>
    </el-row>
  </el-carousel>
 <!--  <el-carousel :interval="4000" type="card" height="400px" style="margin-top:40px;">
    <el-carousel-item v-for="(Carousel, idx) in CarouselList" :key="idx">
      <img ref="carouselImg" :src="Carousel.img" style="width: 100%;">
    </el-carousel-item>
  </el-carousel> -->
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CarouselCom',
  data () {
    return {
      CurIndex: 0,
      SearchOrder: '',
      carouseHeight: '584px',
      CarouselList: [
        {'img': '../../static/image/Carousel_1.jpg'}, // http://www.kxtx.cn/images/banner_1-d4b2b813cc.png
        {'img': '../../static/image/Carousel_2.jpg'},
        {'img': '../../static/image/Carousel_3.jpg'}
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.selfAdaption(0)
    }, 500)
  },
  created () {
    window.onresize = () => {
      this.selfAdaption(0)
    }
  },
  methods: {
    ...mapActions([
      'changeCurMenu'
    ]),
    changeCarousel (idx) {
      this.selfAdaption(idx)
    },
    selfAdaption (idx) {
      let windowWidth = document.documentElement.clientWidth
      let imgWidth = this.$refs.carouselImg[idx].width
      let imgHeight = this.$refs.carouselImg[idx].height
      let H = windowWidth * imgHeight / imgWidth
      // alert(this.CurIndex)
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

/*.el-carousel__item--card{
  width: 60% !important;
}*/
</style>
