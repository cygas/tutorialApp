import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/todos';

export default class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios.get(`${URL}?_limit=10`)
      .then(res => this.setState({todos: res.data}));
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
    axios.delete(`${URL}/${todoId}`)
      .then(res => {
        const todos = this.state.todos.filter(item => item.id !== todoId);
        this.setState({todos});        
      });    
  };

  addTodo = title => {
    axios.post(URL, {
      title,
      completed: false
    })
      .then(res => this.setState(prev => ({todos: [...prev.todos, res.data]})));
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
