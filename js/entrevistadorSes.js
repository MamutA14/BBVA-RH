//redirecciona si las credenciales son  incorrectas
user_local = localStorage.getItem('user');
pwd_local = localStorage.getItem('pwd');
if (user_local != "" &&  pwd_local != "" &&  user_local != null && pwd_local != null ) {
    switch(user_local && pwd_local){
        case "Sincere@april.biz":
        case "92998-3874":
            window.location = "/SuperU.html";
            break;
        case "Shanna@melissa.tv":
        case "90566-7771":
            window.location = "/RecursosH.html";
            break;
        case "Nathan@yesenia.net":
        case "59590-4157":
            break;    
    }
        //Extraigo los datos del local y así extraigo el nombre
        let user_data = JSON.parse(localStorage.getItem('data_user'));
        document.getElementById('name-user').innerHTML = `¡Bienvenido ${user_data['name']}!`
}else{
    window.location = "/Login.html";
}

//Salir de la sesión
document.getElementById("salir").addEventListener("click", () =>{
    localStorage.removeItem('pwd');
    localStorage.removeItem('user');
    localStorage.removeItem('data_user');
    window.location = "/Login.html";
});