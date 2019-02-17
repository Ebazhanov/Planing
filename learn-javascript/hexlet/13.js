// функция-предикат определяет, является ли число num четным
const isEven = num => num % 2 === 0;

console.log(isEven());

// функция увеличивает полученное число num на 10
const increaseNum = num => num + 10;

const num = 6;

const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

console.log(isEven(increaseNum(num) + 1));
//console.log(num + 1);
console.log(1 - num);
console.log(result);