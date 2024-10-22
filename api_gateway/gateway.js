const express = require('express');
const gateway = require('fast-gateway');
const path = require('path');

const port = 9001;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pagina-inicio.html'));
});

const server = gateway({
  routes: [
    {
      prefix: '/evento', // Rutas para el microservicio de eventos
      target: 'http://localhost:8081/', // URL del servicio de eventos
      hooks: {},
    },
    {
      prefix: '/confirmacion', // Rutas para el microservicio de confirmación
      target: 'http://localhost:8082/', // URL del servicio de confirmación
      hooks: {},
    },
    {
      prefix: '/compra', // Rutas para el microservicio de compras
      target: 'http://localhost:8083/', // URL del servicio de compras
      hooks: {},
    },
  ],
});


app.use('/api', server); 
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});