const express = require('express');
require('dotenv').config()

const routes = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'});
})

app.use(
    cors({origin: ['https://painel-visepifes.netlify.app/']})
);
app.use(routes);

app.use(express.json());

module.exports = app;
