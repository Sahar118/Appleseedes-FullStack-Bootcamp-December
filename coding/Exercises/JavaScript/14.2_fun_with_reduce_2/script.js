// 1. Write a function called extractOnlyValue which accepts an array of objects and a key and returns a new array with
// the value of each object at the key

const friends = [
    {
      name: "Anna",
    },
    {
      name: "Bob",
    },
]

const extractOnlyValu = (array) => {
    
    let newArr = {};
    array.reduce((key, value)=> {
        const key1 = key.toLowerCase(friends.name);
        console.log(key);

    }

    {})
}
extractOnlyValu(friends);

// 2

const votes = 'hola amigos hghgnHFNNX';
const countOnlyVowels = (string) => {
    let array = string.toLowerCase().replaceAll(' ','').split('');
    array.map((e) => {


    })
    array.reduce((arr, obj)=>{
    
            if(array[obj]){
            array[obj]++
        }else {
            array[obj]=1 
        }
        return array;
        }, {})
    console.log(array);
}    
countOnlyVowels(votes);


// 3















// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count
// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function