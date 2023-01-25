
const inputs = document.querySelector('form');
const submitBtn=document.querySelector('form')
const labelL = document.querySelector('label');
const sub = document.createAttribute('type');


sub.value='submit'
labelL.innerHTML='Text to copy: <br> 123456';
submitBtn.appendChild(document.createElement('button')).setAttributeNode(sub);

function inputFun() {
  for(let i=0; i< inputs.children.length-1;i++) {
      inputs.children[i].onkeyup = function() {
        if(inputs.children[i].value!=''&&inputs.children[i]!==inputs.children[i-1]) {
          inputs.children[i].nextElementSibling.focus();
          } 
      }
    }
}
inputFun()

inputs.lastChild.style.width='60px'
inputs.lastChild.style.height='30px'
inputs.lastChild.innerHTML='Submit'
