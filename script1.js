let idFormulario = document.getElementById("formulario");

idFormulario.addEventListener("submit", function (event){
    event.preventDefault();
    limpiarErrores();
    let nombre = 
    document.querySelector("#nombre").value;
    let asunto =
    document.querySelector("#asunto").value;
    let mensaje =
    document.querySelector("#mensaje").value;

    let resultado = 
    validar(nombre, asunto, mensaje);

    if(resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".errorNombre").innerHTML = " ";
    document.querySelector(".errorAsunto").innerHTML = " ";
    document.querySelector(".errorMensaje").innerHTML = " ";
};

function exito () {
    document.querySelector(".resultado").innerHTML = "¡Mensaje enviado con éxito!";
};

function validar(nombre,asunto,mensaje) {
    document.querySelector(".resultado").innerHTML = " ";//Incluido para que borre el mensaje verde si se ingresa texto numérico
    let validacion = true;
    let validacionNombre = /[a-zA-Z]/gim;

    if(validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido"
        validacion = false;
    };

    let validacionAsunto = /[a-zA-Z]/gim;
    if(validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido"
        validacion = false;
    };

    let validacionMensaje = /[a-zA-Z]/gim;
    if(validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido"
        validacion = false;
    };
    return validacion;
};