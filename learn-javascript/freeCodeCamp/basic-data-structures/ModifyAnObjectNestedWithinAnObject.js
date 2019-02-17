let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);


let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(obj) {
    // change code below this line
    if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan')){
        return true
    } else{
        return false
    }
    // change code above this line
}

console.log(isEveryoneHere(users));
