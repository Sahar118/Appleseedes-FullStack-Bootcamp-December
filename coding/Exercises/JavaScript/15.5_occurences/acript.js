function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter + 1 ;
    }
    } return counter ;
    }
    countOccurrences ( "ini mini miny moe" , "n" );
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.

//sum was only declared at line 12 but never had a value , therefore the loop could not add values to it.

// 2. Which debug method did you use to find the bug?

//breakpoints

// 3. Explain the bug in your own words.

    // counter +1 => counter ++ => counter +=1 

    function countOccurrences (str, char){
        let counter = 0 ;
        for ( let i = 0 ; i < str .length; i ++ ){
        if ( str . charAt ( i ) === char ){
        counter ++ ;
        }
        } return counter ;
        }
        countOccurrences ( "ini mini miny moe" , "n" );
    