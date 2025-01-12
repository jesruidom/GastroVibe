const adjustImageSizes = () => {
    document.querySelectorAll('.menu-tradicional, .menu-mediterraneo, .menu-gourmet, .menu-internacional, .menu-veggie').forEach(menu => {
        if (!menu.classList.contains('oculto')) {
            menu.querySelectorAll('img').forEach(img => {
                img.style.width = '400px'; // Tamaño fijo al mostrar
            });
        }
    });
};

const inicializar = () => {
    console.log('Cargada la página de menús para grupos');

    // Seleccionar los elementos del contenedor 1 (tradicional)
    const especialidadTradicional = document.querySelector(".menu-tradicional");
    const menuTradicional = document.querySelector("#menu-tradicional");
    const fotoPlatoEspanol = document.querySelector("#foto-plato-tradicional");

    // Seleccionar los elementos del contenedor 2 (mediterráneo)
    const especialidadMediterraneo = document.querySelector(".menu-mediterraneo");
    const menuMediterraneo = document.querySelector("#menu-mediterraneo");
    const fotoPlatoMediterraneo = document.querySelector("#foto-plato-mediterraneo");

    // Seleccionar los elementos del contenedor 3 (gourmet)
    const especialidadGourmet = document.querySelector(".menu-gourmet");
    const menuGourmet = document.querySelector("#menu-gourmet");
    const fotoPlatoGourmet = document.querySelector("#foto-plato-gourmet");

    // Seleccionar los elementos del contenedor 4 (internacional)
    const especialidadInternacional = document.querySelector(".menu-internacional");
    const menuInternacional = document.querySelector("#menu-internacional");
    const fotoPlatoInternacional = document.querySelector("#foto-plato-internacional");

    // Seleccionar los elementos del contenedor 5 (veggie)
    const especialidadVeggie = document.querySelector(".menu-veggie");
    const menuVeggie = document.querySelector("#menu-veggie");
    const fotoPlatoVeggie = document.querySelector("#foto-plato-veggie");

    // Inicialmente ocultar los menús y fotos
    const menus = [menuTradicional, menuMediterraneo, menuGourmet, menuInternacional, menuVeggie];
    const fotos = [fotoPlatoEspanol, fotoPlatoMediterraneo, fotoPlatoGourmet, fotoPlatoInternacional, fotoPlatoVeggie];
    menus.forEach(menu => menu?.classList.add("oculto"));
    fotos.forEach(foto => foto?.classList.add("oculto"));

    // Variables para el estado de visibilidad de los menús
    let menuTradicionalVisible = false;
    let menuMediterraneoVisible = false;
    let menuGourmetVisible = false;
    let menuInternacionalVisible = false;
    let menuVeggieVisible = false;

    // Mostrar/ocultar menú español y su foto
    if (especialidadTradicional && menuTradicional && fotoPlatoEspanol) {
        especialidadTradicional.addEventListener("click", () => {
            menuTradicionalVisible = !menuTradicionalVisible;
            menuTradicional.classList.toggle("oculto", !menuTradicionalVisible);
            fotoPlatoEspanol.classList.toggle("oculto", !menuTradicionalVisible);
            console.log(menuTradicionalVisible ? "Menú español y foto del plato mostrados" : "Menú español y foto del plato ocultos");
            adjustImageSizes();
        });
    }

    // Mostrar/ocultar menú mediterráneo y su foto
    if (especialidadMediterraneo && menuMediterraneo && fotoPlatoMediterraneo) {
        especialidadMediterraneo.addEventListener("click", () => {
            menuMediterraneoVisible = !menuMediterraneoVisible;
            menuMediterraneo.classList.toggle("oculto", !menuMediterraneoVisible);
            fotoPlatoMediterraneo.classList.toggle("oculto", !menuMediterraneoVisible);
            console.log(menuMediterraneoVisible ? "Menú mediterráneo y foto del plato mostrados" : "Menú mediterráneo y foto del plato ocultos");
            adjustImageSizes();
        });
    }

    // Mostrar/ocultar menú gourmet y su foto
    if (especialidadGourmet && menuGourmet && fotoPlatoGourmet) {
        especialidadGourmet.addEventListener("click", () => {
            menuGourmetVisible = !menuGourmetVisible;
            menuGourmet.classList.toggle("oculto", !menuGourmetVisible);
            fotoPlatoGourmet.classList.toggle("oculto", !menuGourmetVisible);
            console.log(menuGourmetVisible ? "Menú gourmet y foto del plato mostrados" : "Menú gourmet y foto del plato ocultos");
            adjustImageSizes();
        });
    }

    // Mostrar/ocultar menú internacional y su foto
    if (especialidadInternacional && menuInternacional && fotoPlatoInternacional) {
        especialidadInternacional.addEventListener("click", () => {
            menuInternacionalVisible = !menuInternacionalVisible;
            menuInternacional.classList.toggle("oculto", !menuInternacionalVisible);
            fotoPlatoInternacional.classList.toggle("oculto", !menuInternacionalVisible);
            console.log(menuInternacionalVisible ? "Menú internacional y foto del plato mostrados" : "Menú internacional y foto del plato ocultos");
            adjustImageSizes();
        });
    }

    // Mostrar/ocultar menú veggie y su foto
    if (especialidadVeggie && menuVeggie && fotoPlatoVeggie) {
        especialidadVeggie.addEventListener("click", () => {
            menuVeggieVisible = !menuVeggieVisible;
            menuVeggie.classList.toggle("oculto", !menuVeggieVisible);
            fotoPlatoVeggie.classList.toggle("oculto", !menuVeggieVisible);
            console.log(menuVeggieVisible ? "Menú veggie y foto del plato mostrados" : "Menú veggie y foto del plato ocultos");
            adjustImageSizes();
        });
    }
};

// Llamar a inicializar cuando la página haya cargado completamente
document.addEventListener("DOMContentLoaded", inicializar);
document.addEventListener("DOMContentLoaded", adjustImageSizes);
