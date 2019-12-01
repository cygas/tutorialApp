import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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

  addTodo = title => {
    const lastId = this.state.todos[this.state.todos.length -1].id;
    const newTodo = {
      id: lastId + 1, 
      title, 
      completed: false
    };
    const todos = [...this.state.todos, newTodo];

    this.setState({todos});
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos 
                todos={this.state.todos}
                handleChange={this.onCheckboxChange}
                handleDelete={this.onDeleteButtonClick}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  };
}
