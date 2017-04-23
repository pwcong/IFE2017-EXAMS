;(function(global){

    "use strict";

    // loadMore 可以帮助显示加载状态提示信息
    // container: Element. 容器Element
    // loadingElement: Element. 加载状态提示Element
    // onLoad: Function(finish: Function). 加载方法，含finish参数。执行finish函数可以取消加载状态
    function loadMore(container, loadingElement, onLoad){

        // 状态标记
        var isLoading = false;

        // 当处于loading状态并且完成时，取消loading状态
        function finish(){

            if(isLoading){
                // 移除loading状态标识
                container.removeChild(loadingElement);
                isLoading = false;
            }

        }

        // 监听滑动状态
        container.onscroll = function(){

            // 判断是否处于容器底部
            if(container.offsetHeight + container.scrollTop >= container.scrollHeight){

                // 若处于非loading状态之时调用
                if(!isLoading){
                    container.appendChild(loadingElement);
                    isLoading = true;

                    // 执行用户自定义加载动作，并传入finish函数供用户调用取消加载状态
                    onLoad(finish);
                }

            }

        }


    }

    global.loadMore = loadMore;

})(window);