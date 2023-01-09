/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).


function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}

// concise body syntax, implied "return"
const welcome = () => 'Welcome to Appleseeds Bootcamp!';


            // ***************************

function power(a) {
let myNumber = a;
let result = Math.pow(myNumber, 2);
return result;
}
const power1 = (a ) => {
    return Math.pow(a, 2)
}
power1(5);

const power2 = (a,b) => {
    return Math.pow(a, 2)
}
power2(5);
// with block body, explicit "return" needed

   // ***************************


// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);

const squareRoot =function (a){
    let num1= a;
    return  Math.sqrt(num1); 
}
squareRoot(5);



   // ***************************
// const randomNumbers = (a, b) => Math.random() * (a - b) +
b;

const randomNumbers =  function (a, b){
    let num1= a;
    let num2=b;
    return Math.random() * (num1 - num2) +num2;
}
randomNumbers(5,1);
