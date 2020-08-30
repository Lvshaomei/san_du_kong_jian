<template>
	<view class="content">
		<view class="status_bar">
		</view>
		<view class="top-bar">
		<view class="notice" > 
			<image src="../../static/notice.png" mode="aspectFit"  style="width: 50rpx; height: 50rpx;" @click="topNavClick"></image>	
		</view>
		<view class="sao_ma">  
			<image src="../../static/sao_ma.png" mode="aspectFit"   style="width: 50rpx; height: 50rpx;"></image>
			  
		</view>
		</view>
		<view class="swiper">
			<mosowe-swiper :lists="banner" :touchable="false" indicator="dots" imageKey="image" previewImage pyramid
			 pyramidMargin="" @change="bannerChange" />
		</view>
		<view class="nav">
			<view class="nav1">
				<view class="nav_item " v-for="(item,index) in nav1" :key="index" @click="navItemClick (item.path)">
					<view :class="item.icon">
						<image :src="item.iconUrl" mode="aspectFit"></image>
					</view>
					<text>{{item.title}}</text>
				</view>

			</view>
			<view class="nav2">
				<view class="nav_item" v-for="(item,index) in nav2" :key="index" @click="navItemClick(item.path)">
					<view :class="item.icon">
						<image :src="item.iconUrl" mode="aspectFit"></image>
					</view>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="profit">
			<view class="number">156.325665</view>
			<text class="wen_zi">昨日收益</text>
		</view>
	</view>
</template>

<script>
	import mosoweSwiper from '../../components/mosowe-swiper/mosowe-swiper.vue'
	import pScan from '../../components/p-scan/scan.vue'
	export default {
		components: {
			mosoweSwiper,
			pScan
		},
		data() {
			return {
				d_list: [],
				banner: [{
						image: 'https://s1.ax1x.com/2020/08/27/dhDWGT.png',
					},
					{
						image: 'https://s1.ax1x.com/2020/08/27/dhDWGT.png',
					},
					{
						image: 'https://s1.ax1x.com/2020/08/27/dhDWGT.png'
					}
				],
				nav1: [{
						icon: 'icon zhuan_zhang',
						iconUrl: '../../static/icon/zhuan_zhang.png',
						title: '转账',
						path: '/pages/tran_money/tran_money'
					},
					{
						icon: 'icon gong_lian',
						iconUrl: '../../static/icon/gong_lian.png',
						title: '公链',
						path: '/pages/link/link'
					},
					{
						icon: 'icon er_wei_ma',
						iconUrl: '../../static/icon/er_wei_ma.png',
						title: '二维码',
						path: '/pages/code/code'
					},
					{
						icon: 'icon kuang_chi',
						iconUrl: '../../static/icon/kuang_chi.png',
						title: '矿池',
						path: '/pages/Mine_pool/Mine_pool'
					},
					{
						icon: 'icon route',
						iconUrl: '../../static/icon/route.png',
						title: '切换线路',
						path: '/pages/route/route'
					},

				],
				nav2: [{
						icon: 'icon wen_yu',
						iconUrl: '../../static/icon/wen_yu.png',
						title: '文娱',
						path: '/pages/entertainment/entertainment'
					},
					{
						icon: 'icon shop',
						iconUrl: '../../static/icon/shop.png',
						title: '商城',
						path: '/pages/shop/shop'
					},
					{
						icon: 'icon active',
						iconUrl: '../../static/icon/active.png',
						title: '分享激活',
						path: '/pages/active/active'
					},
					{
						icon: 'icon zhang_ben',
						iconUrl: '../../static/icon/zhang_ben.png',
						title: '账本',
						path: '/pages/account/account'
					},
					{
						icon: 'icon wai_hui',
						iconUrl: '../../static/icon/wai_hui.png',
						title: '外汇',
						path: '/pages/exchange/exchange'
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

			bannerChange(data) {
				this.d_list = data.child
			},
			//导航点击处理函数
			navItemClick(url) {
				// console.log(url)
				uni.navigateTo({
					url
				})
			},
			topNavClick(){
				uni.navigateTo({
					url:'/pages/notice/notice'
				})
			},
			// getScanCode(val){
			//      console.log(val)
			// }
			
		}
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.content {
		
		width: 100%;
		height: 100%;

		background-image: url('~@//static/bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.top-bar{
		display: flex;
		justify-content:space-between;
		margin: 0px 10px;
		padding-top: 10px;
	}
	.notice{
		// margin: 20px;
	}
	.sao_ma{
		// padding-right: 80px;
	}
	.swiper {

		padding-top: 30rpx;
	}

	.nav {
		font-size: 24rpx;
		color: #c6c6c6;
	}

	.nav1 {
		display: flex;
		margin: 15px auto;

	}

	.nav2 {
		display: flex;
		/* padding-top: 30rpx; */
	}

	.nav_item {
		width: 20%;
		text-align: center;

	}

	/* .nav_item view{
		margin: 10px auto;
	} */
	 image {

		width: 60rpx;
		height: 60rpx;
		
	}
	.profit{
		text-align: center;
		padding-top: 40px;
	}
	.wen_zi{
		font-size: 24rpx;
		color: #b4faed;
	}
	.number{
		font-size: 24px;
		color: #FFFFFF;
	}
</style>
