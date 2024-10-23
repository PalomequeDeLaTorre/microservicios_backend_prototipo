document.getElementById('btnRegresar').addEventListener('click', function() {
    window.location.href = './index.html';
});


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const respuesta = await fetch('http://localhost:8081/lista-eventos');
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

document.getElementById('formComprar').addEventListener('submit', async function (e) {
    e.preventDefault(); 
    
    const eventoNombre = document.getElementById('evento').value;
    const comprador = document.getElementById('comprador').value;
    const cantidad = document.getElementById('cantidad').value;

    try {
        const respuesta = await fetch('http://localhost:8083/insertar-compras', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventoId: eventoNombre, comprador, cantidad }),
        });

        const data = await respuesta.json();
        document.getElementById('mensaje').innerText = data.mensaje;

        document.getElementById('formComprar').reset();
    } catch (error) {
        console.error(error);
        document.getElementById('mensaje').innerText = 'Error en la compra';
    }
});
