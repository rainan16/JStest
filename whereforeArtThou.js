/**
 * Created by raineran16 on 17.04.2017.
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
    document.getElementById("resultText").innerHTML = "Result = " + result[Object.keys(result)[0]];
}