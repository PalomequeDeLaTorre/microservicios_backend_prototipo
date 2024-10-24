document.addEventListener("DOMContentLoaded", () => {
    const eventosTableBody = document.getElementById("eventos-table-body");

    fetch('https://eventos-microservicio-1.onrender.com/lista-eventos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los eventos');
            }
            return response.json();
        })
        .then(data => {
            const eventos = data.eventos;
            eventos.forEach(evento => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${evento.nombre}</td>
                    <td>${evento.fecha}</td>
                    <td>${evento.lugar}</td>
                `;
                eventosTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('btnAgregarEvento').addEventListener('click', function() {
    window.location.href = 'agregar_evento.html';
});

document.getElementById('btnComprar').addEventListener('click', function() {
    window.location.href = 'comprar_evento.html';
});

