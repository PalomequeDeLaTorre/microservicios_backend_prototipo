document.getElementById('btnRegresar').addEventListener('click', function() {
    window.location.href = './index.html';
});

document.getElementById('formEvento').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const lugar = document.getElementById('lugar').value;

    try {
        const respuesta = await fetch('http://localhost:8081/insertar-eventos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, fecha, lugar }),
        });

        const data = await respuesta.json();
        document.getElementById('mensaje').innerText = data.mensaje;

        

    } catch (error) {
        console.error(error);
        document.getElementById('mensaje').innerText = 'Error al crear el evento';
    }
    window.location.href = './index.html';
});
