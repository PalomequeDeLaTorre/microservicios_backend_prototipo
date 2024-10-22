const gatewayURL = 'http://localhost:9001/api'; // URL del gateway

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    document.querySelectorAll('main section').forEach(sec => sec.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
}

// Obtiene y muestra eventos en la tabla
async function cargarEventos() {
    try {
        const respuesta = await fetch(`${gatewayURL}/evento/lista-eventos`);
        const data = await respuesta.json();
        const tbody = document.getElementById('tabla-eventos');
        tbody.innerHTML = ''; 

        data.eventos.forEach(evento => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${evento.nombre}</td>
                <td>${evento.lugar}</td>
                <td>${evento.fecha}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar eventos:', error);
    }
}

// Obtiene y muestra confirmaciones en la tabla
async function cargarConfirmaciones() {
    try {
        const respuesta = await fetch(`${gatewayURL}/confirmacion/lista-confirmaciones`);
        const data = await respuesta.json();
        const tbody = document.getElementById('tabla-confirmaciones');
        tbody.innerHTML = ''; 

        if (data.confirmaciones.length === 0) {
            tbody.innerHTML = '<tr><td colspan="2">No hay confirmaciones disponibles</td></tr>';
            return;
        }

        data.confirmaciones.forEach(confirmacion => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${confirmacion.asistente}</td>
                <td>${confirmacion.eventoId}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar confirmaciones:', error);
    }
}

// Obtiene y muestra compras en la tabla
async function cargarCompras() {
    try {
        const respuesta = await fetch(`${gatewayURL}/compra/lista-compras`);
        const data = await respuesta.json();
        const tbody = document.getElementById('tabla-compras');
        tbody.innerHTML = ''; 

        data.compras.forEach(compra => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${compra.eventoId}</td>
                <td>${compra.comprador}</td>
                <td>${compra.cantidad}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar compras:', error);
    }
}

// Carga los datos al iniciar la página
window.onload = function () {
    cargarEventos();
    cargarConfirmaciones();
    cargarCompras();
};
