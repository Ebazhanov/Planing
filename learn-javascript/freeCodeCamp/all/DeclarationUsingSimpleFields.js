const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
        name,
        age,
        gender
    };
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//++++++++++++++++++++++++++++++++++++++++++++

// change code below this line
const bicycle = {
    gear: 2,
    setGear (newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);