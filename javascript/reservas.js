const mostrarMapa = () => {
    var latitud = 37.3936676;
    var longitud = -5.9929712;

    var mapa = document.getElementById('map');
    mapa.innerHTML = '<iframe width="400" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=' + (longitud - 0.01) + '%2C' + (latitud - 0.01) + '%2C' + (longitud + 0.01) + '%2C' + (latitud + 0.01) + '&amp;layer=mapnik&amp;marker=' + latitud + '%2C' + longitud + '&amp;zoom=15"></iframe>';
}

const inicializar = () => {
    console.log('Cargada pagina principal');
    mostrarMapa();
    console.log('Se ha cargado el mapa');

    // Selecciona todos los elementos interactivos
    const elementos = document.querySelectorAll('.cocina, .mesa-redonda, .mesa-cuadrada');
    const tooltip = document.getElementById('tooltip');

    // Agrega un listener a cada elemento
    elementos.forEach(elemento => {
        elemento.addEventListener('click', (event) => {
            // Obtiene el valor del atributo data-label (número de mesa o cocina)
            const label = elemento.getAttribute('data-label');
            let contenidoTooltip = '';

            if (elemento.classList.contains('cocina')) {
                // Si es una cocina, solo muestra el nombre de la cocina
                contenidoTooltip = `<strong>${label}</strong>`;
            } else if (elemento.classList.contains('mesa-redonda') || elemento.classList.contains('mesa-cuadrada')) {
                // Si es una mesa, muestra la información adicional
                const comensales = elemento.getAttribute('data-comensales');
                const precio = elemento.getAttribute('data-precio');

                contenidoTooltip = `
                    <strong>${label}</strong><br>
                    Comensales: ${comensales}<br>
                    Precio: ${precio}
                `;
            }

            // Muestra el tooltip con la información correspondiente
            tooltip.innerHTML = contenidoTooltip;

            // Posiciona el tooltip cerca del clic (con un desplazamiento de 10px)
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;

            // Muestra el tooltip
            tooltip.style.display = 'block';

            // Oculta el tooltip después de 5 segundos
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 5000);
        });
    });

    // Referencia al input y al select
    const horaSelect = document.getElementById('hora');
    const zonaSelect = document.getElementById('zona');
    const mesaContainer = document.getElementById('mesa-container');
    const diaHoraInput = document.getElementById('diaHora');
    const zonaInput  = document.getElementById('zonaReserva');

    // Detectar cuando se cambia la zona
    zonaSelect.addEventListener('change', function() {
        console.log('Se ha seleccionado la zona: ', zonaSelect.value);
        if (zonaSelect.value === 'Salon principal') {
            mesaContainer.style.display = 'block'; // Muestra el campo de mesa
        } else {
            mesaContainer.style.display = 'none'; // Oculta el campo de mesa
        }
    });

    document.getElementById('mesa').addEventListener('change', function() {
        const mesaSeleccionada = this.options[this.selectedIndex];
        const precio = mesaSeleccionada.getAttribute('data-precio');
        
        // Debugging: Verifica que el precio se captura correctamente
        console.log('Mesa seleccionada:', mesaSeleccionada.value, 'Precio:', precio);
        
        // Muestra el precio solo si hay una mesa seleccionada
        if (precio) {
            document.getElementById('precio-mesa').style.display = 'block';
            document.getElementById('precio').textContent = precio;
        } else {
            document.getElementById('precio-mesa').style.display = 'none';
        }
    });
    
    

    // Función para actualizar el input con la fecha y hora seleccionadas
    function actualizarHoraYZona() {
        const hora = horaSelect.value;
        const zona = zonaSelect.value;
        
        // Si se ha seleccionado una fecha y una hora, actualizar el input
        if (hora) {
            diaHoraInput.value = `${hora}`;
        }

        if (zona) {
            zonaInput.value = `${zona}`
        }
    }

    // Escuchar el cambio en la fecha y la hora
    horaSelect.addEventListener('change', actualizarHoraYZona);
    zonaSelect.addEventListener('change', actualizarHoraYZona);
};

// Llamada a la función para inicializar
inicializar();
