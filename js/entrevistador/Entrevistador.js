const $candidatos = document.getElementById("id-candidatos");
const $opciones = document.getElementById("id-opciones");
const $cerrarSesion = document.getElementById("salir");

$candidatos.removeEventListener("click", CargaCandidatos);
$opciones.removeEventListener("click", CargaDatos);
$cerrarSesion.removeEventListener("click", CerrarSesion);

$candidatos.addEventListener("click", CargaCandidatos);
$opciones.addEventListener("click", CargaDatos);
$cerrarSesion.addEventListener("click", CerrarSesion);

function CargaCandidatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <div class="titulo">
     <h1>Candidatos</h1>
     <div class="buscar">
      <i class="fa fa-search" style="color: white; margin: 5px 3px 5px 10px;" aria-hidden="true"></i>
      <input type="search" id="search" placeholder="Buscar candidato...">
     </div>
    </div>
    <div class="tabla">
     <table>
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
       <tr>
        <td><dd>Alan Josue Lopez Lopez</dd></td>
        <td>Frontend Developer</td>
        <td>22/08/2022</td>
        <td>Por revisar</td>
        <td class="opcion"><button><i class="fa-solid fa-eye"></i> Ver Perfil</button></td>
       </tr>
       <tr>
        <td><dd>Jorge Aguilar Hernandez</dd></td>
        <td>Frontend Developer</td>
        <td>25/08/2022</td>
        <td>Por revisar</td>
        <td class="opcion"><button><i class="fa-solid fa-eye"></i> Ver Perfil</button></td>
       </tr>
       <tr>
        <td><dd>Set Reyes Sandoval</dd></td>
        <td>Frontend Developer</td>
        <td>20/08/2022</td>
        <td>En revision</td>
        <td class="opcion"><button><i class="fa-solid fa-pen"></i> Editar</button></td>
       </tr>
      </tbody>
     </table>
    </div>
    `;
}

function CargaDatos(){
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `
    <div class="title-candidato">
     <h2>Frontend Developer - Alán Josue López </h2>
    </div> 
    <div class="formulario">
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
        <input type="radio" name="cumple" id="">
        <label for="">Si</label>
        <input type="radio" name="cumple" id="">
        <label for="">No</label>
       </div>              
      </div>
      <div class="option">
       <label for="">Observaciones</label>
       <textarea rows="10"></textarea>
      </div>
      <div class="btn-subir">
       <input id="subir" type="submit" value="Subir Resultados">
      </div>
     </form>
    </div>
   </div>
    `;
}

function CerrarSesion() {
 window.location = "http://127.0.0.1:5500/Login.html";
}