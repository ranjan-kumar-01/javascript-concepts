/* 
pop() — Remove from the END

Removes the last element of an array
and returns that removed element. */

//  Basic Example
let arr = [10, 20, 30];
let removed = arr.pop();

console.log(removed);
console.log(arr);

// Using pop() in a Loop (Stack Pop)
let stack = [1, 2, 3, 4];
while (stack.length) {
    console.log(stack.pop());
}
console.log(stack)

// pop() on empty array
const emptyArr =[]
const result =  emptyArr.pop(); 
console.log(result)