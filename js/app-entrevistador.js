fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => cargarTabla(json));


 function cargarTabla(entrevistador){

    const contenido = document.querySelector('.tabla');
    const buscar = document.querySelector('#search');

const filtrar = () =>{


    let html = `<table>
    <thead>
     <tr>
      <th><dd>Nombre<i class="fa-sharp fa-solid fa-caret-down"></i></dd></th>
      <th>Posición <i class="fa-sharp fa-solid fa-caret-down"></i></th>
      <th>Registro <i class="fa-sharp fa-solid fa-caret-down"></i></th>
      <th>Estatus <i class="fa-sharp fa-solid fa-caret-down"></i></th>
      <th></th>
     </tr>
    </thead>
    <tbody>
    
    `;


    const texto = buscar.value.toLowerCase();
   
    for (const entrevistado of entrevistador) {
       
        let nombre = entrevistado.name.toLowerCase();
        
        if(nombre.indexOf(texto) !== -1){
            html += `
            <tr>
                <td><dd>${entrevistado.name}</dd></td>
                <td>${entrevistado.company.catchPhrase}</td>
                <td>${entrevistado.address.suite}</td>
                <td>Por revisar</td>
                <td class="opcion"><button><i class="fa-solid fa-eye"></i> Ver Perfil</button></td>
            </tr>
    
            `;
        }
    }
    html += `</tbody>
    </table>`; 
    contenido.innerHTML = html;
  console.log(entrevistador);
    
}

    filtrar();
    buscar.addEventListener('keyup',filtrar);

  }