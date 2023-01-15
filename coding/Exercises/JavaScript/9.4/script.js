function newArray (N){

    for (let row =0; row<=N; row++){
        let stair = '';
        for (let column=0; column <=N; column++){

            if(column<=row){
                stair +='#';
            }else{
                stair +=' ';
            }
        }
        console.log(stair);
    }
}

newArray(3);