;(function(global){

    function initOption(){

        return ({
            series: [{
                type: 'map',
                map: 'world'
            }]
        });

    }


    $.get('./map.json').done(function(map){
            
        echarts.registerMap('world', map);
        let mapChart = echarts.init(document.getElementById('chart-map'));
        mapChart.setOption(initOption());

    });


})(window);