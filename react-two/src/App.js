import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import './Bootstrap.min.css';

import Header from './components/UI/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import HomeContent from './components/HomeContent/HomeContent';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/UI/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' component={Jumbotron}/>
            <Route exact path='/' component={HomeContent}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Footer />
           </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;