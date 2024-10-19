const gateway = require('fast-gateway');

const port = 9001; // Puerto del gateway

const server = gateway({
  routes: [
    {
      prefix: '/evento', // Rutas para el microservicio de eventos
      target: 'https://microservicios-backend-prototipo.vercel.app/evento', // URL del servicio de eventos
      hooks: {},
    },
    {
      prefix: '/confirmacion', // Rutas para el microservicio de confirmación
      target: 'http://localhost:8082', // URL del servicio de confirmación
      hooks: {},
    },
    {
      prefix: '/compra', // Rutas para el microservicio de compras
      target: 'http://localhost:8083/', // URL del servicio de compras
      hooks: {},
    },
  ],
});

// Inicia el gateway y escucha en el puerto 9001
server.start(port).then(() => {
  console.log(`Gateway escuchando en el puerto ${port}`);
});
