import React, { Component } from 'react';

function TodoForm({ addTodo, handleChange, text }) {
  return (
    <form onSubmit={addTodo}>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" id="todo" type="text" onChange={handleChange} value={text} />
        <label className="mdl-textfield__label" htmlFor="todo">Add Todo</label>
      </div>
      <button style={{ marginLeft: 20 }} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Add</button>
    </form>
  );
}

export default TodoForm;
