require('dotenv').config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const bodyParser = require('body-parser');

const app = express();

//-- Bory-Parser --//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



// -- Rotas -- //
app.use('/', require('./src/routes'));



module.exports = app;