/**
 * Created by andre on 18.04.2017.
 */

function runSearchAndReplace() {
    var inputText = document.getElementById("inputText").value;
    var inputSearch = document.getElementById("inputSearch").value;
    var inputReplace = document.getElementById("inputReplace").value;
    document.getElementById("resultText").innerHTML = myReplace(inputText, inputSearch, inputReplace);
}


/**
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
 * @param str
 * @param before
 * @param after
 * @returns {string}
 */
function myReplace(str, before, after) {
    var re = new RegExp(before, "gi"); //global ignore case
    var beforeCaseUpper = false;
    var newAfter = "";

    if(before.slice(0,1).toUpperCase() === before.slice(0,1)) {
        beforeCaseUpper = true;
    }
    else {
        beforeCaseUpper = false;
    }

    if(beforeCaseUpper) {
        newAfter = after.slice(0,1).toUpperCase();
    }
    else {
        newAfter = after.slice(0,1).toLowerCase();
    }
    newAfter += after.slice(1);

    str = str.replace(re, newAfter);
    return str;
}
