export default function hamburguerMenu(panelBtn, panel, menuLink) {
    /* La constante d hace referencia a document que es la pag web cargada */
    const d = document;

    d.addEventListener('click', e => {

        /* (e.target.matches(panelBtn): Verificamos que el que hizo click haya sido el btn hamburguer */
        /* e.target.matches(`${panelBtn} *`: Como solo estaba tomando el botón y no sus elementos hijos, le agregamos el segundo condicional para que tome también sus elementos jihos */
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {

            /* El método toggle de classList se utiliza para alternar la clase 'is-active' en el elemento seleccionado. Si el elemento ya tiene la clase 'is-active', toggle la eliminará. Si el elemento no tiene la clase 'is-active', toggle la añadirá. */
            d.querySelector(panel).classList.toggle('is-active');

            /* Este método es para que se anime el btn */
            d.querySelector(panelBtn).classList.toggle('is-active');
            
        }

        /* Cerramos el panel cuando se haga click en un 'menu a' */
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.toggle('is-active');
            d.querySelector(panelBtn).classList.remove('is-active');
        }
    });    
}   