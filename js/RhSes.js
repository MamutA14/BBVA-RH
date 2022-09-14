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
            break;
        case "Nathan@yesenia.net":
        case "59590-4157":
            window.location = "/Entrevistador.html";
            break;    
    }
}else{
    window.location = "/Login.html";
}