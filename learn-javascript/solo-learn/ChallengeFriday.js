/**
 * What is the output of this code!
 *
 */

/*
var arr = [2, 3, 4];
var lit = "${...arr}";
console.log(lit[0]);

//============================

var print = () => {
    console.log(false?true:false)
};

console.log(print());
*/

//============================

var array = ["Hello", "world"];
var test = array[0].split("l");

const printnew =()=> {
    console.log(test[0]);
};

console.log(printnew());

//============================

let x ="Tomato";
let y ="Kiwifruit";
let z ="Blueberry";
function f() {
    return z.charAt(8) + y.charAt(6) + x.charAt(2)+x.charAt(2)+z.charAt(8);
}

console.log(f());

//============================

const t = {
    val:2
};


const c1 = () => t.val +=1;
const c2 = () => t.val *=2;

c1();
c2();
console.log(t.val);


//============================

function f1() {
    let x = 4;
    let y = 7%2;
    let z = x+(y*4);
    console.log(z);
}

console.log(f1());


//============================

/*const ch1 = () => {
    var a=1=="1"? return 1: return 0 ;
}

console.log(t.val);*/

//============================

var a = 0;
var b = 4;
a+=b;
const ch2 = () => ++a;

console.log(ch2());