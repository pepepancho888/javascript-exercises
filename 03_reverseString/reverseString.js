const reverseString = function(string) {
    let myStringArray = string.split("");
    myStringArray.reverse();
    let myStringReversed = myStringArray.join("");
    return myStringReversed;
};

/*
const reverseString = function(string) {
    let myArray = string.split("");
    let myArrayReversed = [];
    for (let i = myArray.length - 1; i >= 0; i--)
    {
        myArrayReversed.push(myArray[i]);
    }
    console.log(myArrayReversed);
    let myStringReversed = myArrayReversed.join("");
    return myStringReversed;
};
*/

// Do not edit below this line
module.exports = reverseString;
