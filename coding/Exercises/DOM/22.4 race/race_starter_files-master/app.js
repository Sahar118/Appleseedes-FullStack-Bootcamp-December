// 
const player1 = document.querySelectorAll('#player1-race td');
const player2 = document.querySelectorAll('#player2-race td');
const active = document.querySelector('.active');
const reset = document.querySelector('#reset');

// 

let td1=0;
let td2 =0;

window.addEventListener('keyup', function(e){
    if(td1==11|| td2==11){
        return
    }
    if(e.key === 'd'){
            player1[td1].classList.remove('active')
            player1[td1+1].classList.add('active')
            td1+=1
        }else if(e.key === 'ArrowRight'){
            player2[td2].classList.remove('active')
            player2[td2+1].classList.add('active')
            td2+=1
        }
        declareWinner()
    })

function declareWinner() {
    if (td1==11){
        alert('Player 1 Won!!!')
        reset.classList.remove('hidden')
    }
    else if( td2==11){
        alert('Player 2 Won!!!')
        reset.classList.remove('hidden')
    }
}

reset.addEventListener('click', function(e){
    player1.forEach(element=>{
        element.remove('active')
    });
  player2.forEach(element=>{
        element.remove('active')
    });

    player1[td1[0]].classList.add('active')
    player2[td2[0]].classList.add('active')
    td1 = 0;
    td2 = 0;
    reset.classList.add('hidden')
})
