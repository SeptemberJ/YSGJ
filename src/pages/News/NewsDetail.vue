<template>
  <div class="NewsDetail sectionWrap MarginT_80">
		<el-breadcrumb separator="/">
			<el-breadcrumb-item><a @click="ToList">活动列表</a></el-breadcrumb-item>
			<el-breadcrumb-item>资讯热点</el-breadcrumb-item>
		</el-breadcrumb>
		<h1>资讯热点</h1>
		<p class="dateBox">2018-12-17</p>
		<div class="LineBar"></div>
		<section class="NewsContent">
			<img src="../../../static/image/News_1.jpeg">
			<p>物流的运输则专指“物”的载运及输送。它是在不同地域范围间（如两个城市.两个工厂之间，或一大企业内相距较远的两车之间），以改变“物”的空间位置为目的的活动，是对“物”进行的空间位移。</p>
			<p>运输一般分为运输和配送。关于运输和配送的区分，有许多不同的观点，可以这样来说，所有物品的移动都是运输，而配送则专指短距离、小批量的运输。因此，可以说运输是指整体，配送则是指其中的一部分，而且配送的侧重点在于一个''配''字，它的主要意义也体现在''配''字上；而''送''是为最终实现资源配置的''配''而服务的。</p>
			<img src="../../../static/image/News_2.jpeg">
			<p>运输功能要素。包括供应及销售物流中的车、船、飞机等方式的运输，生产物流中的管道、传送带等方式的运输。运输的生产过程是以一定的生产关系联系起来的、具有劳动技能的人们使用劳动工具（如车、船、飞机及其他设施）和劳动对象（货物和旅客）进行生产，并创造产品的生产过程。运输的产品，对旅客运输来说，是人的空间位移；对货物运输来说，是货物的空间位移。显然，运输是以改变“人和物”的空间位置为目的的生产活动，这一点和通常意义下以改变劳动对象物理、化学、生物属性为主的工农业生产不同。运输生产不像工农业生产那样改变劳动对象的物理、化学性质和形态，而只改变劳动对象的空间位置，并不创造新的实物形态产品。因此，在满足社会运输需求的情况下，多余的运输产品或运输支出，都是一种浪费。</p>
			<p>货物运输有保值作用。也就是说，任何产品从生产出来到最终消费，都必须经过一段时间、一段距离，在这段时间和距离过程中，都要经过运输、保管、包装、装卸搬运等多环节、多次数的货物运输活动。在这个过程中，产品可能会淋雨受潮、水浸、生锈、破损、丢失等。货物运输的使命就是防止上述现象的发生，保证产品从生产者到消费者移动过程中的质量和数量，起到产品的保值作用，即保护产品的存在价值，使该产品在到达消费者时使用价值不变。</p>
			<img src="../../../static/image/News_4.jpeg">
			<p>搞好运输，能够节约自然资源、人力资源和能源，同时也能够节约费用。比如，集装箱化运输，可以简化商品包装，节省大量包装用纸和木材；实现机械化装卸作业，仓库保管自动化，能节省大量作业人员，大幅度降低人员开支。重视货物运输可节约费用的事例比比皆是。被称为"中国货物运输管理觉醒第一人"的海尔企业集团，加强运输管理，建设起现代化的国际自动化货物运输中心，一年时间将库存占压资金和采购资金，从15亿元降低到7亿元，节省了8亿元开支。</p>
			<p>距离方面的例证不胜枚举。在北京可以买到世界各国的新鲜水果，全国各地的水果也常年不断；邮政部门改善了货物运输，使信件大大缩短了时间距离，全国快递两天内就到美国联邦快递，能做到隔天送达亚洲15个城市；日本的配送中心可以做到，上午10点前订货、当天送到。这种运输速度，把人们之间的地理距离和时间距离一下子拉得很近。随着货物运输现代化的不断推进，国际运输能力大大加强，极大地促进了国际贸易，使人们逐渐感到这个地球变小了，各大洲的距离更近了。</p>
		</section>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  components: {
  },
  methods: {
    ToList () {
      this.$router.push({name: 'NewsList'})
    }
  }
}
</script>
<style scoped>
.NewsDetail{
	margin-top: 3rem;
}
.NewsDetail h1{
	font-size: 36px;
	text-align: center;
}
.dateBox{
	font-size: 22px;
	color: #404040;
	text-align: center;
}
.LineBar{
	margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  border-top: 1px solid #eee;
}
.NewsContent{
	margin: 40px auto;
}
.NewsContent p{
	text-align: left;
}
.NewsContent img{
	max-width: 100%;
	margin: 30px auto;
}
</style>
