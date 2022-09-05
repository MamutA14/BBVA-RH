//creando las variables para obtener los valores de los inputs

import { CargaSuperUsuario } from "./CargaSuperUsuario";

const user = document.getElementById("user").value;
const pwd = document.getElementById("password").value;

//validamos si el usuario y el password son Super Usuario, entrevistador o RH

switch (user) {
  case "superusuario":
    CargaSuperUsuario();
    break;
  case "recursoshumanos":
    break;
  case "entrevistador":
    break;
}
