function Calcular() {
    let cantidades = document.getElementById("cantidades").value;
    let mayor = document.getElementById("mayor");
    let menor = document.getElementById("menor");
    let promedio = document.getElementById("promedio");
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.textContent = "";
    mayor.value = "";
    menor.value = "";
    promedio.value = "";
    if (cantidades === "") {
        mensajeError.textContent = "El campo no puede estar vacío.";
        document.getElementById("cantidades").focus();
        return;
    }
    let arreglo = cantidades.split(",");
    let cantidadesF = arreglo.map(Number);
    if (cantidadesF.some(isNaN)) {
        mensajeError.textContent = "Todos los valores deben ser números válidos.";
        document.getElementById("cantidades").focus();
        return;
    }
    let myr = Math.max(...cantidadesF);
    mayor.value = myr;
    let mnr = Math.min(...cantidadesF);
    menor.value = mnr;
    let suma = cantidadesF.reduce((acc, valor) => acc + valor, 0);
    let pmr = suma / cantidadesF.length;
    promedio.value = pmr.toFixed(3);
}