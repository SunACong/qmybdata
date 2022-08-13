var Token = localStorage.getItem('Token')
var baseUrl = baseUrl;
$(function(){
    var sheepInfo = new Object();
    // var sheepInfo = {"id":null,"recorddate":null,"ranch":null,"eartagid":null,"region":null,
    //     "buildingnum":null,"columnnum":null,"gender":null,"species":null,"type":null,"stage":null,
    //     "age":null,"colour":null,"weight":null,"video":null,"startdate":null,"enddate":null,"bak1":null,
    //     "bak2":null,"bak3":null,"createBy":null,"createDate":null,"updateBy":null,"updateDate":null,
    //     "remarks":null,"delFlag":null
    // }
    var getregionbuilsing = function(){
        $.ajax({
            url:"/selectSheepByCondition",
            type: "POST",
            contentType:"application/json",
            dataType: "json",
            async: false,
            data:JSON.stringify(sheepInfo),
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                console.log("第一个请求")
                console.log(resData);
            }
        });
    }

    /**
     * 获取羊只生活的环境
     */
    var getregion = function(){
        $.ajax({
            url:"/listAllregion1",
            type: "POST",
            dataType: "json",
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                console.log("获取区域");
                console.log(resData);
                $("#region").empty();
                for(var i=0;i<resData.length;i++){
                    $("#region").append("<option value='"+resData[i]+"'>"+resData[i]+"</option>");
                }
            }
        });
    }
    getregion();
    var getbuilding = function(){
        $.ajax({
            url:"/listAllbuilding1",
            type: "POST",
            dataType: "json",
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                $("#building").empty();
                for(var i=0;i<resData.length;i++){
                    $("#building").append("<option value='"+resData[i]+"'>"+resData[i]+"</option>");
                }
            }
        });
    }
    getbuilding();
    /**
     * 获取羊只类型种类
     */
    var getspecies = function(){
        $.ajax({
            url:"/listAllspecies",
            type: "POST",
            dataType: "json",
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                $("#sheep_special").empty();
                for(var i=0;i<resData.length;i++){
                    $("#sheep_special").append("<option value='"+resData[i]+"'>"+resData[i]+"</option>");
                }

            }
        });
    }
    getspecies();

    var gettype = function(){
        $.ajax({
            url:"/listAlltype",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                $("#sheep_type").empty();
                for(var i=0;i<resData.length;i++){
                    $("#sheep_type").append("<option value='"+resData[i]+"'>"+resData[i]+"</option>");
                }
            }
        });
    }
    gettype();
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
                $("#earnumber").empty();
                $("#earnumber").append(
                    "<tr style='background-color: #e15828;'>" +
                    "<td colspan='2'><span style='color:#ffffff;font-size: 16px;'>羊只编号</span>" +
                    "</td>" +
                    "</tr>"
                );
                for(var i=0;i<resData.length/2;i=i+2){
                    $("#earnumber").append(
                        "<tr>" +
                        "<td><a href='/query?eartagid="+resData[i]+"'><span style='color:#ffffff;font-size: 24px;'>"+resData[i]+"</span></a></td>" +
                        "<td><a href='/query?eartagid="+resData[i+1]+"'><span style='color:#ffffff;font-size: 24px;'>"+resData[i+1]+"</span></a></td>" +
                        "</tr>"
                    );
                }
                console.log("养殖场页面");
                console.log($("#earnumber"));
                $("#earnumber tr:odd").css('background-color','#000320');
                $("#earnumber tr:even").css('background-color','#1A2143');
            }
        });
    }
    sheepInfo.species = $("#sheep_special option:selected").val();
    sheepInfo.type = $("#sheep_type option:selected").val();
    getEarNumberbyCondition();
    $("#sheep_special").change(function(){
        sheepInfo.species = $("#sheep_special option:selected").val();
        getEarNumberbyCondition();
    });
    $("#sheep_type").change(function(){
        sheepInfo.type = $("#sheep_type option:selected").val();
        getEarNumberbyCondition();
    });
    /** ***********************************  左边第一张图   ************************************************************/
    /** ***********************************  左边第一张图   ************************************************************/
    /** ***********************************  左边第一张图   ************************************************************/
    /**
     * 左边第一张图的第一个部分
     */
    var left_1_1 = [];
    var left_1_2 = [];
    //获取左边第一张图的第一部分
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_1/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第一张图第一部分")
            left_1_1 = data.rows;
            console.log(left_1_1);
            var num = left_1_1[0].formatterdata+left_1_1[1].formatterdata+left_1_1[2].formatterdata;
            console.log("羊只总数："+ num);
            //总数
            $("#sheeptotal1").text(parseInt(num/10000));
            $("#sheeptotal2").text(parseInt(num%10000/1000));
            $("#sheeptotal3").text(parseInt(num%1000/100));
            $("#sheeptotal4").text(parseInt(num%100/10));
            $("#sheeptotal5").text(parseInt(num%10));
        },
        error: function (message) {
        },
    });
    //获取左边第一张图的第二部分
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_1_1/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第一张图第二部分")
            left_1_2 = data.rows;
            console.log(left_1_2);
        },
        error: function (message) {
        },
    });
    var myChart12 = echarts.init($("#nhy")[0]);
    var picture12 = function(){
        var option = {
            series: [
                {
                    name: 'circle1',
                    color:['#ffff02','#f55902'],
                    type: 'pie',
                    radius: ['100%', '85%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['20%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter:left_1_1[0].formatterdata+"只\n贵州\n黑山羊" , //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff',
                                fontSize:'14',
                            }
                        }
                    },
                    data: [
                        { value: left_1_1[0].value11, name: '不合格1', label: { show: true } },
                        { value: left_1_1[0].value12, name: '合格1', label: { show: false } }
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                },
                {
                    name: 'circle2',
                    color:['#ffff02','#f55902'],
                    type: 'pie',
                    radius: ['100%', '85%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter:left_1_1[1].formatterdata+"只\n波尔" ,
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff',
                                fontSize:'14',
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: left_1_1[1].value11, name: '不合格2', label: { show: true } },
                        { value: left_1_1[1].value12, name: '合格2', label: { show: false } },
                    ]
                },
                {
                    name: 'circle3',
                    color:['#ffff02','#f55902'],
                    type: 'pie',
                    radius: ['100%', '85%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['80%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter:left_1_1[2].formatterdata+"只\n杜泊" ,
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff',
                                fontSize:'14',
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: left_1_1[2].value11, name: '不合格3', label: { show: true } },
                        { value: left_1_1[2].value12, name: '合格3', label: { show: false } }
                    ]
                },


            ]
        };
        myChart12.setOption(option,true);
    };
    /**
     * 左边第一张图第二部分
     */
    var myChart11 = echarts.init($("#amountoflivestock")[0]);
    var picture11 = function(){
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left:'2%',
                top:'2%',
                bottom:'5%',
                right:'2%',
                containLabel:true
            },
            xAxis:  {
                type: 'value',
                x:'180',
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#ffffff'
                    }
                },
                axisLine:{
                    show: false,
                },
                axisTick: {
                    show: false  //取消坐标轴刻度线
                }
            },
            yAxis: {
                type: 'category',
                data: ['公羊数','母羊数','后备公羊数','后备母羊数','商品羊数','羔羊数'],
                splitLine: {
                    show: false
                },
                axisLabel: {
                    margin: 2,
                    show: true,
                    interval:0,//0：全部显示，1：间隔为1显示对应类目，2：依次类推，
                    rotate:0,//倾斜显示，-：顺时针旋转，+或不写：逆时针旋转
                    textStyle: {
                        color: '#ffffff',
                        fontSize:'10'
                    }
                },
                scale:true,//y轴的自适应(显示y轴上的所有标签)
            },
            series: [
                {
                    name: '存栏数',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [
                        left_1_2[0].sheepnum,
                        left_1_2[1].sheepnum,
                        left_1_2[2].sheepnum,
                        left_1_2[3].sheepnum,
                        left_1_2[4].sheepnum,
                        left_1_2[5].sheepnum
                    ],
                    itemStyle: {
                        normal: {
                            color:"#1c87ff"
                        }
                    }
                }
            ]
        };
        myChart11.setOption(option,true);
    };
    /** ***********************************  左边第二张图 : 生产统计  ************************************************************/
    /** ***********************************  左边第二张图 : 生产统计   ************************************************************/
    /** ***********************************  左边第二张图 : 生产统计  ************************************************************/
    //left_2=[空杯，发情，配种，总羊羔，哺乳，育肥前期，育肥后期，后备母羊，后备公羊]
    var left_2=[];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_2/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第二张:生产统计")
            left_2 = data.rows;
            console.log(left_2);
        },
        error: function (message) {
        },
    });
    var myChart21 = echarts.init($("#produce1")[0]);
    var picture21 = function(){
        var option = {
            grid: {
                left:'2%',
                top:'2%',
                bottom:'5%',
                right:'18%',
                containLabel:true
            },
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                right: 0,
                top: 3,
                textStyle: { //图例文字的样式
                    color: "white",
                    fontSize: 12
                },
            },
            series: [
                {
                    name: 'circle2',
                    color:['#7b00ff','#e8385e',"#007aff","#00d7e9"],
                    type: 'pie',
                    radius: ['70%', '45%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter:"育种" ,
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
                        {value: left_2[0].sheepnum, name: '空怀 '+left_2[0].sheepnum},
                        {value: left_2[1].sheepnum, name: '发情 '+left_2[1].sheepnum},
                        {value: left_2[2].sheepnum, name: '配种 '+left_2[2].sheepnum},
                    ]
                }

            ]
        };
        myChart21.setOption(option);
    }
    var myChart211 = echarts.init($("#produce2")[0]);
    var picture211 = function(){
        var option = {
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 6	,
                right: 22,
                top: 0,
                textStyle: { //图例文字的样式
                    color: "white",
                    fontSize: 12
                },
            },
            calculable : true,
            grid: {
                left:'2%',
                top:'2%',
                bottom:'5%',
                right:'18%',
                containLabel:true
            },
            series: [
                {
                    name: 'circle2',
                    color:['#7b00ff','#e8385e',"#007aff","#00d7e9"],
                    type: 'pie',
                    radius: ['70%', '45%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['30%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter:"生产" ,
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    /*data:[5400,1872,1620,1620,1944,216],*/
                    data: [
                        {value: left_2[3].sheepnum, name: '总产羔 '+left_2[3].sheepnum},
                        {value: left_2[4].sheepnum, name: '哺乳 '+left_2[4].sheepnum},
                        {value: left_2[5].sheepnum, name: '育肥前期 '+left_2[5].sheepnum},
                        {value: left_2[6].sheepnum, name: '育肥后期 '+left_2[6].sheepnum},
                        {value: left_2[7].sheepnum, name: '后备母羊 '+left_2[7].sheepnum},
                        {value: left_2[8].sheepnum, name: '后备公羊 '+left_2[8].sheepnum},
                    ]

                }

            ]
        };
        myChart211.setOption(option);
    }

    /** ***********************************  左边第三张图 : 死亡统计   ************************************************************/
    /** ***********************************  左边第三张图 : 死亡统计   ************************************************************/
    /** ***********************************  左边第三张图 : 死亡统计   ************************************************************/
    // var left_3=['公羊数','母羊数','后备公羊数','后备母羊数','商品羊数','羔羊数']
    var left_3=[];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_3/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第三张:死亡统计")
            left_3 = data.rows;
            var num = left_3[0].sheepnum+
                        left_3[1].sheepnum+
                        left_3[2].sheepnum+
                        left_3[3].sheepnum+
                        left_3[4].sheepnum+
                        left_3[5].sheepnum;
            $("#deathtotalnum").text(num);
            console.log(left_3);

        },
        error: function (message) {
        },
    });
    var myChart22 = echarts.init($("#death")[0]);
    var picture22 = function(){
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0,
                left:20	,
                bottom:25,
                containLabel:true
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data: ['公羊数','母羊数','后备公羊数','后备母羊数','商品羊数','羔羊数'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false  //取消坐标轴刻度线
                    },
                    axisLabel: {
                        show: true,
                        interval:0, //时间间隔
                        rotate:0,//旋转0°
                        textStyle: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize:'10'
                        }
                    },
                }

            ],
            yAxis : [
                {
                    type : 'value',
                    minInterval: 1,
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                        }
                    }
                }
            ],
            series : [
                {
                    name:'死亡统计',
                    type:'bar',
                    barWidth:'30',
                    data: [
                        left_3[0].sheepnum,
                        left_3[1].sheepnum,
                        left_3[2].sheepnum,
                        left_3[3].sheepnum,
                        left_3[4].sheepnum,
                        left_3[5].sheepnum,
                    ],
                    itemStyle: {
                        normal: {
                            color:"#1982ff",
                            label: {
                                show: true, //开启显示
                                position: 'inside', //在上方显示
                                textStyle: { //数值样式
                                    color: '#0000ff',
                                    fontSize: "16px"
                                }
                            }
                        }
                    }

                }
            ]
        };
        myChart22.setOption(option);
    }

    /** ***********************************  左边第四张图   ************************************************************/
    /** ***********************************  左边第四张图   ************************************************************/
    /** ***********************************  左边第四张图   ************************************************************/
    /**
     * 左边第四张图第一张表 饲料统计
     */
    //var left_4_1=[预混料,青草,干草,玉米,麸皮,豆粕,其他];
    var left_4_1=[];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_4_1/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第四张图第一张表 饲料统计")
            left_4_1 = data.rows;
            var num =   left_4_1[0].number+
                        left_4_1[1].number+
                        left_4_1[2].number+
                        left_4_1[3].number+
                        left_4_1[4].number+
                        left_4_1[5].number+
                        left_4_1[6].number;
            $("#siliao").text(num);
            console.log(left_4_1);

        },
        error: function (message) {
        },
    });
    //var left_4_2=['保健类','疫苗类','抗生素类','常规类']
    var left_4_2=[100,100,100,100];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_left_4_2/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("左边第四张图第二张表 兽药统计")
            left_4_2 = data.rows;
            console.log(left_4_2);
            var num =   left_4_2[0].number+
                left_4_2[1].number+
                left_4_2[2].number+
                left_4_2[3].number;
            $("#shouyao").text(num);
        },
        error: function (message) {
        },
    });
    var myChart31 = echarts.init($("#forage")[0]);
    var picture31 = function(){
        option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },

            series : [
                {
                    name:'饲料',
                    type:'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: left_4_1[0].number, name: '预混料 \n'+left_4_1[0].number},
                        {value: left_4_1[1].number, name: '青草\n'+left_4_1[1].number},
                        {value: left_4_1[2].number, name: '干草\n'+left_4_1[2].number},
                        {value: left_4_1[3].number, name: '玉米\n'+left_4_1[3].number},
                        {value: left_4_1[4].number, name: '麸皮\n'+left_4_1[4].number},
                        {value: left_4_1[5].number, name: '豆粕\n'+left_4_1[5].number},
                        {value: left_4_1[6].number, name: '其他\n'+left_4_1[6].number},
                    ],
                    itemStyle: {
                        //通常情况下：
                        normal:{
                            color: function (params){
                                var colorList = ['#e8385e','#2e7dff','#e5850c','#172e9e','#00c800','#00d7e9','#7b01fc'];
                                return colorList[params.dataIndex];
                            },
                            label: {
                                show: true, //开启显示

                                textStyle: { //数值样式
                                    color: '#ffffff',
                                    fontSize: "12"
                                }
                            }
                        }

                    },
                }
            ]
        };
        myChart31.setOption(option);
    }
    /**
     * 左边第四张图第二张表  兽药统计
     */
    var myChart32 = echarts.init($("#drug")[0]);
    var picture32= function(){
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                x: 46,
                y:30,
                x2:32,
                y2:40,
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
//	                    data: medcineTitle,
                    data: ['保健类','疫苗类','抗生素类','常规类'],

                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false  //取消坐标轴刻度线
                    },
                    axisLabel: {
                        show: true,
                        interval:0, //时间间隔
                        rotate:25,//旋转25°
                        textStyle: {
                            color: '#a4a7ab',
                            /* align: 'inside',*/
                            fontSize:'10',
                            color:"#ffffff"
                        }
                    },
                    axisLine:{
                        /* lineStyle:{
                             color:'#00c6ff',
                         }*/
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,

                        textStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'兽药统计',
                    type:'bar',
                    barWidth:'20',
                    data:[
                        left_4_2[0].number,
                        left_4_2[1].number,
                        left_4_2[2].number,
                        left_4_2[3].number,
                    ],

                    itemStyle: {
                        normal:{
                            color: "#1982ff",
                            label: {
                                show: true, //开启显示
                                position: 'top', //在上方显示
                                textStyle: { //数值样式
                                    color: '#ffffff',
                                    fontSize: "12px"
                                }
                            }

                        }

                    }

                }
            ]
        };
        myChart32.setOption(option);
    }



    /** ***********************************  中间第一张图   ************************************************************/
    /** ***********************************  中间第一张图   ************************************************************/
    /** ***********************************  中间第一张图   ************************************************************/
    //var mid=[{优,良，差}]
    var mid = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/mid/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("中间表 : 完成率")
            mid = data.rows;
            console.log(mid);
        },
        error: function (message) {
        },
    });
    var myChartC21 = echarts.init($("#myChartC21")[0]);
    var pictureC21 = function(){
        var option = {
            legend: {
                orient: 'vertical',
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                left: '91%',
                top: '5%',
                textStyle: { //图例文字的样式
                    color: "white",
                    fontSize: 12
                },
            },
            series: [
                {
                    color:['#3db4ff','#1eb76b','#cb5368'],
                    type: 'pie',
                    radius: ['85%', '60%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['8%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter: '90%',//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                    },
                    data: [
                        { value: mid[0].excellent, name: '优', label: { show: true } },
                        { value: mid[0].good, name: '良', label: { show: true } },
                        { value: mid[0].poor, name: '差', label: { show: true } },
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                },
                {
                    type: 'pie',
                    radius: ['85%', '60%'],
                    center: ['23%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: '95%',
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: mid[1].excellent, name: '优', label: { show: true } },
                        { value: mid[1].good, name: '良', label: { show: true } },
                        { value: mid[1].poor, name: '差', label: { show: true } },
                    ]
                },
                {
                    type: 'pie',
                    radius: ['85%', '60%'],
                    center: ['38%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '93%',
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: mid[2].excellent, name: '优', label: { show: true } },
                        { value: mid[2].good, name: '良', label: { show: true } },
                        { value: mid[2].poor, name: '差', label: { show: true } },
                    ]
                },
                {
                    type: 'pie',
                    radius: ['85%', '60%'],
                    center: ['53%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: '95%',
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: mid[3].excellent, name: '优', label: { show: true } },
                        { value: mid[3].good, name: '良', label: { show: true } },
                        { value: mid[3].poor, name: '差', label: { show: true } },
                    ]
                },
                {
                    type: 'pie',
                    radius: ['85%', '60%'],
                    center: ['68%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: '97%',
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: mid[4].excellent, name: '优', label: { show: true } },
                        { value: mid[4].good, name: '良', label: { show: true } },
                        { value: mid[4].poor, name: '差', label: { show: true } },
                    ]
                },
                {
                    type: 'pie',
                    radius: ['85%', '60%'],
                    center: ['83%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: '95%',
                            textStyle: {
                                fontWeight: 'bold',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    data: [
                        { value: mid[5].excellent, name: '优', label: { show: true } },
                        { value: mid[5].good, name: '良', label: { show: true } },
                        { value: mid[5].poor, name: '差', label: { show: true } },
                    ]
                }
            ]
        };
        myChartC21.setOption(option);
    }


    /** ***********************************  右边第一张图   ************************************************************/
    /** ***********************************  右边第一张图   ************************************************************/
    /** ***********************************  右边第一张图   ************************************************************/
    var environmentdata = ['96.04HTI','55%RH','7个/m3','15PPM','6PH'];
    var getCountL11 = function(){
        $.ajax({
            url:"/qmybdata01/environmentGet",
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data:areahouse,
            async: false,
            error: function () {
                console.error("请求错误！");
            },
            success: function (resData) {
                environmentdata.length = 0;
                console.log("resData:"+ resData);
                environmentdata.push(resData['水质']);
                environmentdata.push(resData['温湿度']);
                environmentdata.push(resData['空气']);
                environmentdata.push(resData['氨气']);
                environmentdata.push(resData['土壤']);
            }
        });
    }
    var myChartL11 = echarts.init($("#environment1")[0]);
    var pictureL11 = function(){
        var option = {
            series: [
                {
                    name: 'circle1',
                    color:['#0ad5ff'],
                    type: 'pie',
                    radius: ['95%', '70%'],// 配置饼图和环图的内圆和外圆的大小
                    center: ['50%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,//默认显示关闭,如果此处是true,则数据重叠
                            position: 'center',//显示的位置,center是饼环图中间显示,
                            formatter: "温湿度"+"\n"+environmentdata[0], //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            textStyle: {
                                fontWeight: 'normal',              //标题颜色
                                color: '#ffffff'
                            }
                        },
                    },
                    data: [
                        { value: 2, name: '温湿度', label: { show: true } },
                        //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                    ]
                }
            ]
        };
        //每隔十秒钟更新一次
        /* setInterval(function () {
             //隔十秒重新获取数据一次
             getCountL11();
             //隔十秒把需要修改的数据重新赋值给myChartL11
             //name：不同的series通过这个名字对应
             myChartL11.setOption({
                series: [
                    {
                        name: 'circle1',
                        label: {
                            normal: {
                                show: false,//默认显示关闭,如果此处是true,则数据重叠
                                position: 'center',//显示的位置,center是饼环图中间显示,
                                formatter: environmentdata[0] //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            },
                        },
                    },
                    {
                        name: 'circle2',
                        label: {
                            normal: {
                                show: false,//默认显示关闭,如果此处是true,则数据重叠
                                position: 'center',//显示的位置,center是饼环图中间显示,
                                formatter: environmentdata[1] //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            },
                        },
                    },
                    {
                        name: 'circle3',
                        label: {
                            normal: {
                                show: false,//默认显示关闭,如果此处是true,则数据重叠
                                position: 'center',//显示的位置,center是饼环图中间显示,
                                formatter: environmentdata[2] //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            },
                        },
                    },
                    {
                        name: 'circle4',
                        label: {
                            normal: {
                                show: false,//默认显示关闭,如果此处是true,则数据重叠
                                position: 'center',//显示的位置,center是饼环图中间显示,
                                formatter: environmentdata[3] //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            },
                        },
                    },
                    {
                        name: 'circle5',
                        label: {
                            normal: {
                                show: false,//默认显示关闭,如果此处是true,则数据重叠
                                position: 'center',//显示的位置,center是饼环图中间显示,
                                formatter: environmentdata[4] //此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                            },
                        },
                    }
                    ]
              });
            }, 10000); */

        myChartL11.setOption(option);
    }
    var myChartL12 = echarts.init($("#environment2")[0]);
    var pictureL12 = function(){
        var option = {
            series: [
                {
                    name: 'circle2',
                    color:['#ffcb89'],
                    type: 'pie',
                    radius: ['95%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: "水质"+"\n"+environmentdata[1],
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
                }
            ]
        };
        myChartL12.setOption(option);
    }
    var myChartL13 = echarts.init($("#environment3")[0]);
    var pictureL13 = function(){
        var option = {
            series: [
                {
                    name: 'circle3',
                    color:['#2e7cff'],
                    type: 'pie',
                    radius: ['95%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: "空气"+"\n"+environmentdata[2],
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
        myChartL13.setOption(option);
    }
    var myChartL14 = echarts.init($("#environment4")[0]);
    var pictureL14 = function(){
        var option = {
            series: [
                {
                    name: 'circle4',
                    color:['#4cffd3'],
                    type: 'pie',
                    radius: ['95%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: "氮气"+"\n"+environmentdata[3],
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
                        { value: 2, name: '氮气', label: { show: true } },
                    ]
                }
            ]
        };
        myChartL14.setOption(option);
    }
    var myChartL15 = echarts.init($("#environment5")[0]);
    var pictureL15 = function(){
        var option = {
            series: [
                {
                    name: 'circle5',
                    color:['#feb602'],
                    type: 'pie',
                    radius: ['95%', '70%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: "土壤"+"\n"+environmentdata[4],
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
            ]
        };
        myChartL15.setOption(option);
    }

    /** ***********************************  右边第二张图 ：疫病监测   ************************************************************/
    /** ***********************************  右边第二张图 ：疫病监测   ************************************************************/
    /** ***********************************  右边第二张图 ： 疫病监测   ************************************************************/
    //var right_2 = ['小反刍','口蹄疫','传胸','羊痘','其他传染病','肺炎','乳房炎','感冒','寄生虫','其他普通病'];
    var right_2 = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_right_2/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("右边第二张表 : 疫病监测")
            right_2 = data.rows;
            console.log(right_2);
        },
        error: function (message) {
        },
    });
    var myChartL21 = echarts.init(document.getElementById('sickmonitor'));
    var pictureL21 = function(){
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 40,
                textStyle: { //图例文字的样式
                    color: "#a4a7ab",
                    fontSize: 12
                }
            },
            calculable : true,

            xAxis : [
                {
                    type : 'category',
                    data:['小反刍','口蹄疫','传胸','羊痘','其他传染病','肺炎','乳房炎','感冒','寄生虫','其他普通病'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false  //取消坐标轴刻度线
                    },
                    axisLabel: {
                        show: true,
                        interval:0,
                        rotate:20,
                        textStyle: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize:'10'
                        }
                    },
                }
            ],
            grid: {
                x:'10%',
                x2:'5%',
                y:'20%',
                y2:'25%',
                borderWidth: 0
            },
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                }
            ],
            series : [
                {
                    name:'未治愈',
                    type:'bar',
                    stack: '广告',
                    barWidth:'60%',
                    data:[
                        right_2[0].nocure,
                        right_2[1].nocure,
                        right_2[2].nocure,
                        right_2[3].nocure,
                        right_2[4].nocure,
                        right_2[5].nocure,
                        right_2[6].nocure,
                        right_2[7].nocure,
                        right_2[8].nocure,
                        right_2[9].nocure,
                    ],
                    itemStyle:{
                        normal:{
                            color:"#1afffd"
                        }
                    }
                },
                {
                    name:'治愈',
                    type:'bar',
                    stack: '广告',
                    data:[
                        right_2[0].cure,
                        right_2[1].cure,
                        right_2[2].cure,
                        right_2[3].cure,
                        right_2[4].cure,
                        right_2[5].cure,
                        right_2[6].cure,
                        right_2[7].cure,
                        right_2[8].cure,
                        right_2[9].cure,
                    ],
                    itemStyle:{
                        normal:{
                            color:"#2e7cff"
                        }
                    }
                }
            ]
        };
        myChartL21.setOption(option);
    };

    /** ***********************************  右边第三张图 : 疫病检测   ************************************************************/
    /** ***********************************  右边第三张图 : 疫病检测   ************************************************************/
    /** ***********************************  右边第三张图 : 疫病检测    ************************************************************/
    var right_3=[];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_right_3/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("右边第二张表 : 疫病监测")
            right_3 = data.rows;
            console.log(right_3);
        },
        error: function (message) {
        },
    });
    var myChartL22 = echarts.init($("#quarantine")[0]);
    var pictureL22 = function(){
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter:'{c}%'
            },
            grid: {
                x:'10%',
                x2:'5%',
                y:'20%',
                y2:'25%',
                borderWidth: 0
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
//                        data: detectionTitle,
                    data:['布病（阴性）','小反刍（抗体）','口蹄疫（抗体）','传胸（抗体）','羊痘（抗体）'],
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false  //取消坐标轴刻度线
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,    //强制文字产生间隔
                        rotate: 10,     //文字逆时针旋转10°
                        textStyle: {
                            color: '#ffffff',
                            align: 'center',
                            fontSize:'10'
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#ffffff'
                        }
                    },
                }
            ],
            series : [{
                name:'合格率',
                type:'bar',
                barWidth:'30',
                data:[
                    right_3[0].number,
                    right_3[1].number,
                    right_3[2].number,
                    right_3[3].number,
                    right_3[4].number,
                ],
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                '#d7504b','#c6e579','#f4e001','#f0805a','#26c0c0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        label:{
                            show: true,
                            position: 'top',
                            formatter: '{c}%'
                        }
                    }
                }
            }]

        };
        myChartL22.setOption(option);
    }


    /** ***********************************  右边第四张图左边 : 销售统计  ************************************************************/
    /** ***********************************  右边第四张图左边 : 销售统计    ************************************************************/
    /** ***********************************  右边第四张图左边 : 销售统计    ************************************************************/
    var right_4_1 = [];
    $.ajax({
        type: "GET",
        url: baseUrl + "/qmy/qmy_right_4_1/list?pageNum=1&pageSize=10",
        async: false,
        headers: {
            'Authorization': "Bearer "+Token,
        },
        success: function(data){
            console.log("右边第四张表左边 : 销售统计")
            right_4_1 = data.rows;
            console.log(right_4_1);
            var num =   right_4_1[0].number+
                right_4_1[1].number+
                right_4_1[2].number;
            $("#saletotal2").text(num);

        },
        error: function (message) {
        },
    });
    var myChartL23 = echarts.init($("#sale")[0]);
    var pictureL23 = function(){
        option = {
            series : [
                {
                    name:'销售统计',
                    type:'pie',
                    radius : '90%',
                    center: ['50%', '50%'],
                    roseType : 'area',
                    x: '50%',               // for funnel
                    max: 40,                // for funnel
                    sort : 'ascending',     // for funnel
                    data:[
                        {value:right_4_1[0].number, name:right_4_1[0].sheeptype+' \n'+right_4_1[0].number,
                            itemStyle: {
                                normal: {
                                    color:"#45c0ff"
                                }
                            }},
                        {value:right_4_1[1].number, name:right_4_1[1].sheeptype+' \n'+right_4_1[1].number,
                            itemStyle: {
                                normal: {
                                    color:"#e15828"
                                }
                            }},
                        {value:right_4_1[2].number, name:right_4_1[2].sheeptype+' \n'+right_4_1[2].number,
                            itemStyle: {
                                normal: {
                                    color:"#ff81cb"
                                }
                            }}

                    ] ,
                    itemStyle: {
                        //通常情况下：
                        normal:{
                            label: {
                                show: true, //开启显示
                                textStyle: { //数值样式
                                    color: '#ffffff',
                                    fontSize: "12",

                                }
                            }
                        }

                    }

                }
            ]
        };
        myChartL23.setOption(option);
    }
    picture11();
    picture12();
    picture21();
    picture211();
    picture22();
    picture31();
    picture32();
    pictureC21();
    pictureL11();
    pictureL12();
    pictureL13();
    pictureL14();
    pictureL15();
    pictureL21();
    pictureL22();
    pictureL23();
    window.onresize = function(){
        myChart11.resize();
        myChart12.resize();
        myChart21.resize();
        myChart211.resize();
        myChart22.resize();
        myChart31.resize();
        myChart32.resize();
        myChartC21.resize();
        myChartL11.resize();
        myChartL12.resize();
        myChartL13.resize();
        myChartL14.resize();
        myChartL15.resize();
        myChartL21.resize();
        myChartL22.resize();
        myChartL23.resize();
    }


})
