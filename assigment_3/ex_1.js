function processArray(arr, callback) {
    return arr.map(callback);
}


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, (item)=>{
    return item  * item;
});

console.log(squaredNumbers); 