function loguear()
{
var user= document.getElementById("usuario").value;
var pass= document.getElementById("pass").value;
if(user=="Abraham" && pass=="120206"){
    alert("Usuario y contraseña validos");
    window.location="calculadora.html";
    
} else {
    alert("Intenta de Nuevo");
}
} 