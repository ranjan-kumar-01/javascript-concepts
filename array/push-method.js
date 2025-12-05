// push() — Adds one or more elements to the end of an array and returns the new length of the array.

// basic example
const arr = [1,2,3];
arr.push(4);
console.log(arr)

// add multiple items
arr.push(5,6,7);
console.log(arr); 

// push() Returns New Length
const len = [1,2].push(9);
console.log(len);

// push() with Arrays (Nested)
let arr2 = [1,2];
arr2.push([3,4]);
console.log(arr2); 

// push() in Loops (Dynamic List)
let list = [];
for(let i=1; i<=5; i++) list.push(i);
console.log(list);

// Tricky Case — push() modifies the original array
let a = [1,2];
let b = a;
a.push(3);

console.log(b); // [1,2,3]
