<template>
  <div class="AboutUs wrap">
    <section class="Banner">
      <!-- <img src="../../static/image/aboutUsbg.jpg"> -->
      <img src="../../static/image/AboutUs.jpg">
      <!-- <img src="https://www.fordfound.org/media/3894/stairs_no-lights_hero.jpg?crop=0,0.21940928270042195,0,0.21800281293952181&width=1600&height=600&rnd=131831407980000000&cropmode=percentage"> -->
    </section>
    <section class="Company sectionWrap">
      <h1 class="TextAlign_C columnTit">无车承运</h1>
      <p>无车承运以危险品物流为特色服务，公司主要经营道路危险货物运输和物流配送业务有（第二类：易燃气体、非易燃无毒气体；第三类：易燃液体；第四类：易燃固体第六类：毒性物质；第八类：腐蚀性物质（强腐蚀性、弱腐蚀性（除剧毒品））；特种化工。公司自主拥有各种车型的长短途货车400余辆，可承接全国各地的整车运输、危险品运输、仓储、配送业务。 公司以长三角、珠三角为依托,已形成辐射全国的运输服务网络，已在苏州、上海、无锡、昆山、东莞、广州、深圳、惠州、北京、天津、南京、长沙、南昌等各大中城市设立分公司或办事处，长途运输通达80多个城市、短途配送覆盖珠三角、长三角等各大区域，线路覆盖全国300多个城市和地区；完善的服务网络确保为客户提供准确、高效、安全的"门对门"运输服务。</p>
      <p>公司以雄厚的实力、完善的服务网络、优质的服务质量、专业的服务水平赢得了客户的赞誉。成为了众多外资企业，国内大型生产企业优秀的物流供应商，值得信赖的合作伙伴。</p>
    </section>
    <section class="Culture">
      <div class="TextBlock">
        <h1 class="TextAlign_C columnTitWhiite">企业文化</h1>
        <p>公司具有完善的内部组织机构和管理制度，其中市场开发与管理调度人员多名。公司秉承客户至上的服务宗旨，借助先进的物流服务理念和丰富的物流操作经验，为不同客户量身定做提供专业物流方案和优质、高效的物流服务；从而帮助客户降低成本，提升市场竞争力。</p>
      </div>
    </section>
    <section class="sectionWrap">
      <h1 class="TextAlign_C columnTit">企业团队</h1>
      <div>
        <el-row>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" v-for="(person, idx) in teamList" :key="idx" class="personItem">
            <div class="grid-content bg-purple TextAlign_C">
              <img class="personImg" :src="person.img">
              <h2>{{person.name}}</h2>
              <p>{{person.position}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'AboutUs',
  data () {
    return {
      teamList: [
        {name: 'Rob May', img: '../../static/image/person1.png', position: '董事长'},
        {name: 'Rob May', img: '../../static/image/person2.png', position: '经理'},
        {name: 'Rob May', img: '../../static/image/person3.png', position: '经理'},
        {name: 'Rob May', img: '../../static/image/person1.png', position: '经理'},
        {name: 'Rob May', img: '../../static/image/person2.png', position: '经理'},
        {name: 'Rob May', img: '../../static/image/person3.png', position: '经理'}
      ]
    }
  },
  components: {
  }
}
</script>

<style scoped>
.AboutUs{

}
.Banner img{
  width: 100%;
  overflow: hidden;
}
.Company{
  text-align: left;
}
.Culture{
  padding: 2rem 0;
  position: relative;
  background: #2C8DA1 url(../../static/image/AboutUsCulture.png) no-repeat center top/cover;
  color: #fff;
}
.TextBlock{
  margin-top: 3rem;
  padding-bottom: 4rem;
  /*position: absolute;
  top: 50%;
  top: 50%;
  transform: translate(0, -50%);*/
  text-align: center;
}
.Culture p{
  width:  80%;
  margin: 0 auto !important;
}
.personItem{
  margin-bottom: 40px;
}
.personImg{
  height: 200px !important;
}
</style>
