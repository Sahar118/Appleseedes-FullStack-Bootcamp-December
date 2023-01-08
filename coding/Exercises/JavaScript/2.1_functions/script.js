// 1. Write a function called ‘countryInfo’ which takes three
// parameters: 'country', 'population' and 'capitalCity'. Based
// on this input, the function returns a string with this format:
// ‘Spain has 47 million people and its capital city is Madrid’
// 2. Call this function 3 times, with input data for 3 different
// countries. Store the returned values in 3 different
// variables, and log them to the console.



function countryInfo() {
    let country = 'spain';
    let population = 47;
    let capitalCity = 'Madrid';
    return `${country} has ${population} million people and its capital city is ${capitalCity} `
}
console.log(countryInfo());

function countryInfo() {
    let country = 'Argantina';
    let population = 120;
    let capitalCity = 'Buenis Aires';
    return `${country} has ${population} million people and its capital city is ${capitalCity} `
}
console.log(countryInfo());

function countryInfo() {
    let country = 'Israel';
    let population = 9;
    let capitalCity = 'Jerusalem';
    return `${country} has ${population} million people and its capital city is ${capitalCity} `
}
console.log(countryInfo());


