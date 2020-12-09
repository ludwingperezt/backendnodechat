const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');

const url = `mongodb://admin1:admin1@localhost:27017/chatdb`;

db(url);

app.use(cors());
app.use(bodyParser.json());  // bodyParser siempre debe ir antes de router
app.use(bodyParser.urlencoded({extended: false}));

// Iniciar el socket
socket.connect(server);

router(app);

// levantar el servidor de estáticos de express
app.use('/app', express.static('public'));

server.listen(3000, function(){
  console.log('La aplicación está escuchando en http://localhost:3000');
});
