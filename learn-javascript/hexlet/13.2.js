/*const func = (num) => {
    if (num > 0) {
        num = num - 1;
    } else {
        num = num + 1;
    }

    return num;
};*/

//console.log(func(0));


const func = (num) => {
    if (num > 0) {
        num = num - 1;
    }
    num = num + 1;
    return num;
};

console.log(func(0));