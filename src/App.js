import React, { Component } from 'react';
import uuid from 'uuid-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoItem';

export default class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
              <TodoInput/>
              <TodoList/>
          </div>
      </div>
    )
  }
}
