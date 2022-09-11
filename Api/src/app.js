// Server configuration

const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express()

app.set('port',3001)

app.use(morgan('dev'))

app.use('/', routes);

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));


module.exports = app;