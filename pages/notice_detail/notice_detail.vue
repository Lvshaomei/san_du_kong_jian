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
		<view class="foot">
			{{bottom}}
		</view>
		<view class="trans">
			<u-parse :content="translation"></u-parse>
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
				content: "<div>Greetings, esteemed members of the third dimension and the speakers of the 3rd coin! We will launch a new heavy-weight consumer payment ecology this month, shopping as a part of people's lives, has long been deeply understood and understood by people, in traditional shopping, people usually choosetheir products at physical places such as small stores in shopping malls. However, with the rapid development of Commodity and the development and application of computer technology, online shopping has become more and more important in people's life. At the same time, the convenience and quickness it brings to us in shopping are also accepted by most people, and Organization is changing the way people consume. On this basis, the block chain combined with entity consumption and the development of online shopping trend is more and more obvious. TDC will participate in the payment and circulation of global commodities through strategic cooperation, giving full " +
					"play to the core advantages of the blockchain. We believe that through this Suneo Honekawa cooperation, as well as the opening of large traffic channels, TDC will be able to make significant progress. The details of this cooperation will be revealed at the end of this month. I hope all of you will wait and see!</div>",
				bottom: "3-degree lab",
				translation: "<p>尊敬的三度空间会员们以及3号币的布道者们，<text>大家好!<text>我们将于本月开启全新重磅消费支付生态，购物作为人们生活的一部分，早已被人们深刻理解和认识，在传统购物中，人们选择商品一般会在商场小店等实体买卖交易处。然而，随着商品经济的快速发展，计算机技术的研发和应用，网络购物在人们生活中的地位8益凸显同时它在购物上给我们带中的方便与忡拖也为大......</p>"
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
		height: 100%;
		// padding-left: 10rpx;
		
		background-image: url(../../static/bg5.png);
		background-repeat: no-repeat;
		
	}
	
	.parse-con{
		text-indent: 50rpx;
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		
	}
	.foot{
		text-align: right;
		padding: 20rpx  ;
	}
	.trans{
		padding: 20rpx  ;
	}
	text{
		white-space:nowrap;
		
	}
</style>
