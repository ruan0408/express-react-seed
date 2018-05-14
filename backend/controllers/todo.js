const { Todo } = require('../models');

module.exports = {
  async findAll() {
    return Todo.findAll();
  },

  async create(expense) {
    return Todo.create(expense);
  },

  async update(id, newTodo) {
    const todo = await Todo.findById(id);
    return todo.update(newTodo);
  },

  async delete(id) {
    const todo = await Todo.findById(id);
    return todo.destroy();
  }
};
