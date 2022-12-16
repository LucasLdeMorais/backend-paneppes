const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// require('./config/dbConfig');

const routes = require('./routes');
const app = express();
const cors = require('cors');



app.use(cors);
app.use(express.json());
app.use(routes);

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'})
})

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)
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
