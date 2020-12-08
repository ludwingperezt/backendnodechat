const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    let filter = {}

    if (filterUser !== null) {
      filter = {user: filterUser};
    }
    
    Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
        }
        resolve(populated);
      });
  });
  
}

async function updateText(id, message) {
  const oldMessage = await Model.findOne({_id: id});

  oldMessage.message = message;
  const newMessage = await oldMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({_id: id});
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText,
  remove: removeMessage
};