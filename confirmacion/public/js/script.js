document.getElementById('formConfirmacion').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const eventoId = document.getElementById('eventoId').value;
    const asistente = document.getElementById('asistente').value;

    try {
        const respuesta = await fetch('http://localhost:8082/insertar-confirmaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventoId, asistente }),
        });

        const data = await respuesta.json();
        document.getElementById('mensaje').innerText = data.mensaje;

        document.getElementById('formConfirmacion').reset();
        obtenerConfirmaciones();
    } catch (error) {
        console.error(error);
        document.getElementById('mensaje').innerText = 'Error al confirmar asistencia';
    }
});

async function obtenerConfirmaciones() {
    try {
        const respuesta = await fetch('http://localhost:8082/lista-confirmaciones');
        const data = await respuesta.json();
        const listaConfirmaciones = document.getElementById('listaConfirmaciones');
        listaConfirmaciones.innerHTML = '';

        data.confirmaciones.forEach(confirmacion => {
            const li = document.createElement('li');
            li.innerText = `Evento: ${confirmacion.eventoId}, Asistente: ${confirmacion.asistente}`;
            listaConfirmaciones.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

obtenerConfirmaciones();
