const products = (product) =>{
    return product.filter((item)=> item.quantity !== 0);
}
let product = [
    {
        name:"coca",
        price:"15$",
        quantity:10,
    },
    {
        name:"pepsi",
        price:"5$",
        quantity:0,
    }
]
console.log(products(product)[0]);
