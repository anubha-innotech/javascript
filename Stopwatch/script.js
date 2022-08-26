var min = "00";
var sec = "00";
var miliSec = "00";
var miliSecId = document.getElementById('miliSecId');
miliSecId.innerHTML = miliSec;
var timer;
miliSec.style.color = red;
document.getElementById("stop").disabled = true;


function callTimer() {
    miliSec++;
    if (miliSec < 10) {
        miliSec = '0' + miliSec;
    }
    if (miliSec < 100) {

        if (miliSec === 99) {
            miliSec = 0
            sec++;
            if (sec < 10) {
                sec = '0' + sec;
            }
            if (sec === 60) {
                sec = 0;
                min++;
                if (min < 10) {
                    min = '0' + min;
                }
            }
        }

    }
    else {
        miliSec = 0;
    }
    miliSecId.innerHTML = miliSec;
    document.getElementById("timer").innerHTML = min + ":" + sec;
}

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("lap").disabled = false;
    document.getElementById("reset").disabled = false;
    timer = setInterval(callTimer, 10);
}

function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(timer);
}
function lap() {
    var reading = document.createElement('div');
    reading.innerHTML = min + ":" + sec + ":" + miliSec;
    document.getElementById('lapReadings').appendChild(reading);
}

function reset() {
    stop();
    min = "00";
    sec = "00";
    miliSec = "00";
    miliSecId.innerHTML = miliSec;
    document.getElementById("timer").innerHTML = min + ":" + sec;
    document.getElementById("lap").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("lapReadings").innerHTML = null;

}