let wWindow = window.innerWidth;
let hWindow = window.innerHeight;


screen.width;
screen.height;

const btn = document.getElementById('popup');

function getLocation(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log('si sirve');
    }else{
        alert('no sta suportado por tu navegador');
    }

}

function showPosition(position){
    console.log(position);
}



btn.addEventListener('click', getLocation);



