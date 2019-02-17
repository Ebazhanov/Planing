function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

console.log(duck.prototype.name);
console.log(canary);


let ownProps = [];

for (let property in duck) {
    if(duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}

console.log(ownProps); // prints [ "name", "numLegs" ]

function Dog(name) {
    this.name = name;
}


// Add your code above this line
let beagle = new Dog("Snoopy");