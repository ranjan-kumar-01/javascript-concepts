/* 
array.slice(start, end)

    start → the index where extraction begins (included)

    end → the index where extraction stops (excluded)
 */


// Extract from a specific index till the end
console.log([1, 2, 3, 4, 5].slice(2))


// Extract between two indexes
console.log([1, 2, 3, 4, 5].slice(1, 4))

// Start index negative
console.log([1,2,3,4,5].slice(-2))

// Make a complete copy of an array
const arr = [1,2,3];
const copy = arr.slice();
console.log(copy)

// Convert array-like objects to real arrays

function makeArray() {
    const  realArray = Array.prototype.slice.call(arguments)
    console.log(realArray)
}
makeArray(1,2,3,4,5,6)

// If start > end OR both indexes are equal OR start index exceeds array length,  returns EMPTY array

console.log([1,2,3].slice(3,1))
console.log([1,2,3,4].slice(2,2))
console.log([1,2,3].slice(100))


// string also support
console.log("Hello JavaScript".slice(2,8))