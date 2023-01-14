const express = require('express');
require('dotenv').config()

const routes = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'});
})
app.use(routes);
app.use(
    cors({origin: ['https://6xih7zuq2l.execute-api.sa-east-1.amazonaws.com/dev/']})
);
app.use(express.json());

module.exports = app;
