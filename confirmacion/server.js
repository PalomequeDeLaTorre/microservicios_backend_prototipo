const express = require('express');
const { conexionConfirmaciones } = require('../api_gateway/firebase');
const cors = require('cors');  
const app = express();
const port = 8082;
const path = require('path');

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'confirmacion.html'));
  });

app.post('/insertar-confirmaciones', async (req, res) => {
    const { eventoId, asistente } = req.body;
    try {
        const confirmacion = await conexionConfirmaciones.add({ eventoId, asistente });
        res.status(201).json({ id: confirmacion.id, mensaje: 'Asistencia confirmada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al confirmar asistencia' });
    }
});

app.get('/lista-confirmaciones', async (req, res) => {
    try {
        const snapshot = await conexionConfirmaciones.get();
        const confirmaciones = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ confirmaciones });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener confirmaciones' });
    }
});

app.listen(port, () => {
    console.log(`Microservicio CONFIRMACIONES escuchando en http://localhost:${port}`);
});
