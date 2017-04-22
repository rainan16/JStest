/**
 * Created by andre on 22.04.2017.
 */


/**********************************************************************************************************************/
function titleCase(str) {
    var words = str.split(" ");
    var word = "";
    var i = 0;
    var tmp = "";
    var returnString = "";

    for(i=0;i<words.length;i++) {
        word =  words[i];
        tmp = word.substring(0,1).toUpperCase();
        tmp = tmp + word.substring(1).toLowerCase();
        returnString += tmp + " ";
    }

    return returnString.trim();
}

function runTitleCase() {
    document.getElementById("resultText").innerHTML = "Result = " + titleCase("I'm a little tea pot");
}


/**********************************************************************************************************************/
function largestOfFour(arr) {
    var returnArray = [];
    var i;
    var j;

    for(i=0;i<arr.length;i++) {
        var curArray = arr[i];
        var maxVal = 0;
        for(j=0;j<curArray.length;j++) {
            if(curArray[j] > maxVal) {
                maxVal = curArray[j];
            }
        }
        returnArray.push(maxVal);
    }
    return returnArray;
}

function runLargestOfFour() {
    document.getElementById("resultText").innerHTML = "Result = " + largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
}


/**********************************************************************************************************************/
function confirmEnding(str, target) {
    if(str.substr(str.length-target.length) === target) {
        return true;
    }
    else {
        return false;
    }
}
function runConfirmEnding() {
    document.getElementById("resultText").innerHTML = "Result = " + confirmEnding("Bastian", "n");
}


/**********************************************************************************************************************/
function repeatStringNumTimes(str, num) {
    if(num > 0) {
        var retValue = "";
        var i;
        for(i=1;i<=num;i++) {
            retValue += str;
        }
        return retValue;
    }
    else {
        return "";
    }
}

function runRepeatStringNumTimes() {
    document.getElementById("resultText").innerHTML = "Result = " + repeatStringNumTimes("abc", 3);
}


/**********************************************************************************************************************/