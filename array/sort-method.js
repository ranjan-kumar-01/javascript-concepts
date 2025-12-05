
let str = ["bat", "rat", "chat", "mat", "cat", "fat"]

let newStrArr = str.sort();
console.log(newStrArr);


let numList = [923, 72, 83244, 144, 297, 10, 3, 4774, 55, 6];

let newNumList = numList.sort();

console.log(newNumList)

//  **The items are sorted as strings by default.

let newNumList2 = numList.sort((a,b)=>a-b)
console.log(newNumList2)



/* 
In JavaScript, when we call array.sort((a, b) => a - b), the sort method internally uses the comparison result to determine whether two elements should be swapped. The compare function does not directly swap elements; instead, it returns a numeric value that tells the sorting algorithm what action to take.

How swapping is decided (core logic):

If the compare function returns a negative value (e.g., a - b < 0),
→ element a should appear before b
→ no swap is performed.

If the compare function returns a positive value (e.g., a - b > 0),
→ element b should appear before a
→ the sorting algorithm swaps a and b.

If the compare function returns 0,
→ the elements are treated as equal
→ their order remains unchanged.

Why a - b gives ascending order

Because:

Smaller value (a < b) → negative → stays first

Larger value (a > b) → positive → swapped behind

This automatically arranges numbers from small → big.

Internal behavior

Internally, the JavaScript engine (V8, SpiderMonkey, JavaScriptCore) uses Timsort, which repeatedly:

Selects pairs or segments of array elements,

Calls the compare function on them,

Based on the returned value, decides whether to swap or keep their positions,

Merges sorted segments efficiently.

Thus, the compare function is a decision-maker, not a swapper.
Swapping is handled by the internal sorting algorithm. 
*/
