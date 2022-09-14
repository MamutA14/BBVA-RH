fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => cargarTabla(json));


 function cargarTabla(superUsuario){

    const contenido = document.querySelector('.tabla');
    const buscar = document.querySelector('#search');

const filtrar = () =>{


    let html = `<table>
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
    
    `;


    const texto = buscar.value.toLowerCase();
   
    for (const usuario of superUsuario) {
       
        let nombre = usuario.name.toLowerCase();
        
        if(nombre.indexOf(texto) !== -1){
            html += `
            <tr>
                <td>${usuario.name}</td>
                <td>${usuario.address.zipcode}</td>
                <td>${usuario.username}</td>
                <td>${usuario.company.name}</td>
                <td>${usuario.website}</td>
                <td>${usuario.email}</td>
                <td>${usuario.address.city}</td>
                <td class="opcion"><select name="Seleccione"><i class="fa-sharp fa-solid fa-caret-down"></i></select></td> 
            </tr>
    
            `;
        }
    }
    html += `</tbody>
    </table>`; 
    contenido.innerHTML = html;
  console.log(superUsuario);
    
}

    filtrar();
    buscar.addEventListener('keyup',filtrar);

  }