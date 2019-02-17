/*
var numArray = [];
for (var i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3*/

/*var numArray = [];
var i;
for (i = 0; i < 3; i++) {
    numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3*/

var printNumTwo;
for (var i = 0; i < 3; i++) {
    if(i === 2){
        printNumTwo = function() {
            return i;
        };
    }
}
console.log(printNumTwo());
// returns 3
