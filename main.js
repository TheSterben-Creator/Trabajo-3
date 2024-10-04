const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const errorMessage = document.querySelector(".error-message"); // Selecciona el contenedor de error

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const text = input.value.trim(); // Elimina espacios en blanco

    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        // Contenedor para los botones
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container"; // Clase para el contenedor de botones

        buttonContainer.appendChild(addCompleteBtn()); // Botón de completar tarea
        buttonContainer.appendChild(addDeleteBtn()); // Botón de eliminar

        li.appendChild(p); // Añade el texto de la tarea
        li.appendChild(buttonContainer); // Añade el contenedor de botones al li
        ul.appendChild(li);

        input.value = ""; // Limpia el input
        empty.style.display = "none"; // Oculta el mensaje de tareas vacías
        errorMessage.style.display = "none"; // Oculta el mensaje de error
    } else {
        errorMessage.style.display = "block"; // Muestra el mensaje de error si el input está vacío
    }
});

// Función para añadir botón "Completar Tarea"
function addCompleteBtn() {
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completar Tarea"; // Texto de completar
    completeBtn.className = "btn-complete";

    completeBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement.parentElement; // Accede al li
        const taskText = item.querySelector("p");

        // Marca la tarea como completada
        if (!taskText.classList.contains("completed")) {
            taskText.classList.add("completed");
            completeBtn.textContent = "Tarea Completada"; // Cambia el texto del botón
            completeBtn.disabled = true; // Desactiva el botón para que no se pueda volver a completar
        }
    });

    return completeBtn;
}

// Función para añadir botón de eliminar
function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"; // Texto de eliminar
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement.parentElement; // Accede al li
        ul.removeChild(item); // Elimina el li de la lista

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block"; // Muestra mensaje si no hay tareas
        }
    });

    return deleteBtn;
}
