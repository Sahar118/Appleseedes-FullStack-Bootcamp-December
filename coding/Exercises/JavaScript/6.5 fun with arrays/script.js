// 1
const arr= new Array(1)
for (let i=0; i<=100; i++){
    //  console.log(arr);
    console.log(arr.fill('haha', 0, 90)+[i]);
}


// 2
const ArrFrom1 = ('hello');
console.log(Array.from(ArrFrom1));

const ArrFrom2 = [1, 2, 3];
for (let i=0; i<= 20; i++){
console.log(Array.from([i], (x => x + 2*x)));
}
// 3
// Convert only values of an object into one array
// can use  Object.keys() Object.entries()
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 23,
    country: 'Israel'
};
const propertyValues = Object.values(person);
console.log(propertyValues);

// 4

// To convert an array into an object we will create a function and give it 2 properties, an array and a key.

const firstName= ['Sahar', 'Tamer', 'Jawad', 'Jad']
const arrayObj= Object.assign({}, firstName)
console.log(arrayObj);

// 5
let result= Array.isArray(firstName);
console.log(result);

// 6 A 
let arr1 = ['a','b','c'];
let arr2 = arr1;
arr2.push('d');  //Now, arr1 = ['a','b','c','d']
console.log(arr1);
console.log(arr2);

// 6 B

let oldArray = [1, 2, 3, 4, 5];

let newArray = oldArray.slice();
newArray.push(1);
console.log({newArray});
console.log({oldArray});
