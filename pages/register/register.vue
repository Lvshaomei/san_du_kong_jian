<template>
	<view class="register">
		<view class="content">
			<div class="title">
			     <a href="#" onclick="javascript:history.back(-1);">
			        <image src="../../static/back.png" border="0" mode="" @tap="back" class="arrow-box nav-left"></image>
			     </a>
			</div>
			<div class="word">
				注册
			</div>
			<!-- 主体 -->
			<view class="main">
				<view class="content1">
				<wInput
					v-model="nameData"
					type="text"
					maxlength="16"
					placeholder="用户名(3-16字母+数字)"
					>
				</wInput>
					<view class="uni-form-item uni-column input-phone">
						<wInput 
							class="uni-input" 
							v-model="phoneData"
							type="number"
							maxlength="11"
							@input="onKeyInput($event)"
							placeholder="请输入手机号"
						/>
					</view>
					<wInput
						class="international" 
						v-model="numberData"
						type="number"
						maxlength="5"
						placeholder="请输入国家区号"
					 />
					<wInput
						v-model="passData"
						type="password"
						maxlength="16"
						placeholder="登录密码(6-16字母+数字)"
						isShowPass
					></wInput>
					<wInput
						v-model="passData1"
						type="number"
						maxlength="6"
						placeholder="支付密码(6位纯数字)"
						isShowPass
					></wInput>
					<view class="codeView">
						<view class="conte">
							<xl-slider-verify @success="verifySuccess" :reset="false"></xl-slider-verify>
						</view>
					</view>
					<wInput
						v-model="verCode"
						type="number"
						maxlength="4"
						placeholder="短信验证码"
						isShowCode
						ref="runCode"
						@setCode="getVerCode()"
					></wInput>
				</view>
				<wButton 
					class="wbutton"
					text="注 册"
					:rotate="isRotate" 
					@click.native="startReg()"
				></wButton>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;
	import xlSliderVerify from '../../components/xl-slider-verify/xl-slider-verify.vue'//滑动验证码
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	export default {
		data() {
			return {
				logoImage: '../../static/images/logo.png',//logo图
				nameData: '',//用户名
				phoneData: '', // 手机号
				passData: '', //登录密码
				passData1: '',//支付密码
				verCode: "", //手机验证码
				isRotate: false, //是否加载旋转
				numberData:'',
				inputValue: '',
				show: false,
				width: 120,
				height: 48,	
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
			_this = this;	
		},
		onShow() {
			_this = this;
			setTimeout(function() {		
			}, 1000)	
		},
		methods: {
			onKeyInput(event) 
			{//手机号
				  if(event.data!=null){
				  }
				 this.inputValue = event.data;   
			},
			pull(){
			    this.show = this.show == false?true:false
			      },
		      phone(item){
	          this.phonetittle = '('+item.cn +')'+ item.code
		      },
			getVerCode(){
				//获取验证码		
				/*if (_this.phoneData.length != 11) {
				     uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '手机号错误！请重新输入'
				    });
				    return false;
				}
				/*	var obj1 = /^\d{1,}$/;
				if(obj1.test(phoneData)){
					return true;
				}
				else{
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '手机号错误！请重新输入'
					});
					return false;
				}*/
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
		    startReg() {
				//注册
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				
				if (this.nameData.length <3||this.nameData.length >16 ){
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '用户名错误！请重新输入'
				    });
				    return false;
				}
			/*	var obj1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
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
		        if (this.passData.length < 6||this.passData.length > 16) {
		            uni.showToast({
		                icon: 'none',
						position: 'bottom',
		                title: '登录密码错误！请重新输入'
		            });
		            return false;
		        }
				/*var obj2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
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
				if (this.passData1.length != 6) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '支付密码错误！请重新输入'
				    });
				    return false;
				}
			/*	var obj3 = /^\d{1,}$/;
				if(obj3.test(passData1)){
					return true;
				}
				else{
					uni.showToast({
					    icon: 'none',
						position: 'bottom',
					    title: '支付密码错误！请重新输入'
					});
					return false;
				}*/
				if (this.verCode.length != 4) {
				    uni.showToast({
				        icon: 'none',
						position: 'bottom',
				        title: '短信验证码错误！请重新输入'
				    });
				    return false;
					}
				_this.isRotate=true
				setTimeout(function(){
					console.log("注册成功")
					_this.isRotate=false
				},3000)
		    },
			refresh: function() {
				this.init();
			},
			canvasIdErrorCallback: function(e) {
				console.error(e.detail.errMsg)
			}
		}
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("../login/css/login.css");
	@import url("./css/register.css");
</style>