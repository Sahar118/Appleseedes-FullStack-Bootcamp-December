
// //Let us self-learn something. You come to your new workplace
// and you are an expert in the technologies your company is
// working with. But all of the sudden your boss says. We want to
// implement a feature with dates. This will happen all the time in
// your career. So let's roll up our sleeves and start googling. How
// to .... “date js”.
// And as always the MDN docs are a great source Find how to
// get the following:
// 1. Name of the current day e.g. Sunday
// 2. Current day of the month e.g. 31
// 3. Current month e.g January
// 4. Current Year e.g 2021
// Create a function that will return a string in the following format:
// `Today is Sunday the 31 of January 2021’
 


// function getCurrentDay(){
// const date2 = new Date('January 31, 2021');
// let theDay = date2.toDateString();
// console.log(`Today is ${theDay}!`);
// }
// getCurrentDay();




const getCurrentDay =() =>{
    const now = new Date();
    const options ={weekday:'long', year:'numeric', month: 'long', day:'numeric'};
    const dayString = now.toLocaleDateString('en-US', options);
    return `Today is ${dayString}!`;
}

// way 1 to call the function 
getCurrentDay();

// way 2 to call the function 
const callFunc = getCurrentDay();
console.log(callFunc);

