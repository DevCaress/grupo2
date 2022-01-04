/* const frutas = ['naranja', 'platano', 'manzana'];
const frutasJson = JSON.stringify(frutas); */

const frutas = {
    item1: 'naranja',
    item2: 'platano',
    item3: 'manzana'
};

const frutasJson = JSON.stringify(frutas);

const frutas2 = '{"item1":"naranja","item2":"platano","item3":"manzana"}';

const frutasArray = JSON.parse(frutas2);

console.log(frutas);
console.log(frutasJson);
console.log(frutas2);
console.log(frutasArray);


document.write(frutasArray[1]);