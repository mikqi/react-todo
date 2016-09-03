import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3000/api/';

const style = {
  ul: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  liUpdate: { width: 500, padding: 15, marginBottom: 40, transition: '.3s ease-out', display: 'flex', justifyContent: 'center' },
  li: { width: 400, marginBottom: 20, transition: '.3s ease-out', },
};

class ListTodo extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      update: this.props.update,
      todo: {},
    };
  }

  handleClick(id, text) {
    this.setState({
      update: !this.state.update,
      todo: { id, text },
    });

    console.log(this.state);
  }

  handleChange(e) {
    let todo = {
      id: this.state.todo.id,
      text: e.target.value,
    };

    console.log(todo);
    this.setState({
      todo: todo,
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('props');
    console.log(nextProps);
    this.setState({
      update: nextProps.update,
    });
  }

  render() {
    return (
      <ul className="mdl-list" style={style.ul}>
        {this.props.todos.map(todo => {
          return (
            <li className="mdl-list__item mdl-shadow--2dp" style={(this.state.update) && (this.state.todo.id === todo._id) ? style.liUpdate : style.li} key={todo._id}>
              {(this.state.update) && (this.state.todo.id === todo._id) ?
                <form onSubmit={this.props.handleUpdate}>
                  <span className="mdl-textfield mdl-js-textfield">
                    <input className="mdl-textfield__input" id={this.state.todo.id} onChange={this.handleChange} type="text" value={this.state.todo.text} />
                  </span>
                  <button style={{ marginLeft: 20 }} type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Update</button>

                </form>
                :
                <span className="mdl-list__item-primary-content">
                  {todo.text} - {todo.status.toString()}
                </span>
              }
              {(this.state.update) && (this.state.todo.id === todo._id) ?
                null :
                <span className="mdl-list__item-secondary-action">
                  <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored" onClick={() => this.props.handleDone(todo._id)}>
                    <i className="material-icons">done</i>
                  </button>
                  <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored" onClick={() => this.handleClick(todo._id, todo.text)}>
                    <i className="material-icons">edit</i>
                  </button>
                  <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored" onClick={() => this.props.handleDelete(todo._id)}>
                    <i className="material-icons">delete</i>
                  </button>
                </span>
              }
            </li>
          );
        })}
      </ul>
    );
  }

}

export default ListTodo;
