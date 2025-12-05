
const users = ["Ranjan", "Rohit", "Chandan", "Ayansh"]

users.forEach((item, index, array) => console.log(`${item} is at index [${index}] in ${users}`))

const products = [
  {name: "Phone", price: 20000},
  {name: "Laptop", price: 60000}
];

let arr = [1, 2, 3];
arr.forEach(v => v = v * 2);
console.log(arr); // [1, 2, 3]


let nums = [1, 2, 3];
nums.forEach((v, i, arr) => arr[i] = v * 10);
console.log(nums); // [10, 20, 30]
