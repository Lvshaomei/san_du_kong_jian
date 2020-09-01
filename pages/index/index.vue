<template>
	<view class="content">
		<view class="text-area" style="margin-top: 20px;">
			<button class="btn" type="primary" size="default" @click="noticeClick">跳转公告</button>
			
			<button class="btn" type="primary" size="default"  @click="helpClick">帮助中心</button>
			<button class="btn" type="primary" size="default"  @click="billClick" >账本动态</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			noticeClick(){
				uni.navigateTo({
					url:"../notice/notice"
				})
			},
			helpClick(){
				uni.navigateTo({
					url:"../help/help"
				})
			},
			billClick() {
				uni.navigateTo({
					url:"../bill/bill"
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.btn{
		margin: 10px auto;
		
	}
</style>
