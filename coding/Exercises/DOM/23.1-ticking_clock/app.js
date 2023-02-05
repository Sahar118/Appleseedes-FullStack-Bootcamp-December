const clock = document.querySelector('.clock')

let tic1 = document.createElement("span");
tic1.setAttribute("class", "tic1")

let tic2 = document.createElement("span");
tic2.setAttribute("class", "tic2")

let tic3 = document.createElement("span");
tic3.setAttribute("class", "tic3")



clock.appendChild(tic1)
clock.appendChild(tic2)
clock.appendChild(tic3)




var id = null;
function myMove() {
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 500) {
        clearInterval(id);
        } else {
        pos++;
        tic1.style.top = pos + 'px';
        tic1.style.right = pos + 'px';
        tic1.style.bottom = pos + 'px';
        tic1.style.left = pos + 'px';
        }
    }
    }