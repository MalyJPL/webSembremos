//REGISTRO

var numUsers=0;


function registrar(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    email = email.toLowerCase();

if(name && email && password){ 
console.log("-------------");
var user = {"usuario":name,
"email":email,
"contraseña":password};
localStorage.setItem("datosUsuario", JSON.stringify(user));
}else{
  var alerta ="solid 2px red";
  if(name==""){
  document.getElementById("name").style.border=alerta;}
  if(email==""){
    document.getElementById("email").style.border=alerta;}
if(password==""){
    document.getElementById("password").style.border=alerta;}
}
numUsers++
}

//Para obtener el usuario JSON.parse(localStorage.getItem('user'))


function iniciarSesion() {
    //  prompt("Ingresa tu usuario")

    swal("Inicia sesión con tu nombre de usuario", {
        content: 'input',
    })
        .then((name) => {
for( var i = 0; i < numUsers; i++){
if(value==users[i]){
            swal("¡Bienvenido/a!", name, "success");
            document.getElementById('usuario').innerHTML = value;
            document.getElementById('cerrar_Sesion').style.display = 'block';
            localStorage.setItem('nombreUsuario', value);
            console.log(value);
            document.getElementById('usuario').style.display = 'block';
            document.getElementById('iniciar_Sesion').style.display = 'none';
            console.log(i);
} 
    if (value !=users[i] & i == numUsers-1){
        swal("Debe registrarse primero","","warning");
    }
}
})
}

usuario = localStorage.getItem('nombreUsuario');

if (usuario != null) {
    document.getElementById("usuario").innerHTML = usuario;
    document.getElementById("cerrar_Sesion").style.display = 'block';
    console.log("Usuario en local storage")
} else {
    console.log("El usuario no está en local storage")
}

function cerrarSesion() {
    swal("Regrese Pronto!", localStorage.getItem('nombreUsuario'), "warning");
    localStorage.removeItem('nombreUsuario')
    document.getElementById("cerrar_Sesion").style.display = 'none';
    document.getElementById('usuario').innerHTML = ""
    document.getElementById("iniciar_Sesion").style.display = 'block';
}

