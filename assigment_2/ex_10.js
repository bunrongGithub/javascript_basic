const factorial = (number) =>{
    return number <= 0 ? "wrong number" : 
        number === 1 ? 1 : number * factorial(number - 1); 
}
console.log(factorial(0));
