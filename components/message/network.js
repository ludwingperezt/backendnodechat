const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
  const filteredMesseges = req.query.user || null;

  controller.getMessages(filteredMesseges)
  .then((messageList) => {
    response.success(req, res, messageList, 200);
  })
  .catch(e => {
    response.error(req,res, 'Error inesperado', 500, e);
  })
});

router.post('/', function(req, res) {
  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(req, res, 'Información inválida', 400, e);
    });
});

router.patch('/:id', function(req, res) {
  const id = req.params.id;
  const message = req.body.message;

  controller.updateMessage(id, message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', function(req, res) {
  const id = req.params.id;
  controller.deleteMessage(id)
    .then(() => {
      response.success(req, res, `Mensaje ${id} eliminado`, 200);
    })
    .catch(e => {
      response.error(req, res, 'Error interno', 500, e);
    });
})

module.exports = router;