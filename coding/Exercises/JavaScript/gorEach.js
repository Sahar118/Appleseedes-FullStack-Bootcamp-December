// const words = ['dag', 'dag', 'bag', 'wag'];

// const allEndINg = words.every(word => {
    
//     const last=word.length -2; 
//     return word[last]==='a'; 
    
// })
// console.log(allEndINg);



function compare(s1, s2) {
	return s1.length - s2.length;
}

// function printArraystring(str, n) {
// 	for (let i = 0; i < n; i++)
// 	(str[i] + " ");
// }

let arr = ["GeeksforGeeks", "I", "from", "am"]
let n = arr.length

arr.sort(compare);
// printArraystring(arr, n);

