import React, { Component } from 'react';
import Layout from './components/layout/layout';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Layout>
            <p>Test</p>
          </Layout>
        </div>
    );
  }
}

export default App;
