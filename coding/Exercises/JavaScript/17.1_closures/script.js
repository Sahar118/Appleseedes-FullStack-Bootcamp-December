// Block 1
// var b = 1;
// function someFunction(number) {

// function otherFunction(input) {
//     console.log(b);
// }
// return otherFunction();

// }
// var firstResult = someFunction();
// firstResult();
// var result = firstResult(2);

// *return otherFunction = > otheFunction () we have to call 
// the function inside the parent function and not to return .

// Block 2
// var a = 1;
// function b2() {
    
// a = 10;
// return;
// function a() {

//  }

// }
// b2();
// console.log(a);
// a=1 becouse the console log is outer the function if it inside
// the function it wil return 10

// Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
setTimeout(log, 100);
}
// the let is global
