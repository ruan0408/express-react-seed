const { port } = require('./config/config');
const app = require('./app');

app.listen(
  port,
  () => console.log(`Listening on port ${port}`),
);
