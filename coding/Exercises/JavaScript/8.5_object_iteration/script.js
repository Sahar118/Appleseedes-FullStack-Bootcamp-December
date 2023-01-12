const obj1={
    name:'Sahar',
    Last:'Bser',
    gender:'female',
    age:29,
    livesIn:'Hurfiesh'
 }
 const obj2={};
 const objectIteration=(obj)=>{
    for(let key in obj){
       obj2[obj[key]]=key;
    }
    return obj2;
 }
 console.log(objectIteration(obj1));