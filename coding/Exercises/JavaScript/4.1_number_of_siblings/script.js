function numSiblings() {
    const doc = prompt('How many siblings do you have?');
        if (doc == 1) {
            console.log('1 sibling!' );
        }else if (doc > 1 ) {
            console.log('More than 1 sibling');
        }
        else { console.log('No siblings');}
    }



    function numSiblings() {
        const doc = prompt('How many siblings do you have?');
            if (doc === '1') {
                console.log('1 sibling!' );
            }else if (doc > '1' ) {
                console.log('More than 1 sibling');
            }
            else { console.log('No siblings');}
        }