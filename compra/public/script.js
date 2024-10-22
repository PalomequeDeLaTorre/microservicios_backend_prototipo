document.addEventListener("DOMContentLoaded", () => {
    const comprasTableBody = document.getElementById("compras-table-body");

    // Llamada a la API para obtener las compras
    fetch('http://localhost:8083/lista-compras')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las compras');
            }
            return response.json();
        })
        .then(data => {
            const compras = data.compras;
            compras.forEach(compra => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${compra.eventoId}</td>
                    <td>${compra.comprador}</td>
                    <td>${compra.cantidad}</td>
                `;
                comprasTableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
});