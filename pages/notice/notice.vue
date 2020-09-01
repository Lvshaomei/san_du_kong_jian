<template>
	<view>

		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text=" Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore"/>
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1"  @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1" @getmore="getMore" />
		</view>
		<view class="example-body">
			<uni-notice-bar :single="true" :show-icon="true" :show-get-more="true" :more-text="date" moreColor="#e0e4f1" color="#ffffff" background-color="" text="Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!Greetings, esteemed members of the third dimension and the speakers of the 3rd coin!" showArrow rightText=""  class="item-1"  @getmore="getMore" />
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
					  url: '/pages/notice_detail/notice_detail?name=detail'
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
		margin: 20rpx auto ;
		font-size: 20px;
		text-align: center;
		/* background-color: #162538; */
		background-image: url('~@//static/bg2.png');
		background-repeat:no-repeat;
		width: 100%;
		height: 100rpx;
		/* padding-top: 40px; */
	}
	
	.item-1{
		
		text-align: center;
		position: relative;
		top: 15rpx;
	}
</style>
