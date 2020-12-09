const config = require('../../config');
const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';

    if (file) {
      fileUrl = config.host + ':'+ config.port + config.publicRoute + '/' + config.filesRoute + '/' + file.filename;
    }

    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl
    };
    
    store.add(fullMessage);

    socket.io.emmit('message', fullMessage);

    resolve(fullMessage);
  });
  
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject('ID inválido');
    }

    store.remove(id)
      .then(() => resolve())
      .catch(e => reject(e));
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}