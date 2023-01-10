
// function passwordFunc(n) {
// let num;
//     for (let num= 0; num <= n; num++){
//             if((num.length >= 7) && (num.toString().includes('/[A-Z]/')>=1)){
//                 console.log('Very Strong');
//             }
//             else if  ((num.length >= 7) && (num.toString().includes('/[A-Z]/')===0)){
//                 console.log('Strong');
//             }
        
//         else {
//                 console.log('Weak');
//             }
            
//         }
//     };
// passwordFunc(num='kfHg12365');


function passwordFunc(n) {
    let isUpper = /[A-Z]/.test(n);

    let num;
        for (let num= 0; num <= n; num++){
                if(num.length >= 7){
                    if (num.isUpper>=1){
                    console.log('Very Strong');
                }
                   else{ console.log('Strong');
                }
            }
            
            else {
                    console.log(num);
                }
                
            }
        };
    passwordFunc('kfHg12365');

// function divisble7(n){
//     let num;
//     for (let num= 1; num <= n; num++) {
//             if(num % 7 == 0 ){
//                 if (num.toString().includes('7')){
//                 console.log('BOOM-BOOM');
//     }
//     else{ 
//             console.log('BOM');
//         }
//         }
//         else {
//                 console.log(num);
//             }
//         }
//         };

// console.log(divisble7(num=18));
