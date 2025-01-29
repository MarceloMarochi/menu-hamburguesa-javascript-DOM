import hamburguerMenu from "./menu_hamburguesa.js";

const d = document;

/* Cuando el DOM esté cargado, ejecutamos la función hamburguerMenu */
d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
});
