
/* document.getElementsByTagName('button')[0].addEventListener('click', function(){
    console.log('Hee hee x2');
}) */

/* document.getElementsByTagName('button')[0].onclick = function(){console.log('perro')}
 */

/* Tiktok de personas que hay que seguir */

document.getElementsByTagName('button')[0].addEventListener('click', mensaje);
/* document.getElementsByTagName('button')[0].addEventListener('mousedown', mouseDown2);
document.getElementsByTagName('button')[0].addEventListener('mouseenter', cursosEnter);
document.getElementsByTagName('button')[0].addEventListener('mouseover', cursorOver);
document.getElementsByTagName('button')[0].addEventListener('mouseout', cursorOut);
document.getElementsByTagName('button')[0].addEventListener('mouseleave', cursorLeave);
document.getElementsByTagName('button')[0].addEventListener('mousemove', cursorMove); */

function mensaje(event){
    
    event.target.classList.toggle('perro');

    console.log(this.classList);
}
function mouseDown2(){
    console.log('mousedown');
}

function cursosEnter(){console.log('mouse Enter');}
function cursorOver(){console.log('Mouse Over');}
function cursorOut(){console.log('Mouse Out');}
function cursorLeave(){console.log('cursorLeave');}
function cursorMove(){console.log('cursorMove');}

document.getElementsByTagName('body')[0].oncontextmenu = function(){return false;}


/* document.getElementsByTagName('button')[0].addEventListener('contextmenu', menuSec);

function menuSec(event){
    
    document.getElementsByTagName('div')[0].style.display = 'block';
    console.log(event);
    
} */