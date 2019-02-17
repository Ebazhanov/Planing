function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
multiplyAll([[1],[2],[3]]);
multiplyAll([[1,2],[3,4],[5,6,7]]);
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]);
