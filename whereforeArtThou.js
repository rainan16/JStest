/**
 * Created by raineran16 on 17.04.2017.
 */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line


    // Only change code above this line
    return arr;
}

function runWhatIsInAName() {
    var result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
    document.getElementById("resultText").innerHTML = "Result = " + result;
}