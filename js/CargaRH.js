const $btnCandidatos = document.getElementById("id-candidatos");
const $btnAgrega = document.getElementById("id-agregar");

$btnCandidatos.removeEventListener("click", CargaCandidatos);
$btnAgrega.removeEventListener("click", CargaDatos);

$btnCandidatos.addEventListener("click", CargaCandidatos);
$btnAgrega.addEventListener("click", CargaDatos);

function CargaCandidatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <div class="en-linea">
        <h2>Candidatos</h2>
        <div class="input-busqueda">
            <i class="fa fa-search" style="color: white; margin: 5px 3px 5px 10px;" aria-hidden="true"></i><input type="text" placeholder="Buscar Candidato" style="border: 0; background-color: #DADADA; color: #A6A6A6; width: 310px;">
        </div>
    </div>
    <table class="t-contenido">
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
        <tr>
            <td>Alan Josue Lopez Lopez</td>
            <td>Frontend Developer</td>
            <td>Luis Flores</td>
            <td>Entrevistado</td>
            <td>29/08/2022</td>
            <td>
                <button class="fa fa-trash btn-eliminaRegistro fa-2x"></button>
            </td>
        </tr>
        <tr>
            <td>Jorge Aguilar Hernandez</td>
            <td>Frontend Developer</td>
            <td>Pedro Gomez</td>
            <td>Pendiente</td>
            <td>29/08/2022</td>
            <td>
                <button class="fa fa-trash btn-eliminaRegistro fa-2x"></button>
            </td>
        </tr>
        <tr>
            <td>Set Reyes Sandoval</td>
            <td>Frontend Developer</td>
            <td>Laura Gomez</td>
            <td>Entrevistado</td>
            <td>29/08/2022</td>
            <td>
                <button class="fa fa-trash btn-eliminaRegistro fa-2x"></button>
            </td>
        </tr>
    </tbody>
</table>`;
}

function CargaDatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <link rel="stylesheet" href="css/form.css">
    <div class="en-linea">
        <h2>Candidatos</h2>
    </div>
    <div>
        <form action="" method="post">
            <div class="option">
                <label for="">Nombre</label>
                <input type="text" placeholder="Nombre">            
            </div>
            <div class="option">
                <label for="">Posicion</label>
                <input type="text" placeholder="Posicion">            
            </div>
            <div class="option">
                <label for="">Entrevistador</label>
                <input type="text" placeholder="Entrevistador">            
            </div>
            <div class="option">
                <label for="">Fecha de entrevista</label>
                <input type="date" placeholder="Fecha de entrevista">            
            </div>
            <div class="option" >
                <a ><button>Curriculum vitae</button></a>
            <div id="sub">
                    <input type="button" value="Guardar">
            </div> 
            </div>
        </form>
</div>
`;
}