

/* var element = '<div>Algo de texto </div>';

document.getElementsByTagName('body')[0].innerHTML = element; */

/* var container = document.getElementsByTagName('main')[0];
var animals = [
    'Perro',
    'Gato',
    'Flamingo',
    'Pugberto',
    'Perico'
];


for (let index = 0; index < animals.length; index++) {

    var element = document.createElement('div');
    element.innerHTML = `
    <div>
        <p>  ${animals[index]} - asdasd </p>
    </div>
    `;
    container.appendChild(element);

} */

var tiktoker = {
    name: 'luis angel',
    stars: 10,
    type: 'Frío/ADA',
    info: 'Este mosntruo de angular, se alimenta de JavaScript, su debilidad son los corridos tumbados',
    atk: 1200,
    def: 900,
    img: 'IMG-20211005-WA0001.jpg',
};


var element = document.createElement('div');
var container = document.getElementsByTagName('main')[0];

element.classList.add('card');
element.innerHTML = `
<div class="yellow">
    <div class="title">
        <div>${tiktoker.name}</div>
        <div>Logo</div>
    </div>
    <div class="stars">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
        <img src="img/star.png" alt="">
    </div>
    <div class="img"></div>
    <div class="info">
        <p class="type">[${tiktoker.type}]</p>
        <p class="descp">${tiktoker.info}</p>
        <p class="specs">ATK/${tiktoker.atk} DEF/${tiktoker.def}</p>
    </div>
</div>


`;

container.appendChild(element);