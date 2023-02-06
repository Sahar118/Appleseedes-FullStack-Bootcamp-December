num = 20;
    const tenPromise = new Promise((resolve, reject) => {
        if(num>10){
            resolve()
        }
        else{ reject()}
        
    })


.then(()=>{
console.log('it greater that 10');
}).catch(()=> {
console.log('it less that 10');

})



