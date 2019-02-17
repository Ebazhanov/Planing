/*// Setup
var myArray = [];

// Only change code below this line.
for (var i = 0; i < 9; i++) {
    if (i % 2) {
        myArray.push(i);
        console.log(i)
    }

}*/


var myArr = [ 2, 3, 4, 5, 6];
var ourTotal = 0;

for (var i = 0; i < myArr.length; i++) {
    ourTotal += myArr[i];
}

console.log(ourTotal);