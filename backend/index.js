const { appPort } = require('./config/config');
const app = require('./app');

app.listen(
  appPort,
  () => console.log(`Listening on port ${appPort}`),
);
