
/* var element = document.getElementsByTagName('p')[0]; */
/* var element = document.getElementsByClassName('animals')[2]; */
/* var element = document.getElementById('perro'); */

/* console.log(element); */


document.getElementsByTagName('body')[0].innerHTML = '<main> </main> <div id="contPopUp"><div id="popUp"> </div> </div>';

var element1 = '<p class="animals">Gato :3</p>';
var element2 = '<p class="animals" id="perro">Perro :3</p>';
var element3 = '<a class="animals" href="#" onclick="cerrar()">Click</a>';


document.getElementsByTagName('main')[0].innerHTML = element1 + element2 + element3;

/* document.getElementsByTagName('body')[0].innerHTML = '<footer> </footer>'; */


function cambiarTexto(){
    document.getElementsByTagName('p')[0].innerHTML = '<h2> perro </h2>';
}


document.getElementById('popUp').innerHTML = '<img src="img/favicon.ico"> <p> Gato :3 </p> <div onclick="cerrar()">Cerrar :3 </div>';


var flag = false;

function cerrar(){

    if (flag == true) {
        document.getElementById('contPopUp').style.display = 'none';
        flag = false;
    }else{
        document.getElementById('contPopUp').style.display = 'block';
        flag = true;
    }
}