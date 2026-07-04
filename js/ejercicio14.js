function Calcular() {
    let cantidades = document.getElementById("cantidades").value;
    let arreglo = cantidades.split(",");
    let cantidadesF = arreglo.map(Number);
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
let myr=Math.max(...cantidadesF);
        document.getElementById("mayor").value = myr;
let mnr=Math.min(...cantidadesF);
        document.getElementById("menor").value = mnr;
let suma=cantidadesF.reduce((acc, valor) => acc+valor, 0);
let pmr=suma / cantidadesF.length;
        document.getElementById("promedio").value = pmr.toFixed(3);
}