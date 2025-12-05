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

const userIndex = users.findIndex(u => u.id === 4);

console.log(userIndex)