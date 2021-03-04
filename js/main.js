// TODO LIST

// 1. DEFINNIR. Qué queremos??
//  Necesitamos una web con un input y un botón, que al introducir una tarea, se añada a una lista
//  Proceso: usuario introduce valor-> pulsa boton -> añadimos elemento a la lista

// 2. TAREAS
//  -> COMPLETAR HTML
//  -> MONTAR BASE JS
//  -> RELLENAR FUNCIONES

// VARIABLES
// Con qué elementos del html voy a interaccionar?
// Botón
// Input
// Listado para enganchar items -> ul
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// FUNCTIONS
function addListAfterClick() {
  if(input.value.length > 0) {
    createListElement();
  }
}

function createListElement() {
  // Crear elemento, nuevo item
  var li = document.createElement('li');
  // Enganchamos el texto
  li.appendChild(document.createTextNode(input.value));
  // Añadimos el elemento en el ul
  ul.appendChild(li);
}

// EVENTS
enterButton.addEventListener("click", addListAfterClick);