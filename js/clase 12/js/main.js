var urlApi = 'https://rickandmortyapi.com/api/character?page=5';

fetch(urlApi)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        var container = document.getElementsByTagName('main')[0];
        var element = document.createElement('div');
        
        element.innerHTML = `
        <img src="${data.results[0].image}">
        <h2> ID: ${data.results[0].id} </h2>
        <h2>${data.results[0].name} </h2>
        <h3> ${data.results[0].species} </h3>
        `;

        container.appendChild(element);
    })