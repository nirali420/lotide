const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
};
const tail = function(array) {
    // let newArray = [];
    // for (let i = 1; i < array.length; i++) {
    //     newArray.push(array[i]);
    // }
    // return newArray;

    let newArray = array.shift();
    return (array);
}
let result = tail([5, 6, 7])
assertEqual(result[0], 6);