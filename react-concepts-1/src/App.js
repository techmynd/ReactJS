import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import './Bootstrap.min.css';

import Header from './components/UI/Header/Header';
import HomeContent from './components/HomeContent/HomeContent';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';
import SimpleDataBinding from './components/SimpleDataBinding/SimpleDataBinding';
import Footer from './components/UI/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <br />

          <div className="container">
            
            <Header />

            <Route exact path='/' component={HomeContent}/>
            <Route exact path='/user-input' component={UserInput}/>
            <Route exact path='/user-output' component={UserOutput}/>
            <Route exact path='/simple-binding' component={SimpleDataBinding}/>
            <br /><br />
            <Footer />
            <br /><br />

           </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
