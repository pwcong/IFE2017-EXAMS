;(function (global) {

    'use strict';

    var transform = function (element, value, key) {
        key = key || "Transform";
        ["Moz", "O", "Ms", "Webkit", ""].forEach(function (prefix) {
            element.style[prefix + key] = value;
        });

        return element;
    }

    var picContent = '',
        picArray = [1, 2, 3, 4, 5, 6, 7, 8, 9],
        rotate = 360 / picArray.length;

    picArray.forEach(function (i) {
        picContent = picContent + '<img id="pic' + i + '" src="./imgs/' + i +
            '.jpg" class="pic" />';
    });

    var eleStage = document.getElementById("stage"),
        eleContainer = document.getElementById("container"),
        indexPiece = 0;

    var elePics = document.getElementsByClassName("pic"),
        transZ = 192 / Math.tan((rotate / 2 / 180) * Math.PI);

    eleContainer.innerHTML = picContent;
    eleContainer.onclick = function(e){
        transform(this, "rotateY(" + (-1 * rotate * ++indexPiece) + "deg)");
    }

    picArray.forEach(function (i, j) {
        transform(document.getElementById("pic" + i), "rotateY(" + j * rotate + "deg) translateZ(" + (transZ + 20) + "px)");
    });

})(window);