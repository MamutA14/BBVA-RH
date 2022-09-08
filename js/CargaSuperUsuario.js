
const $admin = document.getElementById("id-admin");
const $rh = document.getElementById("id-rh");

$admin.removeEventListener("change", CargaAdmin);
$rh.removeEventListener("change", CargaCandidatos);

$admin.addEventListener("change", CargaAdmin);
$rh.addEventListener("change", CargaCandidatos)

function CargaAdmin(){
    $rh.value = "opt-0";
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    if ($admin.value === "opt-dashboard") {
        $contenido.innerHTML = `
        <link rel="stylesheet" href="css/listDashBoard.css">
<div class="dashboard">
    <div id="extern-buscador">
        <h1>Vista General</h1>
        <div id="intern-buscador">
            <div>
                <a href="" class="agregar-op"><button><img src="resources/icons/user-add.svg" alt=""> Agregar</button></a>
            </div>
                <form action=""  method="get" class="finder">
                    <i class="fa fa-search" style="color: white; margin: 5px 3px 5px 10px;" aria-hidden="true"></i>
                    <input type="search" name="" id="" placeholder="Buscar Candidato">
                </form>
            
        </div>
    </div>
    

    <div id="table">
        <table>
            <tr>
                <th>RH<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Fecha<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Nombre<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Especialidad<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Experiencia<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Encargado<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>CV<i class="fa-sharp fa-solid fa-caret-down"></i></th>
                <th>Opciones<i class="fa-sharp fa-solid fa-caret-down"></i></th>
            </tr>
            <tr class="content-table">
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>Lorem, ipsum.</td>
                <td>
                    <select name="" id="opciones-op">
                        <option value="">Opciones</option>
                        <option value="">opcion 1</option>
                        <option value="">opcion 2</option>
                    </select>
                </td>
            </tr>
        </table>
    </div>
</div>

<script src="https://kit.fontawesome.com/c36077751b.js" crossorigin="anonymous"></script>
<script src="./js/CargaRH.js"></script>
        `;
    } else if($admin.value === "opt-graficos"){
        $contenido.innerHTML = `<link rel="stylesheet" href="css/graficas.css">
        <div class="title-gr">
            <h1>Gráficos</h1>
        </div>
        
        <div class="charts">
            <div class="circular">
                <p id="title-circ">Cantidad</p>
                <div class="piechart">piechart</div>
                <ul id="circ-ul">
                    <li id="orange-box"> <p class="text-pie"> 1er resultado</p></li>
                    <li id="blue-box">  <p class="text-pie">2do resultado</p></li>
                    <li id="gray-box"> <p class="text-pie">3er resultado</p> </li>
                </ul>
            </div>
            
            
           <div class="board">
                <div class="titulo_grafica">
                    <h3 class="t_grafica">Resultados recientes</h3>
                </div>
                <div class="sub_board">
                    <div class="sep_board"></div>
                    <div class="cont_board">
                        <div class="graf_board">
                            <div class="barra">
                                <div class="sub_barra b1">
                                    <div class="tag_g">35%</div>
                                    <div class="tag_leyenda">día 1</div>
                                </div>
                            </div>
                            <div class="barra">
                                <div class="sub_barra b2">
                                    <div class="tag_g">45%</div>
                                    <div class="tag_leyenda">día 2</div>
                                </div>
                            </div>
                            <div class="barra">
                                <div class="sub_barra b3">
                                    <div class="tag_g">55%</div>
                                    <div class="tag_leyenda">día 3</div>
                                </div>
                            </div>
                            <div class="barra">
                                <div class="sub_barra b4">
                                    <div class="tag_g">75%</div>
                                    <div class="tag_leyenda">día 4</div>
                                </div>
                            </div>
                            <div class="barra">
                                <div class="sub_barra b5">
                                    <div class="tag_g">85%</div>
                                    <div class="tag_leyenda">día 5</div>
                                </div>
                            </div>
                        </div>
                        <div class="tag_board">
                            <div class="sub_tag_board">
                                <div>100</div>
                                <div></div>
                                <div>80</div>
                                <div></div>
                                <div>60</div>
                                <div></div>
                                <div>40</div>
                                <div></div>
                                <div>20</div>
                                <div>10</div>
                            </div>
                        </div>
                   </div> 
                    <div class="sep_board"></div>
               </div>    
            </div>
        </div>
        `;
    }
}

function CargaCandidatos(){
    $admin.value = "opt-0";
    if($rh.value === "opt-candidatos"){
        const $contenido = document.getElementById("id-contenido");
        $contenido.innerHTML = null;
        $contenido.innerHTML = `
        <link rel="stylesheet" href="css/desktop.css">
        <h1 style="text-align: center;">Candidatos</h1>
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
        <button class="fa-solid fa-eye">Ver Perfil</button>
        </td>
        </tr>
        <tr>
        <td>Jorge Aguilar Hernandez</td>
        <td>Frontend Developer</td>
        <td>Pedro Gomez</td>
        <td>Pendiente</td>
        <td>29/08/2022</td>
        <td>
        <button class="fa-solid fa-eye">Ver Perfil</button>
        </td>
        </tr>
        <tr>
        <td>Set Reyes Sandoval</td>
        <td>Frontend Developer</td>
        <td>Laura Gomez</td>
        <td>Entrevistado</td>
        <td>29/08/2022</td>
        <td>
        <button class="fa-solid fa-eye">Ver Perfil</button>
        </td>
        </tr>
        </tbody>
        </table>`;
    }
}
    