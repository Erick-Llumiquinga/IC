;
const express = require('express')
let api = express.Router(),
  control = require('../controles/Productos');
  auth = require('../controles/Auth')

api.get('/leer',control.leerDatos)
api.post('/insertar', control.ingresarDatos)
api.delete('/borrar',control.deleteDatos)
api.post('/actualizar',control.actualizarDatos)
api.get('/leerFiltro', control.leerDatosbyID);

api.post('/login', auth.authUser);

module.exports = api