const getData = () => document.getElementById('nombre').value;

const clearInput = () => document.getElementById('nombre').value = '';

const createToDo = (inputUser) => {

    const container = document.getElementsByTagName('section')[0];
    const element = document.createElement('div');

    element.innerHTML = `${inputUser}`;
    container.appendChild(element);
    clearInput();
}



const btnSend = document.getElementById('enviar');
btnSend.addEventListener('click', (event) => {
    event.preventDefault();
    createToDo(getData());
});

