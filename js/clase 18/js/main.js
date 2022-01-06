const btn = document.getElementById('btn');
let tareas = [];
let contador = 0;
let idEditar = null;


const borrarTarea = (event) => {

    event.target.parentElement.style.display = 'none';
    tareas.splice(event.target.parentElement.id, 1);
    document.getElementById('todos').innerHTML = '';
    contador = 0;

    console.log(tareas);

    const tareasJson = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareasJson);
    const data = localStorage.getItem("tareas");
    if (data != null) {
        console.log(data);
        const dataArray = JSON.parse(data);
        tareas = dataArray;
        pintarTareas(dataArray);
        console.log(dataArray);
    }
    
}

const editar = () => {
    document.getElementById('btn').style.display = 'block';
    document.getElementById('editar').style.display = 'none';
    const info = document.getElementById('tarea').value;
    tareas.splice(idEditar,1,info);
    document.getElementById('todos').innerHTML = '';
    document.getElementById('tarea').value = '';
    contador = 0;
    console.log(tareas);

    const tareasJson = JSON.stringify(tareas);
    localStorage.setItem("tareas", tareasJson);
    const data = localStorage.getItem("tareas");
    if (data != null) {
        console.log(data);
        const dataArray = JSON.parse(data);
        tareas = dataArray;
        pintarTareas(dataArray);
        console.log(dataArray);
    }
}

const editarTarea = (event) => {
    document.getElementById('btn').style.display = 'none';
    document.getElementById('editar').style.display = 'block';
    idEditar = event.target.parentElement.id;
    console.log(idEditar);
    console.log(tareas[event.target.parentElement.id]);
    document.getElementById('tarea').value = tareas[event.target.parentElement.id];
}

const pintarTareas = (dataArray) => {


    const container = document.getElementById('todos');

    for (const iterator of dataArray) {
        const element = document.createElement('div');
        element.id = contador;
        contador++;
        element.classList.add('tarea');
        element.innerHTML = `
        <div class="info">${iterator}</div> 
        <div class="editar" onclick="editarTarea(event)" >✏️ </div>
        <div onclick="borrarTarea(event)" class="delete"> X </div>
        `;
        container.appendChild(element);
    }
}

const leerTareas = () => {
    const data = localStorage.getItem("tareas");
    if (data != null) {
        console.log(data);
        const dataArray = JSON.parse(data);
        tareas = dataArray;
        pintarTareas(dataArray);
        console.log(dataArray);
    }
}


leerTareas();



const crearTarea = () => {
    const info = document.getElementById('tarea').value;
    const container = document.getElementById('todos');
    const element = document.createElement('div');
    element.id = contador;
    contador++;
    element.classList.add('tarea');
    element.innerHTML = `
        <div class="info">${info}</div> 
        <div class="editar" onclick="editarTarea(event)" >✏️ </div>
        <div onclick="borrarTarea(event)" class="delete"> X </div>
    `;

    container.appendChild(element);

    tareas.push(info);
    console.log(tareas);

    document.getElementById('tarea').value = '';


    /* local storage */

    const tareasJson = JSON.stringify(tareas);

    localStorage.setItem("tareas", tareasJson);

};



btn.addEventListener('click', crearTarea);