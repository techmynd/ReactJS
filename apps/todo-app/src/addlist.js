import React, { Component } from "react";

class AddList extends Component {
  state = {
    content: ''
  };

  handleChange = event => {
    this.setState({
      content: event.target.value
    });
    //console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state);
    // we are getting props.addToDo automatically coz this is class component
    this.props.addToDo(this.state);
    this.setState({
      content: ""
    });
    //console.log(this.state.content);
  };

  render() {
    return (
      <div className="addfield">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label className="left">Add New To Do</label>
          <input
            type="text"
            placeholder="Add New item"
            onChange={(event) => this.handleChange(event)}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddList;
