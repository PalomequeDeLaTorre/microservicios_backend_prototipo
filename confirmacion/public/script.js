document.addEventListener("DOMContentLoaded", () => {
    const confirmacionesTableBody = document.getElementById("confirmaciones-table-body");

    // Llamada a la API para obtener las compras
    fetch('http://localhost:8082/lista-confirmaciones')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las confirmaciones');
            }
            return response.json();
        })
        .then(data => {
            const confirmaciones = data.confirmaciones;
            confirmaciones.forEach(confirmacion => {
                const row = document.createElement("tr");
                row.innerHTML = `
                <td>${confirmacion.asistente}</td>
                <td>${confirmacion.eventoId}</td>
                `;
                confirmacionesTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});