<template>
	<view>
		<!-- 按钮 -->
		<button 
			:class="['buttonBorder',!_rotate?'dlbutton':'dlbutton_loading']" 
			:style="{'background':bgColor, 'color': fontColor}"
            
			@click="$emit('click', $event)"
			@contact="$emit('contact', $event)"
			@error="$emit('error', $event)"
			@getphonenumber="$emit('getphonenumber', $event)"
			@getuserinfo="$emit('getuserinfo', $event)"
			@launchapp="$emit('launchapp', $event)"
			@longtap="$emit('longtap', $event)"
			@opensetting="$emit('opensetting', $event)"
			@touchcancel="$emit('touchcancel', $event)"
			@touchend="$emit('touchend', $event)"
			@touchmove="$emit('touchmove', $event)"
			@touchstart="$emit('touchstart', $event)"
		>
			<view :class="_rotate?'rotate_loop':''">
				<text v-if="_rotate" class="cuIcon cuIcon-loading1 "></text>
				<view v-if="!_rotate"><slot name="text">{{ text }}</slot></view>
			</view>
		</button>
	</view>
</template>

<script>
	export default{
		props:{
			text: String, //显示文本
			rotate:{
				//是否启动加载
				type: [Boolean,String],
				default: false,
			}, 
			bgColor:{
				//按钮背景颜色
				type: String,
				default: "linear-gradient(to right, rgba(72, 204, 155, 1.0),  rgba(72, 202, 154, 1.0),",//绿色
			},
			fontColor:{
				//按钮字体颜色
				type: String,
				default: "#3bca9d",
			},
		},
		computed:{
			_rotate() {
				//处理值
				return String(this.rotate) !== 'false'
			},
		}
	}
</script>

<style>
	@import url("./css/icon.css");
	
	.dlbutton {
		display: flex;
		/*justify-content: center;3d*/
		align-items: center;
		color:  #ffffff;
		font-size: 32rpx;
		white-space:nowrap;
		online:none;
		overflow: hidden;
		width:570rpx;
		height:80rpx;
		justify-content: space-around;
		/*background-color: #3bca9d;3d*/
		box-shadow:-6rpx 6rpx 0 hsl(110, 69%, 28%);
		border-radius:6px;
		margin-top: 0rpx;
		transition: top 0.01s linear;
		text-shadow: 0 1px 0 rgba(0,0,0,0.15);
		background-color: transparent;
		 border: 1px solid;
		 text-transform: uppercase;
	}
	
	.dlbutton:active{
		top:4rpx;
	}
	.dlbutton_loading {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ffffff;
		font-size: 30rpx;
		width:100rpx;
		height:100rpx;
			background-color: transparent;
		/*background:linear-gradient(to right, rgba(59, 202, 157, 1.0), rgba(59, 202, 157, 1.0));*/
		/*box-shadow: 0 0 0 1px #82c8a0 inset,/*3d下移
						0 0 0 2px rgba(255,255,255,0.15) inset,
						0 8rpx 0 0 rgba(126, 194, 155, .7),
						0 8rpx 0 1px rgba(0,0,0,.4),
						0 8rpx 8rpx 1px rgba(0,0,0,0.5);
						box-shadow: 0px 4px #87a86f;/*普通下移*/
		border-radius:1.5rem;
		margin-top: 0rpx;
	}
	.buttonBorder{/*边界*/
	   /* border: none ;*/
		border: 2px #3ACA9E solid;
	    border-radius: 1.5rem ;
		color: #3BCA9D;
	    -webkit-box-shadow: 0 0 60rpx 0 rgba(0,0,0,.2) ;
	  /* box-shadow: 0 0 0 1px #82c8a0 inset,/*3d下移
	   				0 0 0 2px rgba(255,255,255,0.15) inset,
	   				0 4rpx 0 0 rgba(126, 194, 155, .7),
	   				0 4rpx 0 1px rgba(0,0,0,.4),
	   				0 4rpx 8px 1px rgba(0,0,0,0.5);*/
					/*box-shadow: 0 0 #87a86f; background-color: #87a86f;普通下移*/
	    -webkit-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -moz-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -ms-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    -o-transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	    transition: all 0.4s cubic-bezier(.57,.19,.51,.95);
	}
	.buttonBorder:active{
			box-shadow: 0 0 0 1px #82c8a0 inset,
						0 0 0 2px rgba(255,255,255,0.15) inset,
						0 0 0 1px rgba(0,0,0,0.4);
	}
	/* 旋转动画 */
	.rotate_loop{
		
		-webkit-transition-property: -webkit-transform;
	    -webkit-transition-duration: 1s;
	    -moz-transition-property: -moz-transform;
	    -moz-transition-duration: 1s;
	    -webkit-animation: rotate 1s linear infinite;
	    -moz-animation: rotate 1s linear infinite;
	    -o-animation: rotate 1s linear infinite;
	    animation: rotate 1s linear infinite;
	}
	@-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
	    to{-webkit-transform: rotate(360deg)}
	}
	@-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
	    to{-moz-transform: rotate(359deg)}
	}
	@-o-keyframes rotate{from{-o-transform: rotate(0deg)}
	    to{-o-transform: rotate(359deg)}
	}
	@keyframes rotate{from{transform: rotate(0deg)}
	    to{transform: rotate(359deg)}
	}
</style>
