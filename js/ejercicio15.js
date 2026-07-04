let estudiantes = [];

function Agregar() {
    let nombreInput = document.getElementById("nombre");
    let calificacionInput = document.getElementById("calificacion");
    let mensajeError = document.getElementById("mensajeError");

    let nombre = nombreInput.value.trim();
    let calificacion = calificacionInput.value.trim();
    mensajeError.textContent = "";
    if (nombre === "" || calificacion === "") {
        mensajeError.textContent = "Ambos campos son obligatorios.";
        return;
    }

    let calificacionNum = Number(calificacion);
    if (isNaN(calificacionNum)) {
        mensajeError.textContent = "La calificación debe ser un número válido.";
        return;
    }
    if (calificacionNum < 0) {
        mensajeError.textContent = "La calificación no puede ser negativa.";
        calificacionInput.focus();
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: calificacionNum
    };
    estudiantes.push(estudiante);

    nombreInput.value = "";
    calificacionInput.value = "";
    mensajeError.textContent = "";
    nombreInput.focus();
}

function Calcular() {
    let promedio = document.getElementById("promedio");
    let alta = document.getElementById("alta");
    let baja = document.getElementById("baja");
    let mensajeError = document.getElementById("mensajeError");

    mensajeError.textContent = "";
    promedio.value = "";
    alta.value = "";
    baja.value = "";
    if (estudiantes.length === 0) {
        mensajeError.textContent = "Agrega al menos un estudiante antes de calcular.";
        return;
    }
    let pmr = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0)/ estudiantes.length;
    document.getElementById("promedio").value = pmr.toFixed(2);
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));
  
    let estudianteAlto = estudiantes.find(e => e.calificacion === calificacionMaxima);
    document.getElementById("alta").value = estudianteAlto.nombre +" con "+ calificacionMaxima;
    let estudianteBajo = estudiantes.find(e => e.calificacion === calificacionMinima);
    document.getElementById("baja").value = estudianteBajo.nombre +" con "+ calificacionMinima;
}