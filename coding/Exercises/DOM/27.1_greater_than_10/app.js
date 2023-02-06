
const tenFunc =(num) =>{
    return new Promise((resolve, reject) => {
        if(num>10){
            resolve()
        }
        else{ reject()}
        
    })
}

tenFunc(20)
.then(()=>{
console.log('it greater that 10');
}).catch(()=> {
console.log('it less that 10');
})

tenFunc(2)
.then(()=>{
console.log('it greater that 10');
}).catch(()=> {
console.log('it less that 10');
})
