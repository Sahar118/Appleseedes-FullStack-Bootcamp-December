const label = document.querySelector('label');
const input = document.querySelector('input');



  function generateRandomLetter() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let randomLetter =   alphabet[Math.floor(Math.random() * alphabet.length)]
    return randomLetter;
  }

  function guessTheNumber (){

  }
  
  console.log(generateRandomLetter()) // "o"
  console.log(generateRandomLetter()) // "X"
  console.log(generateRandomLetter()) // "L"
  console.log(generateRandomLetter()) // "J"
  console.log(generateRandomLetter()) // "c"
  console.log(generateRandomLetter()) // "A"

  input.addEventListener('keypress', function(e){
    if(e.key === 'randomLetter'){
        e.key.style.color = 'red'; 
    }
  })