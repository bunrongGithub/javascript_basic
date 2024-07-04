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
let salary = [1000, 2000, 120.90]
let employees = ["Lara", "Evee", "Simi"]
let employeeSalary = {};
if(employees.length === salary.length){
    for(let i = 0 ; i < employees.length ; i++){
        employeeSalary[employees[i]] = salary[i]
    }
    console.log(employeeSalary);
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
        fizzBuzz.push("fizzbuzz");
    }else if(i % 3 === 0){
        fizz.push("fizz")
    }else if(i % 5 ===0){
        buzz.push("buzz")
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
for(let i = 1;i <= 10;i++){
    sum+=i;
}
console.log(sum);

//9

const newArray = [];
for(let i = 1 ; i <= 100 ; i ++){
    newArray.push(i)
}
const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(isPrime);
console.log(myPrimeArray);
// 10

const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let maxNumber = arr_1[0];

for (let i = 1; i < arr_1.length; i++) {
    if (arr_1[i] > maxNumber) {
        maxNumber = arr_1[i];
    }
}
console.log("The largest number in the array is:", maxNumber);
