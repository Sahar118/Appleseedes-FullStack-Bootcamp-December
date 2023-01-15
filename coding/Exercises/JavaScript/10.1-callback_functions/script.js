// function checkString(str1){
//     let checkWord = new String('str1');
//     console.log(checkWord);
// }
// function isString (str, f){


//     if(typeof str ==='string'){

//     checkString(str);
// } else{ console.log(hello);}
// }
// isString('hello');


// ***********************************

// 2+3
// const firstWordUpperCase=(str,func)=>{
//     let str1=str.split(' ');
//     let word = str1[0].toLocaleUpperCase();
//     str1.shift();
//     str1.unshift(word);
//     str1=str1.toString()
//     func(str1);
//  }
 
//  const replace=(str)=>{
//     let str2=str.replaceAll(',', '-' );
//     console.log(str2);
//  }

//  firstWordUpperCase('hola amigos hello friends',replace);


const myArray = (str, f) =>{
    console.log(str);
    f(str)
}

const newWord = (str)=>{
    console.log(str);
    console.log(str);
}

myArray('hello', newWord);

