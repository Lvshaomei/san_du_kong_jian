<template>
	<view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="什么是币币交易" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="比特币是什么" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="常见诈骗套路说明" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="平台介绍" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="服务协议" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="什么是币币交易" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="什么是币币交易" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="什么是币币交易" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="服务协议" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="服务协议" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="服务协议" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	export default {
		components: {
			uniNoticeBar
		},
		data() {
			return {
				date: new Date().toISOString().slice(0, 10)
			}
		},
		created() {},
		methods: {
			getMore(e) {
				uni.navigateTo({
					  url: '/pages/help_detail/help_detail?name=help_detail'
				})
				
			}
		}
	}
</script>

<style lang="scss">
page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		/* background-color: #efeff4; */
		background-image: url(../../static/background.png);
		background-repeat: no-repeat;
		min-height: 100%;
		height: auto;
	}
	view {
		font-size: 20px;
		line-height: inherit;
	}
	
	.example-body {
		
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		font-size: 20px;
		background-image: url('~@//static/bg2.png');
		background-repeat:no-repeat;
		border: 1px solid #162538;
		width: 100%;
		height: 100%;

	}
	
	.item-1{
		position: relative;
		top: 10rpx;
	}
</style>
