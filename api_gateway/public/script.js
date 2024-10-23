function redirigirA(url) {
    window.location.href = url;
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('a[href="#eventos"]').addEventListener('click', (e) => {
        e.preventDefault(); 
        redirigirA('https://eventos-microservicio-1.onrender.com');
    });

    document.querySelector('a[href="#compras"]').addEventListener('click', (e) => {
        e.preventDefault();
        redirigirA('https://compra-microservicio.onrender.com');
    });

    document.querySelector('a[href="#confirmaciones"]').addEventListener('click', (e) => {
        e.preventDefault();
        redirigirA('https://confirmacion-microservicio.onrender.com');
    });
});
