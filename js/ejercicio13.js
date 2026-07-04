function verificar() {
    let edad = document.getElementById("edad").value.trim();
    let resV = document.getElementById("resultado");
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
    resV.value = "";
    if (edad === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        document.getElementById("edad").focus();
        return;
    }
    if (edad <0) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("edad").focus();
        return;
    }
    if (isNaN(edad)) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("edad").focus();
        return;
    }
   if (edad < 18) {
        document.getElementById("resultado").value = "No puede votar";
    } else if (edad >= 18) {
        document.getElementById("resultado").value = "Si puede votar";
    }
}