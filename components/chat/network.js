const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
  users = req.body.users;
  controller.addChat(users)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(error => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

router.get('/:userId', function(req, res) {
  controller.getChats(req.params.userId)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

module.exports = router;