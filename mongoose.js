const mongoose = require('mongoose');
require('dotenv').config()

const dbConfig = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterlucaslopes.w2t96.mongodb.net/Emendas?retryWrites=true&w=majority`

let connection;

const connect = async () => {
  try {
    connection = await mongoose.createConnection(dbConfig, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  } catch (e) {
    console.error("Could not connect to MongoDB...");
    throw e;
  }
};

function getConnection() {
    return connection;
}

module.exports = { connect, getConnection };