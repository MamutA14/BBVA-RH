const $btnCandidatos = document.getElementById("id-candidatos");
const $btnAgrega = document.getElementById("id-agregar");

$btnCandidatos.removeEventListener("click", CargaCandidatos);
// $btnAgrega.removeEventListener("click", CargaDatos);

$btnCandidatos.addEventListener("click", CargaCandidatos);

function CargaCandidatos(){
    console.log("lsdfkjasñdfjk")
    const $contenido = document.getElementById("id-contenido");
    $contenido.innerHTML = null;
    $contenido.innerHTML = `<table class="t-contenido">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Posicion</th>
            <th>Entrevistador</th>
            <th>Estatus</th>
            <th>Fecha entrevista</th>
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
                <button class="fa fa-trash"></button>
            </td>
        </tr>
        <tr>
            <td>Jorge Aguilar Hernandez</td>
            <td>Frontend Developer</td>
            <td>Pedro Gomez</td>
            <td>Pendiente</td>
            <td>29/08/2022</td>
            <td>
                <button class="fa fa-trash"></button>
            </td>
        </tr>
        <tr>
            <td>Set Reyes Sandoval</td>
            <td>Frontend Developer</td>
            <td>Laura Gomez</td>
            <td>Entrevistado</td>
            <td>29/08/2022</td>
            <td>
                <button class="fa fa-trash"></button>
            </td>
        </tr>
    </tbody>
</table>`;
}