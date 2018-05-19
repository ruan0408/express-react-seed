const {
  NODE_ENV,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  DB_LOGGING,
  APP_PORT,
} = process.env;

const env = {
  development: {
    dbUser: "root",
    dbPassword: "root",
    dbName: "demo_dev",
    dbHost: "localhost",
    dbPort: 3306,
    dbLogging: false,
    appPort: 3000,
  },
  test: {
    dbUser: "root",
    dbPassword: "root",
    dbName: "demo_test",
    dbHost: "localhost",
    dbPort: 3306,
    dbLogging: false,
    appPort: 3000,
  },
  production: {
    dbUser: "root",
    dbPassword: "root",
    dbName: "demo_prod",
    dbHost: "localhost",
    dbPort: 3306,
    dbLogging: false,
    appPort: 3000,
  },
}[NODE_ENV || 'development'];

module.exports = {
  dbUser: DB_USER || env.dbUser,
  dbPassword: DB_PASSWORD || env.dbPassword,
  dbName: DB_NAME || env.dbName,
  dbHost: DB_HOST || env.dbHost,
  dbPort: DB_PORT || env.dbPort,
  dbLogging: DB_LOGGING || env.dbLogging,
  appPort: APP_PORT || env.appPort,
};
