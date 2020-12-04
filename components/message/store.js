const db = require('mongoose');
const Model = require('./model');

// conexión con la base de datos

db.Promise = global.Promise;  // <- Se le indica a mongoose que use las promesas nativas en lugar de los callbacks por defecto
const url = `mongodb://admin1:admin1@localhost:27017/chatdb`
db.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('[db] Conectada con éxito');

const list = [];

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessages
};