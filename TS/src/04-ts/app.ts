// Unions type

type MyBool = true | false;

type WindowStates = "open" | "closed"

type LockStates = "locked" | "unlocked"

type PositiveOddNumbersUnderTen = 1 | 3 | 4

let userEventClosed:WindowStates = "closed"
let userEventOpened:WindowStates = "open"

function wrapInArray(obj: string | string []){
    if(typeof obj === "string"){
        return [obj];
    }
    return obj;
}

// Generics Type in TS

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name: string}>

function identity<T>(arg: T): T{
    return arg;
}

interface Backpack<Type>{
    add: (obj: Type) => void;
    get: () => Type;
}

declare const backpack: Backpack<number>;
const object = backpack.get();
backpack.add(30)

interface Point{
    x: number;
    y: number;
}
function logPoint(p: Point){
    console.log(`${p.x} , ${p.y}`);   
}
const point = {x: 12 , y: 26};
logPoint(point)