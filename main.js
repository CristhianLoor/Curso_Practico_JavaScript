/**
 * @type {string} Guarda el elemento b.navbar-email que esta dentro de la div class="navbar-right"
 */
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Escucha el evento click y llama a la funcion, pero no se ejecuta hasta que suceda el evento
menuEmail.addEventListener("click", toggleDesktopMenu);

/**
 * Oculta o muestra el menu de ordenes 
 */
function toggleDesktopMenu() {
	//Agrega o quita la clase inactive, la cual se encargar de ocultar el menu
	desktopMenu.classList.toggle("inactive");
}
