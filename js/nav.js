
const boton = document.querySelector('#boton-nav');
const nav = document.querySelector('#navbar');
const closenav = document.querySelector('#close');

boton.addEventListener('click', () =>{ 
    nav.classList.toggle('hidden');
});

closenav.addEventListener('click', () =>{ 
    nav.classList.toggle('hidden');
});
