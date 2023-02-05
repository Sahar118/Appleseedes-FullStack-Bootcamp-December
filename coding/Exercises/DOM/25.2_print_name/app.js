
let person = {
    name: 'John',
    getName: function() {
        console.log(this.name);
        },
        printAfterSec:function(){
        const func = person.getName.bind(person);
        setTimeout(func, 1000);
    }
    
};
console.log(person.getName())
console.log(person.printAfterSec())

