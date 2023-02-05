const wonderWoman = {
    name: "Diana Prince"
    }
    const batman = {
    name: "Bruce Wayne"
    }
const superHeroes = [wonderWoman, batman];


function printName() {
    console.log(`my name is ${this.name}`);
    }



function printHeroes(heroes, printFunc) {
        heroes.forEach(element => {
          printFunc.call(element)
        });
 
}
printHeroes(superHeroes,  printName)
// const resultApply1 = printName.apply(printName(), [superHeroes] );

// const resultApply1 = printName.call(wonderWoman, batman, [superHeroes]);
// const resultApply2 = printName.call(batman, [superHeroes]);


// console.log(resultApply1);
// console.log(resultApply2);
