/**
 * Use multiple conditional operators in the checkSign function to check
 *
 * if a number is positive, negative or zero.
 *
 */

function checkSign(num) {
    //return (num>0)?"positive":"negative"?(num<0):"negative";
    if (num > 0) {
        return "positive"
    } else if (num < 0) {
        return "negative"
    } else if (num === 0) {
        return "zero"
    }
}

console.log(checkSign(-12)); //should return "negative".
console.log(checkSign(10)); //should return "positive".
console.log(checkSign(0)); //should return "zero".)


/// or


function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero"
}

checkSign(10);