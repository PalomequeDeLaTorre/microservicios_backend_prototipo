const express = require('express');
const { conexionCompras } = require('../api_gateway/firebase');
const app = express();
const port = 8083;

app.use(express.json());

app.post('/insertar-compras', async (req, res) => {
    const { eventoId, comprador, cantidad } = req.body;
    try {
        const compra = await conexionCompras.add({ eventoId, comprador, cantidad });
        res.status(201).json({ id: compra.id, mensaje: 'Compra realizada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al realizar la compra' });
    }
});

app.get('/lista-compras', async (req, res) => {
    try {
        const snapshot = await conexionCompras.get();
        const compras = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json({ compras });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener compras' });
    }
});

app.listen(port, () => {
    console.log(`Microservicio COMPRAS escuchando en localhost:${port}`);
});
