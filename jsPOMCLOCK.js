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
