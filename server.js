const express = require('express');
const router = express.Router();

const app = express();

app.use(router);

router.get('/message', function(req, res) {
  res.send('Hola desde GET');
});

router.post('/message', function(req, res) {
  res.send('Hola desde POST');
});


app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000');