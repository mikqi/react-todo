const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  text: String,
  status: Boolean,
}, {
  timestamp: true,
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
