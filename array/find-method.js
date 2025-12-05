const users = [
    {
        id: 1,
        username: "Ranjan"
    },
    {
        id: 2,
        username: "Rohit"
    },
    {
        id: 3,
        username: "Chandan"
    },
    {
        id: 4,
        username: "Ayansh"
    }
];
console.log(users.find(u => u.id === 3).username);
