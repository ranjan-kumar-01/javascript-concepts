/* What is reverse()?

reverse() is an array method that reverses the order of elements inside the same array.

👉 Important:

It MODIFIES the original array.

It also returns the same array after reversing. */

// 1️⃣ Simple Reverse
const arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr);

// 2) Reverse and Store (same reference)
const arr2 = [10, 20, 30];
const reversed = arr2.reverse();

console.log(arr2);      // [30, 20, 10]
console.log(reversed); // [30, 20, 10]

/*
 ✔ Both variables point to the same modified array. ⭐ Why?
 Because reverse() returns the same original array reference, not a new array */


// 3) Reverse Without Modifying Original Array (Very Important)
// Method 1 — Spread + reverse
const arr3 = [1,2,3,4,5]

const reversedArr = [...arr3].reverse();

console.log(arr3);      
console.log(reversedArr);

// Method 2 — slice + reverse
const reversedArr2 = arr3.slice().reverse();
console.log(reversedArr2)

//  4) Reverse an Array of Strings
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.reverse());


/* 
5) Reverse Characters of a String (Popular Trick)

Strings cannot be reversed directly, so we:

Step 1: Convert to array
Step 2: Reverse
Step 3: Join
 */

const str = "hello";
const reversedStr = str.split("").reverse().join("")

console.log(reversedStr)

// 6) Reverse Words Instead of Characters

const sentence = "I Love JavaScript";
const reversedWords = sentence.split(" ").reverse().join(" ")

console.log(reversedWords)