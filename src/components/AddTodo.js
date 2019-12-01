import React, { Component } from "react";
import "../styles/AddTodo.css";

export default class AddTodo extends Component {
  state = {
    title: ""
  };

  handleTextChange = e => this.setState({title: e.target.value});

  handleSubmit = e => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({title: ''});
  };

  onTextClear= () => {
      this.setState({title: ''});
  };

  getClearIconClass = () => {
      let iconClass = 'clear-icon';
      if(!this.state.title.length) {
          iconClass += ' no-display';
      }

      return iconClass;
  };

  render() {
    return (
      <form className="add-todo-container" onSubmit={this.handleSubmit}>
        <input 
            type="text" 
            name="title" 
            placeholder="Add todo ..." 
            value={this.state.title}
            onChange={this.handleTextChange}
        />
        <i className={this.getClearIconClass()} onClick={this.onTextClear}>x</i>
        <input type="submit" value="submit" className="submit-button" />
      </form>
    );
  }
}
