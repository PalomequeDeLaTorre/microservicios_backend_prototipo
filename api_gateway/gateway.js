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
      prefix: '/evento', 
      target: 'https:eventos-microservicio-1.onrender.com', 
      hooks: {},
    },
    {
      prefix: '/confirmacion', 
      target: 'https:confirmacion-microservicio.onrender.com', 
      hooks: {},
    },
    {
      prefix: '/compra', 
      target: 'https:compra-microservicio.onrender.com', 
      hooks: {},
    },
  ],
});


app.use('/api', server); 
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});