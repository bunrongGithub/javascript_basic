// Function arguments & return types

let greeting : (name: string) => string;

// Express function

greeting = function (name: string){
    return `Hi ${name}`
}
console.log(greeting("koko"))
