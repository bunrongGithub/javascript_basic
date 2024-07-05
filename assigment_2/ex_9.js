const findMedian = (numbers) => {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    const middleIndex = Math.floor(n / 2);

    if (n % 2 === 0) {
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
        return numbers[middleIndex];
    }
};

console.log(findMedian([5, 2, 9, 1, 5, 6])); 
