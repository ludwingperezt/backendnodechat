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

router.get('/', function(req, res) {
  controller.getChats()
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(error => {
      response.error(req, res, 'Error interno', 500, error);
    });
});

module.exports = router;