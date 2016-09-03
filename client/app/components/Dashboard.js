import React, { Component } from 'react';
import axios from 'axios';
import ListTodo from './ListTodo';
import TodoForm from './TodoForm';

const url = 'http://localhost:3000/api/';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.state = {
      update: true,
      todos: [],
      text: '',
    };
  }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        console.log(res);
        this.setState({
          todos: res.data,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(url, {
      todo: e.target.elements[0].value,
    })
    .then(res => {
      this.setState({
        todos: res.data.newData,
        text: '',
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleDelete(id) {
    axios.delete(`${url}${id}`)
      .then(res => {
        console.log(res);
        this.setState({
          update: false,
          todos: res.data.newData,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDone(id) {
    axios.put(`${url}${id}/status`)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          let id = this.state.todos.map((item, i) => {

            if (item._id === res.data.todo._id) {
              this.state.todos[i].status = !this.state.todos[i].status;

              // TODO: HOW TO HANDLE ONLY UPDATE ONE STATE NOT REPLACE WITH NEW OBJECT
              this.setState({
                todos: this.state.todos,
              });
            } else {
              return -1;
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleUpdate(e) {
    e.preventDefault();
    let data = e.target.elements[0];
    axios.put(`${url}${data.id}`, {
      text: data.value,
    })
    .then(res => {
      console.log(res);
      this.setState({
        todos: res.data.newData,
        //TODO: FIX BUG 2 TIMES ENTER
        update: !this.state.update,
      });
      console.log(this.state);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const todos = this.state.todos;
    return (

      <div className="mdl-layout-content mdl-grid">
        <div className="mdl-cell mdl-cell--12-col text-center">
          <h3>This is the dashboard</h3>
        </div>
        <div className="mdl-cell mdl-cell--12-col text-center">
          <TodoForm addTodo={this.handleSubmit} handleChange={this.handleChange} text={this.state.text}/>
        </div>
        <div className="mdl-cell mdl-cell--12-col text-center" style={{ display: 'flex', justifyContent: 'center' }}>
          <ListTodo todos={todos} update={this.state.update} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} handleDone={this.handleDone}/>
        </div>
      </div>
    );
  }
}
