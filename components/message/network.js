const express = require('express');
const response = require('../../network/response');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Valor personalizado"
  });
  res.header('otro-header', 'Otro valor');
  
  //res.send('Hola desde GET');
  response.success(req, res, 'Lista de mensajes');
});

router.post('/', function(req, res) {
  console.log(req.body);
  console.log(req.query);
  // res.send('Mensaje ' + req.body.text + ' agregado correctamente');
  response.success(req, res, 'Creado correctamente', 201);
});

module.exports = router;