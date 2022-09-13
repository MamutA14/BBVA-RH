const $candidatos = document.getElementById("id-candidatos");
const $opciones = document.getElementById("id-opciones");

$candidatos.removeEventListener("click", CargaCandidatos);
$opciones.removeEventListener("click", CargaDatos);

$candidatos.addEventListener("click", CargaCandidatos);
$opciones.addEventListener("click", CargaDatos);

function CargaCandidatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <div id="intern-buscador">
        <h1>Candidatos</h1>
        <form action="" method="get">
            <div class="finder">
                <img src="resources/icons/find.svg" alt="img">
                <input type="search"  id="search" placeholder="Buscar candidato...">
    
            </div>
            
        </form>
    </div>
    <div>
    
        <table id="candidatos" >
            <tr>
                <th>Nombre</th>
                <th>Posicion</th>
                <th>Registro</th>
                <th>Estatus</th>
                <th></th>
            </tr>
            <tr>
                <td>Lorem ipsum dolor sit amet consectetur.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum dolor sit.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td class="watch-op">
                    <div class="ver-op">
                        <button>
                            <img  class = "icon-op" src="resources/icons/eye.svg" alt="ver">
                        </button> 
                        <label for="">Ver perfil</label>
                    </div>
    
                </td>
            </tr>
            <tr>
                <td>Lorem ipsum dolor sit amet consectetur.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum dolor sit.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td class="watch-op">
                    <div class="ver-op">
                        <button>
                            <img  class = "icon-op" src="resources/icons/eye.svg" alt="ver">
                            
                        </button> 
                        <label for="">Ver perfil</label>
                        
                    </div>
                    
                </td>
    
            </tr>
    
            <tr>
                <td>Lorem ipsum dolor sit amet consectetur.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem ipsum dolor sit.</td>
                <td>Lorem, ipsum dolor.</td>
                <td>Lorem.</td>
                <td class="edit-op">
                    <div class="ver-op">
                        <button>
                            <img  class = "icon-op" src="resources/icons/pencil-fill.svg" alt="ver">
                        </button> 
                        <label for="">Editar</label>
                    </div>
        
                </td>
    
            </tr>
        </table>
    </div>
    `;
}

function CargaDatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <link rel="stylesheet" href="css/vacante-editar.css">
        <div class="title-candidato">
            <h1>Vacante > Candidato</h1>
        </div>
        
        <div class="edit-page">
            <form action="" method="post">
                <div class="option" id="experiencia">
                    <label>Experiencia</label>
                    <input type="text" placeholder="Experiencia laboral">
                </div>
                <div class="option" id="tec">
                    <label for="">Tecnologias</label>
                    <input type="text" placeholder="Tecnologias y Experiencia">
                </div>
                <div class="option" id="nivel">
                    <label for="">Nivel del Candidato</label>
                    <select name="" id="">
                        <option value="" selected>Seleciona un nivel</option>
                        <option value="">Junior</option>
                        <option value="">Semi Senior</option>
                        <option value="">Senior</option>
                    </select>
                </div>
                <div class="option" id="cumple">
                    <label for="">¿Cumple con la vacante?</label>
                    <div class="radio">
                        <label for="">Si</label>
                    <input type="radio" name="cumple" id="">
                    <label for="">No</label>
                    <input type="radio" name="cumple" id="">
                    </div>
                    
                </div>
                <div class="option" id="observaciones">
                    <label for="">Observaciones</label><br>
                <textarea name="" id="" cols="30" rows="10"></textarea><br>
                </div>
                <div class="option" id="button">
                    <input type="submit" value="Subir Resultados">
                </div>
                

            </form>
        </div>
    </div>
    `;
}