<template>
	<div class="wrap">
		<div class="Partner TextAlign_L">
			<section class="investmentIntroduction sectionWrap">
				<h1 class="columnTit">招商加盟</h1>
				<p>无车承运诚邀物流行业服务企业及各界有识之士，共同推动互联网+物流协同管理普及，促进现代物流的快速发展，携手共创美好未来。XXX诚邀物流行业服务企业及各界有识之士，共同推动互联网+物流协同管理普及，促进现代物流的快速发展，携手共创美好未来。</p>
				<p><strong>一、申请条件</strong></p>
				<ul>
					<li><p>对互联网+物流协同管理有强烈的认同感，并对行业前景有一定的了解；</p></li>
					<li><p>在某一区域内，或某个行业内，拥有一定资源，熟悉物流行业、生产或贸易企业物流及供应链环节；</p></li>
					<li><p>建立合作伙伴关系后，能积极主动的进行平台的推广和市场化运作。</p></li>
				</ul>
				<p><strong>二、合作方式</strong></p>
				<ul>
					<li><p>按地理区域划分，省级-市级，根据代理商能力决定授权范围，在授权范围内，以上线客户注册地为依据，确定营销，服务，收益的范围；合作伙伴进行平台销售，客户关系维护，协助回款，前期总部给予营销和实施支持，并对合作企业进行培训，后期由代理商负责实施，总部适度支持；</p></li>
					<li><p>合作伙伴进行平台销售，客户关系维护，协助回款，前期总部给予营销和实施支持，并对合作企业进行培训，后期由代理商负责实施，总部适度支持；</p></li>
					<li><p>区域保护政策：总部或其他区域合作企业发展的本地客户，本地代理商负责接管客户的日常维护工作，并可获得年费续约的销售额相应的收入分成。</p></li>
				</ul>
				<p><strong>三、如何申请</strong></p>
				<p>地址：上海市宝山区城银路525号绿地大厦1705-1706室</p>
				<p>电话： 4008-655-156</p>
				<p>传真：021-33937732</p>
				<p>邮箱：wangqingq@yingsu56.com</p>
				<p>联系人：王先生</p>
				<p>手机：15921197540</p>
				<p>QQ：1241679326</p>
			</section>
		</div>
		<section class="PartnerList sectionWrap">
			<h1 class="columnTit">我们期待您的加入...</h1>
			<el-row>
        <el-col :xs="8" :sm="6" :md="4" v-for="(Company, idx) in PartnerCompanyList" :key="idx" class="CompanyItem">
          <div class="grid-content bg-purple TextAlign_C">
            <img class="CompanyLogo" :src="Company">
          </div>
        </el-col>
      </el-row>
		</section>
	</div>
</template>

<script>
export default {
  name: 'Partner',
  data () {
    return {
      PartnerCompanyList: ['../../static/image/Partner_1.png', '../../static/image/Partner_2.png', '../../static/image/Partner_3.png', '../../static/image/Partner_4.png', '../../static/image/Partner_5.png', '../../static/image/Partner_6.png', '../../static/image/Partner_7.png', '../../static/image/Partner_8.png', '../../static/image/Partner_9.png', '../../static/image/Partner_10.png', '../../static/image/Partner_11.png', '../../static/image/Partner_12.png']
    }
  },
  components: {
  }
}
</script>
<style scoped>
.Partner{
	/*margin: 80px 80px;*/
	/*background: #f4f4f4;*/
}
.investmentIntroduction p{
  text-indent: 35px;
  padding: 0px;
  font-size: 18px;
  line-height: 34px;
}
.PartnerList{
	/*padding: 80px 80px;*/
	background: #f7f6f2;
}
.CompanyItem{
	height: 80px;
	line-height: 80px;
}
.CompanyLogo{
	max-width: 90%;
	margin: 0 auto;
	vertical-align: middle;
}
</style>
