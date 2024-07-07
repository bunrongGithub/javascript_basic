function filterArray(arr, callback) {
    return arr.filter(callback);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterArray(numbers, (item)=> item % 2 === 0);

console.log(evenNumbers);
