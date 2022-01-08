const container =  document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', changeElement);

function changeElement(){
   console.log('hello');
   const elt = document.createElement('h2');
//    elt.classList.add('heading');
   elt.textContent ='I am the new balise on this container.'
   container.appendChild(elt);
}

