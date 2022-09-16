import { Ajax } from "./Ajax.js";
import { ObtieneJSONFormulario } from "./ObtieneJSONFormulario.js";

const $candidatos = document.getElementById("id-candidatos");
const $opciones = document.getElementById("id-opciones");
const $cerrarSesion = document.getElementById("salir");
const $btnMenu = document.getElementById("bars-button");

$candidatos.removeEventListener("click", CargaCandidatos);
$opciones.removeEventListener("click", CargaDatos);
$cerrarSesion.removeEventListener("click", CerrarSesion);
$btnMenu.removeEventListener("click", Animacion);

$candidatos.addEventListener("click", CargaCandidatos);
$opciones.addEventListener("click", CargaDatos);
$cerrarSesion.addEventListener("click", CerrarSesion);
$btnMenu.addEventListener("click", Animacion);

function Animacion() {
 const $nav = document.getElementById("id-nav"); 
 if (document.getElementById("id-cortina").className === "") {
  $nav.classList.remove("nav")
  $nav.classList.add("showNav");
  document.getElementById("id-cortina").classList.add("mostrar");
  document.getElementById("id-cortina").classList.add("muestraCortina");
 } else {
  $nav.classList.add("nav")
  $nav.classList.remove("showNav");
  document.getElementById("id-cortina").classList.remove("mostrar");
  document.getElementById("id-cortina").classList.remove("muestraCortina");
 }
}

async function CargaCandidatos(ARegistro) {
 
 const $titulo = document.getElementById("id-titulo");
 const $contenido = document.getElementById("id-tabla");

 $titulo.innerHTML = `<h1>Candidatos</h1>
     <div class="buscar">
      <i class="fa fa-search" style="color: white; margin: 5px 3px 5px 10px;" aria-hidden="true"></i>
      <input type="search" id="search" placeholder="Buscar candidato...">
     </div>`;
 
 await Ajax({
  metodo: "GET",
  url: "https://jsonplaceholder.typicode.com/users",
  cbSuccess: async json => {
   const buscar = document.querySelector('#search');
   const filtrar = () => {
    let html = `
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
     `;
    const texto = buscar.value.toLowerCase();
    if (typeof (ARegistro) == "string") {
     html += ARegistro;
     sessionStorage.setItem("array", ARegistro)
    }
    json.forEach(elemento => {
     let nombre = elemento.name.toLowerCase();
     console.log()
     if(nombre.indexOf(texto) !== -1){
     html += `
      <tr>
       <td><dd>${elemento.name}</dd></td>
       <td>${elemento.company.catchPhrase}</td>
       <td>${elemento.address.suite}</td>
       <td>Por revisar</td>
       <td class="opcion"><button><i class="fa-solid fa-eye"></i> Ver Perfil</button></td>
      </tr>
      `;
     }
    });
    html += `</tbody>
     </table>`;
    $contenido.innerHTML = html;
   }
   filtrar();
   buscar.addEventListener('keyup',filtrar);
  }
 });
}

function CargaDatos(){
 const $contenido = document.getElementById("id-tabla");
 const $titulo = document.getElementById("id-titulo");

 $titulo.innerHTML = `
  <h2><input type="text" id="id-posicion" class="tituloAgregar" placeholder="Frontend Developer"> - <input type="text" id="id-nombre" class="tituloAgregar" placeholder="Alan Josue López López"></h2>
 `;
    $contenido.innerHTML = null;
    $contenido.innerHTML = ` 
    <div class="formulario">
     <form action="" method="post" id="id-formulario">
      <div class="option" id="experiencia">
       <label>Experiencia</label>
       <input type="text" name="experiencia" placeholder="Experiencia laboral">
      </div>
      <div class="option" id="tec">
       <label for="">Tecnologias</label>
       <input type="text" name="tecExp" placeholder="Tecnologias y Experiencia">
      </div>
      <div class="option" id="nivel">
       <label for="">Nivel del Candidato</label>
       <select name="nivel" id="">
        <option value="" selected>Seleciona un nivel</option>
        <option value="junion">Junior</option>
        <option value="semisenior">Semi Senior</option>
        <option value="senior">Senior</option>
       </select>
      </div>
      <div class="option" id="cumple">
       <label for="">¿Cumple con la vacante?</label>
       <div class="radio">
        <input type="radio" name="cumple" value="si">
        <label for="">Si</label>
        <input type="radio" name="cumple" value="no">
        <label for="">No</label>
       </div>              
      </div>
      <div class="option">
       <label for="">Observaciones</label>
       <textarea rows="10" name="observaciones"></textarea>
      </div>
      <div class="btn-subir">
       <input id="subir" type="button" value="Subir Resultados">
      </div>
     </form>
    </div>
   </div>
    `;
 
 const $btnSubir = document.getElementById("subir");
 $btnSubir.removeEventListener("click", SubirDatos);
 $btnSubir.addEventListener("click", SubirDatos);
}

async function SubirDatos() {
 const data = ObtieneJSONFormulario("id-formulario");
 data["nombre"] = document.getElementById("id-nombre").value;
 data["posicion"] = document.getElementById("id-posicion").value;
 await Ajax({
  metodo: "POST",
  params: data,
  url: "https://jsonplaceholder.typicode.com/users",
  cbSuccess: async json => {
   alert("Se agrego un nuevo registro")
   const registro = `
   <tr>
    <td><dd>${json.nombre}</dd></td>
    <td>${json.posicion}</td>
    <td>Apt 564</td>
    <td>Por Revisar</td>
    <td class="opcion"><button><i class="fa-solid fa-eye"></i> Ver Perfil</button></td>
   </tr>
   `;
   await CargaCandidatos(registro);
  }
 });
}

function CerrarSesion() {
 window.location = "http://127.0.0.1:5500/Login.html";
}