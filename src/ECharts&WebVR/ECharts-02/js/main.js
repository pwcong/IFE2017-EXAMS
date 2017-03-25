;(function(global){

    let weatherChart = echarts.init(document.getElementById('chart-weather'));
    weatherChart.setOption(initOption());

    function initOption(data = {days:[], dayData:[], nightData:[], aveData: []}){

        return ({
            title: {
                text: '深圳 - 未来7天气温变化',
                textStyle: {
                    color: '#666'
                },
                subtext: '冷暖自知',
                subtextStyle: {
                    fontSize: 14
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            grid: {
                left: '0%',
                top: '24%',
                containLabel: true
            },
            tooltip: {},
            legend: {
                left: 'left',
                top: 64,
                data: ['白天', '夜间']
            },
            xAxis: {
                data: data.days,
                
            },
            yAxis: [
                
                {
                    inverse: true,
                    position: 'right',
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: '白天',
                    type: 'bar',
                    data: data.dayData
                },
                {
                    name: '夜间',
                    type: 'bar',
                    data: data.nightData
                }
            ],
            color: [
                '#00E8CA', '#007062'
            ]

        });

    }

    function handleData(data){

        let days = [], dayData = [], nightData = [];

        let weathers = data.showapi_res_body.dayList;

        for(let i = 0; i < 7; i++){

            let daytime = weathers[i].daytime;
            let dayTem = weathers[i].day_air_temperature;
            let nightTem = weathers[i].night_air_temperature;

            days.push(daytime.substring(6, 8) + '日');
            dayData.push(dayTem);
            nightData.push(nightTem);

        }

        return ({
            days,
            dayData, 
            nightData
        });


    }


    $.post('http://route.showapi.com/9-9', {
        showapi_appid: '34260',
        showapi_sign: '2eba05881fb44094b34acecec9e6b238',
        areaid: '101280601'
    }).done(function(data){

        if(data.showapi_res_code == 0)
            weatherChart.setOption(initOption(handleData(data)));
        else{
            $.get('./data.json').done(function(data){
                weatherChart.setOption(initOption(handleData(data)));
            });
        }

    });


})(window);