// Server configuration
require('dotenv').config();

const express = require('express')
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const {PORT} = process.env;

const cors =require('cors')

const app = express()
 
app.set('port',PORT)

app.use(cors())

app.use(morgan('dev'))

app.use('/', routes);


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cookieParser());


module.exports = app;