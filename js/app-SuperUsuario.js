fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => cargarTabla(json));


 function cargarTabla(superUsuario){

    const contenido = document.querySelector('.tabla');
    const contenidoRH = document.querySelector('.tabla-2');
    const buscar = document.querySelector('#search');
    const buscarRH = document.querySelector('#searchRH');
    if(contenido !== null && buscar !== null){
    /*console.log(contenido);
    console.log(buscar);*/
    
const filtrar = () =>{


    let html = `<table id="tabla">
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
                <td class="opcion">
                    <select name="Seleccione" id="opciones">
                        <option value="" selected>Seleccione</option>
                        <option value="">Editar</option>
                        <option value="">Eliminar</option>
                    </select>
                 </td>  
            </tr>
    
            `;
        }
    }
    html += `</tbody>
    </table>`; 

    contenido.innerHTML = html;
  
    
}
  filtrar();
    
    buscar.addEventListener('keyup',filtrar);

}else{


const filtrarRH = () =>{


    let html = `<table>
    <thead>
        <tr>
            <th>Nombre <i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th>Posicion <i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th>Registro <i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th>Estatus <i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th> <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        </tr>
    </thead>
    <tbody>   
    `;


    const textoRH = buscarRH.value.toLowerCase();
   
    for (const usuario of superUsuario) {
       
        let nombre = usuario.name.toLowerCase();
        
        if(nombre.indexOf(textoRH) !== -1){
            html += `
            <tr>
                <td>${usuario.name}</td>
                <td>${usuario.address.zipcode}</td>
                <td>${usuario.username}</td>
                <td>${usuario.company.name}</td>
                <td><button  id = "btn-perfil" class="fa-solid fa-eye">  Ver Perfil</button></td>                         
            </tr>
    
            `;
        }
    }
    html += `</tbody>
    </table>`; 
    contenidoRH.innerHTML = html;
  console.log(superUsuario);
    
}
filtrarRH();
buscarRH.addEventListener('keyup',filtrarRH);
}
    localStorage.setItem('rows',document.getElementById("tabla").rows.length);
}
