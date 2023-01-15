
// way 1
function steps(n, i = 1) {
    if (i > n) return;
    console.log('#'.repeat(i) + ' '.repeat(n - i));
    steps(n, i + 1);
  }

  steps(5,1);

// way 2
  function newArray (N){

    for (let row =0; row<=N; row++){
        let stair = '';
        for (let column=0; column <=N; column++){

            if(column<=row){
                console.log('#'.repeat(row) + ' '.repeat(row++));
            }else{
                stair +=' ';
            }
        }
        console.log(stair);
    }
}

newArray(5);
 
