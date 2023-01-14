const mongoose = require('mongoose');
require('dotenv').config()

const dbConfig = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterlucaslopes.w2t96.mongodb.net/Emendas?retryWrites=true&w=majority`

mongoose
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