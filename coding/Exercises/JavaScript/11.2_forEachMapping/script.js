// 1
const doubleValues = [1, 2, 3, 4, 5, 6, 7];

const doubleArray = doubleValues.forEach(function(double) {
    console.log(double*2);
})

// 2
const onlyEvenValues = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const arr1 = [];

const onlyEven = onlyEvenValues.forEach(function(even1) {
    const evenNum= even1%2===0 && push().arr1;
return (evenNum);
})

console.log(onlyEven);



// 3
const showFirstAndLast = ['Hola', 'hello', 'shalom'];

const firstAndLast = showFirstAndLast.map(function(firstand){

    return firstAndLast.lastIndexfirstelement;
})
console.log(firstAndLast);



// 4 

let str = 'hola amigos';
const vowelCount = (string) => {
    let array = string.toUpperCase().replaceAll(' ','').split('');
    let count ={};
    array.map(function(e){
        if (count[e]){
            count[e]++;
        }
        else{
            count[e]=1
        }
    });
    console.log(count);
   
}
vowelCount(str);

// 5

let str = 'hola amigos';
const capitalize = (string)=>{
    let capital={};
    [...str.toUpperCase()].forEach(function (e){
        capital +=e;   
});
    console.log(capital);

}
capitalize(str);

// 6
let str3 = 'hola amigos';
const shiftLetters = (string) =>{
   let array = string.split('');
   let array2 = [] ;
   array.map(function (e,i) {
      array2.push(String.fromCharCode(e.charCodeAt()+1));
   });
   console.log(array2.join(''));
} 
shiftLetters(str3);


// 7

let str4 = 'hola hello amigos friends';
const swapCase = (string) => {
   let array = string.split(' ');
   let str5 = '' ;
   array.map(function (e,i) {
      if(i==0||i%2==0){
         str5 += e.toUpperCase();
         str5 += ' ' ;
      }
      else{
         str5 += e;
         str5 += ' ' ;
      }
   });
   console.log(str5);
};
swapCase(str4);
