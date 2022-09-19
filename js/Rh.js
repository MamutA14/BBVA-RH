const $btnMenu = document.getElementById("bars-button");
$btnMenu.removeEventListener("click", Animacion);
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

document.getElementById("id-opciones").addEventListener("click", (e)=>{
    
    const section = document.getElementById("work-env");
    console.log("Si lo cambia"+section);
    section.innerHTML= `<link rel="stylesheet" href="css/form.css">
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
                <a ><button class="buttons-ops" id="cv-button">Curriculum viate</button></a>
               <div id="sub">
                    <input class="buttons-ops" id="submit-button" type="button" value="Guardar">
               </div> 
            
            </div>
            
        </form>
    </div>
    
    
    
    `
});

document.getElementById('id-candidatos').addEventListener("click",(e) =>{
    const section = document.getElementById("work-env");
    console.log("Si lo cambia"+section);
    section.innerHTML=  `
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
                    <td>29/08/22</td>
                    <td class="eliminar"><button><i class="fa-solid fa-trash fa-2x"></i></button></td>
                </tr>
                <tr>
                    <td>Jorge Aguilar Hernandez</td>
                    <td>Frontend Developer</td>
                    <td>Pedro Gomez</td>
                    <td>Pendiente</td>
                    <td>29/08/22</td>
                    <td class="eliminar"><button><i class="fa-solid fa-trash fa-2x"></i></button></td>
                </tr>
                <tr>
                    <td>Set Reyes Sandoval</td>
                    <td>Frontend Developer</td>
                    <td>Laura Gomez</td>
                    <td>Entrevistado</td>
                    <td>29/08/22</td>
                    <td class="eliminar"><button><i class="fa-solid fa-trash fa-2x"></i></button></td>
                </tr>
            </tbody>
        </table>
    </div>`
})