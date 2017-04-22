/**
 * Created by andre on 22.04.2017.
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

    if(status === null) {
        status = "input";
    }
    else if(status === "ready") {
        oldValue = "";
    }

    switch(inValue) {
        case "ce":
            type = "CLS";
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
    if(oldValue === "Error" && type != "CLS") {
        return oldValue;
    }

    if(type === "CLS") {
        retVal = "0";
        status = "ready";
    }
    else {
        if (oldValue.length === 0 && isNaN(inValue) && inValue !== '.' || oldValue.length === 0 && inValue === '0') {
            retVal = "";
            status = "ready";
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

    sessionStorage.setItem("jsCALCstatus", status);
    document.getElementById("answerInput").innerHTML = retVal;
};
