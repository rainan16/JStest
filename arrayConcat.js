function diffArray2(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    var mergedArray = [];
    var i = 0;
    var j = 0;
    var twoArrays = [arr1,arr2];


    for(j=0;j<=1;j++) {
        mergedArray = arr1.concat(arr2);
        var currentArr = twoArrays[j];

        for (i = 0; i < currentArr.length; i++) {
            var foundIndex = mergedArray.indexOf(currentArr[i]);

            while (foundIndex >= 0) {

                var sliceLeft = [];
                if (foundIndex > 0) {
                    sliceLeft = mergedArray.slice(0, foundIndex);
                }

                var sliceRight = [];
                if (foundIndex < mergedArray.length - 2) {
                    sliceRight = mergedArray.slice(foundIndex + 1);
                }

                mergedArray = sliceLeft.concat(sliceRight);
                foundIndex = mergedArray.indexOf(currentArr[i]);
            }
        }
    }
    newArr = mergedArray;
    return newArr;
}

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.

    var i = 0;
    var foundIndex = -1;

    for (i = 0; i < arr1.length; i++) {
        foundIndex = arr2.indexOf(arr1[i]);
        if(foundIndex >= 0) {
            arr2.splice(foundIndex, 1);
            arr1.splice(i,1);
            i = 0;
        }
    }

    for (i = 0; i < arr2.length; i++) {
        foundIndex = arr1.indexOf(arr2[i]);
        if(foundIndex >= 0) {
            arr1.splice(foundIndex, 1);
            arr2.splice(i,1);
            i = 0;
        }
    }

    newArr = arr1.concat(arr2);
    return newArr;
}

function writeArray() {
    document.getElementById("erg").innerHTML= diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
}


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
