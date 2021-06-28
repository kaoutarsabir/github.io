'use strict';

var frames = [];
var ind = 0;
var currentAscii = '';
var speedID = null;

function doAnimation() {
    var myTextArea = document.getElementById('text-area');
    myTextArea.value = frames[ind];
    ind++;
    if (ind > frames.length - 1) {
        ind = 0;
    }
}

function start() {
    document.getElementById('stop').disabled = false;
    document.getElementById('animation').disabled = true;
    document.getElementById('start').disabled = true;

    ind = 0;
    var myTextArea = document.getElementById('text-area');
    currentAscii = myTextArea.value;
    frames = myTextArea.value.split('=====\n');
    var chkType = document.getElementById('turbo');

    chkType.checked ?
        (speedID = setInterval(doAnimation, 100)) :
        (speedID = setInterval(doAnimation, 200));
}

function stop() {
    document.getElementById('stop').disabled = true;
    document.getElementById('animation').disabled = false;
    document.getElementById('start').disabled = false;
    clearInterval(speedID);
    speedID = null;
    var myTextArea = document.getElementById('text-area');
    myTextArea.value = currentAscii;
}

function changeSpeed() {
    if (speedID !== null) {
        clearInterval(speedID);
        speedID = null;
        var chkType = document.getElementById('turbo');
        chkType.checked ?
            (speedID = setInterval(doAnimation, 100)) :
            (speedID = setInterval(doAnimation, 200));
    }
}

function changeSize() {
    var selSize = document.getElementById('mySelect');
    var myTextArea = document.getElementById('text-area');
    myTextArea.style.fontSize = selSize.value;
}

function selectAnimation() {
    var selAnimation = document.getElementById('animation');
    var myTextArea = document.getElementById('text-area');
    myTextArea.value = ANIMATIONS[selAnimation.value];
}

window.onload = function loadJS() {
    var btnStart = document.getElementById('start');
    btnStart.onclick = start;

    var btnStop = document.getElementById('stop');
    btnStop.onclick = stop;
    btnStop.disabled = true;

    var selAnimation = document.getElementById('animation');
    selAnimation.onchange = selectAnimation;

    var selSize = document.getElementById('mySelect');
    selSize.onchange = changeSize;

    var chkType = document.getElementById('turbo');
    chkType.onchange = changeSpeed;
};