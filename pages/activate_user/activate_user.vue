<template>
	<view class="activate_user">
		<view class="content">
			<!-- 主体 -
			<div class="title">
			     <a href="#" onclick="javascript:history.back(-1);">
			             <image src="../../static/back.png" mode="" @tap="back" class="arrow-box nav-left"></image>
			     </a>
			     <p class="font">激活用户</p>
			 </div>-->
			<view class="main">	
				<div class="oldpasswordo">
				对方账户
				</div>
					<view class="scanf">
						<wInput
							class="addgress"
							v-model="passData0"
							type="text"
							maxlength="16"
							placeholder="请输入三度空间账户或地址"
							isShowPass
						></wInput>
					</view>
					<view class="balance">
						激活需要消耗 0.01III
					</view> 
			</view>
		</view>
			<wButton 
				class="wbutton"
				text="确认"
				:rotate="isRotate" 
				@click.native="startRePass()"
			></wButton>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				passData0: "", //密码
				show: false,
				isRotate:false,
			}
		},
		onLoad() {
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
		},
		onShow() {
			_this = this;
			setTimeout(function() {
			}, 1000)
		},
		methods: {
			onKeyInput(event) {
			    this.inputValue = event.target.value
			},
			pull(){
			    this.show = this.show == false?true:false
			},
			phone(item){
			    this.phonetittle = '('+item.cn +')'+ item.code
			},	
			startRePass() {
				//重置密码
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
			},
		},
	}				
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("../login/css/login.css");
	@import url("../register/css/register.css");
	@import url("../forget/css/forget.css");
	@import url("./css/activate_user.css");
</style>

