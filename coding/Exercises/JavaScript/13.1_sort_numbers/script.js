const numbers = [1, -5, 666, 2, 400, 11];



// Sort the array of numbers from descending to ascending order

numbers.sort((a,b)=>{
    if(a>b) return -1;
    if (a<b) return 1;

});
console.log(numbers);

// Sort the array of numbers from ascending to descending order.

numbers.sort((a,b)=>{
    if(a>b) return 1;
    if (a<b) return -1;

});
console.log(numbers);