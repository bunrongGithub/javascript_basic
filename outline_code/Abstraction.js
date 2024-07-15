class Shap{
    constructor(){
        if(new.target === Shap){
            throw new Error("Shape class cannot be instantiated directly.")
        }
    }
    calculateArea(){
        throw new Error("Calculate Area method must me implement")
    }
}
class Rectangle extends Shap{
    constructor(w,h){
        super();
        this.w = w;
        this.h = h;
    }
    // Abstract method is imp
    calculateArea(){
        return this.w * this.h;
    }
}
class Circle extends Shap{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}
const rectangle = new Rectangle(2,2);
const circle = new Circle(7);

console.log(rectangle.calculateArea(), circle.calculateArea());