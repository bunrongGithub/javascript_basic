const num1 = [1,2,3];
const num2 = [4,5,6];
const Nums1 = [...num1];
const Nums2 = [...num2];
const newArr = [...num1,...num2]
console.log(newArr);
console.log(Nums1);
console.log(Nums2);