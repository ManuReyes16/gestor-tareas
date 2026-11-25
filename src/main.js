import "./style.css";
import { estado } from "./estado.js";
import { render } from "./dom.js";
import { renderNotas } from "./dom-notas.js";

const titulo = document.querySelector("h1");

titulo.textContent = "Gestor de tareas";
titulo.classList.add("titulo");

render();
renderNotas();

console.table(estado.tareas);

/*
// Predicción A: 0 0
// Predicción B: 1 0
// Predicción C: Gestor 1
// Predicción D: null
// Predicción del li: se verá el texto literal <b>Nueva</b>.

const lista = document.querySelector("#lista");

const vivos = document.getElementsByClassName("prueba");
const foto = document.querySelectorAll(".prueba");
console.log("A:", vivos.length, foto.length);

const li = document.createElement("li");
li.className = "prueba";
li.textContent = "<b>Nueva</b>";
lista.append(li);
console.log("B:", vivos.length, foto.length);

const h1 = document.querySelector("h1");
h1.innerHTML = "<em>Gestor</em>";
console.log("C:", h1.textContent, h1.children.length);

console.log("D:", document.getElementById("#lista"));

// A: 0 0. Al seleccionar, todavía no hay elementos con la clase prueba.
// B: 1 0. La HTMLCollection es viva y recoge el nuevo li. La NodeList es estática y sigue vacía.
// C: Gestor 1. innerHTML crea un elemento em, que es el único hijo del h1. textContent devuelve su texto.
// D: null. getElementById busca el id exacto y el id es lista, sin #.
// El li muestra <b>Nueva</b> tal cual porque textContent no lo interpreta como HTML.
*/
