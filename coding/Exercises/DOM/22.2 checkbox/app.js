const termsCheckBox = document.querySelector('#terms');
const img1 = document.querySelector('img');


const formData ={};
for( let input of termsCheckBox){
    termsCheckBox.addEventListener('input', (e)=> {
        formData[name] =type ==='checkbox' ? img1.classList.remove('hidden') :  img1.classList.add('hidden');

    })
}