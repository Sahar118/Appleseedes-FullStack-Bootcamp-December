const words = ['dag', 'dag', 'bag', 'wag'];

const allEndINg = words.every(word => {
    
    const last=word.length -2; 
    return word[last]==='a'; 
    
})
console.log(allEndINg);