/*
 const newArray = arr.map(function(element, index, array) {
  // Function body
  return newValue;
});

element: Har ek element jo array mein hai.

index: Element ka index (position) array mein.

array: Poora array. 
*/

const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Jack', age: 35 }
];

const updatedUser = users.map(e => ({
    userId: e.id,
    fullName: e.name + " Doe",
    userAge: e.age + 1

}))

console.log(updatedUser)


const binaryToDecimal = ["1", "10", "100", "101", "1010", "1001"].map((e) => parseInt(e, 2));
console.log(binaryToDecimal)

const decimalToBinary = [2, 3, 6, 7, 8].map((str) => str.toString(2));
console.log(decimalToBinary)

