$(function(){
    var sheepInfo = new Object();
    /**
     * 获得跳转页面传递过来的参数，此处需要获得耳标号
     */
    var getUrlParam = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; //返回参数值
    }

    /**
     * 生成二维码
     */
    var getcode = function(){
        $("#qqcode").empty();
        $("#qqcode").qrcode(
            {
                width: 110,                       //宽度
                height: 90,                       //高度
                text: "http://qianmuyun.vip:8080/mobiletrace/main.php?id="+sheepInfo.eartagid //任意内容
            }
        );
    }
    getcode();

    /**
     * 获取羊只耳标号
     */
    var getEarNumberbyCondition = function(){
        $.ajax({
            url:"/listEarnumByCondition",
            type: "POST",
            dataType: "json",
            data:sheepInfo,
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                $("#earnum").empty();
                for(var i=0;i<resData.length;i++){
                   $("#earnum").append("<option value='"+resData[i]+"'>"+resData[i]+"</option>");
                }
                console.log("羊只页面");
                console.log($("#earnum"));
            }
        });
    }
    getEarNumberbyCondition();
    /**
     * 通过耳标号获取羊只信息
     */
    var getAge = function (bornYear,bornMonth,bornDay){
        var date = new Date();
        nowYear = date.getFullYear();
        nowMothon = date.getMonth()+1;
        nowDay = date.getDate();
        if(nowYear==bornYear){
            if(nowDay>=bornDay){
                age = nowMothon-bornMonth;
            }
        }else{
            if(nowMothon>=bornMonth){
                if(nowDay>=bornDay){
                    age = (nowYear-bornYear)*12+(nowMothon-bornMonth);
                }else{
                    age = (nowYear-bornYear)*12+(nowMothon-bornMonth-1);
                }
            }else{
                if(nowDay>=bornDay){
                    age = (nowYear-bornYear-1)*12+(nowMothon+(12-bornMonth));
                }else{
                    age = (nowYear-bornYear-1)*12+(nowMothon+(12-bornMonth)-1);
                }
            }
        }
        return age;
    }
    var getSheepByCondition = function (){
        $.ajax({
            url:"/selectSheepByCondition",
            type: "POST",
            dataType: "json",
            data:sheepInfo,
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                console.log(resData);

                if(resData[0].borntime != null){
                    bornYear = parseInt(resData[0].borntime.split("-")[0]);
                    bornMonth = parseInt(resData[0].borntime.split("-")[1]);
                    bornDay = parseInt(resData[0].borntime.split("-")[2].split(" ")[0]);
                    age = getAge(bornYear,bornMonth,bornDay);
                    $("#borntime").html(bornYear+'-'+bornMonth+'-'+bornDay);
                }else {
                    age = '';
                    $("#borntime").html('');
                }
                $("#age").html(age);
                $("#bornloc").html(resData[0].bornloc);
                $("#colour").html(resData[0].colour);
                $("#weight").html(resData[0].weight);
                $("#eartagid").html(resData[0].eartagid);
                $("#grade").html("一级");
                $("#farmloc").html(resData[0].farmloc);
                $("#species").html(resData[0].species);
                $("#stage").html(resData[0].stage);
                $("#leader").html("冉铭");
                $("#phone").html("14785236985");
                $("#feed_varieties").html("努比亚/波尔/黑山羊");
                $("#breed_kind").html("公羊/母羊");
                $("#feed_way").html("圈养");
                document.getElementById("sheepvideo").src = resData[0].video;
            }
        });
    }
    sheepInfo.eartagid = getUrlParam("eartagid");
    $("#earnum").find("option[value="+sheepInfo.eartagid+"]").attr("selected",true);
    getSheepByCondition();
    $("#earnum").change(function(){
        sheepInfo.eartagid = $("#earnum option:selected").val();
        getSheepByCondition();
        getcode();
    });
    /**
     * 环境画图
     */
    var myChart = echarts.init($("#query_environment")[0]);
    var radius = [30, 40];
    var picture = function(){
        var option = {
            series: [
                {
                    name: 'circle1',
                    color:['#0ad5ff'],
                    type: 'pie',
                    radius: radius,
                    center: ['20%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: "优",
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: 2, name: '水质', label: { show: true } },
                    ]
                },
                {
                    name: 'circle2',
                    color:['#ffcb89'],
                    type: 'pie',
                    radius: radius,
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: "优",
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: 2, name: '土壤', label: { show: true } },
                    ]
                },
                {
                    name: 'circle2',
                    color:['#2e7cff'],
                    type: 'pie',
                    radius: radius,
                    center: ['80%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: "优",
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: 2, name: '空气', label: { show: true } },
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }
    // 让我们的图表适配屏幕宽度
    picture();
    window.addEventListener("resize", function() {
        //   让我们图表调用resize方法
        myChart.resize();
    });


    /**
     * 证书
     */
    $("#zhengshu h1.title span").click(function(){
        $("#zhengshu").fadeOut(500);
        $("#zzc").css("display","none");
    });
    $("#zhengshu").draggable({
        cursor:"move",
        opacity:0.7,
        snap:true,
    });

    $("#sypt9").click(function(){
        $("#zs").attr("src","/sheep/img/yingyezhizhao.png")
        $("#zhengshu").find("#content").end().fadeIn(500);
        $("#zzc").css({
            opacity:0.6,
            display:"block"
        });
    });
    $("#sypt10").click(function(){
        $("#zs").attr("src","/sheep/img/dongwufangyi.png")
        $("#zhengshu").find("#content").end().fadeIn(500);
        $("#zzc").css({
            opacity:0.6,
            display:"block"
        });
    });
    $("#sypt11").click(function(){
        $("#zs").attr("src","/sheep/img/yukezheng.png")
        $("#zhengshu").find("#content").end().fadeIn(500);
        $("#zzc").css({
            opacity:0.6,
            display:"block"
        });
    });
    $("#sypt12").click(function(){
        $("#zs").attr("src","/sheep/img/shipinzheng.png")
        $("#zhengshu").find("#content").end().fadeIn(500);
        $("#zzc").css({
            opacity:0.6,
            display:"block"
        });
    });

});
