$(function (){
    /* 左上边的柱形图 */
    var myChart1 = echarts.init($("#illkind")[0]);
    var option1 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid:{
            top:'5%',
            left:'10%',
            right:'5%',
            bottom:'30%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'white',//左边线的颜色
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
                },
                interval:0, //时间间隔
                rotate:25,//旋转0°
            },
            data: ['小反刍', '口蹄疫', '传胸', '羊痘', '羊快疫', '其它传染病', '肺炎','感冒','寄生虫','乳房炎','其他普通病']
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'white',//左边线的颜色
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
            type: 'value'
        },
        series: [{
            data: [100, 150, 160, 170, 180, 190, 200,100,150,160,170],
            type: 'line',
            areaStyle: {}
        }]
    };
    myChart1.setOption(option1);
    /*右边第一张折线图*/
    var myChart2 = echarts.init($("#yxxill")[0]);
    var option2 = {
        color:['#ff0000','#ffff00'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['传染病', '普通病'],
            textStyle:{
                color:'#fff',
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
                    color: 'white',//左边线的颜色
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
                    color: '#fff'
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
                    color: 'white',//左边线的颜色
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
                name: '普通病',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210,21,120,152,163,140]
            },
            {
                name: '传染病',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310,85,156,485,265,125]
            }
        ]
    };

    myChart2.setOption(option2);
    /*柱形图*/
    var myChart3 = echarts.init($("#expertnum")[0]);
    var option3 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            orient: 'vertical',
            data: ['课堂直播','远程诊疗','专家咨询','智能问答'],
            textStyle:{
                color:'#fff',
                fontSize:'16px',
            }
        },
        /* legend: {
             orient: 'vertical',
             itemWidth: 10,
             itemHeight: 10,
             itemGap: 12,
             right: 5,
             top: 0,
             textStyle: { //图例文字的样式
                 color: "white",
                 fontSize: 12
             },
         },*/
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
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
                        color: 'white',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
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
                        color: 'white',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                type: 'value'
            }
        ],
        legend: {
            orient: 'vertical',
            color:['#ff0000'],
            right: 10,
            data: ['课堂直播','远程诊疗','专家咨询','智能问答']
        },
        series: [
            {
                type: 'bar',
                barWidth: '60%',

                data: [
                    { value: 2000, name: '课堂直播'},
                    { value: 1000, name: '远程诊疗'},
                    { value: 3000, name: '专家咨询'},
                    { value: 5000, name: '智能问答'}
                ],
                /*data: [2000,1000,3000,500],*/

                itemStyle: {
                    //通常情况下：
                    normal:{
                        color: function (params){
                            var colorList = ['#ff8000','#ffff04','#00ff00','#80ffff'];
                            return colorList[params.dataIndex];
                        },
                        label: {
                            show: true, //开启显示
                            position: 'inside', //在上方显示
                            textStyle: { //数值样式
                                color: '#0000ff',
                                fontSize: 16
                            }
                        }

                    }

                },

            }
        ]
    };
    myChart3.setOption(option3);
    /*圆形图*/
    var redius4 = ['50%', '30%'];
    var myChart4 = echarts.init($("#canwork1")[0]);
    var option4 = {
        series: [
            {
                color:['#ffff00','#00ff00'],
                type: 'pie',
                radius: redius4,// 配置饼图和环图的内圆和外圆的大小
                center: ['10%', '50%'],//配置图形的位置,前面一个是x轴,后面一个是y轴,'50%'代表是水平居中
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,//默认显示关闭,如果此处是true,则数据重叠
                        position: 'center',//显示的位置,center是饼环图中间显示,
                        formatter: '100%'//此处的7为假数据,其实就是下面data数组中的value相加,都可以取到的,但是此处都是模拟数据
                    },
                },
                data: [
                    { value: 2, name: '不合格1', label: { show: true } },
                    { value: 5, name: '合格1', label: { show: false } }
                    //此处label: { show: false }就是不让饼环图中间的数据改变,因为黑色消息窗可以改变,此处固定文本就行了.
                ]
            },
            {
                color:['#ff8040','#00ff00'],
                type: 'pie',
                radius: redius4,
                center: ['30%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: '100%'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                data: [
                    { value: 2, name: '不合格2', label: { show: true } },
                    { value: 5, name: '合格2', label: { show: false } },
                ]
            },
            {
                color:['#ff8080','#00ff00'],
                type: 'pie',
                radius: redius4,
                center: ['50%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '100%'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                data: [
                    { value: 2, name: '不合格3', label: { show: true } },
                    { value: 5, name: '合格3', label: { show: false } }
                ]
            },
            {
                color:['#8885fa','#00ff00'],
                type: 'pie',
                radius: redius4,
                center: ['70%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter:'100%'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                data: [
                    { value: 2, name: '不合格4', label: { show: true } },
                    { value: 5, name: '合格4', label: { show: false } }
                ]
            },
            {
                color:['#0080ff','#00ff00'],
                type: 'pie',
                radius: redius4,
                center: ['90%', '50%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        formatter: '100%'
                    },
                    emphasis: {
                        show: true,
                    }
                },
                data: [
                    { value: 2, name: '不合格5', label: { show: true } },
                    { value: 5, name: '合格5', label: { show: false } }
                ]
            }
        ]
    };
    myChart4.setOption(option4);
    window.onresize = function(){
        myChart1.resize();
        myChart2.resize();    //若有多个图表变动，可多写
        myChart3.resize();
        myChart4.resize();
    }
})