document.addEventListener("DOMContentLoaded", () => {
    const comprasTableBody = document.getElementById("confirmaciones-table-body");

    fetch('https://confirmacion-microservicio.onrender.com/lista-confirmaciones')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las compras');
            }
            return response.json();
        })
        .then(data => {
            const confirmaciones = data.confirmaciones;
            confirmaciones.forEach(confirmaciones => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${confirmaciones.eventoId}</td>
                    <td>${confirmaciones.asistente}</td>`;
                comprasTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});

document.getElementById('btnAgrConfirmacion').addEventListener('click', function() {
    window.location.href = './form_confirmacion.html';
});
