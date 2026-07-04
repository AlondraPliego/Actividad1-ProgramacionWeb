function convertir() {
    let km = document.getElementById("kilometros").value.trim();
    let mi = document.getElementById("millas");
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
    mi.value = "";
    if (km === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        document.getElementById("kilometros").focus();
        return;
    }
    if (km <0) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("kilometros").focus();
        return;
    }
    if (isNaN(km)) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("kilometros").focus();
        return;
    }
    let miR = parseFloat(km)*0.621371 ;
    document.getElementById("millas").value = miR.toFixed(4) + "mi";
    console.log("El resultado es: " + miR.toFixed(4) + "mi");
}