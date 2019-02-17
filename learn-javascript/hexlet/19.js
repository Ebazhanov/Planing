/*
const product = (n) => {
    // if (n === 5) {
    //   return n;
    // }

    return n * product(n + 1);
};

/!*
 * вычисление: 2 * 3 * 4 * 5 * 6 * 7 * ...
 * RangeError: Maximum call stack size exceeded
 *!/
product(2);
*/


const square = (num) => {
    return num * num;
};

console.log(square(6));