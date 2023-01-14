const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'})
})

app.use(cors);
app.use(express.json());
app.use(routes);

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

module.exports = app;
