const supertest = require('supertest');
const { expect } = require('chai');

const { sequelize, Todo } = require('../../models');
const app = require('../../app');
const request = supertest(app);

describe('/todos', () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
    await Todo.create({ description: 'do something'});
  });

  it('returns array and 200 status', () => {
    return request
      .get('/todos')
      .expect(200)
      .expect(res => expect(res.body).to.be.an('array'));
  });

  it('returns created todo and status 201', () => {
    return request
      .post('/todos')
      .send({ description: 'yet another thing' })
      .expect(201)
      .expect(res => expect(res.body).to.include({ description: 'yet another thing' }));
  });

  it('returns error message and status 422', () => {
    return request
      .post('/todos')
      .send({ notValidField: 'invalid' })
      .expect(422)
      .expect(res => expect(res.body).to.have.key('error'));
  });

  it('returns status 200 and the new todo', () => {
    return request
      .put('/todos/1')
      .send({ description: 'something else' })
      .expect(200)
      .expect(res => expect(res.body).to.include({ description: 'something else' }));
  });

  it('returns status 500 when unknown id is used', () => {
    return request
      .put('/todos/2')
      .send({ description: 'something else' })
      .expect(500);
  });

  it('deletes todo and returns status 200', () => {
    return request
      .delete('/todos/1')
      .expect(200);
  });

  it('returns status 500 when unknown id is used', () => {
    return request
      .delete('/todos/2')
      .expect(500);
  });
});
