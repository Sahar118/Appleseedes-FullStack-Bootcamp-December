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

    let funcPassword2 =(password) => password.length >= 7 && 'Strong';




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


    function passwordFunc4 (password){
    let isUpper = /[A-Z]/.test(password);

    return password.length>= 7 && isUpper ==true 
    ? 'very strong'
    :password.length>= 7 ? 'Strong'
    :'Weak'
    };