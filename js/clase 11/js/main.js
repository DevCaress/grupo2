/* var anchoDiv = 100;

function pantalla(){
    var widthVentana = window.innerWidth;
    var heightVentana = window.innerHeight;
    anchoDiv++;
    document.getElementsByTagName('div')[0].style.width = anchoDiv + 'px';
    document.getElementsByTagName('body')[0].innerHTML = heightVentana;
}



window.onresize = pantalla; */


var container = document.getElementById('container');
var nogara = document.getElementById('nogara');






function allowDrop(event){
    event.preventDefault();
    /* console.log(event); */
}

function drop(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if (document.getElementById(data).dataset.cont == event.target.id || event.target.id == 'container2') {
        event.target.appendChild(document.getElementById(data));
    }
    /* console.log(event); */
}

function drag(event){
    event.dataTransfer.setData("text", event.target.id);
    /* console.log(event); */
}