/**
 * Created by raineran16 on 17.04.2017.
 */

/* FUNCTION "whatIsInAName"
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument).
 * Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
 * and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
 * because it contains the property and its value, that was passed on as the second argument.
 */
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    var i = 0;
    var j = 0;
    var propNames = Object.getOwnPropertyNames(collection);
    var collectionKeys = Object.keys(collection);
    var sourceKeys = Object.keys(source);
    var isfound = false;

    for(i = 0; i < collection.length; i++) {
        isfound = false;
        for(j = 0; j < sourceKeys.length; j++) {
            if(collection[i][sourceKeys[j]] == source[sourceKeys[j]]) {
                isfound = true;
            }
            else {
                isfound = false;
                break;
            }
        }
        if(isfound) {
            arr.push(collection[i]);
        }
    }

    // Only change code above this line
    return arr;
}

function runWhatIsInAName() {
    var result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
    //2. test: result = whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
    document.getElementById("resultText").innerHTML = "First result =>  [" + Object.keys(result[0])[0] + ": " + result[0][Object.keys(result[0])[0]] + "]";
}