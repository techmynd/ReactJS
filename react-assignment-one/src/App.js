import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

// Bootstrap css
// import './styles/vendors/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Global css for all app
import './App.css';

// Global custom scripts / utilities / functions
import './scripts/globalFunctions.js';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import About from './components/About/About';
import Apis from './components/Apis/Apis';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="app-wrap">
            
            <Header />

            <Route exact path='/' component={Home}/>
            <Route exact path='/products' component={Products}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/apis' component={Apis}/>
            <Route exact path='/contact' component={Contact}/>

            <Footer />

           </div>
           {/* <div className="loader-wrap"><div className="loader">Loading...</div></div> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
