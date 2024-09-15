let flagCookies = true;

const aceptaCookies = () => {
    flagCookies = false;
    console.log('El estado de la flag cookies tras entrar en aceptaCookies es: ', flagCookies);

    // Oculta el aviso de cookies y su contenedor
    document.getElementById("aviso-cookies").classList.add("oculta-cookies");
    document.getElementById("contenedor-aviso-cookies").classList.add("oculta-contenedor-cookies");

    // Registrar la aceptación de cookies en una cookie
    const nombrePagina = "GastroVibe Restaurant";
    const fechaAceptacion = new Date().toISOString(); // Fecha y hora actual en formato ISO

    // Crear la cookie
    document.cookie = `cookieConsent=${nombrePagina}; fechaAceptacion=${fechaAceptacion}; path=/; max-age=${60 * 60 * 24 * 365};`;

    console.log(`Cookie creada: Página - ${nombrePagina}, Fecha y Hora - ${fechaAceptacion}`);
};


const inicializar = () => {
    console.log('Cargada pagina principal');

    // Colores a alternar
    const colores = ['rgb(255, 0, 0)', 'rgb(255, 0, 221)', 'rgb(17, 0, 255)'];
    
    // Elementos a los que se les cambiarán los colores
    const elementos = {
        cocina: document.querySelectorAll('.resaltado-cocina'),
        barra: document.querySelectorAll('.resaltado-barra'),
        bodega: document.querySelectorAll('.resaltado-bodega')
    };

    // Índice de colores para cada grupo
    let indices = {
        cocina: 0,
        barra: 1,
        bodega: 2
    };

    setInterval(() => {
        // Cambiar el color de cada grupo de elementos
        Object.keys(elementos).forEach(grupo => {
            const elems = elementos[grupo];
            const colorIndice = indices[grupo];

            elems.forEach((elemento, index) => {
                elemento.style.color = colores[(colorIndice + index) % colores.length];
            });

            // Actualizar el índice para el próximo ciclo
            indices[grupo] = (indices[grupo] + 1) % colores.length;
        });
    }, 2000); // Cada 5 segundos

    //AGREGAR AQUI LA FUNCIONALIDAD DEL BOTON

    // Agrega el evento al botón de aceptar cookies
    document.getElementById("boton-acepta-cookies").addEventListener("click", aceptaCookies);
};