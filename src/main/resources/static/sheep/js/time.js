$(function(){
    /**
     * 用于显示头顶的实时时间的函数
     */
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

    setInterval(function(){
        var myDate = new Date();
        myDate.getYear();        // 获取当前年份(2位)
        myDate.getFullYear();    // 获取完整的年份(4位,1970-????)
        myDate.getMonth();       // 获取当前月份(0-11,0代表1月)
        myDate.getDate();        // 获取当前日(1-31)
        myDate.getDay();         // 获取当前星期X(0-6,0代表星期天)
        myDate.getTime();        // 获取当前时间(从1970.1.1开始的毫秒数)
        myDate.getHours();       // 获取当前小时数(0-23)
        myDate.getMinutes();     // 获取当前分钟数(0-59)
        myDate.getSeconds();     // 获取当前秒数(0-59)
        myDate.getMilliseconds();    // 获取当前毫秒数(0-999)
        myDate.toLocaleDateString();     // 获取当前日期
        myDate.toLocaleTimeString();     // 获取当前时间
        myDate.toLocaleString( );        // 获取日期与时间
        var days = myDate.getDay();
        switch(days){
            case 1:
                days='星期一';
                break;
            case 2:
                days='星期二';
                break;
            case 3:
                days='星期三';
                break;
            case 4:
                days='星期四';
                break;
            case 5:
                days='星期五';
                break;
            case 6:
                days='星期六';
                break;
            case 0:
                days='星期日';
                break;

        }
        var time1 = new Date().Format("yyyy年MM月dd日");
        var time2 = new Date().Format("hh:mm:ss");
        $(".showtime").html(time1+"&nbsp;&nbsp;&nbsp;&nbsp;"+time2+"&nbsp;&nbsp;&nbsp;&nbsp;"+days+"&nbsp;&nbsp;&nbsp;&nbsp;晴");
    },1000);

    /**
     * 异常情况
     */
    var ycqk = function(){
        var quyu = ["南区","北区","西区","东区"];
        var yichang = ["&nbsp;&nbsp;&nbsp;产子","&nbsp;&nbsp;&nbsp;斗殴","卡羊角","不吃食"];
        var now = new Date();
        for(var i=0;i<=10;i++){
            //查情提示部分
            var x = Math.round(Math.random()*3);
            var y = 1+Math.round(Math.random()*15);
            if(y<10){
                y = "&nbsp; "+y;
            }
            $("#cqts").append("<li><span>"+quyu[x]+""+y+"栋"+y+"号栏</span></li>");
            //异常提示部分
            $("#ycts li").each(function(index){
                var n = Math.round(Math.random()*3);
                var m = 1+Math.round(Math.random()*15);
                var day = Math.round(Math.random()*6);
                var hour = Math.round(Math.random()*20);
                var minute = Math.round(Math.random()*60);
                if(m<10){
                    m = "&nbsp; "+m;
                }
                var showtime = new Date();
                showtime.setDate(now.getDate()-day);
                showtime.setHours(now.getHours()-hour);
                showtime.setMinutes(now.getMinutes()-minute);
                $(this).append(
                    quyu[n]+""+m+"栋"+m+"号栏" +
                    yichang[n]+
                    showtime.Format('MM-dd hh:mm')
                );
            });
        }
    }
    ycqk();
});