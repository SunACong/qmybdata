var baseUrl = baseUrl;
$(function (){
    $.ajax({
        type: "POST",
        // url: baseUrl + "/login",
        url: baseUrl + "/login",
        async: false,
        data:JSON.stringify({"username":"admin","password":"admin123"}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data){
            localStorage.setItem('Token',data.token);  //将变量uid(值为1000)存储至本地
            console.log(localStorage.getItem('Token'));  //获取本地存储中uid的值(1000)
        },
        error: function (message) {
        },
    });

    //chart1
    var ageArea = [];
    var FbarData = [];
    var MbarData = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_left_1/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            for (let i = 0; i < data.rows.length; i++) {
                ageArea.push(data.rows[i].week)
                FbarData.push(data.rows[i].sale);
                MbarData.push(data.rows[i].total);
            }
            console.log(FbarData);
            console.log(MbarData);
        },
        error: function (message) {
        },
    });

    //chart2
    var value2 = [];
    var name=[];
    var tatal2;
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_left_2/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            value2.push(data.rows[0].whitegoat);
            value2.push(data.rows[0].dubaisheep);
            value2.push(data.rows[0].blackgoat);
            value2.push(data.rows[0].boersheep);
            value2.push(data.rows[0].nubiansheep);
            name = ['白山羊 '+value2[0],'杜柏羊 '+value2[1],'黑山羊 '+value2[2],'波尔 '+value2[3],'努比亚 '+value2[4]];
            tatal2 = value2[0]+value2[1]+value2[2]+value2[3]+value2[4];
            $("#total").text("总存栏数："+tatal2+" 只");
        },
        error: function (message) {
        },
    });
    //chart3
    var value3_1 = [];
    var value3_2 = [];
    var value3_3 = [];
    var sale;
    var sheep_type=[];
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_left_3/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            sheep_type.push(data.rows[0].man);
            $("#man").text("种公羊"+sheep_type[0]+"只");
            sheep_type.push(data.rows[0].women);
            $("#women").text("种母羊"+sheep_type[1]+"只");
            sheep_type.push(data.rows[0].salesheep);
            $("#saleSheep").text("商品羊"+sheep_type[2]+"只");
            sale = data.rows[0].ablesale;
            $("#sale").text("出售量："+sale+" 只");
            value3_1.push(data.rows[0].mansale);
            value3_1.push(data.rows[0].mantotal);
            value3_2.push(data.rows[0].womensale);
            value3_2.push(data.rows[0].womentotal);
            value3_3.push(data.rows[0].salesheepsale);
            value3_3.push(data.rows[0].salesheeptotal);
        },
        error: function (message) {
        },
    });


    //chart4
    var infectiousDisease = [];
    var commonDisease = [];
    var number = [] //[新增，死亡]
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_left_4/list?pageNum=1&pageSize=20",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            for (i=0;i<12;i++){
                infectiousDisease.push(data.rows[i].newadd);
                commonDisease.push(data.rows[i].newadd);
            }
            number.push(data.rows[12].newadd);
            $("#newAdd").text("新增"+number[0]+"只");
            number.push(data.rows[12].death);
            $("#death").text("死亡"+number[1]+"只");
        },
        error: function (message) {
        },
    });


    //预警
    var yujingData = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_right_1/list?pageNum=1&pageSize=20",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            for (i=0;i<data.rows.length;i++) {
                yujingData.push([data.rows[i].diseasetype,data.rows[i].grade,data.rows[i].address])
            }

        },
        error: function (message) {
        },
    });

    //疫病检疫合格率
    var pass = [];
    var noPass = [];
    var passRate = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_right_3/list?pageNum=1&pageSize=20",
        async: false,
        headers: {
            'Authorization': "Bearer "+localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            for (i=0;i<data.rows.length;i++){
                pass.push(data.rows[i].pass);
                noPass.push(data.rows[i].nopass);
            }
            passRate = [
                Math.floor(pass[0]*100/(pass[0]+noPass[0])),
                Math.floor(pass[1]*100/(pass[1]+noPass[1])),
                Math.floor(pass[2]*100/(pass[2]+noPass[2])),
                Math.floor(pass[3]*100/(pass[3]+noPass[3])),
                Math.floor(pass[4]*100/(pass[4]+noPass[4])),
            ]
        },
        error: function (message) {
        },
    });

    //右下角最后一块数据
    var lastMould = [];
    var platform;
    var online;
    $.ajax({
        type: "GET",
        url: baseUrl + "/deal/deal_right_4/list?pageNum=1&pageSize=20",
        async: false,
        headers: {
            'Authorization': "Bearer "+ localStorage.getItem('Token'),
        },
        success: function(data){
            console.log(data.rows);
            for (i=0;i<4;i++){
                lastMould.push(data.rows[i].number);
            }
            platform = data.rows[4].number;
            $("#platform").text(platform+"人次");
            online = data.rows[5].number;
            $("#online").text(online+"人次");
        },
        error: function (message) {
        },
    });
    /**
     * 牧场信息
     * @type {Object}
     */
    var pastureInfo = {};
    /**
     * 交易信息
     * @type {Object}
     */
    var tradeInfo = {};

    var myChart1 = echarts.init($("#left1")[0]);
    var picture1 = function(){


        option1 = {
            color: ["#5BD8EE", "#01FFFF"],
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function(params, ticket, callback) {
                    console.log(params)
                    var res = params[0].name;
                    for (var i = 0, l = params.length; i < l; i++) {
                        res += '<br/>' + params[i].seriesName + ' : ' + Math.abs(params[i].value);
                    }
                    setTimeout(function() {
                        // 仅为了模拟异步回调
                        callback(ticket, res);
                    }, 500)
                    return res;
                }
            },
            legend: {
                data: ['总存栏', '可出售'],
                textStyle: {
                    color: '#C7C6D1',
                    fontSize:14
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:'15%',
                containLabel: true
            },
            xAxis: [{
                axisLabel: {
                    formatter: function(value) {
                        return Math.abs(value); //显示的数值都取绝对值
                    },
                    show: true,
                    textStyle: {
                        color: '#C7C6D1'
                    },
                },
                type: 'value'
            }],
            yAxis: [{
                type: 'category',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#C7C6D1'
                    },
                },
                axisTick: {
                    show: false
                },
                data: ageArea
            }],
            series: [
                {
                    name: '总存栏',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideLeft',
                            formatter: function(v) {
                                return Math.abs(v.data)
                            },
                            color:'#000000'
                        }
                    },
                    data: MbarData
                },
                {
                    name: '可出售',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight',
                            formatter: function(v) {
                                return Math.abs(v.data)
                            },
                            color:'#000000'
                        }
                    },
                    data: FbarData
                }
            ]
        };
        myChart1.setOption(option1);
    }
    var myChart2 = echarts.init($("#left2")[0]);
    var picture2 = function(){
        option2 = {
            color:['#00FF00','#00FEFF','#E7491E',"#FEF000","#0685BA"],
            legend: {
                textStyle: {
                    color: ['#00FF00','#00FEFF','#E7491E',"#FEF000","#0685BA"],
                    fontSize:12
                },
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 5,
                right: 0,
                top: 0,
            },
            grid: {
                top: '0%',
                left: '0%',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            series: [
                {
                    name: '面积模式',
                    label: {
                        normal: {
                            show: true,//默认显示关闭,如果此处是true,则数据重叠
                            color:'#C7C6D1'
                        },
                    },
                    type: 'pie',
                    radius: [15, 35],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    data: [
                        {value: value2[0], name: name[0]},
                        {value: value2[1], name: name[1]},
                        {value: value2[2], name: name[2]},
                        {value: value2[3], name: name[3]},
                        {value: value2[4], name: name[4]},

                    ]
                }
            ]
        };
        myChart2.setOption(option2);
    }

    var myChart3 = echarts.init($("#left3")[0]);
    var picture3 = function(){
        option3 = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            color:['orange','#00ffff'],
            series: [
                {
                    name: '同比增幅\n'+(value3_1[0]+value3_1[1]),//配置formatter时候会用到(就是{a})
                    type: 'pie',
                    radius: ['80%', '100%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['18%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,

                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter: '\n{a}\n',//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            color:'#C7C6D1'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: value3_1[0], name: '总存栏', label: { show: true } },
                        { value: value3_1[1], name: '可出售', label: { show: false } },
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                },
                {
                    name: '同比增幅\n'+(value3_2[0]+value3_3[1]),//配置formatter时候会用到(就是{a})
                    type: 'pie',
                    radius: ['80%', '100%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['50%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter:  '\n{a}\n',//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            color:'#C7C6D1'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: value3_2[0], name: '总存栏', label: { show: true } },
                        { value: value3_2[1], name: '可出售', label: { show: false } },
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                },
                {
                    name: '同比增幅\n'+(value3_3[0]+value3_3[1]),//配置formatter时候会用到(就是{a})
                    type: 'pie',
                    radius: ['80%', '100%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['80%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter:  '\n{a}\n',//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            color:'#C7C6D1'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: value3_3[0], name: '总存栏', label: { show: true } },
                        { value: value3_3[1], name: '可出售', label: { show: false } },
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                }
            ]
        };
        myChart3.setOption(option3);
    }

    var myChart4 = echarts.init($("#left4")[0]);
    var picture4 = function(){
        var option4 = {
            color:['#ff0000','#ffff00'],
//  	   		       tooltip: {
//  				        trigger: 'axis',
//  				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//  				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
//  				        }
//  				    },
            legend: {
                data: ['普通病', '传染病'],
                textStyle:{
                    color:'#C7C6D1',
                    fontSize:'16px',
                }

            },
            grid:{
                top:'5%',
                left:'10%',
                right:'5%',
                bottom:'20%',
                containLable:true,
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#C7C6D1',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                boundaryGap: false,
                splitLine:{
                    show:false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#C7C6D1'
                    },
                    interval:0, //时间间隔
                    rotate:25,//旋转0°
                },
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#C7C6D1',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                splitLine:{
                    show:false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [
                {
                    name: '传染病',
                    type: 'line',
                    stack: '总量',
                    data: infectiousDisease,
                },
                {
                    name: '普通病',
                    type: 'line',
                    stack: '总量',
                    data: commonDisease,
                }

            ]
        };
        myChart4.setOption(option4);
    }



    //疫病检疫合格率
    var myChart5 = echarts.init($("#right1")[0]);
    var picture5 = function(){
        var option5 = {
            grid:{
                top:'5%',
                left:'10%',
                right:'5%',
                bottom:'20%',
                containLable:true,
            },
            series: [
                {
                    color:['#ffff00','#0186FF'],
                    type: 'pie',
                    radius: ['60%', '90%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['10%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter: passRate[0]+'%'//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                        },
                    },
                    data: [
                        { value: noPass[0], name: '不合格1', label: { show: true } },
                        { value: pass[0], name: '合格1', label: { show: false } }
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                },
                {
                    color:['#ff8040','#0186FF'],
                    type: 'pie',
                    radius: ['60%', '90%'],
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: passRate[1]+'%'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: noPass[1], name: '不合格2', label: { show: true } },
                        { value: pass[1], name: '合格2', label: { show: false } },
                    ]
                },
                {
                    color:['#ff8080','#0186FF'],
                    type: 'pie',
                    radius: ['60%', '90%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: passRate[2]+'%'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: noPass[2], name: '不合格3', label: { show: true } },
                        { value: pass[2], name: '合格3', label: { show: false } }
                    ]
                },
                {
                    color:['#8885fa','#0186FF'],
                    type: 'pie',
                    radius: ['60%', '90%'],
                    center: ['70%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: passRate[3]+'%'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: noPass[3], name: '不合格4', label: { show: true } },
                        { value: pass[3], name: '合格4', label: { show: false } }
                    ]
                },
                {
                    color:['#00C5FF','#0186FF'],
                    type: 'pie',
                    radius: ['60%', '90%'],
                    center: ['90%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter:passRate[4]+'%'
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: noPass[4], name: '不合格5', label: { show: true } },
                        { value: pass[4], name: '合格5', label: { show: false } }
                    ]
                }
            ]
        };
        myChart5.setOption(option5);
    }

    // 最后一块


    var myChart6 = echarts.init($("#right3")[0]);
    var picture6 = function(){
        var option6 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                show:true,
                data:['课堂直播','远程诊疗','专家咨询','智能问答'],
                top:2,
                right:'10%',
                textStyle:{
                    color:'#C7C6D1',
                    fontSize:'16px'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '0%',
                top:'10%',
                containLabel: true
            },
            xAxis: [
                {
                    splitLine:{
                        show:false
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#C7C6D1',//左边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#C7C6D1'
                        }
                    },
                    type: 'category',
                    data: ['课堂直播','远程诊疗','专家咨询','智能问答'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    splitLine:{
                        show:false
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#C7C6D1',//左边线的颜色
                            width:'2'//坐标线的宽度
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#C7C6D1'
                        }
                    },
                    type: 'value'
                }
            ],
            series: [
                {
                    type: 'bar',
                    barWidth: '60%',
                    data: lastMould,
                    itemStyle: {
                        //通常情况下：
                        normal:{
                            color: function (params){
                                var colorList = ['#ff8000','#ffff04','#00ff00','#80ffff'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#FCFBFC',
                                    fontSize: 16
                                }
                            }

                        }

                    },

                }
            ]
        };
        myChart6.setOption(option6);
    }

    var yujing = function(){
        for(var i=0;i<yujingData.length;i++){
            $("#yujing").append(
                "<tr>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;color:#5AFE0A;'><span>"+yujingData[i][0]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;color:#5AFE0A;'><span>"+yujingData[i][1]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;color:#5AFE0A;'><span>"+yujingData[i][2]+"</span></td>" +
                "</tr>"
            );
        }
    }
    yujing();
    var speed = 100;
    eachtrheight2 =yujingtable.clientHeight/10;
    function Marquee2(){
        if(yujingscroll.scrollTop>=(10-5)*eachtrheight2){
            yujingscroll.scrollTop = 0;
        }else{
            yujingscroll.scrollTop++;
        }
    }
    MyMar2 = setInterval(Marquee2, speed);
    yujingscroll.onmouseover = function() {
        clearInterval(MyMar2);
    }
    yujingscroll.onmouseout = function() {
        MyMar2 = setInterval(Marquee2, speed);
    }

    var compy = [];
    var leader = [];
    var phone = [];
    var number = [];
    var amount = [];
    var getPastureInfoByCondition = function(){
        $.ajax({
            url:"/selectPastureInfoByCondition",
            type: "POST",
            contentType:"application/json",
            dataType: "json",
            async: false,
            data:JSON.stringify(pastureInfo),
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                for(var i=0;i<resData.length;i++){
                    compy[i] = resData[i].ranch;
                    leader[i] = resData[i].leader;
                    phone[i] = resData[i].phone;
                    number[i] = resData[i].number;
                    amount[i] = resData[i].amount;
                }
            }
        });
    }
    getPastureInfoByCondition();
    var muchang = function(){
        for(var i=0;i<compy.length;i++){
            $("#muchang").append(
                "<tr style='height:10%;'>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;cursor:pointer;'><a href='/qmy'><span style='color:#C7C6D1;'>"+compy[i]+"</span></a></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;cursor:pointer;'><a href='/qmy'><span style='color:#C7C6D1;'>"+leader[i]+"</span></a></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+phone[i]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+amount[i]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+number[i]+"</span></td>" +
                "</tr>"
            );
        }
        $("#muchang tr:odd").css('background-color','#000320');
        $("#muchang tr:even").css('background-color','#1A2143');

    }
    muchang();

    /*运输模块的数据部分*/
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

    var chufadi = [];
    var mudd = [];
    var yangking = [];
    var number = [];
    var gettransprot = function(){
        $.ajax({
            url:"/selectTradeInfoByCondition",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            data: JSON.stringify(tradeInfo),
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                for(var i=0;i<resData.length;i++){
                    chufadi[i] = resData[i].chufadi;
                    mudd[i] = resData[i].arriving;
                    yangking[i] = resData[i].goods;
                    number[i] = resData[i].num;
                }
            }
        });
    }

    gettransprot();
    var yunshu = function(){
        for(var i=0;i<mudd.length;i++){
            var showtime = new Date();
            showtime.setDate(now.getDate()-2*i);
            showtime = showtime.Format('yyyy.MM.dd');
            $("#yunshu").append(
                "<tr>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+chufadi[i]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+mudd[i]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+showtime+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+yangking[i]+"</span></td>" +
                "<td style='padding-bottom: 1%;padding-top: 1%;'><span>"+number[i]+"</span></td>" +
                "</tr>"
            )
        }
        $("#yunshu tr:odd").css('background-color','#F0AB32');
        $("#yunshu tr:even").css('background-color','#1E2042');
        $("#yunshu tr:odd").css('color','#000000');
    }
    yunshu();
    eachtrheight1 = yunshutable.clientHeight / mudd.length;
    function Marquee1(){
        if(yunshuscroll.scrollTop>=(mudd.length-4)*eachtrheight1){
            yunshuscroll.scrollTop = 0;
        }else{
            yunshuscroll.scrollTop++;
        }
    }
    var MyMar1 = setInterval(Marquee1, speed);
    yunshuscroll.onmouseover = function() {
        clearInterval(MyMar1);
    }
    yunshuscroll.onmouseout = function() {
        MyMar1 = setInterval(Marquee1, speed);
    }

    picture1();
    picture2();
    picture3();
    picture4();
    picture5();
    picture6();
    window.onresize = function(){
        myChart1.resize();
        myChart2.resize();    //若有多个图表变动，可多写
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
        myChart6.resize();
    }
})
