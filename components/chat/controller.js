const store = require('./store');

function addChat(users) {
  const newChat = {
    users: users
  };

  return store.add(newChat);
}

function getChats() {
  return store.list();
}

module.exports = {
  addChat,
  getChats
}