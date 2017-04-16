

function romanNumeral(decimalValue, currentRomanValue) {
    //1. M --- div 1000
    var divValue = 0;
    var modValue = 0;

    if (decimalValue >= 50) {
        divValue = Math.floor(decimalValue/50);
        modValue = decimalValue % 50;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "L";
        }
        if(modValue > 0) {
            return romanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 10) {
        divValue = Math.floor(decimalValue/10);
        modValue = decimalValue % 10;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "X";
        }
        if(modValue > 0) {
            return romanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if (decimalValue >= 5) {
        divValue = Math.floor(decimalValue/5);
        modValue = decimalValue % 5;

        for(i=0;i<divValue;i++) {
            currentRomanValue += "V";
        }
        if(modValue > 0) {
            return romanNumeral(modValue,currentRomanValue);
        }
        else {
            return currentRomanValue;
        }
    }
    else if(decimalValue >= 0) {
        for(i=0;i<decimalValue;i++) {
            currentRomanValue += "I";
        }
        return currentRomanValue;
    }
}

function getRomanNumeral() {
    document.getElementById("erg").innerHTML=romanNumeral(9,"");
}

