
let person = {
    name: 'John',
    getName: function() {
        console.log(this.name);
    }
};

let func = person.getName.bind(person);
setTimeout(func, 1000);
