<template>
	<div style="width:100%;height:100%;" id="issues"></div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		mounted() {
			this.drawLine()
		},
		methods: { 
			drawLine(){
            let myChart = echarts.init(document.getElementById('issues'));	
            var salvProName =["陇南供水，供电总量","酒泉供水，供电总量","平凉供水，张掖总量","陇南供水，供电总量","庆阳供水，供电总量"];
            var salvProValue =[4202,7909,7250,1370,4080];
            var totalValue = [10000,10000,10000,10000,10000]	
            var option = {
                        grid: {
                            left: '8%',
                            right: '8%',
                            bottom: '2%',
                            top: '6%',
                            containLabel: false
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'none'
                            },
                            formatter: function(params) {
                                return params[0].name  + ' : ' + params[0].value
                            }
                        },
                        xAxis: {
                            show: false,
                            type: 'value'
                        },
                        yAxis: [{
                            type: 'category',
                            inverse: true,
                            axisLabel: {
                                show: true,
                                align: "left",
                                padding:[0,0,20,10],
                                textStyle: {
                                    color: '#fff',
                                    fontSize:10
                                },
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            data: salvProName
                        }, {
                            type: 'category',
                            inverse: true,
                            axisTick: 'none',
                            axisLine: 'none',
                            show: true,
                            axisLabel: {
                                padding:[0,0,20,-45],
                                
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: '10'
                                },
                                formatter: function(value) {
                                    return value.toLocaleString();
                                },
                            },
                            data:salvProValue
                        }],
                        series: [{
                                name: '值',
                                type: 'bar',
                                zlevel: 1,
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 30,
                                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                            offset: 0,
                                            color: 'rgb(57,89,255,1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgb(46,200,207,1)'
                                        }]),
                                    },
                                },
                                barWidth: 8,
                                data: salvProValue
                            },
                            {
                                name: '背景',
                                type: 'bar',
                                zlevel: 0,
                                barGap: '-100%',
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 30,
                                        color: 'rgba(24,31,68,1)',
                                    },
                                },
                                barWidth: 8,
                                data: totalValue
                            }
                        ]
                    }
                 myChart.setOption(option);
                 var salvProNamesrc =["兰州供水，供电总量","兰州新区供水，供电总量","敦煌供水，供电总量","天水供水，供电总量","武威供水，供电总量","白银供水，供电总量","定西供水，供电总量","嘉峪关供水，供电总量","临夏供水，供电总量","甘南供水，供电总量","金昌供水，供电总量"];
                var salvProValuesrc =[5084,1023,720,3903,4202,7909,7205,1307,4008,1903,3500];
                var key=0

                setInterval(function() {
                    

                salvProValue.shift();

                salvProName.shift();
                
                salvProValue.push(salvProValuesrc[key]);
                salvProName.push(salvProNamesrc[key]);

                key=(key+1)%10;
                
                myChart.setOption(option);
                }, 2000);
            }
        }
	}
</script>
