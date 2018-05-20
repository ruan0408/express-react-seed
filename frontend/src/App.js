import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;
const TODOS_URL = `${API_URL}/todos`;

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      currentTodo: '',
      todos: [],
    };
  }

  async componentDidMount() {
    const todos = await axios.get(TODOS_URL).then(res => res.data);
    this.setState({ todos });
  }

  clearCurrentTodo() {
    this.setState({ currentTodo: '' });
  }

  addTodo(newTodo) {
    this.setState(
      { todos: [...this.state.todos, newTodo] },
      () => this.clearCurrentTodo(),
    );
  }

  deleteTodo(id) {
    const index = this.state.todos.findIndex(t => t.id === id);
    this.setState({ todos: [
        ...this.state.todos.slice(0, index),
        ...this.state.todos.slice(index + 1),
      ]
    });
  }

  async handleSave() {
    let todo = { description: this.state.currentTodo };
    todo = await axios.post(TODOS_URL, todo).then(res => res.data);
    this.addTodo(todo);
  }

  async handleDelete(id) {
    await axios.delete(`${TODOS_URL}/${id}`);
    this.deleteTodo(id);
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={this.state.currentTodo}
            onChange={e => this.setState({ currentTodo: e.target.value })}
          />
          <button
            disabled={this.state.currentTodo === ''}
            onClick={() => this.handleSave()}
          >
            Salvar
          </button>
        </div>
        {this.state.todos.map(t =>
          <div key={t.id}>
            {t.description}
            <button
              onClick={() => this.handleDelete(t.id)}
            >
              Deletar
            </button>
          </div>
        )}
      </div>
    );
  }
}
