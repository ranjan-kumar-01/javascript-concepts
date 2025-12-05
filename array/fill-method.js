/* 
fill(value, startIndex, endIndex)

value → kya fill karna hai

startIndex → kahan se fill karna start hoga (included)

endIndex → kahan tak fill hoga (excluded — last index NOT included)const num = [1,2,3,4,5,6,7,8,9]

 */


console.log([1, 2, 3, 4, 5, 6, 7, 8].fill("$", 2, 6))

// Fill Entire Array
console.log([1,2,3,4].fill(0));

const obj = {a:1};
const arr = new Array(3).fill(obj);

arr[0].a = 99;
console.log(arr);

const arr2 = new Array(5).fill("X");
console.log(arr2);
