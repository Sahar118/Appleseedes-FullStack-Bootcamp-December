const foods = ["falafel", "sabich", "hummus",
"pizza with extra pineapple"];



// Sort the array of strings from descending to ascending order
console.log(foods.sort());

// a.2. Sort the array of strings from ascending to descending order
const foodSort = foods.sort((a, b) => b.localeCompare(a) );
console.log(foodSort);

/// way 2 foods.sort((a, b) => (a > b ? -1 : 1)) || foods.sort().reverse();

//  **************** (✿◠‿◠)  *******************

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",

    ];

// Sort the array of strings from descending to ascending order

let uppercase = foodsWithUpperCase.map(element => element.toUpperCase());
console.log(uppercase); 
    
console.log(uppercase.sort());

// a.2. Sort the array of strings from ascending to descending order


const uppercaseSort =uppercase.sort((a, b) => b.localeCompare(a) );
console.log(uppercase);


//  **************** (✿◠‿◠)  *******************

const words = ["apple",
"supercalifragilisticexpialidocious",
"hi", "zoo"];

const wordSort = words.sort(function(a, b){
    return b.length - a.length;
});

console.log(wordSort);
// let lengthWords = words.map(element => element.length);
// console.log(lengthWords);

// lengthWords.sort((a,b)=>{
//     if(a>b) return -1;
//     if (a<b) return 1;

// });
// console.log(lengthWords);



