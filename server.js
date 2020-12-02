const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

const app = express();

app.use(bodyParser.json());  // bodyParser siempre debe ir antes de router
app.use(bodyParser.urlencoded({extended: false}));

router(app);

// levantar el servidor de estáticos de express
app.use('/app', express.static('public'));

app.listen(3000);

console.log('La aplicación está escuchando en http://localhost:3000');