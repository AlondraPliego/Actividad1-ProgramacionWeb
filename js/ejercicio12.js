function convertir() {
    let mxn = document.getElementById("MXN").value.trim();
    let usd = document.getElementById("USD");
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
    usd.value = "";
    if (mxn === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        document.getElementById("MXN").focus();
        return;
    }
    if (isNaN(mxn)) {
        mensajeError.textContent = "El valor ingresado no es válido.";
        document.getElementById("MXN").focus();
        return;
    }
    let usdR = parseFloat(mxn)*0.055 ;
    document.getElementById("USD").value = "$"+usdR.toFixed(2);
}