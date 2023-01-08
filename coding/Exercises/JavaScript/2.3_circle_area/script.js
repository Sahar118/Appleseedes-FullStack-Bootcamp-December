// / Write a function that calculates the circle area by a given radius
// as an argument. Print the area as it is calculated and then print
// it rounded to two decimal places./ 

function circleArea(r){

    let area1= Math.PI*r**2
    return Math.floor(area1)
}

console.log(circleArea(5));