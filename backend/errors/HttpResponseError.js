const { ValidationError, ResourceNotFoundError } = require('../sequelize');

class HttpResponseError extends Error {
  constructor(res, error) {
    super();
    this.res = res;
    this.setUp(error);
  }

  setUp(error) {
    console.log(error);
    if (error instanceof ValidationError) {
      this.message = error.errors.map(e => e.message).join("\n");
      this.status = 422;
    } else {
      this.message = 'An internal error has occurred';
      this.status = 500;
    }
  }

  send() {
    this.res.status(this.status).send({ error: this.message });
  }
}

module.exports = HttpResponseError;
