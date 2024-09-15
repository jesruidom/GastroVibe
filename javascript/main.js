let flagCookies = true;

const aceptaCookies = () => {
    flagCookies = false;
    console.log('El estado de la flag cookies tras entrar en aceptaCookies es: ', flagCookies);

    // Oculta el aviso de cookies
    document.getElementById("aviso-cookies").classList.add("oculta-cookies");
};

const inicializar = () => {
    console.log('Cargada pagina principal');

    // Verifica si las cookies ya fueron aceptadas
    if (!flagCookies) {
        document.getElementById("aviso-cookies").classList.add("oculta-cookies");
    }

    // Agrega el evento al botón de aceptar cookies
    document.getElementById("boton-acepta-cookies").addEventListener("click", aceptaCookies);
};