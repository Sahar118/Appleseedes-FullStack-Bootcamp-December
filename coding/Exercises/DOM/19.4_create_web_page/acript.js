
const body = document.querySelector('body');
const navbar = document.createElement('nav');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const LittleGirl = document.createElement('img');
const ballonImg = document.createElement('img');
const container = document.createElement('div');
const btnContainer = document.createElement('div');
const btn1 = document.createElement('div');
const btn2 = document.createElement('div');
const btn3 = document.createElement('div');
const imgContainer = document.createElement('img');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');







body.appendChild(navbar);
body.appendChild(container);
navbar.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
container.appendChild(btnContainer)
btnContainer.appendChild(btn1)
btnContainer.appendChild(btn2)
btnContainer.appendChild(btn3)
// pContainer.appendChild(p1)
// pContainer.appendChild(p2)
// pContainer.appendChild(p3)
container.appendChild(imgContainer)

LittleGirl.src='./IMG/Little-Girl-removebg-preview.png';
document.body.append(LittleGirl)

ballonImg.src='./IMG/Balloon-removebg-preview.png';
document.body.append(ballonImg)

imgContainer.src='./IMG/image1511696112-removebg-preview.png';
document.body.append(imgContainer)


// body style :
body.style.boxSizing = "border-box";
body.style.fontFamily = "Impact,Charcoal,sans-serif";
body.style.Width = "100%";
body.style.minHeight = "100vh";
body.style.display='flex'
body.style.flexDirection = 'column'



//navbar style
navbar.style.height = '70px'
navbar.style.width = '100vw';
navbar.style.color = 'white';
navbar.style.marginTop= '-16px';
navbar.style.marginLeft= '-16px';
navbar.style.display='flex'
navbar.style.flexDirection='row'
navbar.style.justifyContent="center";
navbar.style.backgroundColor="black";





// ul
ul.style.display='flex'
ul.style.flexDirection='row'

// li1
li1.innerText = 'SB'
li1.style.fontFamily='Amatic SC';
li1.style.listStyle='none'
li1.style.fontSize='30px'
li1.style.paddingTop= '10px';
li1.style.justifyContent='flex-start'

// li2
li2.innerText = 'Company'
li2.style.fontFamily='Amatic SC';
li2.style.listStyle='none'
li2.style.fontSize='30px'
li2.style.paddingTop= '10px';
li2.style.marginLeft= '20px';


li2.style.justifyContent='flex-end'

// container
container.style.height= '350px'
container.style.width= '500px'
container.style.backgroundColor= 'white'
container.style.display= 'flex';
container.style.flexDirection='row';
container.style.margin= 'auto'
container.style.marginTop= '100px'

// container.style.paddingLeft = '150px'


btnContainer.style.display = 'flex'
btnContainer.style.alignContent = 'space-between'

// btn1
btn1.style.height= '30px'
btn1.style.width= '400px'
btn1.style.opacity='0.7'
btn1.style.backgroundColor = 'red'
btn1.style.borderRadius = '20px'
btn1.style.position = 'relative'
btn1.style.top= '-15px'
btn1.style.color = 'white'
btn1.textContent = "Hola Amigos"
btn1.style.textAlign = 'center'
btn1.style.paddingTop = '5px'
btn1.style.marginRight = '15px'
btn1.style.marginLeft = '40px'



// // btn2
// btn2.style.height= '30px'
// btn2.style.width= '150px'
// btn2.style.backgroundColor = 'black'
// btn2.style.borderRadius = '20px'
// btn2.style.position = 'relative'
// btn2.style.top= '-15px'
// btn2.style.color = 'white'
// btn2.textContent = "You Likes it 0 times "
// btn2.style.textAlign = 'center'
// btn2.style.marginRight = '15px'



// // // btn3
// btn3.style.height= '30px'
// btn3.style.width= '150px'
// btn3.style.backgroundColor = 'red'
// btn3.style.borderRadius = '20px'
// btn3.style.position = 'relative'
// btn3.style.top= '-15px'
// btn3.style.color = 'white'
// btn3.textContent = "Hallo Freunde"
// btn3.style.textAlign = 'center'
// btn3.style.marginRight = '15px'


imgContainer.style.height = '250px'
imgContainer.style.width = '400px'
imgContainer.style.zIndex = '1'
imgContainer.style.position = 'relative'
imgContainer.style.left = '420px'
imgContainer.style.bottom = '450px'


// myImg style
LittleGirl.style.width = '120px'
LittleGirl.style.marginTop = '-170px'
LittleGirl.style.position = 'relative'

// myImg style
ballonImg.style.width = '120px'
// ballonImg.style.marginTop= '5px';
// ballonImg.style.marginLeft = '50px';
ballonImg.style.transition = ' all 7s'
ballonImg.style.position = 'relative'
ballonImg.style.bottom = '295px'
ballonImg.style.left = '90px'
ballonImg.style.zIndex = '2'



// createBtn(()=>{
//     for (let i=0; i<=3; i++){
//         let btn = btnContainer.appendChild(document.createElement('div'));
//         btn.createAttribute(`div,${i}`)
//     }
// }
// )

setInterval(() =>{
    const x = Math.floor(document.body.clientWidth *.55)
    const y = Math.floor(document.body.clientHeight * -.42)
    ballonImg.style.transform= `translate(${x}px, ${y}px)`;
}, 800)


        
        const cc =document.createAttribute('container')
        container.setAttributeNS(cc);

        const btnC = document.createAttribute('btn-div')
        btnContainer.setAttributeNS(btnC);
