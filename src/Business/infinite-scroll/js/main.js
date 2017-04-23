;(function(global){

    "use strict";

    // 返回id的element
    function $(id){
        return document.getElementById(id);
    }

    // 返回className的element
    function $$(className){
        return document.getElementsByClassName(className);
    }

    function addItem(content, itemContent){

        var item = document.createElement("div");
        item.className = "item";

        var p = document.createElement("p");
        p.innerHTML = itemContent;
        item.appendChild(p);
        content.appendChild(item);
    }

    // 创建表示loading状态的item
    function createLoadingElement(){
        var loadingElement = document.createElement("div");
        loadingElement.className = "loading";
        var loadingPic = document.createElement("img");
        loadingPic.src = "./imgs/load.png";
        loadingElement.appendChild(loadingPic);

        return loadingElement;

    }

    var content = $("content");

    var increment = 8,
        count = 0;

    for(var i = count; i < count+increment; i++){

        addItem(content, "item " + i);

    }

    count += increment;

    loadMore(content, createLoadingElement(), function(finish){

        // 模拟加载延时
        setTimeout(function(){

            // 当加载完成时必须执行finish函数取消loading状态
            finish();

            for(var i = count; i < count + increment; i++){

                addItem(content, "item " + i);

            }

            count += increment;

        },2000);

    });
    


})(window);
