<template>
	<view class="page">
		<view class="content1">
			
		
		<view class="content">
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view>
		</view>
		<view class="parse-con">
			<u-parse :content="content" @navigate="navigate"></u-parse>
		</view>
		
		<!-- 如果是v3编译器直接使用v-html吧 -->
		<!-- <view class="parse-con">
		        <view v-html="content"></view>
		    </view> -->
		</view>
	</view>
</template>

<script>
	import uParse from "@/components/feng-parse/parse.vue"
	export default {
		components: {
			uParse
		},
		data() {
			return {
				title: "",
				content: "<div>币币交易主要是针对数字货币和数字货币之间的交"+
"易，以其中一种币作为计价单位去购买其他币种。"+
"币币交易的规则同样是按照价格优先、时间优先的"+
"顺序完成撮合交易，直接实现数字资产之间的兑"+
"换。"+
"<text class='textarea'>1.选择交易对 "+
" 选择需要购买的交易对 </text>"+
"<text class='textarea'>2.查看价格&nbsp;&nbsp;  "+
"查看市场 &nbsp;&nbsp; 成交价格</text>"+
"<text class='textarea'>3.填写订单 "+
" 填写买入价和买入量</text>"+
"<text class='textarea'>4.点击买入 "+
" 等待市场成交</text></div>",
				
			}
		},
		onLoad() {
			//获取你的content内容
		},
		methods: {
			navigate(e) {
				console.log(e)
			}
		}
	}
</script>

<style lang="scss">
	.page {
		width: 100%;
		height: 100%;
		// text-align: left;
		
		// opacity: 0.9;
		background-image: url(../../static/background.png);
		// background-color: #376384;
		background-repeat: no-repeat;
		color: #FFFFFF;
		font-size:35rpx
	}
	.content1{
		// opacity: 0.9;
		
		width: 100%;
		height: 1334rpx;
		// padding-left: 10rpx;
		
		background-image: url(../../static/bg5.png);
		background-repeat: no-repeat;
		
	}
	
	.parse-con{
		text-indent: 25rpx;
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		
	}
	
	text{
		white-space:nowrap;//换行
		
	}
	.textarea{
		padding-top: 20px;
	}
</style>
