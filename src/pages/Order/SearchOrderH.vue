<template>
  <div class="SearchOrderH">
    <section>
      <el-row>
        <el-col :sm="24" :md="24" style="padding: 5px;">
          <div class="searchBar">
            <el-row>
              <el-col :span="12" class="TextAlign_L" style="font-weight: bold;font-size:14px;padding-left:20px;">最新货主订单信息</el-col>
              <!-- <el-col :span="12" class="TextAlign_R" style="padding:0 20px;"><i class="el-icon-search CursorPointer" @click="showSearchConditionL"></i></el-col> -->
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
              <!-- <el-col :span="3">车辆</el-col> -->
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
      </el-row>
    </section>
  </div>
</template>

<script>
import {send} from '../../util/send'
import {secondToFormat} from '../../util/utils'
export default {
  name: 'SearchOrderH',
  data () {
    return {
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
      // ORDER
      latestOrderL: [],
      latestOrderR: [],
      searchedL: false,
      resultOrderL: [],
      searchedR: false,
      resultOrderR: [],
      sumL: 0,
      currentPageL: 1,
      sumR: 0,
      currentPageR: 1
    }
  },
  created () {
    this.getOrderLastestL()
  },
  mounted () {
    var time = 50
    // LEFT
    var OrderMarqueeL = document.getElementById('orderMarqueeL')
    var RealListL = document.getElementById('realListL')
    var CopyListL = document.getElementById('CopyListL')
    OrderMarqueeL.scrollTop = 0
    setTimeout(() => {
      CopyListL.innerHTML = RealListL.innerHTML
    }, 1000)
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
  },
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
.SearchOrderH{
  padding: 2rem 2rem 0px 2rem;
  background: #fff;
  margin-top: 30px;
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
