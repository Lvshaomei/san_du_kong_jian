<template>
	<view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		<view class="example-body">
			<uni-notice-bar   more-text="0.0013" moreColor="#e0e4f1" color="#ffffff" background-color="" text="3号燃油手续收费3f" showArrow rightText=""  class="item-1" @getmore="getMore"/>
			<view class="date">
				{{date}}
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar_revision/uni-notice-bar_revision.vue'
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
		padding: 0;
		margin: 0;
	}
	view {
		font-size: 20px;
		line-height: inherit;
	}
	
	.example-body {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		// margin: 20rpx auto ;
		font-size: 20px;
		// text-align: center;
		/* background-color: #162538; */
		background-image: url('~@//static/bg2.png');
		background-repeat:no-repeat;
		border: 1px solid #162538;
		width: 100%;
		height: 100%;
		
	}
	
	.item-1{
		text-align: left;
		line-height: 10px;
		margin-top: 10px;
		margin-bottom: 0px;
	}
	.date{
		padding-left: 12px;
		margin-bottom: 5px;
		font-size: 12px;
		color: #e0e4f1;
		opacity: 0.8;
		text-align: left;
	}
</style>
