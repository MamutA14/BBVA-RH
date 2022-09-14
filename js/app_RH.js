

var d =fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()).
  then(json => cargarTabla(json));


 function cargarTabla(candidatos){


    const contenido = document.querySelector('.tabla');

    /*let html = `<table>
    <thead>
    <tr>
        <th>Nombre <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Posicion <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Entrevistador <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Estatus <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Fecha entrevista <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th></th>
    </tr>
</thead>
<tbody>
    
    `;

    candidatos.forEach(element => {
        //console.log(element.name);
        const id = element.id;
        const name = element.username;
        const company = element.company.name;
        const entrevistador = element.name;
        const estatus = element.phone;
        const fecha = element.address.suite;


        html += `
        <tr>
        <td>${name}</td>
        <td>${company}</td>
        <td>${entrevistador}</td>
        <td>${estatus}</td>
        <td>${fecha}</td>
        <td class="eliminar"><button class="btn-eliminar">
        <input type="hidden" class="eliminar-dato" value="${id}">
        <i class="fa-solid fa-trash fa-2x"></i></button></td>
        </tr>

        `;

    });

    html += `</tbody>
    </table>`; 
    contenido.innerHTML = html;
*/
    

    const buscar = document.querySelector('#search');

const filtrar = () =>{


    let html = `<table>
    <thead>
    <tr>
        <th>Nombre <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Posicion <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Entrevistador <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Estatus <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th>Fecha entrevista <i class="fa-sharp fa-solid fa-caret-down"></i></th>
        <th></th>
    </tr>
</thead>
<tbody>
    
    `;


    const texto = buscar.value.toLowerCase();
   
    for (const candidato of candidatos) {
       
        let nombre = candidato.username.toLowerCase();
        
        if(nombre.indexOf(texto) !== -1){
            html += `
            <tr>
            <td>${candidato.username}</td>
            <td>${candidato.company.name}</td>
            <td>${candidato.name}</td>
            <td>${candidato.phone}</td>
            <td>${candidato.address.suite}</td>
            <td class="eliminar"><button class="btn-eliminar">
            <input type="hidden" class="eliminar-dato" value="${candidato.id}">
            <i class="fa-solid fa-trash fa-2x"></i></button></td>
            </tr>
    
            `;
        }
    }
    html += `</tbody>
    </table>`; 
    contenido.innerHTML = html;


    const eliminar = document.querySelector('.btn-eliminar');
    console.log(candidatos);
    eliminar.addEventListener('click',()=>{
        const eliminar_dato = document.querySelector('.eliminar-dato');
        
        for (let index = 0; index < candidatos.length; index++) {
            
            if(candidatos[index].id == eliminar_dato.value){
                candidatos.splice(index,1);
                cargarTabla(candidatos);
                console.log(candidatos);
                break;
            }
        }      
    });

}

    filtrar();
    buscar.addEventListener('keyup',filtrar);

  }




    
    
   



