const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter(word => word.length > 6)
// console.log(result)


function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered)
// filtered is [12, 130, 44]

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


function isPrime(n) {
    if (n < 2) {
        return false;
    }
    if (n % 2 === 0) {
        return n === 2;
    }
    for (let factor = 3; factor * factor <= n; factor += 2) {
        if (n % factor === 0) {
            return false;
        }
    }
    return true;
}

// console.log(array.filter(isPrime));


let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];


let someUser = users.filter((e)=>e.id<3)
console.log(someUser)