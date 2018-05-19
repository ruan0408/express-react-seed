const config = require('./config');

module.exports = {
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  host: config.dbHost,
  port: config.dbPort,
  logging: config.dbLogging,
  dialect: "mysql",
  operatorsAliases: false,
};
