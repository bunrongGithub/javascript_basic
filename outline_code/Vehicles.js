class Vehicles {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    deplayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
    drive() {
        console.log(`${this.constructor.name} is driving.`);
    }
}
class Car extends Vehicles {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }
    openDoors() {
        console.log(`${this.constructor.name} with ${this.doors} doors is opening doors.`);
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, type) {
        super(make, model);
        this.type = type;
    }

    wheelie() {
        console.log(`${this.constructor.name} ${this.type} is doing a wheelie!`);
    }
}
let myCar = new Car("Toyota", "Camry", 4);
let myBike = new Motorcycle("Honda", "CBR600RR", "sport");

myCar.displayInfo();   // Output: Make: Toyota, Model: Camry
myCar.drive();         // Output: Car is driving.
myCar.openDoors();     // Output: Car with 4 doors is opening doors.

myBike.displayInfo();  // Output: Make: Honda, Model: CBR600RR
myBike.drive();        // Output: Motorcycle is driving.
myBike.wheelie();      // Output: Motorcycle sport is doing a wheelie!