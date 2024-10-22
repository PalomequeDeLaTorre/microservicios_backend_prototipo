const express = require('express');
const cors = require('cors');  
const { conexionEventos } = require('../api_gateway/firebase');
const app = express();
const port = 8081;
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'eventos.html'));
  });

app.post('/insertar-eventos', async (req, res) => {
    const { nombre, fecha, lugar } = req.body;
    try {
        const nuevoEvento = await conexionEventos.add({ nombre, fecha, lugar });
        res.status(201).json({ id: nuevoEvento.id, mensaje: 'Evento creado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el evento' });
    }
});

app.get('/lista-eventos', async (req, res) => {
    try {
        const snapshot = await conexionEventos.get();
        const eventos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ eventos });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
});

app.listen(port, () => {
    console.log(`Microservicio EVENTOS escuchando en http://localhost:${port}`);
});
