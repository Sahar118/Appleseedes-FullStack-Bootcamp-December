

// 1. max

const array=[89, 96, 58];

const maxNum = array.reduce((max, currentValue) =>{
    return Math.max(max, currentValue);
})
console.log(maxNum);


// ****************

// 2. the sum of even numbers

let grades = [89, 96, 75, 87, 82, 95, 91];

const evenNum = grades.filter(function (n){
    if(n%2==0) 
    return n;
    n++
console.log(n)
})
console.log(evenNum);


const sumEvenNum = evenNum.reduce((sum, val)=>{

    return sum +val;
})
console.log(sumEvenNum);

// average

const arr = [1, 2, 3, 4, 5];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log(average);
