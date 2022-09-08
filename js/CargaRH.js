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
    
<link rel="stylesheet" href="css/listform.css">
<div id="intern-buscador">
    <h1>Candidatos</h1>
    <form action="" method="get">
        <div class="finder">
            <i class="fa fa-search" style="color: white; margin: 5px 3px 5px 10px;" aria-hidden="true"></i>
            <input type="search"  id="search" placeholder="Buscar candidato...">

        </div>
        
    </form>
</div>
<div class="candidatos-content">

    <table id="candidatos" >
        <tr>
            <th>Nombre<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th>Posicion<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th class="not-responsive">Entrevistador<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th class="not-responsive">Estatus<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th class="not-responsive">Fecha Entrevista<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            <th></th>
        </tr>
        <tr>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>Lorem, ipsum.</td>
            <td class="not-responsive">Lorem ipsum dolor sit.</td>
            <td class="not-responsive">Lorem, ipsum dolor.</td>
            <td class="not-responsive">Lorem.</td>
            <td class="delete-op">
                <button class="fa fa-trash btn-eliminaRegistro fa-2x" ></button>
            </td>
        </tr>
        <tr>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>Lorem, ipsum.</td>
            <td class="not-responsive">Lorem ipsum dolor sit.</td>
            <td class="not-responsive">Lorem, ipsum dolor.</td>
            <td class="not-responsive">Lorem.</td>
            <td class="delete-op">
                <button class="fa fa-trash btn-eliminaRegistro fa-2x" ></button>
             </td>

        </tr>
    </table>
</div>

<script src="https://kit.fontawesome.com/c36077751b.js" crossorigin="anonymous"></script>
<script src="./js/CargaRH.js"></script>`;
}

function CargaDatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `<link rel="stylesheet" href="css/form.css">
    <div id="formRH">
        <div id="title-formRH">
            <h1>Candidatos</h1>
        </div>
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
                <input type="date" placeholder="Fecha de entrevista ">            
            </div>
            <div class="option" >
                <a ><button id="cv-button">Curriculum viate</button></a>
               <div id="sub">
                    <input id="submit-button" type="button" value="Guardar">
               </div> 
            
            </div>
            
        </form>
    </div>
    
    
    
    
`;
}