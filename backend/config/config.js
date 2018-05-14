module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "demo_dev",
    host: "localhost",
    port: 3306,
  },
  test: {
    username: "root",
    password: "root",
    database: "demo_test",
    host: "localhost",
    port: 3306,
  },
  production: {
    username: "root",
    password: "root",
    database: "demo_prod",
    host: "localhost",
    port: 3306,
  },
}[process.env.NODE_ENV || 'development'];
