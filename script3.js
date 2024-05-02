let sumar = document.getElementById("btn-sumar");
let restar = document.getElementById("btn-restar");

sumar.addEventListener("click", function (event){
    event.preventDefault();
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    let opSuma = parseInt(valor1)+parseInt(valor2);
    let resultadoSuma = document.querySelector(".resultado").innerHTML = opSuma;
})

restar.addEventListener("click", function (event){
    event.preventDefault();
    let valor1 = document.querySelector("#valor1").value;
    let valor2 = document.querySelector("#valor2").value;
    let opResta = parseInt(valor1)-parseInt(valor2);
    let resultadoResta = document.querySelector(".resultado").innerHTML = opResta;
    if(opResta < 0){
        let resultadoResta = document.querySelector(".resultado").innerHTML = "0" 
    }


})