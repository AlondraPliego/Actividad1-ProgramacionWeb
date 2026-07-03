function convertir() {
    var celsius = document.getElementById("celsius").value.trim();
    var fahrenheit = document.getElementById("fahrenheit");
    var mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
    fahrenheit.value = "";
    if (celsius === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        document.getElementById("celsius").focus();
        return;
    }
    if (isNaN(celsius)) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("celsius").focus();
        return;
    }
    var fahrenheitR = (parseFloat(celsius)* 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheitR.toFixed(2) + "°F";
    console.log("El resultado es: " + fahrenheitR.toFixed(2) + "°F");
}