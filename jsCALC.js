/**
 * Created by raineran16 on 22.04.2017.
 */

function runCalc(curButton) {
    var oldValue = document.getElementById("answerInput").innerHTML;
    var inValue = curButton.value;
    var type = "";
    var retVal = "";
    var status;

    sessionStorage.SessionName = "jsCALC"
    try {
        status = sessionStorage.getItem("jsCALCstatus");
    }
    catch(err) {
        status = "input";
        sessionStorage.setItem("jsCALCstatus", status);
    }

    switch(inValue) {
        case "ce":
            type = "CE";
            break;
        case "ac":
            type = "CLS";
            break;
        case "/":
        case "*":
        case "-":
        case "+":
            type = "FUNC";
            break;
        case "=":
            type = "CALC";
            break;
    }
    if(oldValue === "Error" && (type != "CLS" && type != "CE")) {
        return oldValue;
    }

    if(status === null) {
        status = "input";
    }
    else if(status === "ready") {
        if(type === "FUNC") {
            //use last value for further calculations
        }
        else if(type === "CALC") {
            return oldValue;
        }
        else {
            oldValue = "";
        }
    }

    if(type === "CLS") {
        retVal = "0";
        status = "ready";
    }
    else if(type === "CE") {
        retVal = "0";
        status = "ready";
    }
    else {
        if (oldValue.length === 0 && isNaN(inValue) && inValue !== '.' || oldValue.length === 0 && inValue === '0') {
            retVal = "";
            status = "ready";
        }
        else if (inValue === "." && !checkDecimal(oldValue)) {
            retVal = oldValue;
        }
        else if(oldValue === "0") {
            retVal = inValue;
            status = "input";
        }
        else if(type === "CALC") {
            try {
                retVal = eval(oldValue);
            }
            catch(err) {
                retVal = "Error"
            }
            status = "ready";
        }
        else {
            retVal = oldValue + inValue;
            status = "input";
        }
    }

    //var wav = '/media/you-know.mp3';
    var wav;
    if(type === "CALC") {
        wav = "https://notificationsounds.com/message-tones/aww-388/download/mp3"; //"https://notificationsounds.com/message-tones/you-know-508/download/mp3"
    }
    else {
        wav = "https://notificationsounds.com/notification-sounds/beep-472/download/mp3";
    }
    var audio = new Audio(wav);
    audio.play();

    sessionStorage.setItem("jsCALCstatus", status);
    document.getElementById("answerInput").innerHTML = retVal;
}


function checkDecimal(checkValue) {
    var valuesArray = [];
    var i = 0;
    var tempValue = checkValue + ".";

    if (checkValue.lastIndexOf('.', checkValue.length - 1) === checkValue.length - 1) {
        return false;
    }

    valuesArray = tempValue.replace(/\+/g, ";").replace(/\-/g, ";").replace(/\*/g, ";").replace(/\//g, ";").split(";");
    if (valuesArray.length > 0) {
        var matches = valuesArray[valuesArray.length-1].split(".").length - 1;
        if(matches > 1) {
            return false;
        }
    }

    return true;
}
