;(function(global){

    let weatherChart = echarts.init(document.getElementById('chart-weather'));
    weatherChart.setOption(initOption());

    function initOption(data = {days:[], dayData:[], nightData:[], aveData: []}){

        return ({
            title: {
                text: '深圳 - 未来15天气温变化'
            },
            tooltip: {},
            legend: {
                data: ['白天', '夜间', '平均']
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            xAxis: {
                data: data.days
            },
            yAxis: [
                {
                    type: 'value',
                    name: '温度',
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
                },
                {
                    name: '平均',
                    type: 'line',
                    data: data.aveData
                }
            ]

        });

    }

    function handleData(data){

        let days = [], dayData = [], nightData = [], aveData = [];

        let weathers = data.showapi_res_body.dayList;

        for(let i = 0; i < weathers.length; i++){

            let daytime = weathers[i].daytime;
            let dayTem = weathers[i].day_air_temperature;
            let nightTem = weathers[i].night_air_temperature;
            let aveTem = (parseInt(dayTem) + parseInt(nightTem)) / 2;

            days.push(daytime.substring(6, 8));
            dayData.push(dayTem);
            nightData.push(nightTem);
            aveData.push(aveTem);

        }

        return ({
            days,
            dayData, 
            nightData,
            aveData
        });


    }


    $.post('http://route.showapi.com/9-9', {
        showapi_appid: '34260',
        showapi_sign: '2eba05881fb44094b34acecec9e6b238-',
        areaid: '101280601'
    }).done(function(data){

        if(data.showapi_res_code == 0)
            weatherChart.setOption(initOption(handleData(data)));
        else{
            $.get('./data.json').done(function(data){
                weatherChart.setOption(initOption(handleData(JSON.parse(data))));
            });
        }

    });

})(window);