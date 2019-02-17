function popShift(arr) {
    let popped = arr.pop(); // change this line
    let shifted = arr.shift(); // change this line
    return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

function sumOfTen(arr) {
    // change code below this line
    arr.splice(2, 2);
    //arr.splice(1,1);
    // change code above this line
    return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));


function htmlColorNames(arr) {
    // change code below this line

    //arr.splice(1, 1, "BlanchedAlmond");
    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
        //.splice(2, 2, );
    //arr = start.splice(1, 1, "BlanchedAlmond");
    // change code above this line
    return arr;
}

// do not change code below this line
//htmlColorNames should return ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));


function forecast(arr) {
    // change code below this line
    arr.slice();
    return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


function forecast(arr) {
    // change code below this line
    //arr;
    return arr.slice(0, 2);
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));



function User(name) {
    this.name = name;
    this.status = 1;
}

var me = new User("Anton");
console.log(me);


function testLogicalAnd(val) {
    // Only change code below this line

    if (val=>24 && val>=51) {
            return "Yes";
        }
    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);