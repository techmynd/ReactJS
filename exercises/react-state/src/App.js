import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Users title="Users List"></Users>
      </div>
    );
  }
}

export default App;
