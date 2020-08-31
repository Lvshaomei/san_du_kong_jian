<template>
	<view class="pay_change">
		<view class="content">
			<!-- 主体 -->
			<div class="title">
			    <a href="#" onclick="javascript:history.back(-1);">
			        <image src="../../static/back.png" mode="" @tap="back" class="arrow-box nav-left"></image>
			    </a>
			    <p class="font">修改支付密码</p>
			</div>
			<view class="username">
				<div>正在为您的账号{{userdata}}修改支付密码</div>
			</view>
			<view class="main">	
			<!--图形验证码-->
				<view class="conte">
					<xl-slider-verify @success="verifySuccess" :reset="false"></xl-slider-verify>
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
				<div class="oldpasswordo">
					原支付密码
				</div>
				<wInput
					v-model="passData0"
					type="password"
					maxlength="11"
					placeholder="请输入您的原支付密码"
					isShowPass
				></wInput>
				<div class="newpasswordo">
					新支付密码
				</div>
				<wInput
					v-model="passData"
					type="password"
					maxlength="11"
					placeholder="请设置新支付密码"
					isShowPass
				></wInput>
			</view>
		</view>
		<wButton 
			class="wbutton"
			text="确认修改"
			:rotate="isRotate" 
			@click.native="startRePass()"
		></wButton>
	</view>
</template>

<script>
	var _this;
	import indexList from '../register/country.js'
	import xlSliderVerify from '@/components/xl-slider-verify/xl-slider-verify.vue'
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				passData0:"",
				verCode:"", //手机验证码
				inputValue: '',
				isRotate:false,
				show: false,
				userdata:"hb0617",
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
			}, 1000)
		},
		computed: {
		        username() {
		            return this.$store.state.username
		        }
		    },
		computed: mapState({
		    user: state => state.user   //将这个值赋值给变量user
		}),
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
			getVerCode(){
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
			    if (this.passData0.length < 6||this.passData0.length > 16) {
			        uni.showToast({
			            icon: 'none',
			    		position: 'bottom',
			            title: '原支付密码错误！请重新输入'
			        });
			        return false;
			    }
			   /* var obj2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
			    if(obj2.test(passData)){
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
					console.log("修改支付密码成功")
					_this.isRotate=false
				},3000)
			},
		},
	}					
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("../login/css/login.css");
	@import url("../register/css/register.css");
	@import url("../forget/css/forget.css");
	@import url("./css/pay_change.css");
</style>

