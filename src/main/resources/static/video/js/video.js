/**
 * 数据库：t_video
 * 根据area和house可以选择需要播放视频的设备序列号和通道号（三个视频包含的视频通道号）
 * 如果需要展示不同的视频，就需要在数据库中添加对应的展示信息
 */
$(function(){
	var tokenInfo = new Object();
	var videoInfo = new Object();
	var tokenInfoArray = new Array();
	var videoInfoArray = new Array();

	/**
	 * 通过这个来查询需要播放的视频信息
	 */
	videoInfo.area = $("#region option:selected").val();
	videoInfo.house = $("#building option:selected").val();

	/*
	 * 实现功能：一开始就从数据库获取token
	 * 参数：管理员的账号，或者登陆者的账号
	 * 返回值：accessToken，expireTime，appKey，appSecret
	 * */
	var tokenUpdate = function(){
		$.ajax({
			  url:"/video/updateTokenInfoByPrimaryKey",
			  type: "GET",
			  data : tokenInfo,
			  dataType: "json",
			  async: false,
			  error: function () {
					console.error("请求错误！");
			  },
			  success: function (resData) {
				if(resData==false){
					console.error("更新失败!");
				}
			  }
		  });
	}

	/*
	 * 实现功能：获取acceaaToken,每七天更新一次,从网上直接获取
	 * 参数：appKey，appSecret
	 * */
	var tokenGetFromNet = function(){
		$.ajax({
			host:"open.ys7.com",
			url: "https://open.ys7.com/api/lapp/token/get?appKey="+tokenInfo.appKey+"&appSecret="+tokenInfo.appSecret,
			type: "POST",
			// contentType:"application/json;charset=utf8",防止出现跨域问题
			contentType:"application/x-www-form-urlencoded",
			dataType: "json",
			async: false,
			error: function () {
				console.error("请求错误！");
			},
			success: function (resData) {
				if(resData.code=="200"){
				//获取成功后，将重新获取的值赋值给accessToken
					tokenInfo.accessToken = resData.data.accessToken;
					tokenInfo.expireTime = resData.data.expireTime;
				//同时更新数据库里面原有的值
				   tokenUpdate();
				}else if(resData.code=="10001"){
					console.error("参数为空或格式不正确");
				}else if(resData.code=="10005"){
					console.error("appKey被冻结");
				}else if(resData.code=="10017"){
					console.error("请确认appKey是否正确");
				}else if(resData.code=="10030"){
					console.error("appkey和appSecret不匹配");
				}else if(resData.code=="49999"){
					console.error("接口调用异常");
				}else{
					console.error("未知异常");
				}
			}
		});
	}
	/*
	 * 实现功能：一开始就从数据库获取token
	 * 参数：管理员的账号，或者登陆者的账号
	 * 返回值：accessToken，expireTime，appKey，appSecret
	 * */
	tokenInfo.name = "xuyang";
	var tokenGetFromSql = function(){
		$.ajax({
			  url:"/video/selectTokenInfoByName",  //
			  type: "POST",
			  data: tokenInfo,
			  dataType: "json",
			  async: false,  //将ajax设置为同步的模式，否则只能在success里面又值，在外面面就没有值
			  error: function () {
					console.error("请求错误！");
			  },
			  success: function (resData) {
			  	if(resData.accessToken=="expire" || resData.accessToken=="undefined"){
					  //更新从网上重新获取accessToken
					console.error("token已经过期，重新从网上获取！");
					tokenInfo.id = resData.id;
					tokenInfo.accessToken = resData.accessToken;
					tokenInfo.appKey = resData.appKey;
					tokenInfo.appSecret = resData.appSecret;
					tokenInfo.expireTime = resData.expireTime;
					tokenInfo.name = resData.name;
					tokenGetFromNet();
			  	}else{
			  		tokenInfo.accessToken = resData.accessToken;
			  		tokenInfo.appKey = resData.appKey;
			  		tokenInfo.appSecret = resData.appSecret;
			  		tokenInfo.expireTime = resData.expireTime;
			  		tokenInfo.name = resData.name;
			  	}
			  }
		  });
	}
	tokenGetFromSql();
	//获得播放的信息，包括机器序列号，播放的通道
	var videoPlayInfo = function(){
		  $.ajax({
			  url:"/video/selectVideoInfoByCondition",  //
			  type: "POST",
			  data: videoInfo,
			  dataType: "json",
			  async: false,
			  error: function (errData) {
				  console.log(errData);
				console.error("没能成功获取设备序列号等信息！");
			  },
			  success: function (resData) {
			  	console.log("播放视频信息："+resData);
			  	console.log(resData);
				for(var i=0;i<resData.length;i++){
					var videoInfoSingle = new Object;
					for(var n in resData[i]){
						videoInfoSingle[n] = resData[i][n];
					}
					videoInfoArray[i] = videoInfoSingle;
				}
				  console.log("视频信息数组:" + videoInfoArray);
				  console.log(videoInfoArray);
			  }
		  });
	}
	videoPlayInfo();

	/**
	 * 开始播放视频
	 * @param v1
	 * @param v2
	 * @param v3
	 */
	tokenGetFromSql();
	var player01 = new EZUIKit.EZUIKitPlayer({
		id: 'ysopen', // 视频容器ID
		accessToken: tokenInfo.accessToken,
		url: "ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[0]+".hd.live",
		template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
		autoplay: true,
		audio: 0
	 });
	var player02 = new EZUIKit.EZUIKitPlayer({
		id: 'myplay1', // 视频容器ID
		accessToken: tokenInfo.accessToken,
		url: "ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[1]+".hd.live",
		template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
		autoplay: true,
		audio: 0
	 });
	var player03 = new EZUIKit.EZUIKitPlayer({
		id: 'myplay2', // 视频容器ID
		accessToken: tokenInfo.accessToken,
	  //url: "ezopen://QRYLOJ@open.ys7.com/D23359911/"+v3+".live",
		url: "ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[2]+".hd.live",
		template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
		autoplay: true,
		audio: 0
	 });

	/**
	 * 根据选择选择播放视频
	 */
	$("#region").change(function (){
		videoInfo.area = $("#region option:selected").val();
		videoPlayInfo();
		player01.stop()
			.then(()=>{
				player01.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[0]+".hd.live"
				);
			});
		player02.stop()
			.then(()=>{
				player02.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[1]+".hd.live"
				);
			});
		player03.stop()
			.then(()=>{
				player03.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[2]+".hd.live"
				);
			});
	});
	$("#building").change(function (){
		videoInfo.house = $("#building option:selected").val();
		videoPlayInfo();
		player01.stop()
			.then(()=>{
				player01.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[0]+".hd.live"
				);
			});
		player02.stop()
			.then(()=>{
				player02.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[1]+".hd.live"
				);
			});
		player03.stop()
			.then(()=>{
				player03.play(
					"ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo.split(",")[2]+".hd.live"
				);
			});
	});

	/*
     * 直播的形式播放，但是我通过这种方式改变不了它的URL，不知道该如何获取其URL并进行改变
     *
     */
	var playVideo1 = function(){
		var player01 = new EZUIKit.EZUIKitPlayer({
			id: 'ysopen', // 视频容器ID
			accessToken: tokenInfo.accessToken,
			url: "ezopen://open.ys7.com/"+videoInfoArray[0].deviceSerial+"/"+videoInfoArray[0].channelNo+".live",
			template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
			autoplay: true,
			audio: 0
		});
	}
    /*
	 * 函数作用：用于获取设备的信息和直播地址
	 * 参数：accessToken
	 * 返回值：  deviceSerial：个人名下的所有设备序列号
	 *       channelNo：可以直播的channel
	 *       hdAddress：m3u8的直播链接
	 *       hdFlvAddress：flv的直播链接
	 *       rtmpHd：rtmp的直播链接
	 *
	*/
	var device = new Array();
	var getDeviceInfofromNet = function(){
		 $.ajax({
			host:"open.ys7.com",
			url: "https://open.ys7.com/api/lapp/live/video/list?accessToken="+message.accessToken,
			type: "POST",
			contentType:"application/x-www-form-urlencoded;charset=utf8",
			dataType: "json",
			async: false,
			error: function () {
				console.error("请求错误！");
			},
			success: function (resData) {
				if(resData.code=="200"){
					for(var i=0;i<resData.page.total;i++){
					  var dic = {'deviceSerial':'','channelNo':'','flvAddress':'','hdAddress':'','hdFlvAddress':'','liveAddress':'','rtmp':'','rtmpHd':'','status':''}
						if(resData.data[i].exception==0){
						   dic['deviceSerial'] = resData.data[i].deviceSerial; //E54486958
						   dic['channelNo'] = resData.data[i].channelNo;   //1,2,3,4
						   dic['flvAddress'] = resData.data[i].flvAddress; //https://flvopen.ys7.com:9188/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3.flv
						   dic['hdAddress'] = resData.data[i].hdAddress;  //http://hls01open.ys7.com/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3.hd.m3u8
						   dic['hdFlvAddress'] = resData.data[i].hdFlvAddress; //https://flvopen.ys7.com:9188/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3.hd.flv
						   dic['liveAddress'] = resData.data[i].liveAddress; //http://hls01open.ys7.com/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3.m3u8
						   dic['rtmp'] = resData.data[i].rtmp; //rtmp://rtmp01open.ys7.com/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3
						   dic['rtmpHd'] = resData.data[i].rtmpHd;//rtmp://rtmp01open.ys7.com/openlive/47ef8cc7f0b343b1bfd32d3c7cd3d0c3.hd
						   dic['status'] = resData.data[i].status;//播放状态
						   device.push(dic);
						}else if(resData.data[i].exception==1){
						  console.error(resData.data[i].deviceSerial+"设备不在线！");
						}else if(resData.data[i].exception==2){
						  console.error("设备开启视频加密！");
						}else if(resData.data[i].exception==3){
						  console.error("设备删除！");
						}else if(resData.data[i].exception==4){
						  console.error("失效！");
						}else if(resData.data[i].exception==5){
						  console.error("未绑定！");
						}else if(resData.data[i].exception==6){
						  console.error("账户下流量已超出！");
						}else if(resData.data[i].exception==7){
						  console.error("设备接入限制！");
						}else {
						  console.error("其他未知原因！");
						}
					  console.log(device);
					}
				}else if(resData.code=="10001"){
					console.error("参数为空或格式不正确");
				}else if(resData.code=="10002"){
					console.error("accessToken过期或不正常");
				}else if(resData.code=="10005"){
					console.error("appKey被冻结");
				}else if(resData.code=="10017"){
					console.error("确认appKey是否正确");
				}else if(resData.code=="10030"){
					console.error("appkey和appSecret不匹配");
				}else if(resData.code=="49999"){
					console.error("接口调用异常");
				}else{
				    console.error("未知异常");
				}
			}
		});
	}


});


