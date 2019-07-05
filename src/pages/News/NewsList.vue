<template>
	<div class="NewsList wrap">
		<div class="NewsListInner sectionWrap">
			<div v-for="(NewsItem, idx) in NewsList" :key="idx" @click="ToDetail(idx)">
				<el-row class="NewsItem">
					<el-col :span="6" style="height: 100%">
						<div class="grid-content bg-purple" style="height: 100%">
							<el-row class="LeftBar">
								<el-col :span="24" style="height: 100%">
									<img :src="NewsItem.img">
								</el-col>
							</el-row>
						</div>
					</el-col>
					<el-col :span="18">
						<div class="grid-content bg-purple RighBar">
							<h2>{{NewsItem.tit}}</h2>
							<p class="abstract">{{NewsItem.content}}</p>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      total: 50,
      pageSize: 10,
      currentPage: 1,
      NewsList: [
        {id: 1, tit: '为何唯物主义者晚年时会说出“一切都是安排好的”呢', month: 11, year: 2018, content: '爱因斯坦绝对是历史上最伟大的科学家之一，如今我们在高中课本以及初中课本上学到的很多知识，都来源于爱因斯坦的研究跟发现，比如说相对论以及能量守恒定律等等，如果没有爱因斯坦以及牛顿等伟大的科学家的话，人类目前不可能处在这样的一种高速发展的模式当中，也因此科学家的地位在人们的心目中是非常高的，几乎是科学家说什么那么事实就是什么！', img: '../../../static/image/News_1.jpeg'},
        {id: 1, tit: '华为：已签署25份5G商业合同 年收入达1000亿美元', month: 11, year: 2018, content: 'C114讯 12月18日晚间消息（蒋均牧）在首席财务官在加拿大被扣以及西方大国遏制其商业活动后，科技巨头华为技术有限公司的一位高管对该公司的业务及其设备的安全性进行了有力的辩护，据《华尔街日报》报道。', img: '../../../static/image/News_2.jpeg'},
        {id: 0, tit: '哈登：火箭接近达到最佳状态 现在打球要更努力', month: 12, year: 2018, content: '北京时间12月19日消息，来自美媒体的报道称，火箭队当家球星詹姆斯-哈登在接受采访时表示，球队已接近达到想要的那种状态。火箭队近况不错，取得一波4连胜后排名升至西部第10。对此，“大胡子”表示：“继续做那些让我们走到现在的事情。在防守端，我们非常努力；在进攻端，我们转移球、打出节奏，并且分享球。”', img: '../../static/image/News_3.jpeg'},
        {id: 1, tit: '前Oculus联合创始人投资Sketchfab，金额未透露', month: 11, year: 2018, content: 'Sketchfab公司创始人兼CEOAlban Denoyel在Twitter表示：前Oculus联合创始人兼CEO Brendan Iribe正式投资Sketchfab，不过官方并没有公布正式新闻稿，而且具体投资金额也为透露。', img: '../../../static/image/News_4.jpeg'},
        {id: 1, tit: '运输', month: 11, year: 2018, content: '运输是指用特定的设备和工具，将物品从一个地点向另一个地点运送的物流活动，它是在不同地域范围内，以改变物的空间位置为目的对物进行的空间位移。', img: '../../../static/image/News_5.jpeg'}
      ]
    }
  },
  components: {
  },
  methods: {
    ToDetail () {
      this.$router.push({name: 'NewsDetail'})
    }
  }
}
</script>
<style scoped>
.NewsList{
}
.NewsItem{
	height: 120px;
}
.RighBar h2{
	height: 30px;
	line-height: 30px;
}
.abstract {
	/*height: 90px;*/
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

@media screen and (min-width: 768px) {
	.NewsList{
	}
	.NewsItem{
		height: 200px;
	}
	.RighBar h2{
		height: 50px;
		line-height: 50px;
	}
	.abstract {
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
}
.NewsListInner{
	margin-top: 2rem;
	overflow: hidden;
}
.NewsItem{
	background: #fff;
	margin-bottom: 40px;
	box-shadow: 1px 2px 10px #6b6b6b;
	cursor: pointer;
	overflow: hidden;
}

.NewsItem:hover{
	transform: scale(1.1);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
	/*box-shadow: 1px 2px 10px #fff200;*/
}
.LeftBar{
	height: 100%;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	overflow: hidden;
}

/*.DateBar{
	height: 200px;
	background: #e0b32b;
}
.DateBar h4{
	font-size: 1rem;
	line-height: 12px;
}*/

.RighBar{
	text-align: left;
	padding: 0 1rem 0 1rem;
}
.RighBar h2{
	font-size: 0.75rem;
	overflow:hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.abstract {
	font-size: 0.55rem;
	text-indent: 0rem !important;
	line-height: 1rem !important;
	overflow: hidden;
}
.pagination{
	padding: 1rem 2rem;
	text-align: right;
}
.LeftBar img{
	width: 100%;
	height: 100%;
	/*height: 100%;
	height: 200px;*/
}

</style>
