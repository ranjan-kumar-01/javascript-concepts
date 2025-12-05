[1, 2, 3].reduce((acc, x) => acc + x, 0);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const n = numbers.reduce((acc, x) => acc + x, 0)
console.log(n)



const n2 = numbers.reduce((acc, x) => {
    if (acc % 2 === 0) {
        return even = acc + x
    }
})

console.log(n2)

const arr = [[1,2],[3,4],[5]];
const flat = arr.reduce((acc,x)=>acc.concat(x),[]);
console.log(flat); 
