const express = require('express');

const { HttpResponseError } = require('../errors');
const { todo: controller } = require('../controllers');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const todos = await controller.findAll();
  res.status(200).send(todos);
});

router.post('/', async (req, res, next) => {
  try {
    const todo = await controller.create(req.body);
    res.status(201).send(todo);
  } catch(e) {
    next(new HttpResponseError(res, e));
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await controller.update(id, req.body);
    res.status(200).send(todo);
  } catch(e) {
    next(new HttpResponseError(res, e))
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await controller.delete(req.params.id);
    res.sendStatus(200);
  } catch(e) {
    next(new HttpResponseError(res, e))
  }
});

module.exports = router;
