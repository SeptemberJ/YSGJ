<template>
  <div class="FooterBox">
    <el-row>
      <el-col :xs="24" :sm="8" :md="3" :lg="3" :xl="2" :offset="0">
        <div class="grid-content bg-purple TextAlign_L">
          <img class="logoBox" src="../../static/image/Logo.png">
        </div>
      </el-col>
      <el-col :xs="24" :sm="16" :md="12" :lg="12" :xl="13" :offset="0">
        <div class="grid-content bg-purple TextAlign_L">
          <p style="text-decoration: none;">客服电话：4008-655-156</p>
          <p>商务合作：wangqingq@yingsu56.com</p>
          <p>总部地址：上海市宝山区城银路525号绿地大厦1705-1706室</p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="{span: 3, offset: 3}" :lg="3" :xl="3">
        <div class="grid-content bg-purple TextAlign_C">
          <img class="appCode" src="http://znkz.btzoon.com/static/img/weixin-icon.31dd096.jpg">
          <p>Android </p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="3" :lg="3" :xl="3" :offset="0">
        <div class="grid-content bg-purple TextAlign_C">
          <img class="appCode" src="http://znkz.btzoon.com/static/img/weixin-icon.31dd096.jpg">
          <p>IOS</p>
        </div>
      </el-col>
    </el-row>
    <p class="CopyRightBar">上海鹰速国际货物运输有限公司 版权所有  沪ICP备 XXXXXX号</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.FooterBox{
  padding: 2rem 2rem 0px 2rem;
  background: #e0b32b;
}
.FooterBox p{
  margin-top: 1rem;
  font-size: 0.65rem !important;
  color: #000;
  font-family: 'Lato';
}
.logoBox{
  width: 140px;
  height: 66px;
}
.appCode{
  width: 120px;
  height: 120px;
}
.CopyRightBar{
  height: 50px;
  line-height: 50px;
  border-top: 1px solid #000;
}
</style>
