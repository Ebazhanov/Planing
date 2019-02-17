

let d;

function increment(b) {
    return b=b++;
}

console.log(increment(3));



var a = 2;
{
    let a = 3;
    console.log(a); // 3
}
console.log(a); // 2