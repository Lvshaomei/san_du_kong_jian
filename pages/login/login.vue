<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->
			<view class="main">
				<wInput
					class="named"
					v-model="phoneData"
					type="text"
					maxlength="16"
					placeholder="用户名(3-16位字母+数字)"
				></wInput>
				<wInput
					class="passda"
					v-model="passData"
					type="password"
					maxlength="16"
					placeholder="登录密码(6-16字母+数字)"
				></wInput>

				<wButton 
					class="wbutton"
					text="登 录"
					:rotate="isRotate" 
					@click="startLogin"
				></wButton>
				<!-- 底部信息 -->
				<view class="footer">
				<navigator url="../register/register" open-type="navigate" hover-class="navigator-hover" class="navigator">注册账号</navigator>
				<navigator url="../forget/forget" open-type="navigate" hover-class="navigator-hover" class="navigator1">忘记密码</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	export default {
		data() {
			return {
				logoImage:'../../static/images/logo2.png',//
				phoneData:'', //用户/电话
				passData:'', //密码
				isRotate: false, //是否加载旋转
				userdata:'',
			};
		},
		components:{
			wInput,
			wButton,
		},
		mounted() {
			_this= this;
			//this.isLogin();
		},
		methods: {
			isLogin(){
				//判断缓存中是否登录过，直接登录
			/*	 try {
				 	const value = uni.getStorageSync('setUserData');
				 	if (value) {
				// 		//有登录信息
				 		console.log("已登录用户：",value);
				 		_this.$store.dispatch("setUserData",value); //存入状态
						uni.reLaunch({
				// 			url: '../../../pages/index',
						});
				 	}
					} catch (e) {
				 	 error
				 }*/
			},
		startLogin(e){
		   //console.log(e)
			//登录
			if(this.isRotate){
				//判断是否加载中，避免重复点击请求
				return false;
			}
			if (this.phoneData.length == "") {
			     uni.showToast({
			        icon: 'none',
					position: 'bottom',
			        title: '用户名不能为空'
			    });
			    return;
			}
			if (this.passData.length < 5) {
			    uni.showToast({
			        icon: 'none',
					position: 'bottom',
			        title: '密码不正确'
			    });
			    return;
			}
				console.log("登录成功");
				_this.isRotate=true;
			setTimeout(function(){
					/*this.$router.replace('../../')登录成功后跳转*/
			_this.isRotate=false
				},3000)
				/*uni.showLoading({
				 	title: '登录中'
				 });
				 getLogin()
				 .then(res => {
				 	console.log(res)
				 	//简单验证下登录（不安全）
				 	if(_this.phoneData==res.data.username && _this.passData==res.data.password){
				 		let userdata={
				 			"username":res.data.username,
							"nickname":res.data.nickname,
				 			"accesstoken":res.data.accesstoken,
			 	} //保存用户信息和accesstoken
					_this.$store.dispatch("setUserData",userdata); //存入状态
					try {
							uni.setStorageSync('setUserData', userdata); //存入缓存
						} catch (e) {
							 error
				 		}
				 		uni.showToast({
				 			icon: 'success',
							position: 'bottom',
				 			title: '登录成功'
				 		});
				 		uni.reLaunch({
				 			url: '../../../pages/index',
				 		});
				 	}else{
				 		_this.passData=""
				 		uni.showToast({
				 			icon: 'error',
				 			position: 'bottom',
				 			title: '账号或密码错误'
				 		});
				 	}
			 	uni.hideLoading();
			 }).catch(err => {
			 	uni.hideLoading();
			 })*/
		    }

		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/login.css");
</style>
