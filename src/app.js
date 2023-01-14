const express = require('express');
const serverless = require('serverless-http');

const router = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'})
})

app.use(cors);
app.use(express.json());
app.use('/.netlify/functions/', router);

module.exports.handler = serverless(app);
