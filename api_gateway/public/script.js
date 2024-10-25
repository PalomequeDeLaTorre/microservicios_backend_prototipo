function redirigirA(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    const eventoBtn = document.querySelector('.evento-btn');
    const compraBtn = document.querySelector('.compra-btn');
    const confirmacionBtn = document.querySelector('.confirmacion-btn');

    eventoBtn.addEventListener('click', () => {
        redirigirA('https://eventos-microservicio-1.onrender.com');
    });

    compraBtn.addEventListener('click', () => {
        redirigirA('https://compra-microservicio.onrender.com');
    });

    confirmacionBtn.addEventListener('click', () => {
        redirigirA('https://confirmacion-microservicio.onrender.com');
    });
});
