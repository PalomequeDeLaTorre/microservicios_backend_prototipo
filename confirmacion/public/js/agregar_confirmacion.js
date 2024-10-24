document.getElementById('btnRegresar').addEventListener('click', function() {
    window.location.href = './confirmacion.html';
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const respuesta = await fetch('https://eventos-microservicio-1.onrender.com/lista-eventos');
        const data = await respuesta.json();

        const selectEvento = document.getElementById('evento');
        data.eventos.forEach(evento => {
            const option = document.createElement('option');
            option.value = evento.nombre;
            option.textContent = `${evento.nombre} - ${evento.fecha} - ${evento.lugar}`;
            selectEvento.appendChild(option);
        });
    } catch (error) {
        console.error('Error al obtener la lista de eventos:', error);
    }
});

document.getElementById('formConfirmacion').addEventListener('submit', async function (e) {
    e.preventDefault();

    const eventoNombre = document.getElementById('evento').value;
    const asistente = document.getElementById('asistente').value;

    try {
        const respuesta = await fetch('https://confirmacion-microservicio.onrender.com/insertar-confirmaciones', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventoId: eventoNombre, asistente }),
        });

        const data = await respuesta.json();
        document.getElementById('mensaje').innerText = data.mensaje;

        document.getElementById('formConfirmacion').reset();

    } catch (error) {
        console.error(error);
        document.getElementById('mensaje').innerText = 'Error en la confirmación';
    }
});
