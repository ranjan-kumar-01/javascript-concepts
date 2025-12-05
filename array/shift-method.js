/* shift() — Remove from the START

Removes the first element of an array
and returns that removed element. */


// Basic Example
let arr = [10, 20, 30];
let removed = arr.shift();

console.log(removed);
console.log(arr);

// Used in QUEUE (FIFO)
let queue = ["a", "b", "c"];
queue.shift();
console.log(queue);

// shift() on empty array
const emptyArr = [];
const result = emptyArr.shift();

console.log(result)

/* 
⚠ Performance Note (IMPORTANT)

shift() is slow for large arrays because
all elements get re-indexed:

Example:

Before: [10,20,30,40]

After shift: [20,30,40]
→ each element's index moves left

So use shift() carefully in performance-critical apps. */