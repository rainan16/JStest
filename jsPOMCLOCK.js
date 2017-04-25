/**
 * Created by raineran16 on 24.04.2017.
 */

function toggleTimer()  {
    var status = "";
    sessionStorage.SessionName = "jsPOMCLOCK"
    try {
        status = sessionStorage.getItem("jsPOMCLOCKstatus");
    }
    catch(err) {
        status = "STOP";
        sessionStorage.setItem("jsPOMCLOCKstatus", status);
    }

    if(status === "STOP") {
        document.getElementById("titleTimer").innerHTML = "Session count down";
    }
    else {
        document.getElementById("titleTimer").innerHTML = "Session";
    }
}

function howLongChange(minutes) {
    var timespan = document.getElementById("timespan").innerHTML;
    var timepart = timespan.split(":");

    if(eval(timepart[0]) > 1) {
        timepart[0] = eval(timepart[0]) + minutes;
    }

    timespan = timepart[0] + ":" + timepart[1];

    document.getElementById("timespan").innerHTML = timespan;
    document.getElementById("timeLeft").innerHTML = timespan;
}
