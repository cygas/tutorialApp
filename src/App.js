import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'wyrzuć śmieci',
        completed: false
      },
      {
        id: 2,
        title: 'obiad',
        completed: false
      },
      {
        id: 3,
        title: 'programowanko',
        completed: true
      },
      {
        id: 4,
        title: 'hiszpański',
        completed: false
      }
    ]
  };

  onCheckboxChange = todoId => {
    const todos = this.state.todos.map (item => {
      if (item.id === todoId) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({todos});
  };

  onDeleteButtonClick = todoId => {
    const todos = this.state.todos.filter(item => item.id !== todoId);
    this.setState({todos});
  };

  render() {
    return (
      <div className="App">
        <Todos 
          todos={this.state.todos}
          handleChange={this.onCheckboxChange}
          handleDelete={this.onDeleteButtonClick}
        />
      </div>
    )
  };
}
