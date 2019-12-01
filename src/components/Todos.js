import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export default class Todos extends Component {
  render() {
    const { handleChange, handleDelete, todos } = this.props
    return todos.map(todo => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
            handleChange={handleChange}
            handleDelete={handleDelete}
        />
    ));
  };
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
