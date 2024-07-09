const numbers = [1,2,3,4,5,6,90,8,9];
const max = numbers.reduce((accumulator,item)=>{
    return accumulator < item ? item : accumulator
},0)
console.log(max);
