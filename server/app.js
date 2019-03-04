const express = require('express');
const cors = require('cors');
// const { api } = require('./api');
const routes = require('./api/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

module.exports = app;
