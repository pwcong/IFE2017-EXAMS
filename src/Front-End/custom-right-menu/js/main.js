var hiddenPosition = {
    left: "999px",
    top: "999px"
};

var hiddenClassName = "hidden";

function checkMenuPosition(menu,x,y){

    if(window.innerWidth < menu.offsetWidth + x)
        menu.style.left = (x - menu.offsetWidth) + "px";
    else
        menu.style.left = x + "px";

    if(window.innerHeight < menu.offsetHeight + y)
        menu.style.top = (y - menu.offsetHeight) + "px";
    else
        menu.style.top = y + "px";

}

function initView(){
    
    var container = document.getElementById("container");
    var menu = document.getElementById("menu");
    
    for(var i = 0;i < 24; i++){

        var block = document.createElement("div");
        block.className = "block";
        block.innerHTML = "<p>点击鼠标右键弹出菜单</p>";
        
        block.oncontextmenu = function(e){

            e.preventDefault();

            checkMenuPosition(menu,e.x,e.y);
            
            menu.className = "";
            
        }

        container.appendChild(block);

    }
    
    document.body.onclick = function(e){
        menu.style.left = hiddenPosition.left;
        menu.style.top = hiddenPosition.top;
        menu.className = hiddenClassName;
    }

}

function init(){
    initView();
}


init();


