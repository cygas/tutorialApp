import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

export default class TodoItem extends Component {
    getClassName = () => {
        const className = this.props.todo.completed ? 'completed' : 'non-completed'
        return className;
    };

    render() {
        const { todo, handleChange, handleDelete } = this.props;
        const { completed, title, id} = todo;

        return (
            <div className="todo-item">
                <p>
                    <input 
                        id={id}
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleChange(id)}
                    />
                    <label className={this.getClassName()} htmlFor={id}>
                        {title}
                    </label>                    
                </p>
                <button 
                    className="delete-button"
                    onClick={() => handleDelete(id)}
                >
                    delete
                </button>
            </div>
        )
    };
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};
