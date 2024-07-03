// 1 
for(let i = 1 ; i <= 10;i++){
    console.log(i);
}
// 2
for(let i = 10 ; i >= 0 ; i--){
    console.log(i);
}
// 3
let score = 100;
if(score <= 100 && score > 95){
    console.log("A");
}else if(score <= 95 && score > 85){
    console.log("B");
}else if(score <= 85 && score > 75){
    console.log("C");
}else if(score <=75 && score > 65){
    console.log("D");
}else if(score <= 65 && score >= 50){
    console.log("E");
}else{
    console.log("F");
}

// 4
const employees = [
    {
        id:1,
        name:"lora",
        salary:"500"
    },
    {
        id:2,
        name:"sok",
        salary:"1000"
    },
    {
        id:3,
        name:"sov",
        salary:"600"
    }
]
for(let i = 0 ; i < employees.length ; i++){
    console.log(
        employees[i].id + " - " 
        + " name : " + employees[i].name 
        + " salary " + employees[i].salary
    );
}

//5
const numbers = [1,2,3,4,5,6,7,8,9];
for(let i = 1 ; i <= numbers.length ; i++){
    if(numbers[i] % 2 !== 1){
        console.log(numbers[i]);
    }
}
// 6
const arr = [1,2,3,4,5,6,7,8,9,10];
const countEventAndOdd = (arr)=>{
    let event = 0;
    let odd = 0;
    for(let i = 1 ; i <= arr.length ; i++){
   
        if(arr[i] % 2 !== 1){
            event++;
        }else{
            odd++;
        }
    }
    console.log(event , odd);
}
countEventAndOdd(arr)
//    7 
let buzz = [];
let fizz = [];
let fizzBuzz = [];
let number = [];
for(let i = 1 ; i <= 100 ; i++){
    if(i % 3 === 0  && i % 5 === 0){
        fizzBuzz.push(i);
    }else if(i % 3 === 0){
        fizz.push(i)
    }else if(i % 5 ===0){
        buzz.push(i)
    }else{
        number.push(i)
    }
}
console.log("Buzz: "+buzz);
console.log("Fizz: "+fizz);
console.log("FizzBuzz: " + fizzBuzz);
console.log("Numbers: " + number);
//8
let sum = 0;
for(let i = 0;i < 10;i++){
    sum+=i;
}
console.log(sum);

//9

const isPrime = (num) =>{
    if(num <= 1) return false;
    else if (num === 2) true;
    else if(num % 2 === 0) return false;
    let check = Math.sqrt(num);
    for(let i = 3;i <= check;i+=2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
const prime = () =>{
    for(let i = 1 ; i <= 100;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
prime()

// 10

const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maxNumber = arr_1[0];

for (let i = 1; i < arr_1.length; i++) {
    if (arr_1[i] > maxNumber) {
        maxNumber = arr_1[i];
    }
}
console.log("The largest number in the array is:", maxNumber);
