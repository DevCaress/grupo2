/* var animal = {
    edad: 7,
    nombre: 'Pugberto',
    tipo: 'Perro',
    medicamentos: [
        'Parecetamol',
        'Desparacitante',
        'Cafiaspirinas',
        {
            alergias: [
                ['perro'],
                ['gato'],
                ['Perico']
            ]
        },
    ],

}; */


/* var facebook = {
    amigos: [
        { name: 'Chente', time: '5 weeks' },
        { name: 'ix', time: '2 months' }
    ],
    fotos: [
        {
            description: 'lorem askdjhasdkjh',
            tamaño: '300 x 500',
            comentarios: [
                {person: 'bryan', comment: 'alskdjalsdkjalskdj'},
                
            ]
        },
    ],
    estadoCivil: true,

}; */


var marginTop = 0;
var marginLeft = 0;
var velocidad = 10;

function mover(flecha) {

    var pikachu = document.getElementById('pikachu');
    /* marginTop = marginTop + velocidad; */

    switch (flecha) {
        case 0:
            marginLeft -= velocidad;
            pikachu.style.marginLeft = marginLeft + 'px';
            console.log('izquierda');
            break;

        case 1:
            marginTop -= velocidad;
            pikachu.style.marginTop = marginTop + 'px';
            console.log('arriba');
            break;

        case 2:
            marginTop += velocidad;
            pikachu.style.marginTop = marginTop + 'px';
            console.log('abajo');
            break;

        case 3:
            marginLeft += velocidad;
            pikachu.style.marginLeft = marginLeft + 'px';
            console.log('derecha');
            break;

        default:
            break;
    }

}



