function  passwordFunc1 (password){
    if (password.length >= 7){
        console.log('Strong');
        }
    else {
        console.log('Weak');}
    };
    passwordFunc1('54155fjhgd')


    // ********************************
    
    let funcPassword =(password) =>{password.length >= 7 ? 'Strong' : 'Weak'};
    // ********************************
function passwordFunc5 (password){
    let isUpper = /[A-Z]/.test(password);
    if (password.length >= 7){
           if (isUpper = /[A-Z]/.test(password)){
            console.log('Very Strong');
           }
           else{ console.log('Strong');
        }
    }
    else {
        console.log('Weak');}
    };

    passwordFunc5(`HJDS12355`);

