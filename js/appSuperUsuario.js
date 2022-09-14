fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => cargarTabla(json));


  function cargarTabla(candidatos){
    const contenido = document.querySelector('.tabla');

    let html = '';

    candidatos.forEach(candidato => {
        const {id,name,username} = candidato;

        html = ` 
            <p>id: ${id}</p>
            <p>id: ${name}</p>
            <p>id: ${username}</p>
        `;
    });
        

        contenido.innerHTML = html;
  }

