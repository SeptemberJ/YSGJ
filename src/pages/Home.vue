<template>
  <div id="Home">
    <CarouselCom/>
    <!-- section_cards -->
    <section class="section_cards MarginTB_80">
      <h1 class="columnTit">我们的优势</h1>
      <el-row>
        <el-col class="cardItem" :sm="24" :md="8" v-for="(StrongItem, idx) in StrongthList" :key="idx">
          <div class="grid-content bg-purple StrongItem">
            <el-card :body-style="{ padding: '0px' }">
              <div class="topImage" :style="{backgroundImage: 'url(' + StrongItem.img + ')'}"></div>
              <div style="padding: 14px;">
                <h2>{{StrongItem.title}}</h2>
                <p>{{StrongItem.content}}</p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- ZSBox -->
    <section class="ZSBox">
      <div class="container">
        <div class="">
          <el-row>
            <el-col :sm="24" :md="6"><div class="grid-content bg-purple"><h2>600+ 货主企业</h2></div></el-col>
            <el-col :sm="24" :md="6"><div class="grid-content bg-purple"><h2>1300+ 承运商</h2></div></el-col>
            <el-col :sm="24" :md="6"><div class="grid-content bg-purple"><h2>120000+ 货车司机</h2></div></el-col>
            <el-col :sm="24" :md="6"><div class="grid-content bg-purple"><h2>3000+ 日均运单</h2></div></el-col>
          </el-row>
          <p>全球出类拔萃的整车运力调度平台和智慧物流信息平台</p>
        </div>
      </div>
    </section>
     <!-- case -->
    <section class="section_cases MarginTB_80">
      <h1 class="columnTit">行业案列</h1>
      <el-row>
        <el-col :sm="24" :md="8" v-for="(CaseItem, idx) in CaseList" :key="idx">
          <div class="grid-content bg-purple caseWrap">
            <img class="hoverImg" :src="CaseItem.img">
            <div class="hoverMask">
              <div class="discrimination">
                <h2 class="project-title">{{CaseItem.title}}</h2>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <!-- <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8" v-for="(CaseItem, idx) in CaseList1" :key="idx">
          <div class="grid-content bg-purple caseWrap">
            <img class="hoverImg" :src="CaseItem.img">
            <div class="hoverMask">
              <div class="discrimination">
                <h2 class="project-title">{{CaseItem.title}}</h2>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8" v-for="(CaseItem, idx) in CaseList2" :key="idx">
          <div class="grid-content bg-purple caseWrap">
            <img class="hoverImg" :src="CaseItem.img">
            <div class="hoverMask">
              <div class="discrimination">
                <h2 class="project-title">{{CaseItem.title}}</h2>
              </div>
            </div>
          </div>
        </el-col>
      </el-row> -->
    </section>
  </div>
</template>

<script>
import CarouselCom from '@/components/Carousel'
export default {
  name: 'Home',
  data () {
    return {
      StrongthList: [
        {title: '运力联合', content: '通过线上平台，协同运输和物流，上下服务生态，联合运力池', img: 'http://pic.qiantucdn.com/58pic/27/67/62/74t58PICC93_1024.jpg!/fw/1024/watermark/url/L2ltYWdlcy93YXRlcm1hcmsveGlhb3R1LnBuZw==/align/center/crop/0x1024a0a0'},
        {title: '全程链接', content: '对传统物流流程全程优化，打造流畅高效的协同化运输', img: 'http://pic.qiantucdn.com/58pic/26/08/66/58bdc4d304b16_1024.jpg'},
        {title: '可视运输', content: '管控每个运输环节，透明化调度，过程和行驶轨迹', img: 'http://scimg.dameigong.cn/b/20171027/20171027222017_35641.jpg'}
      ],
      CaseList: [
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f388959c0ec7c5ccd3d2a47d49c388035065ff31/10.jpg'},
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0a8f67ab4c71789f727798eec8df862dbd1613f6/9-5.jpg'},
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c4126a32bf4170938d73705ab9a31b3e5f0a2e9a/2.jpg'},
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--49334eb997cbf4da92134ac5647627718198e6ad/15-2.jpg'},
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--006ff5a6aeb50056673b566a42b3830c5917ddfd/16.jpg'},
        {title: '案例', img: 'http://www.meweidea.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c2e3f7b6346bde464f4b2b1799f0c705ec6f221f/4.jpg'}
      ]
    }
  },
  components: {
    CarouselCom
  }
}
</script>

<style scoped>
/*section_cards*/
.section_cards {
  width: 100%;
  /*height: 500px;*/
  display: block;
  margin: 0 auto;
}
.cardItem{
  margin-bottom: 2rem;
}
.StrongItem{
  width: 80%;
  margin: 0 auto;
}
.section_cards .time {
  font-size: 13px;
  color: #999;
}
.section_cards .bottom {
  margin-top: 13px;
  line-height: 12px;
}
.section_cards .button {
  padding: 0;
  float: right;
}
.section_cards .topImage {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top/center;
  display: block;
}
.section_cards .clearfix:before,
.section_cards .clearfix:after {
  display: table;
  content: "";
}
.section_cards .clearfix:after {
  clear: both
}
/*ZSBox*/
.ZSBox{
  width: 100%;
  display: block;
  background-image: url(//d9hhrg4mnvzow.cloudfront.net/www.crazycall.com/call-center/cabed449-obrazek7.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 72px 0;
}
.ZSBox h2{
  color: #fff;
  font-size: 32px;
  line-height: 46px;
  font-weight: 400px;
}
.ZSBox p{
  color: #fff;
  font-size: 32px;
  line-height: 46px;
}
/*section_cases*/
.section_cases{
  width: 100%;
  display: block;
  margin: 0 auto;
}
.caseWrap{
  overflow: hidden;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.section_cases .hoverImg{
  width: 100%;
  height: 100%
}
.caseWrap:hover .hoverImg{
  transform: scale(1.5);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.caseWrap:hover .hoverMask{
  opacity: .8;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.hoverMask{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  /*filter: alpha(opacity=1);*/
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.discrimination{
  width: 80%;
  height: 80%;
  background: #333;
  margin: 7% auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hoverMask .discrimination .project-title{
  color: #fff;
  margin: 0;
  font-weight: 300;
}
/*.hoverMask .discrimination p {
  color: #fff;
  margin: 0;
  padding: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}*/
/*.hoverMask:after{
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: transparent;
  border: 0px solid rgba(255,255,255,0.2);
  -webkit-transition: border 0.3s ease-out;
  transition: border 0.3s ease-out;
}*/
</style>
