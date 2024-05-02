function cambiarColor(event) {
    let colorSeleccionado = event.target.style.backgroundColor;
    document.getElementById("caja").style.backgroundColor = colorSeleccionado;
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", cambiarColor);
});

