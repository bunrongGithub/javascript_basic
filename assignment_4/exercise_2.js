const numbers = [1, 1, 2, 2, 3, 4, 6,60, 6, 7, 8, 9];
// index = 0,1,2,3,4,5,6,7,8,9,10
// item = 1,1,2,2,3,4,6,60,6,8,9
// arr = numbers
// if (arr[item] === index) 
    // return 
const newArr = numbers.filter((item, index, arr) =>  arr.indexOf(item) === index);

console.log(newArr); 
