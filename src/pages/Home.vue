<template>
  <div id="Home">
    <CarouselCom/>
    <section>
      <el-row>
        <el-col :sm="24" :md="12" style="padding: 5px;">
          <div class="searchBar">
            <el-row>
              <el-col :span="8">
                <el-select v-model="fhPlace" placeholder="请选择起始地" size="small">
                  <el-option
                    v-for="(item, idx) in fhPlaceList"
                    :key="idx"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="shPlace" placeholder="请选择起始地" size="small">
                  <el-option
                    v-for="(item, idx) in shPlaceList"
                    :key="idx"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8" class="TextAlign_R">
                <!-- <i class="el-icon-search"></i> -->
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="tableColumn">
            <el-row>
              <el-col :span="3">日期</el-col>
              <el-col :span="3">货物</el-col>
              <el-col :span="4">发货地</el-col>
              <el-col :span="4">收货地</el-col>
              <el-col :span="3">车辆</el-col>
              <el-col :span="3">重量</el-col>
              <el-col :span="3">手机</el-col>
            </el-row>
          </div>
          <div class="orderMarquee" id="orderMarqueeL">
            <div class="realList" id="realListL">
              <el-row class="orderItem" v-for="(order, idx) in latestOrder" :key="idx">
                <el-col :span="3">{{idx+1}}</el-col>
                <!-- <el-col :span="3">{{order.dateTime}}</el-col> -->
                <el-col :span="3">{{order.goods_name}}</el-col>
                <el-col :span="4">{{order.sh_address}}</el-col>
                <el-col :span="4">{{order.fh_address}}</el-col>
                <el-col :span="3">{{order.car_type}}</el-col>
                <el-col :span="3">{{order.weight}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
            </div>
            <div id="CopyListL"></div>
          </div>
        </el-col>
        <!-- 司机 -->
        <el-col :sm="24" :md="12"  style="padding: 5px;">
           <div class="searchBar">
            <el-row>
              <el-col :span="8">
                <el-select v-model="fhPlace" placeholder="请选择起始地" size="small">
                  <el-option
                    v-for="(item, idx) in fhPlaceList"
                    :key="idx"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8">
                <el-select v-model="shPlace" placeholder="请选择起始地" size="small">
                  <el-option
                    v-for="(item, idx) in shPlaceList"
                    :key="idx"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="8" class="TextAlign_R">
                <!-- <i class="el-icon-search"></i> -->
                <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="tableColumn">
            <el-row>
              <el-col :span="3">日期</el-col>
              <el-col :span="3">货物</el-col>
              <el-col :span="4">发货地</el-col>
              <el-col :span="4">收货地</el-col>
              <el-col :span="3">车辆</el-col>
              <el-col :span="3">重量</el-col>
              <el-col :span="3">手机</el-col>
            </el-row>
          </div>
          <div class="orderMarquee" id="orderMarqueeR">
            <div class="realList" id="realListR">
              <el-row class="orderItem" v-for="(order, idx) in latestOrder" :key="idx">
                <el-col :span="3">{{idx+1}}</el-col>
                <!-- <el-col :span="3">{{order.dateTime}}</el-col> -->
                <el-col :span="3">{{order.goods_name}}</el-col>
                <el-col :span="4">{{order.sh_address}}</el-col>
                <el-col :span="4">{{order.fh_address}}</el-col>
                <el-col :span="3">{{order.car_type}}</el-col>
                <el-col :span="3">{{order.weight}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
            </div>
            <div id="CopyListR"></div>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- <section class="MarginTB_80">
      <el-row class="Padding_1 MarginTB_5">
        <el-col :sm="24" :md="14">
          <div style="width:90%;margin: 2rem auto;background:#fff;box-shadow:0 4px 80px -12px rgba(0,0,0,.1)">
            <div style="background:#c7f2da;padding:20px 35px;color:#00c759">最新运单信息</div>
            <div style="padding: 20px;">
              <el-table
                :data="latestOrder"
                style="width: 100%">
                <el-table-column
                  prop="dateTime"
                  label="日期"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="goods_name"
                  label="货物名称"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="sh_address"
                  label="收获地址">
                </el-table-column>
                <el-table-column
                  prop="fh_address"
                  label="发货地址">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="10" style="">
          <video-player class="video-player-box" style="width: 80%;margin-left: 10%;"
        ref="videoPlayer"
        :options="playerOptions"/>
        </el-col>
      </el-row>
    </section> -->
    <!-- <section class="MarginTB_80"> -->
    <!-- <section class="MarginTB_80" style="min-height: 400px;position:relative;background:url('../../static/image/ss2.jpg');overflow:hidden"> -->
      <!-- <vue-particles
        color="#fff"
        :particleOpacity="0.7"
        :particlesNumber="200"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles> -->
      <!-- <el-row class="Padding_1 MarginTB_5">
        <el-col :sm="24" :md="14" style="height: 300px;">
          <div style="width:90%;margin-left:10%;background:#fff;box-shadow:0 4px 80px -12px rgba(0,0,0,.1)">
            <div style="background:#c7f2da;padding:20px 35px;color:#00c759">打造优质物流交易网络平台</div>
            <div style="padding: 20px;">
              <el-row class="Padding_1">
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text" color="#8e71c7">
                    <span class="circleSpan">60亿</span>
                    <span class="circleSpan">扶贫资金</span>
                  </el-progress>
                </el-col>
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text">
                    <span class="circleSpan">3000+</span>
                    <span class="circleSpan">物流车辆</span>
                  </el-progress>
                </el-col>
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text" color="#f60">
                    <span class="circleSpan">4500+</span>
                    <span class="circleSpan">处理数据</span>
                  </el-progress>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="10" style="height: 300px;">
          <img style="width: 300px; height:300px;" src="https://www.sendwyre.com/assets/images/onoff_illo.png">
        </el-col>
      </el-row>
      <el-row class="Padding_1 MarginTB_5">
        <el-col :sm="24" :md="10" style="height: 300px;">
          <img style="width: 300px; height:300px;" src="https://www.sendwyre.com/assets/images/liquidity_illo.png">
        </el-col>
        <el-col :sm="24" :md="14" style="height: 300px;">
          <div style="width:90%;margin-right:10%;background:#fff;box-shadow:0 4px 80px -12px rgba(0,0,0,.1)">
            <div style="background:#c7f2da;padding:20px 35px;color:#00c759">全程协同、透明、高效</div>
            <div style="padding: 20px;">
              <el-row class="Padding_1">
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text" color="#fcaf17">
                    <span class="circleSpan">8000+</span>
                    <span class="circleSpan">条线路</span>
                  </el-progress>
                </el-col>
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text" color="#ea66a6">
                    <span class="circleSpan">280+</span>
                    <span class="circleSpan">城市覆盖</span>
                  </el-progress>
                </el-col>
                <el-col :span="8">
                  <el-progress type="circle" :percentage="100" status="text" color="#aa2166">
                    <span class="circleSpan">26+</span>
                    <span class="circleSpan">物流园区</span>
                  </el-progress>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </section> -->
    <!-- video -->
    <!-- <section class="MarginTB_80">
      <h1 class="columnTit">
        <span>快速了解无车承运</span>
      </h1>
      <el-row>
        <el-col :span="24">
          <video-player class="video-player-box" style="width: 80%;margin-left: 10%;"
        ref="videoPlayer"
        :options="playerOptions"/>
        </el-col>
      </el-row>
    </section> -->
    <!-- section_cards -->
    <section class="section_cards MarginTB_80">
      <h1 class="columnTit">我们的优势</h1>
      <el-row>
        <el-col :class="[idx == 0 ? 'cardItem wow rollIn' : (idx == 1 ? 'cardItem wow bounceInDown' : 'cardItem wow lightSpeedIn')]" :sm="24" :md="8" v-for="(StrongItem, idx) in StrongthList" :key="idx">
          <div class="grid-content bg-purple StrongItem">
            <el-card :body-style="{ padding: '0px' }">
              <div class="topImage" :style="{backgroundImage: 'url(' + StrongItem.img + ')', backgroundPosition: 'center'}"></div>
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
    </section>
  </div>
</template>

<script>
import CarouselCom from '@/components/Carousel'
import {send} from '../util/send'
import {secondToFormat} from '../util/utils'
export default {
  name: 'Home',
  data () {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://videos.confidentcustomer.com/assets/ConfidentCustomer.mp4'
        }],
        poster: '../../static/image/Strongth_1.jpg'
      },
      StrongthList: [
        {title: '运力联合', content: '通过线上平台，协同运输和物流，上下服务生态，联合运力池', img: '../../static/image/Strongth_1.jpg'},
        {title: '全程链接', content: '对传统物流流程全程优化，打造流畅高效的协同化运输', img: '../../static/image/Strongth_2.jpg'},
        {title: '可视运输', content: '管控每个运输环节，透明化调度，过程和行驶轨迹', img: '../../static/image/Strongth_3.jpg'}
      ],
      CaseList: [
        {title: '案例', img: '../../static/image/Case_1.jpg'},
        {title: '案例', img: '../../static/image/Case_2.jpg'},
        {title: '案例', img: '../../static/image/Case_3.jpg'},
        {title: '案例', img: '../../static/image/Case_4.jpg'},
        {title: '案例', img: '../../static/image/Case_5.jpg'},
        {title: '案例', img: '../../static/image/Case_6.jpg'}
      ],
      fhPlace: '',
      shPlace: '',
      fhPlaceList: [
        {label: '上海', value: 0},
        {label: '南京', value: 1},
        {label: '北京', value: 2}
      ],
      shPlaceList: [
        {label: '上海', value: 0},
        {label: '南京', value: 1},
        {label: '北京', value: 2}
      ],
      latestOrder: [
        {
          dateTime: '2019-01-12',
          goods_name: '床上用品',
          sh_address: '广州',
          fh_address: '厦门',
          car_type: '大型',
          weight: 1,
          phone: '18234567890'
        },
        {
          dateTime: '2019-01-12',
          goods_name: '电子产品',
          sh_address: '上海',
          fh_address: '云南',
          car_type: '大型',
          weight: 1,
          phone: '18234567890'
        },
        {
          dateTime: '2019-01-12',
          goods_name: '水果',
          sh_address: '山东',
          fh_address: '南京',
          car_type: '大型',
          weight: 1,
          phone: '18234567890'
        },
        {
          dateTime: '2019-01-12',
          goods_name: '电子产品',
          sh_address: '上海',
          fh_address: '云南',
          car_type: '大型',
          weight: 1,
          phone: '18234567890'
        },
        {
          dateTime: '2019-01-12',
          goods_name: '水果',
          sh_address: '山东',
          fh_address: '南京',
          car_type: '大型',
          weight: 1,
          phone: '18234567890'
        }
      ]
    }
  },
  components: {
    CarouselCom
  },
  created () {
    this.latestOrder.map((order) => {
      order.phone = order.phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    })
    // this.getLatestOrder()
    // setInterval(() => {
    //   this.getLatestOrder()
    // }, 3000)
  },
  mounted () {
    var time = 50
    // LEFT
    var OrderMarqueeL = document.getElementById('orderMarqueeL')
    var RealListL = document.getElementById('realListL')
    var CopyListL = document.getElementById('CopyListL')
    OrderMarqueeL.scrollTop = 0
    CopyListL.innerHTML = RealListL.innerHTML
    function myScrollL () {
      if (OrderMarqueeL.scrollTop >= RealListL.scrollHeight) {
        OrderMarqueeL.scrollTop = 0
      } else {
        OrderMarqueeL.scrollTop++
      }
    }
    var intervalL = setInterval(() => {
      myScrollL()
    }, time)
    OrderMarqueeL.onmouseover = function () {
      clearInterval(intervalL)
    }
    OrderMarqueeL.onmouseout = function () {
      intervalL = setInterval(() => {
        myScrollL()
      }, time)
    }
    // RIGHT
    var OrderMarqueeR = document.getElementById('orderMarqueeR')
    var RealListR = document.getElementById('realListR')
    var CopyListR = document.getElementById('CopyListR')
    OrderMarqueeR.scrollTop = 0
    CopyListR.innerHTML = RealListR.innerHTML
    function myScrollR () {
      if (OrderMarqueeR.scrollTop >= RealListR.scrollHeight) {
        OrderMarqueeR.scrollTop = 0
      } else {
        OrderMarqueeR.scrollTop++
      }
    }
    var intervalR = setInterval(() => {
      myScrollR()
    }, time)
    OrderMarqueeR.onmouseover = function () {
      clearInterval(intervalR)
    }
    OrderMarqueeR.onmouseout = function () {
      intervalR = setInterval(() => {
        myScrollR()
      }, time)
    }
  },
  methods: {
    getLatestOrder () {
      send({
        name: '/tokens/orderList',
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.code === 1) {
          res.data.orderList.map(item => {
            item.dateTime = secondToFormat(item.zh_time.time)
          })
          this.latestOrder = res.data.orderList
        } else {
          this.$message({
            message: '验证码获取失败！',
            type: 'error'
          })
        }
      }).catch((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
/*video*/
.video-player-box{
  height: 200px !important;
}
@media screen and (min-width: 768px) {
  .video-player-box{
    height: 400px !important;
  }
}
@media screen and (min-width: 1024px) {
  .video-player-box{
    height: 300px !important;
  }
}
@media screen and (min-width: 1920px) {
  .video-player-box{
    height: 500px !important;
  }
}
.circleSpan{
  display: block;
  margin-bottom: 5px;
}

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
  background-image: url(../../static/image/ZSBox.png);
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
 .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #fff;
}
/**/
.searchBar{
  margin-top: 10px;
  height: 40px;
}
.tableColumn{
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #909399;
  font-weight: bold;
  /*background: rgb(199, 242, 218);*/
}
.orderMarquee{
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #efefef;
}
.orderItem{
  width: 100%;
  height: 40px;
  font-size: 12px;
}
</style>
