<template>
  <div id="Home">
    <CarouselCom/>
    <!-- <section>
      <el-row>
        <el-col :sm="24" :md="12" style="padding: 5px;">
          <div class="searchBar">
            <el-row>
              <el-col :span="12" class="TextAlign_L" style="font-weight: bold;font-size:14px;padding-left:20px;">最新订单信息</el-col>
            </el-row>
          </div>
          <div class="SearchCondition" v-if="SearchConditionL">
            <el-row>
              <el-col :span="4" style="font-size: 16px;">起始地</el-col>
              <el-col :span="6">
                <el-select v-model="fprovinceL" placeholder="请选择省" size="small" @change="changeFprovince($event, 'fcityListL')">
                  <el-option
                    v-for="(item, idx) in fprovinceListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="fcityL" placeholder="请选择市" size="small" @change="changeFcity($event, 'fareaListL')">
                  <el-option
                    v-for="(item, idx) in fcityListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="fareaL" placeholder="请选择区" size="small" @change="changeFarea">
                  <el-option
                    v-for="(item, idx) in fareaListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="font-size: 16px;">目的地</el-col>
              <el-col :span="6">
                <el-select v-model="sprovinceL" placeholder="请选择省" size="small" @change="changeSprovince($event, 'scityListL')">
                  <el-option
                    v-for="(item, idx) in sprovinceListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="scityL" placeholder="请选择市" size="small" @change="changeScity($event, 'sareaListL')">
                  <el-option
                    v-for="(item, idx) in scityListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="sareaL" placeholder="请选择区" size="small" @change="changeSarea">
                  <el-option
                    v-for="(item, idx) in sareaListL"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row  class="TextAlign_C">
              <el-col :span="24">
                <el-button icon="el-icon-close" size="small" @click="cancelSearchCondition('searchedL')">取消搜素</el-button>
                <el-button type="primary" icon="el-icon-search" size="small" @click="searchOrder('left')">确认搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="tableColumn">
            <el-row>
              <el-col :span="5">日期</el-col>
              <el-col :span="4">货物</el-col>
              <el-col :span="5">发货地</el-col>
              <el-col :span="5">收货地</el-col>
              <el-col :span="2">重量</el-col>
              <el-col :span="3">手机</el-col>
            </el-row>
          </div>
          <div v-show="!searchedL" class="orderMarquee" id="orderMarqueeL">
            <div class="realList" id="realListL">
              <el-row class="orderItem" v-for="(order, idx) in latestOrderL" :key="idx">
                <el-col :span="5">{{order.dateTime}}</el-col>
                <el-col :span="4">{{order.name}}</el-col>
                <el-col :span="5">{{order.origin}}</el-col>
                <el-col :span="5">{{order.destination}}</el-col>
                <el-col :span="2">{{order.fweight}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
            </div>
            <div id="CopyListL"></div>
          </div>
          <div v-if="searchedL" class="resultL">
            <div class="realList">
              <el-row class="orderItem" v-for="(order, idx) in resultOrderL" :key="idx">

                <el-col :span="5">{{order.dateTime}}</el-col>
                <el-col :span="4">{{order.name}}</el-col>
                <el-col :span="5">{{order.origin}}</el-col>
                <el-col :span="5">{{order.destination}}</el-col>
                <el-col :span="2">{{order.fweight}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
              <el-row class="MarginT_10">
                <el-col :span="24" class="TextAlign_R">
                  <el-pagination
                    v-if="resultOrderL.length > 0"
                    @size-change="handleSizeChangeL"
                    @current-change="handleCurrentChangeL"
                    :current-page.sync="currentPageL"
                    :page-size="5"
                    layout="prev, pager, next, jumper"
                    :total="sumL">
                  </el-pagination>
                </el-col>
                <el-col :span="24" v-if="resultOrderL.length == 0" class="MarginT_10" style="background:#efefef;font-size:14px;padding:10px;">暂无订单</el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :sm="24" :md="12"  style="padding: 5px;">
          <div class="searchBar">
            <el-row>
              <el-col :span="12" class="TextAlign_L" style="font-weight: bold;font-size:14px;padding-left:20px;">最新路线信息</el-col>
            </el-row>
          </div>
          <div class="SearchCondition" v-if="SearchConditionR">
            <el-row>
              <el-col :span="4" style="font-size: 16px;">起始地</el-col>
              <el-col :span="6">
                <el-select v-model="fprovinceR" placeholder="请选择省" size="small" @change="changeFprovince($event, 'fcityListR')">
                  <el-option
                    v-for="(item, idx) in fprovinceListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="fcityR" placeholder="请选择市" size="small" @change="changeFcity($event, 'fareaListR')">
                  <el-option
                    v-for="(item, idx) in fcityListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="fareaR" placeholder="请选择区" size="small" @change="changeFarea">
                  <el-option
                    v-for="(item, idx) in fareaListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" style="font-size: 16px;">目的地</el-col>
              <el-col :span="6">
                <el-select v-model="sprovinceR" placeholder="请选择省" size="small" @change="changeSprovince($event, 'scityListR')">
                  <el-option
                    v-for="(item, idx) in sprovinceListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="scityR" placeholder="请选择市" size="small" @change="changeScity($event, 'sareaListR')">
                  <el-option
                    v-for="(item, idx) in scityListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="sareaR" placeholder="请选择区" size="small" @change="changeSarea">
                  <el-option
                    v-for="(item, idx) in sareaListR"
                    :key="idx"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row  class="TextAlign_C">
              <el-col :span="24">
                <el-button icon="el-icon-close" size="small" @click="cancelSearchCondition('searchedR')">取消搜素</el-button>
                <el-button type="primary" icon="el-icon-search" size="small" @click="searchOrder('right')">确认搜索</el-button>
              </el-col>
            </el-row>
          </div>
          <div class="tableColumn">
            <el-row>
              <el-col :span="6">日期</el-col>
              <el-col :span="3">车型</el-col>
              <el-col :span="6">发出地</el-col>
              <el-col :span="6">目的地</el-col>
              <el-col :span="3">手机</el-col>
            </el-row>
          </div>
          <div v-show="!searchedR" class="orderMarquee" id="orderMarqueeR">
            <div class="realList" id="realListR">
              <el-row class="orderItem" v-for="(order, idx) in latestOrderR" :key="idx">
                <el-col :span="6">{{order.add_date}}</el-col>
                <el-col :span="3">{{order.car_type ? order.car_type : '/'}}</el-col>
                <el-col :span="6">{{order.origin1}}{{order.origin2}}{{order.origin2}}</el-col>
                <el-col :span="6">{{order.destination1}}{{order.destination2}}{{order.destination3}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
            </div>
            <div id="CopyListR"></div>
          </div>
          <div v-if="searchedR" class="resultR">
            <div class="realList">
              <el-row class="orderItem" v-for="(order, idx) in resultOrderR" :key="idx">
                <el-col :span="6">{{order.add_date}}</el-col>
                <el-col :span="3">{{order.car_type ? order.car_type : '/'}}</el-col>
                <el-col :span="6">{{order.origin1}}{{order.origin2}}{{order.origin2}}</el-col>
                <el-col :span="6">{{order.destination1}}{{order.destination2}}{{order.destination3}}</el-col>
                <el-col :span="3">{{order.phone}}</el-col>
              </el-row>
              <el-row>
                <el-col :span="24" class="TextAlign_R MarginT_10">
                  <el-pagination
                    v-if="resultOrderR.length > 0"
                    @size-change="handleSizeChangeL"
                    @current-change="handleCurrentChangeL"
                    :current-page.sync="currentPageL"
                    :page-size="5"
                    layout="prev, pager, next, jumper"
                    :total="sumR">
                  </el-pagination>
                </el-col>
                <el-col :span="24" v-if="resultOrderR.length == 0" class="MarginT_10"  style="background:#efefef;font-size:14px;padding:10px;">暂无订单</el-col>
              </el-row>
            </div>
          </div>
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
        {title: '案例', img: '../../static/image/Case_8.jpg'},
        {title: '案例', img: '../../static/image/Case_7.jpg'},
        {title: '案例', img: '../../static/image/Case_9.jpg'},
        {title: '案例', img: '../../static/image/Case_10.jpg'},
        {title: '案例', img: '../../static/image/Case_11.jpg'},
        {title: '案例', img: '../../static/image/Case_12.jpg'}
      ],
      SearchConditionL: true,
      SearchConditionR: true,
      // LEFT
      fprovinceListL: [],
      fcityListL: [],
      fareaListL: [],
      sprovinceListL: [],
      scityListL: [],
      sareaListL: [],
      fprovinceL: '',
      fcityL: '',
      fareaL: '',
      sprovinceL: '',
      scityL: '',
      sareaL: '',
      // RIGHT
      fprovinceListR: [],
      fcityListR: [],
      fareaListR: [],
      sprovinceListR: [],
      scityListR: [],
      sareaListR: [],
      fprovinceR: '',
      fcityR: '',
      fareaR: '',
      sprovinceR: '',
      scityR: '',
      sareaR: '',
      // ORDER
      latestOrderL: [],
      latestOrderR: [],
      searchedL: false,
      resultOrderL: [],
      searchedR: false,
      resultOrderR: [],
      latestOrder2: [
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
      ],
      sumL: 0,
      currentPageL: 1,
      sumR: 0,
      currentPageR: 1
    }
  },
  components: {
    CarouselCom
  },
  created () {
    this.getProvince()
    // this.getOrderLastestL()
    // this.getOrderLastestR()
    // setInterval(() => {
    //   this.getLatestOrderLastest()
    // }, 3000)
  },
  // mounted () {
  //   var time = 50
  //   // LEFT
  //   var OrderMarqueeL = document.getElementById('orderMarqueeL')
  //   var RealListL = document.getElementById('realListL')
  //   var CopyListL = document.getElementById('CopyListL')
  //   OrderMarqueeL.scrollTop = 0
  //   setTimeout(() => {
  //     CopyListL.innerHTML = RealListL.innerHTML
  //   }, 1000)
  //   function myScrollL () {
  //     if (OrderMarqueeL.scrollTop >= RealListL.scrollHeight) {
  //       OrderMarqueeL.scrollTop = 0
  //     } else {
  //       OrderMarqueeL.scrollTop++
  //     }
  //   }
  //   var intervalL = setInterval(() => {
  //     myScrollL()
  //   }, time)
  //   OrderMarqueeL.onmouseover = function () {
  //     clearInterval(intervalL)
  //   }
  //   OrderMarqueeL.onmouseout = function () {
  //     intervalL = setInterval(() => {
  //       myScrollL()
  //     }, time)
  //   }
  //   // RIGHT
  //   var OrderMarqueeR = document.getElementById('orderMarqueeR')
  //   var RealListR = document.getElementById('realListR')
  //   var CopyListR = document.getElementById('CopyListR')
  //   OrderMarqueeR.scrollTop = 0
  //   setTimeout(() => {
  //     CopyListR.innerHTML = RealListR.innerHTML
  //   }, 1000)
  //   function myScrollR () {
  //     if (OrderMarqueeR.scrollTop >= RealListR.scrollHeight) {
  //       OrderMarqueeR.scrollTop = 0
  //     } else {
  //       OrderMarqueeR.scrollTop++
  //     }
  //   }
  //   var intervalR = setInterval(() => {
  //     myScrollR()
  //   }, time)
  //   OrderMarqueeR.onmouseover = function () {
  //     clearInterval(intervalR)
  //   }
  //   OrderMarqueeR.onmouseout = function () {
  //     intervalR = setInterval(() => {
  //       myScrollR()
  //     }, time)
  //   }
  // },
  methods: {
    cancelSearchCondition (property) {
      this[property] = false
    },
    handleSizeChangeL () {
      this.getOrderL()
    },
    handleCurrentChangeL () {
      this.getOrderL()
    },
    handleSizeChangeR () {
      this.getOrderR()
    },
    handleCurrentChangeR () {
      this.getOrderR()
    },
    getOrderL () {
      send({
        name: '/tokens/orderList?number=5&page_num=' + this.currentPageL + '&fh=' + this.fareaL + '&sh=' + this.sareaL,
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.code === 1) {
          if (res.data.orderList.length > 0) {
            res.data.orderList.map(item => {
              item.dateTime = secondToFormat(item.zh_time.time)
              item.phone = item.fh_telephone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
            })
          }
          this.resultOrderL = res.data.orderList
          this.sumL = res.data.sum_number
        } else {
          this.$message({
            message: '验证码获取失败！',
            type: 'error'
          })
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    getOrderR () {
      send({
        name: '/tokens/list/1/5?origin=' + this.fareaR + '&destination=' + this.sareaR,
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.respCode === '0') {
          if (res.data.data.length > 0) {
            res.data.data.map(item => {
              // item.dateTime = secondToFormat(item.zh_time.time)
              item.phone = item.fh_telephone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
            })
          }
          this.resultOrderR = res.data.data
          this.sumR = res.data.size
        } else {
          this.$message({
            message: '验证码获取失败！',
            type: 'error'
          })
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    getOrderLastestL () {
      send({
        name: '/tokens/orderList?number=15&page_num=1',
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.code === 1) {
          res.data.orderList.map(item => {
            item.dateTime = secondToFormat(item.zh_time.time)
            item.phone = item.fh_telephone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
          })
          this.latestOrderL = res.data.orderList
        } else {
          this.$message({
            message: '验证码获取失败！',
            type: 'error'
          })
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    getOrderLastestR () {
      send({
        name: '/tokens/list/1/15',
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.respCode === '0') {
          res.data.data.map(item => {
            // item.dateTime = secondToFormat(item.zh_time.time)
            item.phone = item.fmobile ? item.fmobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2') : '/'
            console.log(item.phone)
          })
          this.latestOrderR = res.data.data
          console.log(this.latestOrderR)
          console.log(this.latestOrderR[1].destination1)
        } else {
          this.$message({
            message: '验证码获取失败！',
            type: 'error'
          })
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    changeFprovince (id, property) {
      console.log(id)
      this.getCity(id, property)
      if (property === 'fcityListR') {
        this.fcityR = ''
        this.fareaR = ''
        this.fareaListR = []
      } else {
        this.fcityL = ''
        this.fareaL = ''
        this.fareaListL = []
      }
    },
    changeFcity (id, property) {
      console.log(id)
      this.getArea(id, property)
      if (property === 'fareaListR') {
        this.fareaR = ''
      } else {
        this.fareaL = ''
      }
    },
    changeFarea (id) {
      console.log(id)
    },
    changeSprovince (id, property) {
      this.getCity(id, property)
      if (property === 'scityListR') {
        this.scityR = ''
        this.sareaR = ''
        this.sareaListR = []
      } else {
        this.scityL = ''
        this.sareaL = ''
        this.sareaListL = []
      }
    },
    changeScity (id, property) {
      this.getArea(id, property)
      if (property === 'sareaListR') {
        this.sareaR = ''
      } else {
        this.sareaL = ''
      }
    },
    changeSarea (id) {
      console.log(id)
    },
    getProvince () {
      send({
        name: '/tokens/regionSelect?pid=1',
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.respCode === '0') {
          this.fprovinceListL = res.data.data
          this.sprovinceListL = res.data.data
          this.fprovinceListR = res.data.data
          this.sprovinceListR = res.data.data
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    getCity (id, property) {
      send({
        name: '/tokens/regionSelect?pid=' + id,
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.respCode === '0') {
          this[property] = res.data.data
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    getArea (id, property) {
      send({
        name: '/tokens/regionSelect?pid=' + id,
        method: 'GET',
        data: {
        }
      }).then(res => {
        if (res.data.respCode === '0') {
          this[property] = res.data.data
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    searchOrder (kind) {
      switch (kind) {
        case 'left':
          if (this.fareaL.trim() === '' || this.sareaL.trim() === '') {
            this.$message({
              message: '请将地址选择完整！',
              type: 'warning'
            })
            return false
          } else {
            this.searchedL = true
            this.getOrderL()
          }
          break
        case 'right':
          if (this.fareaR.trim() === '' || this.sareaR.trim() === '') {
            this.$message({
              message: '请将地址选择完整！',
              type: 'warning'
            })
            return false
          } else {
            this.searchedR = true
            this.getOrderR()
          }
          break
      }
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
  width: 100% !important;
  height: 100% !important;
  display: block;
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
  line-height: 40px !important;
  background: #e0b32b;
}
.SearchCondition{
  height: 130px;
  line-height: 40px;
  margin-top: 10px;
  overflow: hidden;
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
  background: #fafafa;
}
.orderItem{
  width: 100%;
  height: 40px;
  overflow: hidden;
  display: block;
  line-height: 40px;
  font-size: 12px;
  border-bottom: #ccc dashed 1px;
}
</style>
