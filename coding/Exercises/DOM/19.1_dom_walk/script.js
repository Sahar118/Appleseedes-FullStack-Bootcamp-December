// 1

const q1 = document.querySelector('li.start-here');
q1.innerText = 'main title';

// 2

const subtitle = document.createElement("li");
para.innerText = "sub title 4";
document.body.querySelector('ul').appendChild(subtitle);
const firstUl = document.querySelector("ul li ul")
firstUl.appendChild(subtitle)

// 3
const removeElement = document.querySelectorAll("li")[7];
removeElement.remove();

// 4
const changeTitle = document.querySelector('title');
changeTitle.textContent = 'Master Of The Dom';


// 5
const pText = document.querySelector('p');
pText.innerText = 'holla amigos';