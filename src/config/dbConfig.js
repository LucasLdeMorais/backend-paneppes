const mongoose = require('mongoose');
require('dotenv').config()
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

const dbConfig = `mongodb+srv://${DB_USER}:${DB_PASS}@clusterlucaslopes.w2t96.mongodb.net/Emendas?retryWrites=true&w=majority`

const connection = mongoose
    .connect(dbConfig, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Conectado!')
        app.listen(3333)
    })
    .catch((error) => console.log(error));

module.exports = connection