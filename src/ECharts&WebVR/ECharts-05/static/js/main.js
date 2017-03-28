;(function(global){


    function splitData(rawData) {
        var categoryData = [];
        var values = [];
        var volumns = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i][0]);
            values.push([rawData[i][1],rawData[i][2],rawData[i][3],rawData[i][4],rawData[i][5]]);
            volumns.push(rawData[i][5]);
        }
        return {
            categoryData: categoryData,
            values: values,
            volumns: volumns
        };
    }

    function calculateMA(dayCount, data) {
        var result = [];
        for (var i = 0, len = data.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += parseFloat(data.values[i - j][1]);
            }
            result.push(+(sum / dayCount).toFixed(3));
        }
        return result;
    }

    function initOption(title, startValue, endValue, data){

        return ({

            title: {
                text: title
            },
            backgroundColor: '#eee',
            animation: false,
            legend: {
                data: [title + ' Index', 'MA5', 'MA10', 'MA20', 'MA30']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                },
                backgroundColor: 'rgba(245, 245, 245, 0.8)',
                borderWidth: 1,
                borderColor: '#ccc',
                padding: 10,
                textStyle: {
                    color: '#000'
                },
                extraCssText: 'width: 170px'
            },
            axisPointer: {
                link: {xAxisIndex: 'all'},
                label: {
                    backgroundColor: '#777'
                }
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    brush: {
                        type: ['lineX', 'clear']
                    }
                }
            },
            brush: {
                xAxisIndex: 'all',
                brushLink: 'all',
                outOfBrush: {
                    colorAlpha: 0.1
                }
            },
            grid: [
                {
                    left: '10%',
                    right: '8%',
                    height: '50%'
                },
                {
                    left: '10%',
                    right: '8%',
                    top: '72%',
                    height: '16%'
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    data: data.categoryData,
                    scale: true,
                    boundaryGap : false,
                    axisLine: {onZero: false},
                    splitLine: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        z: 100
                    }
                },
                {
                    type: 'category',
                    gridIndex: 1,
                    data: data.categoryData,
                    scale: true,
                    boundaryGap : false,
                    axisLine: {onZero: false},
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLabel: {show: false},
                    splitNumber: 20,
                    min: 'dataMin',
                    max: 'dataMax',
                    axisPointer: {
                        label: {
                            formatter: function (params) {
                                var seriesValue = (params.seriesData[0] || {}).value;
                                return params.value
                                + (seriesValue != null
                                    ? '\n' + echarts.format.addCommas(seriesValue)
                                    : ''
                                );
                            }
                        }
                    }
                }
            ],
            yAxis: [
                {
                    scale: true,
                    splitArea: {
                        show: true
                    }
                },
                {
                    scale: true,
                    gridIndex: 1,
                    splitNumber: 2,
                    axisLabel: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    splitLine: {show: false}
                }
            ],
            dataZoom: [
                {
                    show: false,
                    xAxisIndex: [0, 1],
                    type: 'slider',
                    top: '85%',
                    startValue: startValue,
                    endValue: endValue
                }
            ],
            series: [
                {
                    name: title + ' Index',
                    type: 'candlestick',
                    data: data.values,
                    itemStyle: {
                        normal: {
                            borderColor: null,
                            borderColor0: null
                        }
                    },
                    tooltip: {
                    }
                },
                {
                    name: 'MA5',
                    type: 'line',
                    data: calculateMA(5, data),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA10',
                    type: 'line',
                    data: calculateMA(10, data),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA20',
                    type: 'line',
                    data: calculateMA(20, data),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'MA30',
                    type: 'line',
                    data: calculateMA(30, data),
                    smooth: true,
                    lineStyle: {
                        normal: {opacity: 0.5}
                    }
                },
                {
                    name: 'Volumn',
                    type: 'bar',
                    xAxisIndex: 1,
                    yAxisIndex: 1,
                    data: data.volumns
                }
            ]
        });
        
    }

    function updateOption(startValue, endValue){

        return ({
            dataZoom: [
                {
                    show: false,
                    xAxisIndex: [0, 1],
                    type: 'slider',
                    top: '85%',
                    startValue: startValue,
                    endValue: endValue
                }
            ]
        });

    }

    let tickerList = document.getElementById('list-ticker');

    let tickerChart = echarts.init(document.getElementById('chart-ticker'));

    let timer;
    let length = 30;

    $.get('./static/file/categories.json', function(categories){

        for(let i = 0; i < categories.length; i++){

            let div = document.createElement('div');
            div.innerHTML = categories[i].category;

            div.onclick = function(){

                $.get(categories[i].path, function (rawData) {
                    
                    if(timer)
                        clearInterval(timer);

                    let startValue = 0;

                    timer = setInterval(function(){

                        if(startValue + 1 + length < rawData.length ){

                            startValue++;

                            tickerChart.setOption(updateOption(startValue, startValue + length));
                        
                        }else{
                            clearInterval(timer);
                        }
                        
                    },200);

                    tickerChart.setOption(option = initOption(categories[i].category, startValue, startValue + length, splitData(rawData)), true);
                });
            }

            tickerList.appendChild(div);

        }

    });
    
    $.get('./static/file/ticker/A.json', function (rawData) {

        if(timer)
            clearInterval(timer);

        let startValue = 0;

        timer = setInterval(function(){

            if(startValue + 1 + length < rawData.length ){

                startValue++;

                tickerChart.setOption(updateOption(startValue, startValue + length));
            
            }else{
                clearInterval(timer);
            }
            
        },200);

        tickerChart.setOption(option = initOption('A', startValue, startValue + length, splitData(rawData)), true);

    });



})(window);