<template>
	<view class="google_identify">
		<view class="content">
			<!-- 主体 -->
			<div class="title">
			    <a href="#" onclick="javascript:history.back(-1);">
			        <image src="../../static/back.png" mode="" @tap="back" class="arrow-box nav-left"></image>
			    </a>
			    <p class="font">谷歌验证</p>
			</div>
			<view class="main">	
				<div class="oldpasswordo">
				密钥
				</div>
				<wInput
					v-model="keyData"
					type="text"
					class="Gkey" 
					value='XXXXXXXXXXXXXX'
					maxlength="16"
					placeholder="请输入您的密钥"
					isShowPass
				></wInput>
				<div class="identify">
					谷歌验证
				</div>
				<wInput
					v-model="passData"
					type="text"
					class='Gcode'
					id="GCSCODE"
					maxlength="16"
					placeholder="请输入您的谷歌验证码"
					isShowPass
				></wInput>
			</view>
		</view>
		<wButton 
			class="wbutton"
			text="开启GOOGLE认证"
			:rotate="isRotate" 
			@click.native="startRePass()"
		></wButton>
		<div class="tips">
		    <p>1.安装在"Google Authenticator"应用程序中，点击右上角的"+"号，然后选择"手动输入验证码"。</p>
			<p>2.粘贴上面的"密钥"到"密钥"输入栏，并填写您的三度空间账号，点击"完成"。</p>
			<p>3.复制"谷歌验证"，粘贴到上面的"谷歌验证码"输入栏。请勿删除此双重验证密码账号，否则会导致您无法进行账户操作；如果误删，您可通过重置密钥重新获得。</p>
		</div>
	</view>
</template>

<script>
	var _this;
	import indexList from '../register/country.js'
	import wInput from '../../components/watch-login/watch-input.vue' //input
	import wButton from '../../components/watch-login/watch-button.vue' //button
	export default {
		data() {
			return {
				phoneData: "", //电话
				passData: "", //密码
				verCode:"", //手机验证码
				inputValue: '',
				show: false,
			}
		},
		onLoad() {
		},
		components:{
			wInput,
			wButton
		},
		mounted() {
			_this= this;
		},
		onShow() {
			_this = this;
			setTimeout(function() {
			_this.init();
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
			getVerCode(){
				console.log('%c复制','color:#ffffff');
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
			    icon: 'none',
				position: 'bottom',
			    title: '密钥已复制'
				});
			},
			startRePass() {
				//重置密码
				if(this.isRotate){
					//判断是否加载中，避免重复点击请求
					return false;
				} 
			},
//google验证之计算GcodeJS
/*function () {
    function HOTP(K, C)
    {
        var key = sjcl.codec.base32.toBits(K);
        // Count is 64 bits long.  Note that JavaScript bitwise operations make
        // the MSB effectively 0 in this case.
        var count = [((C & 0xffffffff00000000) >> 32), C & 0xffffffff];
        var otplength = 6;
        var hmacsha1 = new sjcl.misc.hmac(key, sjcl.hash.sha1);
        var code = hmacsha1.encrypt(count);
        var offset = sjcl.bitArray.extract(code, 152, 8) & 0x0f;
        var startBits = offset * 8;
        var endBits = startBits + 4 * 8;
        var slice = sjcl.bitArray.bitSlice(code, startBits, endBits);
        var dbc1 = slice[0];
        var dbc2 = dbc1 & 0x7fffffff;
        var otp = dbc2 % Math.pow(10, otplength);
        var result = otp.toString();
        while (result.length < otplength)
        {
            result = '0' + result;
        }
        return result
    }
    function GenerateTOTP() {
        var Gkeys = document.getElementsByClassName('Gkey')[0].value;
        var Gcodes = document.getElementsByClassName('Gcode')[0];
        var ctime = Math.floor((new Date() - 0) / 30000);
        var code = HOTP(Gkeys, ctime);
        Gcodes.innerText = code
    }
    function ConfigureHandlers()
    {
        setInterval(GenerateTOTP, 1500);
    }
    GenerateTOTP();
    ConfigureHandlers();*/
		},
	}
</script>

<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("../login/css/login.css");
	@import url("../register/css/register.css");
	@import url("../forget/css/forget.css");
	@import url("./css/google_identify.css");
</style>

