function divisble7(n){
    let num;
    for (let num= 1; num <= n; num++) {
            if(num % 7 == 0 ){
                if (num.toString().includes('7')){
                console.log('BOOM-BOOM');
    }
    else{ 
            console.log('BOM');
        }
        }
        else {
                console.log(num);
            }
        }
        };

console.log(divisble7(num=18));