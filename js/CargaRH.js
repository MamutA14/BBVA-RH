const $contenido = document.getElementById("id-contenido");

$contenido.appendChild(Tabla({
    "cabecera": ["Nombre", "Posicion", "Entrevistador", "Estatus", "Fecha Entrevista", "Opciones"]
}));


function Tabla(AJson){
    const {cabecera} = AJson;
    const $tabla = document.createElement("table");
    const $tcabecera = document.createElement("thead");
    const $tcuerpo = document.createElement("tbody");

    $tabla.className = "";

    const $titulos = document.createElement("tr");
    cabecera.forEach(titulo => {
        const $titulo = document.createElement("th");
        $titulo.innerText = titulo;
        $titulos.appendChild($titulo);
    });
    $tcabecera.appendChild($titulos);

    

    $tabla.appendChild($tcabecera);
    $tabla.appendChild($tcuerpo);
    return $tabla;
}