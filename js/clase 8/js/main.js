


function user(){
    
    var nombre = prompt('Cual es tu nombre?');
    var color = prompt('Cual es tu color fav?');
    /* console.log(nombre); */
    bienvenida(nombre, color);
    return nombre, color;
}

function bienvenida(nombre, color = 'rosa'){

    document.write('Bienvenido ' + nombre + ' Ya eres parte de la comunidad :3');
    document.write(color);

    function perfil(nombre, color){
        document.getElementsByTagName('body')[0].innerText = '';

        document.write('User: ' + nombre + '<br>');
        document.write('Color: ' + color);
    }

    setTimeout(function(){
        perfil(nombre, color);
    },3000);
    
}
/* user(); */


function suma(num1, num2){
     
    return num1 + num2;
}


/* var nombre = prompt('Cual es tu nombre?'); */

/* var perro = suma(4,5); */


function mensaje(nombre){
    return 'Hola ' + nombre + ' ,Feliz día :3';
}

/* var persona1 = mensaje('Pedro'); */


console.log( mensaje('Ian') );