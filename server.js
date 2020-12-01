const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

const app = express();

app.use(bodyParser.json());  // bodyParser siempre debe ir antes de router
app.use(bodyParser.urlencoded({extended: false}));

app.use(router);

router.get('/message', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Valor personalizado"
  });
  res.header('otro-header', 'Otro valor');
  
  //res.send('Hola desde GET');
  response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function(req, res) {
  console.log(req.body);
  console.log(req.query);
  // res.send('Mensaje ' + req.body.text + ' agregado correctamente');
  response.success(req, res, 'Creado correctamente', 201);
});


app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000');