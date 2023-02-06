const fruits = ["apple", "orange", "cherry"];

const makeAllCaps= (arr)=>{
    return new Promise((resolve, reject) => {
            if(arr.every((word) => typeof word === 'string')){
                resolve(arr.map((word) =>  word.toLocaleUpperCase()));
            }else{
                reject(new Error('Not a string'));
            };
        })
    }
function sorWord(newArr){
    return new Promise (resolve => {
        resolve(newArr.sort());
    })    
}
    makeAllCaps(fruits)
    .then(sorWord())
    .then((res) =>console.log(res))
    .catch((rej) => console.log(rej))
