const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// require('./config/dbConfig');

const routes = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'})
})

// app.use(cors);
app.use(express.json());
app.use(routes);

const DB_USER = "lucasLopes121";
const DB_PASS = "lordAnagrom71";
const dbConfig = `mongodb+srv://${DB_USER}:${DB_PASS}@clusterlucaslopes.w2t96.mongodb.net/Emendas?retryWrites=true&w=majority`

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

module.exports = app;