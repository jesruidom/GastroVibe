const inicializar = () => {
    console.log('Cargada la página de especialidades');

    // Seleccionar los divs de especialidades y menús
    const especialidadEspanol = document.querySelector(".especialidad-1");
    const menuEspanol = document.querySelector("#menu-espanol");
    const especialidadAsiatico = document.querySelector(".especialidad-2");
    const menuAsiatico = document.querySelector("#menu-asiatico");

    // Inicialmente ocultar ambos menús
    if (menuEspanol) menuEspanol.classList.add("oculto");
    if (menuAsiatico) menuAsiatico.classList.add("oculto");

    // Variables para el estado de visibilidad de los menús
    let menuEspanolVisible = false;
    let menuAsiaticoVisible = false;

    // Mostrar/ocultar menú español
    if (especialidadEspanol && menuEspanol) {
        especialidadEspanol.addEventListener("click", () => {
            menuEspanolVisible = !menuEspanolVisible;
            menuEspanol.classList.toggle("oculto", !menuEspanolVisible);
            console.log(menuEspanolVisible ? "Menú español mostrado" : "Menú español oculto");
        });
    } else {
        console.error("No se encontró el elemento .especialidad-1 o #menu-espanol");
    }

    // Mostrar/ocultar menú asiático
    if (especialidadAsiatico && menuAsiatico) {
        especialidadAsiatico.addEventListener("click", () => {
            menuAsiaticoVisible = !menuAsiaticoVisible;
            menuAsiatico.classList.toggle("oculto", !menuAsiaticoVisible);
            console.log(menuAsiaticoVisible ? "Menú asiático mostrado" : "Menú asiático oculto");
        });
    } else {
        console.error("No se encontró el elemento .especialidad-2 o #menu-asiatico");
    }
};

// Llamar a inicializar cuando la página haya cargado completamente
document.addEventListener("DOMContentLoaded", inicializar);
