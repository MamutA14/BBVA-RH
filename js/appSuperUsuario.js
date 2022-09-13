fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => cargarTabla(json));


  function cargarTabla(candidatos){
    const contenido = document.querySelector('.tabla');

    let html = '';

    candidatos.forEach(candidato => {
        const {id,name,username} = candidato;

        html = ` 

        <table>
        <thead>
            <tr>
                <th>RH <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Fecha <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Nombre <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Especialidad <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Experiencia <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Encargado <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>CV <i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Opciones <i class="fa-sharp fa-solid fa-caret-down"></i></th>
            </tr>
        </thead>
        <tbody>
            <p>id: ${id}</p>
            <p>id: ${name}</p>
            <p>id: ${username}</p>
        `;
    });
        

        contenido.innerHTML = html;
  }

