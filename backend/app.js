const app = require('express')();
const bodyParser = require('body-parser');

const routes = require('./routes');

app.use(bodyParser.json());

app.use(routes);

app.use((err, req, res, next) => err.send());

module.exports = app;
