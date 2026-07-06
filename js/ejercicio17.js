const CLAVE = "tareasPendientes";
function obtenerTareas() {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
}

function manejarTareas() {
    let tareas = obtenerTareas(); 
    function guardar() {
        localStorage.setItem(CLAVE, JSON.stringify(tareas));
    }
    return {
        agregarTarea(tarea) {
            const nuevaTarea = {
                id: Date.now(),
                tarea: tarea
            };
            tareas.push(nuevaTarea);
            guardar();
        },
        eliminarTarea(id) {
            tareas = tareas.filter(tarea => tarea.id !== id);
            guardar();
        }
    };
}
const gestor = manejarTareas();
const listaTareas = document.getElementById("listaTareas");
function renderizarTareas() {
    const tareas = obtenerTareas();
    listaTareas.innerHTML = "";
    if (tareas.length === 0) {
        listaTareas.innerHTML = `<li class="vacio">No hay tareas pendientes</li>`;
        return;
    }
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = tarea.tarea;
        const btnEliminar = document.createElement("button");
        btnEliminar.innerHTML = `<img src="img/eliminar.png" alt="Eliminar">`;
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.onclick = () => confirmarEliminar(tarea.id);
        li.appendChild(span);
        li.appendChild(btnEliminar);
        listaTareas.appendChild(li);
    });
}
function agregarTarea(Tarea) {
    const input = document.getElementById(Tarea);
    const textoLimpio = input.value.trim();
    if (textoLimpio === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Escribe una tarea antes de agregarla.",
        });
        return;
    }
    gestor.agregarTarea(textoLimpio);
    renderizarTareas();
    input.value = "";
    input.focus();
}
function confirmarEliminar(id) {
    Swal.fire({
        title: "¿Eliminar esta tarea?",
        text: "Esta acción no se puede deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d9534f",
    }).then((result) => {
        if (result.isConfirmed) {
            gestor.eliminarTarea(id);
            renderizarTareas();
            Swal.fire({
                icon: "success",
                title: "Eliminada",
                text: "La tarea fue eliminada correctamente.",
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", renderizarTareas);