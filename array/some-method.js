const arr = [3, 5, 7];
console.log(arr.some(x => x % 2 === 0));

const ageData = [{ age: 21 }, { age: 25 }];
console.log(ageData.some(u => u.age >= 18));


const users = [
    {
        name: "Ranjan",
        city: 'Pune'
    },
    {
        name: "Rohit",
        city: "Delhi"
    },
    {
        name: "Anvi",
        city: "Pune"
    }
]

console.log(users.some((c)=>c.city=="Delhi"))