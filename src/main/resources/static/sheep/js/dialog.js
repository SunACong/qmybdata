/**
 * Created by Administrator on 2017/5/17.
 */
 $(function(){
	 /**
	  * 点击环境跳出弹框
	  */
	 $(".environment").click(function(event){
	     var event = event || e;
		 console.log("点击事件")
         console.log(event.currentTarget.id);  //获取id属性值
		 if(event.currentTarget.id == "environment1"){
			 $(".dialog1").find(".content").end().fadeIn(500);
		 }else if(event.currentTarget.id == "environment2"){
             $(".dialog3").find(".content").end().fadeIn(500);
         }else if(event.currentTarget.id == "environment3"){
             $(".dialog2").find(".content").end().fadeIn(500);
         }else if(event.currentTarget.id == "environment4"){
             $(".dialog4").find(".content").end().fadeIn(500);
         }else if(event.currentTarget.id == "environment5"){
             $(".dialog5").find(".content").end().fadeIn(500);
         }
		 // $(".dialog").find(".content").end().fadeIn(500);
		 $("#zzc").css({
			 opacity:0.6,
			 display:"block"
		 });
		 console.log("打开弹窗");
		 // $(".haha").get(0).play();
	 });
	 /**
	  * 弹框关闭
	  */
	 $(".dialog h1.title_close span").click(function(){
		 $(".dialog").fadeOut(500);
		 $("#zzc").css("display","none");
		 // $(".haha").get(0).pause();
	 });
	 /**
	  * 弹框拖拽
	  */
	 $(".dialog").draggable({
		 cursor:"move",
		 opacity:0.7,
		 snap:true,
	 });
	 //视频弹出框
	 // $(".yichang").on("click",function(){
		//  $(".dialog").find(".content").end().fadeIn(500);
		//  $("#zzc").css({
		// 	 opacity:0.6,
		// 	 display:"block"
		//  });
	 // });

	  //对时间进行格式化
	  Date.prototype.Format = function (fmt) { // author: meizz
		    var o = {
		        "M+": this.getMonth() + 1, // 月份
		        "d+": this.getDate(), // 日
		        "h+": this.getHours(), // 小时
		        "m+": this.getMinutes(), // 分
		        "s+": this.getSeconds(), // 秒
		        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
		        "S": this.getMilliseconds() // 毫秒
		    };
		    if (/(y+)/.test(fmt))
		        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		    for (var k in o)
		        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		            return fmt;
	  }
	  var now = new Date();
	 var environment1_click = function() {
		 $("#wendu").empty();
		 for (var i = 0; i < 20; i++) {
			 var showtime = new Date();
			 showtime.setDate(now.getDate() - i);
			 showtime.setHours(now.getHours() - Math.round(Math.random() * 3));
			 showtime.setMinutes(now.getMinutes() - Math.round(Math.random() * 60));
			 showtime.setSeconds(now.getSeconds() - Math.round(Math.random() * 60));
			 showtime = showtime.Format('yyyy-MM-dd hh:mm:ss');
			 var temp = 14 + Math.round(Math.random() * 9);
			 var humi = 55 + Math.round(Math.random() * 5);
			 var hti = (0.72 * (temp + humi) + 40.6).toFixed(2);
			 $("#wendu").append(
				 "<tr> " +
				 "<td>" + showtime + "</td>" +
				 "<td>" + temp + "</td>" +
				 "<td>温度正常</td>" +
				 "<td>" + humi + "%</td>" +
				 "<td>" + hti + "</td>" +
				 "<td>湿度正常</td>" +
				 "</tr>"
			 );
		 }
	 }
	 var environment2_click = function(){
		 $("#kongqi").empty();
		 for(var i=0;i<20;i++){
			 var showtime = new Date();
			 showtime.setDate(now.getDate()-i);
			 showtime.setHours(now.getHours()-Math.round(Math.random()*3));
			 showtime.setMinutes(now.getMinutes()-Math.round(Math.random()*60));
			 showtime.setSeconds(now.getSeconds()-Math.round(Math.random()*60));
			 showtime = showtime.Format('yyyy-MM-dd hh:mm:ss');
			 var anqi = 20+Math.round(Math.random()*5);
			 var HS = 5+Math.round(Math.random()*10);
			 var xijun = 5+Math.round(Math.random()*5);
			 var co2 = 1000*(1+Math.round(Math.random()*5));
			 $("#kongqi").append(
				 "<tr>" +
				 "<td>"+showtime+"</td>" +
				 "<td>"+anqi+"</td>" +
				 "<td>"+HS+"</td>" +
				 "<td>"+co2+"</td>" +
				 "<td>"+xijun+"</td>" +
				 "<td>1.5</td>" +
				 "</tr>"
			 );
		 }
	 }
	 var environment3_click = function(){
		 $("#shuizhi").empty();
		 for(var i=0;i<20;i++){
			 var showtime = new Date();
			 showtime.setDate(now.getDate()-i);
			 showtime.setHours(now.getHours()-Math.round(Math.random()*3));
			 showtime.setMinutes(now.getMinutes()-Math.round(Math.random()*60));
			 showtime.setSeconds(now.getSeconds()-Math.round(Math.random()*60));
			 showtime = showtime.Format('yyyy-MM-dd hh:mm:ss');
			 var ph = 5+Math.round(Math.random()*3);
			 $("#shuizhi").append(
				 "<tr><td>"+showtime+"</td>" +
				 "<td>"+ph+"</td>" +
				 "<td>水质正常</td>" +
				 "</tr>"
			 );
		 }
	 }
	 var environment4_click = function(){
		 $("#danqi").empty();
		 for(var i=0;i<20;i++){
			 var showtime = new Date();
			 showtime.setDate(now.getDate()-i);
			 showtime.setHours(now.getHours()-Math.round(Math.random()*3));
			 showtime.setMinutes(now.getMinutes()-Math.round(Math.random()*60));
			 showtime.setSeconds(now.getSeconds()-Math.round(Math.random()*60));
			 showtime = showtime.Format('yyyy-MM-dd hh:mm:ss');
			 var humi = 55+Math.round(Math.random()*5);
			 $("#danqi").append(
				 "<tr>"+
				 "<td>"+showtime+"</td>" +
				 "<td>"+humi+"%</td>" +
				 "<td>浓度正常</td>" +
				 "</tr>"
			 );
		 }
	 }
	 var environment5_click = function(){
		 $("#turang").empty();
		 for(var i=0;i<20;i++){
			 var showtime = new Date();
			 showtime.setDate(now.getDate()-i);
			 showtime.setHours(now.getHours()-Math.round(Math.random()*3));
			 showtime.setMinutes(now.getMinutes()-Math.round(Math.random()*60));
			 showtime.setSeconds(now.getSeconds()-Math.round(Math.random()*60));
			 showtime = showtime.Format('yyyy-MM-dd hh:mm:ss');
			 var ph = 5+Math.round(Math.random()*3);
			 $("#turang").append(
				 "<tr>"+
				 "<td>"+showtime+"</td>" +
				 "<td>"+ph+"%</td>" +
				 "</tr>"
			 );
		 }
	 }


	 $("#environment1").click(function(){
	 	environment1_click();
	 });
	 $("#environment2").click(function(){
		 environment2_click();
	 });
	 $("#environment3").click(function(){
		 environment3_click();
	 });
	 $("#environment4").click(function(){
		 environment4_click();
	 });
	 $("#environment5").click(function(){
		 environment5_click();
	 });

	  tixinghour = now.getHours();
	  if(tixinghour<12){
		  tth = "上午";
	  }else{
		  tth = "下午";
	  }
	  $("#tixingtime").html("任务/提醒&nbsp;&nbsp;"+now.Format('yyyy年MM月dd日')+"&nbsp;&nbsp;"+tth);

 });




