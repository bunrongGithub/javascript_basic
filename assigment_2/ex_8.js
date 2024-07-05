const sort = (numbers) => {
    let temp;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                temp = numbers[j];
                numbers[j] = numbers[i];
                numbers[i] = temp;
            }
        }
    }
    return numbers;
}
let numbers = [33, 44, 24, 67, 85, 36];
console.log(sort(numbers));