const desplegable = document.querySelectorAll('.menu1');
const desplegable2 = document.querySelectorAll('.menu2');


const icono = document.querySelectorAll('.fa-caret-right');
console.log(desplegable.classList);

desplegable[0].addEventListener('mouseenter',() => {
    icono[0].classList.remove('fa-caret-right');
    icono[0].classList.add('fa-caret-down');
    console.log(icono);
});

desplegable[0,1,2,3].addEventListener('mouseout',() => {
    icono[0].classList.remove('fa-caret-down');
    icono[0].classList.add('fa-caret-right');
    console.log(icono);
});

desplegable2[0].addEventListener('mouseenter',() => {
    icono[1].classList.remove('fa-caret-right');
    icono[1].classList.add('fa-caret-down');
    console.log(icono);
});

desplegable2[0,1,2].addEventListener('mouseout',() => {
    icono[1].classList.remove('fa-caret-down');
    icono[1].classList.add('fa-caret-right');
    console.log(icono);
});

