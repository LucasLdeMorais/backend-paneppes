const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const serverless = require('serverless-http');

const routes = require('./routes');
const app = express();
const cors = require('cors');

app.get('/', (request, response) => {
    response.status(200).json({message: 'Olá'})
})

app.use(cors);
app.use(express.json());
app.use(routes);
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);
