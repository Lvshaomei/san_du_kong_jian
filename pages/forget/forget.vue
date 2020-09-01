<template>
	<view class="forget">
		<view class="content">
			<!-- 主体 
			<div class="title">
			     <a href="#" onclick="javascript:history.back(-1);">
			        <image src="../../static/back.png" mode="" @tap="back" class="arrow-box nav-left"></image>
			     </a>
			     <p class="font">忘记密码</p>
			</div>-->
			<view class="main">		
				<view class="content1">
					<wInput
						v-model="nameData"
						class="name1"
						type="text"
						maxlength="16"
						placeholder="请输入用户名"
					></wInput>
					<view class="codeView">
						<view class="codeView1">
							<view class="conte">
								<xl-slider-verify @success="verifySuccess" :reset="false"></xl-slider-verify>
							</view>
				  		<wInput
				  			v-model="verCode"
				  			type="number"
				  			maxlength="4"
							class="num"
				  			placeholder="短信验证码"
				  			isShowCode
				  			ref="runCode"
				  			@setCode="getVerCode()"
				  		></wInput>	 
						<wInput
							class="pass"
							v-model="passData"
							type="password"
							maxlength="11"
							placeholder="请设置新登录密码"
							isShowPass
						></wInput>
						</view>
					</view>
					<wButton 
						class="wbutton"
						text="重置密码"
						:rotate="isRotate" 
						@click.native="startRePass()"
					></wButton>
					<navigator url="../login/login" open-type="navigate" hover-class="navigator-hover" class="navigator2">返回登录</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import xlSliderVerify from '@/components/xl-slider-verify/xl-slider-verify.vue'
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //butto
	export default {
		data() {
			return {
				logoImage: '../../static/images/logo.png',//logo图
				nameData: "", //用户名
				passData: "", //密码
				verCode:"", //手机验证码
				inputValue: '',
				show: false,
				width: 115,
				height: 48,	
				isRotate:"false",
			}
		},
		onLoad() {
		},
		components:{
			wInput,
			wButton,
			xlSliderVerify
		},
		mounted() {
			_this= this;
		},
		onShow() {
			_this = this;
			setTimeout(function() {
				//_this.init();
			}, 1000)
		},
		methods: {
			verifySuccess(){
				console.log('验证成功')
			},
			onKeyInput(event) {
				this.inputValue = event.target.value
			},
			pull(){
				this.show = this.show == false?true:false
			},
			phone(item){
			this.phonetittle = '('+item.cn +')'+ item.code
			},
			getVerCode(){
				//获取验证码
			if (this.nameData.length <3||this.nameData.length >16 ){
			    uni.showToast({
			        icon: 'none',
					position: 'bottom',
			        title: '用户名错误！请重新输入'
			    });
			    return false;
			}
			/*var obj1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
			if(obj1.test(nameData)){
				return true;
			}
			else{
				uni.showToast({
				    icon: 'none',
					position: 'bottom',
				    title: '用户名错误！请重新输入'
				});
				return false;
			}
			*/
			console.log('%c获取验证码','color:#ffffff');
			this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
			uni.showToast({
			    icon: 'none',
				position: 'bottom',
			    title: '验证码已发送'
			});
				setTimeout(function(){
					_this.$refs.runCode.$emit('runCode',0); //假装模拟下需要 终止倒计时
					/*uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '重新发送验证码'
					});*/
				},3000)
			},
			startRePass() {
				//重置密码
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
			    if (this.passData.length < 6||this.passData.length > 16) {
			        uni.showToast({
			            icon: 'none',
			    		position: 'bottom',
			            title: '登录密码错误！请重新输入'
			        });
			        return;
			    }
			 /*   var obj2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
			    if(obj2.test(passData)){
			    	return true;
			    }
			    else{
			    	uni.showToast({
			    	    icon: 'none',
			    		position: 'bottom',
			    	    title: '登陆密码错误！请重新输入'
			    	});
			    	return false;
			    }*/
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '短信验证码错误！请重新输入'
				    });
				    return;
				}
				console.log("重置密码成功")
				_this.isRotate=true
				setTimeout(function(){
					_this.isRotate=false
				},3000)
			},			
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("../login/css/login.css");
	@import url("../register/css/register.css");
	@import url("./css/forget.css");
</style>

