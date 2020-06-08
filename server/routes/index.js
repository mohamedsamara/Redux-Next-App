const express = require('express');
const router = express.Router();

// Bring in Models
const Todo = require('../models/todo');

// read all tasks api
router.get('/todos', (req, res) => {
  Todo.find()
    .exec()
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      return res.status(400).json({
        message: 'Your request could not be processed. Please try again.',
        error: err,
      });
    });
});

router.post('/todo/add', (req, res) => {
  const todo = new Todo({
    name: req.body.name,
    isCompleted: req.body.isCompleted,
  });
  todo
    .save()
    .then(() => res.json(todo))
    .catch(err => {
      return res.status(400).json({
        message: 'Your request could not be processed. Please try again.',
        error: err,
      });
    });
});

router.put('/todo/complete/:id', (req, res) => {
  const query = { _id: req.params.id };

  const todo = {
    isCompleted: req.body.isCompleted,
  };

  Todo.updateOne(query, todo)
    .exec()
    .then(newTodo => res.json(newTodo))
    .catch(err => {
      return res.status(400).json({
        message: 'Your request could not be processed. Please try again.',
        error: err,
      });
    });
});

router.delete('/todo/delete/:id', (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .exec()
    .then(todo => res.json(todo))
    .catch(err => {
      return res.status(400).json({
        message: 'Your request could not be processed. Please try again.',
        error: err,
      });
    });
});

module.exports = router;
