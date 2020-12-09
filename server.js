require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');

db(config.dbUrl);

console.log(process.env.PORT);

app.use(cors());
app.use(bodyParser.json());  // bodyParser siempre debe ir antes de router
app.use(bodyParser.urlencoded({extended: false}));

// Iniciar el socket
socket.connect(server);

router(app);

// levantar el servidor de estáticos de express
app.use(`${config.publicRoute}`, express.static('public'));

server.listen(config.port, function(){
  console.log(`La aplicación está escuchando en ${config.host}:${config.port}`);
});
