const sums = (arr)=>{
    let sum = 0;
    for(let i = 0 ; i < arr.length;i++){
        sum+=arr[i]
    }
    return sum / arr.length;
}
const numbers = [10,20,30,40,50];
console.log(sums(numbers));