const numbers = [1, 1, 2, 2, 3, 4, 6,60, 6, 7, 8, 9];
const newArr = numbers.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
});

console.log(newArr); 
