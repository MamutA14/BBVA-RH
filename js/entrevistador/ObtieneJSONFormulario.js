export function ObtieneJSONFormulario(formulario){
 let json = {};
  if (formulario){
    const $formulario = document.getElementById(formulario);
    const inputs = $formulario.elements;
   Object.values(inputs).forEach(input => {
     json[input.name] = input.value;
    });
  } else {

  }
  return json;
}
