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
    let estudiantesAltos = estudiantes.filter(e => e.calificacion === calificacionMaxima);
    let nombresAltos = estudiantesAltos.map(e => e.nombre).join(" y ");
    alta.value = nombresAltos + " con " + calificacionMaxima;
    let estudiantesBajos = estudiantes.filter(e => e.calificacion === calificacionMinima);
    let nombresBajos = estudiantesBajos.map(e => e.nombre).join(" y ");
    baja.value = nombresBajos + " con " + calificacionMinima;
}