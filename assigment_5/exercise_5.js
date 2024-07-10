function restSum(...numbers){
    return numbers.reduce((acc,item)=>acc+item,0)
}
console.log(restSum(1,2,3,4));
console.log(restSum(1,2));
console.log(restSum(1,2,3,4,5));