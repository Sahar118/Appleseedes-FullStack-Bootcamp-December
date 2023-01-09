

function isValidPassword(userName, password) {

    if ((password.length <8) || (password.indexOf(' ') !== -1 ) || (password.indexOf(userName)!==-1)){
    return false;
} else{
    return true; 
}
}


function isValidPassword(userName, password) {
    const tooShort = password.length <8;
    const hasSpace= password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(userName) !==-1;

    if(tooShort || hasSpace || tooSimilar) return false;
    return true;
}

function isValidPassword(userName, password) {
    const tooShort = password.length <8;
    const hasSpace= password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(userName) !==-1;

    if(!tooShort && !hasSpace && !tooSimilar) return true;
    return false;
}



// ****************************************
    function avaregeNum(arr){
        for (let num of arr){
            total += num;
        }
        res = total / arr.length;
        return res ; 
    }
    

    // num is the value of arr, it can be x /y ..


    // ******************************************

    function isPangram (str){
        let lowCase=str.toLowerCase(); {
        for (let alphaLetters of 'abcdefghijklmnopqrstuvwxyz'){
        if (lowCase.indexOf(alphaLetters)!==-1) return false;
        }
    }
        return true;

    }


    function isPangram (str){
        let lowCase=str.toLowerCase(); {
        for (let alphaLetters of 'abcdefghijklmnopqrstuvwxyz'){
        if (!lowCase.includes(alphaLetters)) return false;
        }
    }
        return true;

    }