<template>
  <div>
    <el-row>
      <el-col :xs="12" :sm="3">
        <div class="grid-content bg-purple" style="overflow: hidden;text-align:left;">
          <img class="logoBox" src="../../static/image/Logo.png">
        </div>
      </el-col>
      <el-col class="NavRightBoxP" :xs="12" :sm="21">
        <div class="grid-content bg-purple">
          <el-menu :default-active="menuIndex" class="el-menu-demo" mode="horizontal" @select="changeMenu">
            <el-menu-item index="8" style="font-size:20px">订单查询</el-menu-item>
            <el-menu-item index="7" style="font-size:20px">注册</el-menu-item>
            <el-menu-item index="6" style="font-size:20px">登陆</el-menu-item>
            <el-menu-item index="5" style="font-size:20px">关于我们</el-menu-item>
            <!-- <el-menu-item index="4" style="font-size:20px">合作伙伴</el-menu-item> -->
            <el-menu-item index="3" style="font-size:20px">资讯</el-menu-item>
            <el-submenu index="2">
              <template slot="title">产品与服务</template>
              <el-menu-item index="2-1">TMS协同运输管理系统</el-menu-item>
              <el-menu-item index="2-2">WMS管理系统</el-menu-item>
            </el-submenu>
            <el-menu-item index="1" style="font-size:20px">首页</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col class="NavRightBoxM" :xs="12" :sm="20">
        <img class="barIcon" :src="ifShowMenu ? '../../static/image/icons/close.png' : '../../static/image/icons/bars.png'" @click="toggleMenu">
      </el-col>
    </el-row>
    <!-- Mobile -->
    <div class="MobileMenu"  style="margin-top: -10px;padding-top:0;width: 100%;height:100%;background:#fff;">
      <el-collapse-transition>
        <div v-show="ifShowMenu">
          <el-row v-if="!ifShowSecond">
            <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('1')">首页</div>
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM" @click="ToSecondMenu">产品与服务</div>
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('3')">资讯</div>
            </el-col>
            <!-- <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('4')">合作伙伴</div>
            </el-col> -->
            <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('5')">关于我们</div>
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('6')">登陆</div>
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM" @click="clickMenu('7')">注册</div>
            </el-col>
          </el-row>
          <el-row v-if="ifShowSecond">
            <el-col :span="24" class="TextAlign_L">
              <img class="barIcon" src="../../static/image/icons/back.png" @click="backMainMenu">
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM">TMS协同运输管理系统</div>
            </el-col>
            <el-col :span="24">
              <div class="MenuItemM">WMS管理系统</div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      ifShowMenu: false,
      ifShowSecond: false
    }
  },
  computed: {
    ...mapState({
      menuIndex: state => state.menuIndex
    })
  },
  methods: {
    ...mapActions([
      'changeCurMenu'
    ]),
    changeMenu (key, keyPath) {
      switch (keyPath[0]) {
        case '1':
          this.$router.push({name: 'Home'})
          this.changeCurMenu(key)
          break
        case '2':
          this.$router.push({name: 'ProductDetail'})
          this.changeCurMenu(key)
          break
        case '3':
          this.$router.push({name: 'NewsList'})
          this.changeCurMenu(key)
          break
        case '4':
          this.$router.push({name: 'Partner'})
          this.changeCurMenu(key)
          break
        case '5':
          this.$router.push({name: 'AboutUs'})
          this.changeCurMenu(key)
          break
        case '6':
          window.location.href = 'http://116.62.171.244:8082/order/#/Login'
          // window.open('http://www.jb51.net')
          break
        case '7':
          window.location.href = 'http://116.62.171.244:8082/order/#/Sign'
          // window.open('http://www.jb51.net')
          break
        case '8':
          this.$router.push({name: 'Order'})
          this.changeCurMenu(key)
          break
      }
    },
    clickMenu (idx) {
      this.toggleMenu()
      this.changeCurMenu(idx)
      switch (idx) {
        case '1':
          this.$router.push({name: 'Home'})
          break
        case '2':
          this.$router.push({name: 'ProductDetail'})
          break
        case '3':
          this.$router.push({name: 'NewsList'})
          break
        case '4':
          this.$router.push({name: 'Partner'})
          break
        case '5':
          this.$router.push({name: 'AboutUs'})
          break
      }
    },
    toggleMenu () {
      if (this.ifShowMenu) {
        this.ifShowMenu = false
        this.ifShowSecond = false
      } else {
        this.ifShowMenu = true
      }
    },
    ToSecondMenu () {
      this.ifShowSecond = true
    },
    backMainMenu () {
      this.ifShowSecond = false
    }
  }
}
</script>

<style scoped>
.logoBox{
  width: 100px;
  height: 40px;
  margin-top: 10px;
}
.NavRightBoxP{
  display: none;
}
.NavRightBoxM{
  display: inline-block;
  text-align: right;
  cursor: pointer;
}
.MobileMenu{
  width: 100%;
  display: block;
}
.MenuItemM{
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #efefef;
  color: #e0b32b;
}
@media screen and (min-width: 992px) {
  .NavRightBoxP{
    display: inline-block;
  }
  .NavRightBoxM, .MobileMenu{
    display: none;
  }
}
.barIcon{
  width: 50px;
  height: 50px;
  margin-top: 5px;
}
.el-submenu__title{
  font-size: 20px !important;
}
.el-menu.el-menu--horizontal{
  border-bottom: solid 0px #e6e6e6 !important;
}
.el-menu--horizontal>.el-submenu{
  float: right !important;
}
.el-menu--horizontal>.el-menu-item{
  float: right !important;
}
</style>
