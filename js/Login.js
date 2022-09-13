//export let email;
//export let password;
document.getElementById("btn-ingresar").addEventListener("click", (e)=>{    
const API_URL = "https://jsonplaceholder.typicode.com";
const HTMLResponse = document.querySelector("#app") ;
const user = document.getElementById("id-usuario").value;
const pwd = document.getElementById("id-password").value;

if(user === "" || pwd === ""){
   alert("ingresa un usuario o contraseña");
} else {
   fetch ( `${API_URL}/users`)
   .then ( response => response.json())
   .then ( users  =>{ 
       const result = users.some(u => (u.email == user &&  u.address.zipcode == pwd));
       //Se toma en cuenta solo los primeros 3 usuarios 
       if(result){
            alert("Accede");
            //email = user.value;
            //password = pwd.value;
            switch(user && pwd){
                case "Sincere@april.biz":
                case "92998-3874":
                    alert("Bienvenido SuperUsuario");
                    window.location = "/SuperU.html";
                    break;
                case "Shanna@melissa.tv":
                case "90566-7771":
                    alert("Bienvenido RH usuario");
                    window.location = "/RecursosH.html";
                    break;
                case "Nathan@yesenia.net":
                case "59590-4157":
                    alert("Bienvenido Entrevistador");
                    window.location = "/Entrevistador.html";
                    break;
                default:
                    alert("No existe el usuario o la contraseña es incorrecta");
                    window.location = "/Login.html";
                    break;
            }
            
           
       }else{
            alert("No existe el usuario o la contraseña es incorrecta");
            window.location = "/Login.html";
           
       }
   });

}});
