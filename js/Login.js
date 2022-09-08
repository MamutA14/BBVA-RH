document.getElementById("btn-ingresar").addEventListener("click", (e)=>{
    const user = document.getElementById("id-usuario").value;
    const pwd = document.getElementById("id-password").value;

    if(user === "" || pwd === ""){
        alert("ingresa un usuario o contraseña");
    } else {
        switch(user && pwd){
            case "superUsuario":
            case "superUsuario@elbanco.com":
                alert("existe");
                document.getElementById("id-formulario").setAttribute("action","/DesktopSuperUsuario.html")
                break;
            case "recursosHumanos":
            case "recursosHumanos@elbanco.com":
                alert("existe");
                document.getElementById("id-formulario").setAttribute("action","/DesktopRH.html")
                break;
            case "entrevistador":
            case "entrevistador@elbanco.com":
                alert("existe");
                document.getElementById("id-formulario").setAttribute("action","/DesktopEntrevistador.html")
                break;
            default:
                alert("No existe el usuario o la contraseña es incorrecta");
                break;
        }
    }
})