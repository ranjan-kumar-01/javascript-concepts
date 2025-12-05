const arr = [2, 4, 6];
console.log(arr.every(x => x % 2 === 0));

const ageData = [{ age: 21 }, { age: 25 }];
console.log(ageData.every(u => u.age >= 18));


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

console.log(users.every((c)=>c.city=="Pune"))