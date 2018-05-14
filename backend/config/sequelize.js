const config = require('./config');

module.exports = {
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,
  dialect: "mysql",
  operatorsAliases: false,
  logging: false,
};
