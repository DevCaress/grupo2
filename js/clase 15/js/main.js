let perro = {
    name: 'Pugberto',
    age: 7,
    color: 'azul',
};

/* const gatos = (event) => {

    let element = {
        name: name,
        age: age,
        color: color
    }

    return element;

}

let gato1 = gatos('gato',9,'cafe'); */


function gatos(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;
    this.setName = function(newName){
        this.name = newName;
    }
    this.getName = () => this.name;
}

let gato1 = new gatos('gato123',9,'cafe');
