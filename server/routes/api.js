const express = require('express');

const TodoCtrl = require('../controllers/todo');

const apiRoute = express.Router();

apiRoute.get('/', TodoCtrl.getAllTodos);
apiRoute.post('/', TodoCtrl.addTodo);
apiRoute.get('/:id', TodoCtrl.getTodo);
apiRoute.put('/:id', TodoCtrl.updateTodo);
apiRoute.put('/:id/status', TodoCtrl.updateStatus);
apiRoute.delete('/:id', TodoCtrl.deleteTodo);

module.exports = apiRoute;
