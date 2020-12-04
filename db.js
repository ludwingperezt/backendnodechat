const db = require('mongoose');

db.Promise = global.Promise;  // <- Se le indica a mongoose que use las promesas nativas en lugar de los callbacks por defecto

// const url = `mongodb://admin1:admin1@localhost:27017/chatdb`

async function connect(url) {

  await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  console.log('[db] Conectada con éxito');
}

module.exports = connect;