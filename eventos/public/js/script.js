document.getElementById('btnAgregarEvento').addEventListener('click', function() {
    window.location.href = 'agregar_evento.html';
});

async function obtenerEventos() {
    try {
        const respuesta = await fetch('http://localhost:8081/lista-eventos');
        const data = await respuesta.json();
        const listaEventos = document.getElementById('listaEventos');
        listaEventos.innerHTML = '';

        data.eventos.forEach(evento => {
            const li = document.createElement('li');
            li.innerText = `${evento.nombre} - ${evento.fecha} - ${evento.lugar}`;
            listaEventos.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
}

obtenerEventos();
