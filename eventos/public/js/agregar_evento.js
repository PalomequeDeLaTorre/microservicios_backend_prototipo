document.getElementById('btnRegresar').addEventListener('click', function() {
    window.location.href = './index.html';
});

document.getElementById('formEvento').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const lugar = document.getElementById('lugar').value;

    try {
        const respuesta = await fetch('https://eventos-microservicio-1.onrender.com/insertar-eventos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, fecha, lugar }),
        });

        const data = await respuesta.json();
        document.getElementById('mensaje').innerText = data.mensaje;

        document.getElementById('formEvento').reset();

    } catch (error) {
        console.error(error);
        document.getElementById('mensaje').innerText = 'Error al crear el evento';
    }
  
});
