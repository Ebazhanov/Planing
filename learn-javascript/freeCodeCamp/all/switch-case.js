function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

// Change this value to test
console.log(caseInSwitch(1));


const func = (num) => {
    return num * num * num;
    return num * num * num * num;
    return num * num;
};
console.log(func(3));


function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        case "d":
            answer = "stuff"
            break;
        default:
            answer = "stuff"
            break;
    }


    // Only change code above this line
    return answer;
}

// Change this value to test
switchOfStuff(1);


function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Marley";
            break;

    }
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }

    // Only change code above this line
    return answer;
}

// Change this value to test
chainToSwitch(7);



