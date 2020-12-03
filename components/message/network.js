const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
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
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, 'Error en el contenido');
    });
});

module.exports = router;