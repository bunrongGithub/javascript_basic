function filterArray(arr, callback) {
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const events = (item) =>{
    return item % 2 === 0;
}
const odds = (item) =>{
    return item % 2 !==0;
}
const evenNumbers = filterArray(numbers , events);
const oddNumbers = filterArray(numbers , odds);
console.log(evenNumbers);
console.log(oddNumbers);