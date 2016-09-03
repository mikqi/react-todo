const Todo = require('../models/Todo');

exports.getAllTodos = function (req, res) {
  Todo.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

exports.addTodo = function (req, res, next) {
  const newTodo = new Todo({
    text: req.body.todo,
    status: false,
  });

  newTodo.save((err) => {
    if (err) next(err);
    Todo.find({}, (err, data) => {
      res.status(201).json({
        message: `${req.body.todo} has been added`,
        newData: data,
      });
    });
  });
};

exports.getTodo = function (req, res, next) {
  const params = {
    _id: req.body.id,
  };

  Todo.find(params, (err, todo) => {
    if (err) next(err);

    res.status(200).json({
      message: 'success get todo',
      data: todo,
    });
  });
};

exports.deleteTodo = function (req, res, next) {
  const params = {
    _id: req.params.id,
  };
  Todo.findByIdAndRemove(params, (err, todo) => {
    if (err) next(err);

    Todo.find({}, (err, data) => {
      res.status(201).json({
        message: 'success delete todo',
        newData: data,
      });
    });

  });
};

exports.updateTodo = function (req, res, next) {
  const params = {
    _id: req.params.id,
  };

  const data = { text: req.body.text };

  Todo.findByIdAndUpdate(params, data, (err, data) => {
    if (err) next(err);

    Todo.find({}, (err, data) => {
      res.status(201).json({
        message: 'success update data',
        newData: data,
      });
    });
  });
};

exports.updateStatus = function (req, res, next) {
  const _id = req.params.id;

  Todo.findById(_id, (err, todo) => {
    Todo.findByIdAndUpdate(_id, { status: !todo.status }, (err, data) => {
      res.status(201).json({
        message: `${_id} status has been update`,
        todo: data,
      });
    });
  });
};
