const Model = require('./model');

function addChat(users) {
  const myChat = new Model(users);
  return myChat.save();
}

function listChats() {
  return new Promise((resolve, reject) => {
    Model.find()
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        
        resolve(populated);
      })
  });
}

module.exports = {
  add: addChat,
  list: listChats
};