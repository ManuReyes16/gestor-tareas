import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  // La consola da un TypeError al llamar a replaceChildren. getElementById devuelve null porque el id va sin #.
  const lista = document.getElementById("lista");
  const resumen = document.querySelector("#resumen");

  // Solo aparece la última tarea. replaceChildren dentro del for borra las tareas en cada vuelta.
  lista.replaceChildren();
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    // Todas las tareas salen tachadas. El if con = asigna true en vez de comparar.
    if (tarea.completada === true) {
      li.classList.add("completada");
    }
    lista.append(li);
  }

  // El resumen muestra el código de la función. En textContent faltaba llamar a contarPendientes con las tareas.
  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}
