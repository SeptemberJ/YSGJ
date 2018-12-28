<template>
	<div class="order wrap">
		<el-row class="searchBox" style="">
      <el-col :span="20">
        <div class="inputBlock">
          <el-input v-model="SearchOrder" clearable placeholder="请输入您要查询的运单号" style="border: 0px solid #fff !important;"></el-input>
        </div>
      </el-col>
      <el-col class="searchBt CursorPointer" :span="4"><div @click="searchOrder">查询</div></el-col>
    </el-row>
    <el-table class="MarginB_80"
    :data="orderList"
    highlight-current-row
    row-key="id"
    :expand-row-keys="expands"
    @row-click="changeLine"
    style="width: 90%;margin: 0 auto;">
			<el-table-column
				type="index"
				width="50">
			</el-table-column>
			<el-table-column
				label="发货时间"
				prop="date">
			</el-table-column>
			<el-table-column
				label="货物名称"
				prop="name">
			</el-table-column>
			<el-table-column
				label="件数"
				prop="amount">
			</el-table-column>
			<el-table-column
				label="起始 → 到达"
				prop="place">
			</el-table-column>
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-row>
						<el-col :span="8" class="DetailInfo">
							<h4>始发地： {{props.row.departure}}</h4>
							<span>始发网点：{{props.row.startNet}}</span>
							<span>网点地址：{{props.row.startNetAdr}}</span>
							<span>网点电话：{{props.row.startNetTel}}</span>
						</el-col>
						<el-col :span="8" class="DetailInfo">
							<h4>到达地 : {{props.row.destination}}</h4>
							<span>到达网点：{{props.row.endNet}}</span>
							<span>网点地址：{{props.row.endNetAdr}}</span>
							<span>网点电话：{{props.row.endNetTel}}</span>
						</el-col>
						<el-col :span="8" class="DetailInfo">
							<h4>货物信息</h4>
							<span>体积：{{props.row.volume}}</span>
							<span>重量：{{props.row.weight}}</span>
							<span>提货方式：{{props.row.getWay}}</span>
						</el-col>
					</el-row>
					<el-row class="MarginTB_2">
						<el-steps :active="props.row.status">
							<el-step title="揽货成功" icon="el-icon-tickets"></el-step>
							<el-step title="货物发车" icon="el-icon-news"></el-step>
							<el-step title="等待收货" icon="el-icon-time"></el-step>
							<el-step title="货物签收" icon="el-icon-edit-outline"></el-step>
						</el-steps>
					</el-row>
					<el-row class="MarginTB_2">
						<el-steps direction="vertical" :active="0" space="20">
							<el-step v-for="(logistic, idx) in props.row.logistics" :key="idx" icon="el-icon-circle-check-outline" :title="logistic.tip" :description="logistic.date"></el-step>
						</el-steps>
					</el-row>
					</el-form>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
export default {
  name: 'Order',
  data () {
    return {
      SearchOrder: '',
      orderList: [
        {
          id: 'j9wdw00k',
          date: '2018-12-28',
          name: '江浙小吃、小吃零食',
          amount: '50',
          departure: '山东省 潍坊',
          destination: '贵州省 黔西南布依族苗族自治州',
          place: '山东省 潍坊 → 贵州省 黔西南布依族苗族自治州',
          startNet: '平顶山市湛河区网点',
          startNetAdr: '河南平顶山神马大道中段',
          startNetTel: '13937537587',
          endNet: '潍坊市高密市网点',
          endNetAdr: '河南平顶山神马大道中段',
          endNetTel: '13937537587',
          volume: '3立方',
          weight: '20 公斤',
          getWay: '自提',
          status: 3,
          logistics: [
            {
              date: '2018-11-26 15:05:56',
              tip: '已签收'
            },
            {
              date: '2018-11-25 15:05:56',
              tip: '货物已到达【宁波市余姚市分拨中心】'
            },
            {
              date: '2018-11-24 15:05:56',
              tip: '货物已由【金华市义乌市网点】承运，运单号【123】'
            }
          ]
        },
        {
          id: 'fsddddw32',
          date: '2018-12-28',
          name: '蔬菜',
          departure: '河南省 平顶山',
          destination: '辽宁省 沈阳',
          place: '河南省 平顶山 → 辽宁省 沈阳',
          startNet: '平顶山市湛河区网点',
          startNetAdr: '河南平顶山神马大道中段',
          startNetTel: '13937537587',
          endNet: '潍坊市高密市网点',
          endNetAdr: '河南平顶山神马大道中段',
          endNetTel: '13937537587',
          volume: '1立方',
          weight: '10 公斤',
          getWay: '自提',
          status: 2,
          logistics: [
            {
              date: '2018-11-25 15:05:56',
              tip: '货物已到达【宁波市余姚市分拨中心】'
            },
            {
              date: '2018-11-24 15:05:56',
              tip: '货物已由【金华市义乌市网点】承运，运单号【123】'
            }
          ]
        }
      ],
      expands: []
    }
  },
  components: {
  },
  created () {
    this.SearchOrder = this.$route.params.keyword || ''
  },
  methods: {
    changeLine (row, event, column) {
      if (!this.expands[0]) {
        this.expands = [row.id]
      } else {
        if (this.expands[0] === row.id) {
          this.expands = []
        } else {
          this.expands = [row.id]
        }
      }
    },
    searchOrder () {
      if (this.SearchOrder.trim() === '') {
        this.$message({
          message: '请输入需要查询的单号',
          type: 'warning'
        })
      } else {
        // get
      }
    }
  }
}
</script>
<style scoped>
.order{
}
.searchBox{
  width: 70%;
  height: 60px;
  margin: 2rem auto;
  box-shadow: 0px 0px 12px #6b6b6b !important;
}
.inputBlock{
  height: 60px;
  line-height: 60px;
  background:#fff;
}
.searchBt{
  height: 60px;
  line-height: 60px;
  background:#f60;
  color: #fff;
}
.searchBt div{
	width: 100%;
	height: 100%
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.DetailInfo{
	padding: 0 1rem;
}
.DetailInfo span{
	display: block;
}

</style>
