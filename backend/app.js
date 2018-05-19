const express = require('express');
const app = express();

const { cors, errorHandler } = require('./middleware');
const routes = require('./routes');

app.use(cors);
app.use(express.json());
app.use(routes);
app.use(errorHandler);

module.exports = app;
