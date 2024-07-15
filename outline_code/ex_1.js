class Car{
    /** This is constructor */
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    /** method */
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
class Model extends Car{
    constructor(name,year,brand ,model){
        super(name,year);
        this.brand = brand;
        this.model = model;
    }
    show(){
        return ', it is a ' + this.model
    }
}
/** constant object car */
const car = new Car("Ford", 2014)
const model = new Model("ford",2014,"Mustang","Mustang");
console.log(model.show())
/** call method age() */
console.log("This car is age " + car.age() + " years old.")