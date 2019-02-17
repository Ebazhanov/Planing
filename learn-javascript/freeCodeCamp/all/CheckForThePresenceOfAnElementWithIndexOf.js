let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

console.log(fruits.indexOf('dates')) // returns -1
console.log(fruits.indexOf('oranges')) // returns 2
console.log(fruits.indexOf('pears')) // returns 1, the first index at which the element exists



function quickCheck(arr, elem) {
    // change code below this line
    if (arr.indexOf(elem)>0){
        console.log(arr.indexOf());
        return true;
    } else {
        return false;
    }
    // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));