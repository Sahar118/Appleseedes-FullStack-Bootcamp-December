                                                                                                                                                                                                                                                const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];



const ol = document.createElement('ol');
const liList1 = document.querySelectorAll('li')
users.forEach((liItem) => {
let li=  ol.appendChild(document.createElement('li'));
li.innerText(`${item.firstName} ${item.lastName}`);
li.createAttribute(`data-id, ${item.id}`)
})

ul.style.listStyleType='none';
document.querySelector('body').appendChild(ol)

