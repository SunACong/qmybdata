/* 用于疫情病例和普通病例画图 */
$(function(){
    var myChart = echarts.init($("#yxxill")[0]);
    var option = {
        color:['#ff0000','#ffff00'],
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
                data: [1, 0, 0, 1, 1, 0, 0,1,0,1,0,0]
            },
            {
                name: '普通病',
                type: 'line',
                stack: '总量',
                data: [10, 10, 15, 8, 7, 8, 7,6,5,1,8,10]
            }

        ]
    };

    myChart.setOption(option);
    window.onresize = function(){
        myChart.resize();
    }
});