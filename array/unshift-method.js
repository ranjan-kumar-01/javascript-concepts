/* unshift() — Add at the START

Adds one or more elements to the beginning of an array
and returns the new length of the array. */

// Basic Example

let arr = [3,4];
const newArr = arr.unshift(1,2);
console.log(arr); 


// unshift() Returns New Length
let len = [10].unshift(20);
console.log(len); 

// unshift() with Array
let arr4 = [3,4];
arr4.unshift([1,2]);
console.log(arr4);



/* 
⚠ Performance Note

unshift() is also slow for large arrays because
every element shifts right.

Example:
Before: [3,4,5]
After: [1,3,4,5]

All elements re-index → costly for huge arrays. */