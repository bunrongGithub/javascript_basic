const products = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
]
const groudProduct = products.reduce((accumulator, item) => {
    const category = item.category;
    if (!accumulator[category]) {
        // Creating new empty array at the accumulator 
        accumulator[category] = [];
    }
    // pushing a new item into []
    accumulator[category].push(item.name);
    // finally return accumulator
    return accumulator;
}, {})
console.log(groudProduct);