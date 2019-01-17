import React, { Component } from 'react';
import './App.css';

import Todos from "./todos";
import AddList from "./addlist";

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play Mario Kart'}
    ]
  };

  addToDo = (newtodo) => {
    //console.log(todos);
    // before pushing generate random id
    
    newtodo.id = Math.random();
        
    // create copy of state + new to do
    let TODOS = [...this.state.todos, newtodo];
    // update state
    //console.log(todos);

    this.setState({
      todos: TODOS
    });
    //console.log(this.state);
    
  };

  deleteToDo = (id) => {
    // console.log(id);
    // delete id from state non-destructively
    // by using filter for state and exclude id
    const TODOS = this.state.todos.filter(TODO => {
      return TODO.id !== id;
    });
    this.setState({
      todos: TODOS
    });
  };

  render() {
    return (
      <div className="App">
        <h4>To Do List - App</h4>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} />
        <AddList addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
