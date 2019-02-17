/*
const getAbs = num => {
    if (num >= 0) {
        return num;
    }
    return -num;
};

console.log(getAbs(0));
*/

const getAbs = num => (num >= 0) ? num : -num;

console.log(getAbs(0));