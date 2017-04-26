/**
 * Created by raineran16 on 24.04.2017.
 */

function toggleTimer()  {
    var status = "";
    sessionStorage.SessionName = "jsPOMCLOCK";
    try {
        status = sessionStorage.getItem("jsPOMCLOCKstatus");
    }
    catch(err) {
        status = "STOP";
        sessionStorage.setItem("jsPOMCLOCKstatus", status);
    }
    finally {
        if(status == null) status = "STOP";
    }

    if(status === "STOP") {
        document.getElementById("titleTimer").innerHTML = "Session";
        startTimer();
    }
    else {
        document.getElementById("titleTimer").innerHTML = "Paused";
        stopTimer();
    }
};

function howLongChange(minutes) {
    var timespan = document.getElementById("timespan").innerHTML;
    var timepart = timespan.split(":");

    if(eval(timepart[0]) > 1) {
        timepart[0] = eval(timepart[0]) + minutes;
    }

    timespan = timepart[0] + ":" + timepart[1];

    document.getElementById("timespan").innerHTML = timespan;
    document.getElementById("timeLeft").innerHTML = timespan;
    stopTimer();
};

function startTimer() {
    sessionStorage.setItem("jsPOMCLOCKstatus", "START");
    var intervallID = setInterval(countDown, 1000);
    sessionStorage.setItem("jsPOMCLOCKintervallID", intervallID);
};

function stopTimer() {
    sessionStorage.setItem("jsPOMCLOCKstatus", "STOP");
    var intervallID = sessionStorage.getItem("jsPOMCLOCKintervallID");
    clearInterval(intervallID);
};

function countDown() {
    var timeleft = document.getElementById("timeLeft").innerHTML;
    var timepart = timeleft.split(":");
    var msectimeleft = new Date(timepart[0]*60000 + timepart[1]*1000 - 1000);
    if (msectimeleft <= 0) {
        stopTimer();
        document.getElementById("timeLeft").innerHTML = "0:00";
        var audio = new Audio("https://notificationsounds.com/wake-up-tones/good-morning-502/download/mp3");
        audio.play();
    } else {
        document.getElementById("timeLeft").innerHTML = msectimeleft.getMinutes() + ":" + msectimeleft.getSeconds();
    }
};
