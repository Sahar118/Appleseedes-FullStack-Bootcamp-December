function numberScore(score) {
    let num1=score;

        if (0<= num1 <= 64 ) {
            console.log('F');
        }else if (65 <= num1 <= 69 ) {
            console.log('D');
        }else if (70 <= num1 <= 79 ) {
            console.log('C');
        }else if (80 <= num1 <= 89 ) {
            console.log('B');
        }else if (90 <= num1 <=100 ) {
            console.log('D');
}
        else { console.log('Please Entire a number ');}
    }

    numberScore(50);