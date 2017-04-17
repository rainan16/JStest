/*
http://www.mathsisfun.com/roman-numerals.html
https://www.freecodecamp.com/challenges/roman-numeral-converter
*/

function calculateRomanNumeral2(decimalValue) {
    //todo move portions to helper subroutine

    //1. split into power-of-10 packages
    var stringValue = String(decimalValue);
    var arrayValues = stringValue.split("");
    var divValue = 0;
    var currentRomanValue = "";
    var i = 0;

    // >= 1000 portion
    if (arrayValues.length == 4) {
        divValue = parseInt(arrayValues[0]);
        for(i=0;i<divValue;i++) {
            currentRomanValue += "M";
        }
        arrayValues.shift();
    }

    // >= 100 portion
    if (arrayValues.length == 3) {
        divValue = parseInt(arrayValues[0]);
        if(divValue == 9) {
            currentRomanValue += "CM";
            divValue -= 9;
        }
        if(divValue >= 5) {
            currentRomanValue += "D";
            divValue -= 5;
        }
        if(divValue == 4) {
            currentRomanValue += "CD";
            divValue -= 4;
        }
        for(i=1;i<=divValue;i++) {
            currentRomanValue += "C";
        }
        arrayValues.shift();
    }

    // >= 10 portion
    if (arrayValues.length == 2) {
        divValue = parseInt(arrayValues[0]);
        if(divValue == 9) {
            currentRomanValue += "XC";
            divValue -= 9;
        }
        if(divValue >= 5) {
            currentRomanValue += "L";
            divValue -= 5;
        }
        if(divValue == 4) {
            currentRomanValue += "XL";
            divValue -= 4;
        }
        for(i=1;i<=divValue;i++) {
            currentRomanValue += "X";
        }
        arrayValues.shift();
    }

    // >= 1 portion
    if (arrayValues.length == 1) {
        divValue = parseInt(arrayValues[0]);
        if(divValue == 9) {
            currentRomanValue += "IX";
            divValue -= 9;
        }
        if(divValue >= 5) {
            currentRomanValue += "V";
            divValue -= 5;
        }
        if(divValue == 4) {
            currentRomanValue += "IV";
            divValue -= 4;
        }
        for(i=1;i<=divValue;i++) {
            currentRomanValue += "I";
        }
        arrayValues.shift();
    }

    return currentRomanValue;
}

function calculateRomanNumeral1(decimalValue, currentRomanValue) {

    // WRONG APPROACH!!!

    //todo: 9 should result in IX, not VIIII; 4 should result in IV not IIII, ...
    //todo: replace if ... else if with helper function

    var divValue = 0;
    var modValue = 0;

    if (decimalValue >= 100) {
        divValue = Math.floor(decimalValue/100);
        modValue = decimalValue % 100;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "C";
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 50) {
        divValue = Math.floor(decimalValue/50);
        modValue = decimalValue % 50;

        if(divValue >= 1 && modValue >= (50-10)) {
            currentRomanValue += "LC";
            modValue = (modValue - (50-10)) % 50;
        }
        else {
            for(i=0;i<divValue;i++) {
                currentRomanValue += "L";
            }
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 10) {
        divValue = Math.floor(decimalValue/10);
        modValue = decimalValue % 10;

        if(divValue >= 1 && modValue >= (10-1)) {
            currentRomanValue += "XL";
            modValue = (modValue - (10-1)) % 10;
        }
        else {
            for (i = 0; i < divValue; i++) {
                currentRomanValue += "X";
            }
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 5) {
        divValue = Math.floor(decimalValue/5);
        modValue = decimalValue % 5;

        if(divValue >= 1 && modValue >= (5-1)) {
            currentRomanValue += "IX";
            modValue = 0;
        }
        else {
            for (i = 0; i < divValue; i++) {
                currentRomanValue += "V";
            }
        }
        if(modValue > 0) {
            return calculateRomanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if(decimalValue >= 0) {
        if(decimalValue >= (5-1)) {
            currentRomanValue += "IV";
        }
        else {
            for (i = 0; i < decimalValue; i++) {
                currentRomanValue += "I";
            }
        }
        return currentRomanValue;
    }
}

function getRomanNumeral() {
    var inputValue = document.getElementById("inputValue").value;
    document.getElementById("resultText").innerHTML = "Result = " + calculateRomanNumeral2(inputValue);
}

