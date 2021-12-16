'use strict'

const frutas = [
    'Naranja',
    'Manzana',
    'Pera',
    'Platano',
    'Mandarina'
];

const nombre = 'Pedrito Fernandez :C';

const frutas2 = {
    name1: 'Naranja',
    name2: 'Manzana',
    name3: 'Pera',
    name4: 'Platano',
    name5: 'Mandarina'
};

/* for (const value in frutas2) {
    console.log(frutas2[value]);
} */



/* for (const iterator of nombre) {
    console.log(iterator);
} */

/* for (let index = 0; index < frutas.length; index++) {

    console.log(frutas[index]);
    
} */



/* let usuario1 = prompt('Cual es tu nombre'); */


const obtenerUsuario = () => {
    
    let usuario = document.getElementById('nombre').value;
    /* console.log(usuario); */

    return usuario;
    /* console.log(event); */
}


const getDataUser = (info) => {

    /* event.preventDefault(); */
    document.getElementById('nombre').value = '';
    console.log(info);
}


/* const initApp = () => {} */

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', function(event){

    event.preventDefault();
    getDataUser(obtenerUsuario());

});







