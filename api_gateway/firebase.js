var admin = require("firebase-admin");
var keys = require("./keyBD.json");

admin.initializeApp({
    credential: admin.credential.cert(keys)
});

var myDataset = admin.firestore();

var conexionEventos = myDataset.collection("eventos");
var conexionConfirmaciones = myDataset.collection("confirmaciones");
var conexionCompras = myDataset.collection("compras");

module.exports = {
    conexionEventos,
    conexionConfirmaciones,
    conexionCompras
};
